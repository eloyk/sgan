import React from "react"
import ReactDOM from "react-dom"
import QuillMixin from "./mixin"
import PropTypes from "prop-types"
import find from "lodash/find"
import some from "lodash/some"
import isEqual from "lodash/isEqual"
import createClass from "create-react-class"
import DOM from "react-dom-factories"

const QuillComponent = createClass({
  displayName: "Quill",

  mixins: [QuillMixin],

  propTypes: {
    id: PropTypes.string,
    className: PropTypes.string,
    theme: PropTypes.string,
    style: PropTypes.object,
    readOnly: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ ops: PropTypes.array })]),
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({ ops: PropTypes.array })
    ]),
    placeholder: PropTypes.string,
    tabIndex: PropTypes.number,
    bounds: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onChange: PropTypes.func,
    onChangeSelection: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    preserveWhitespace: PropTypes.bool,

    modules: function(props) {
      let isNotObject = PropTypes.object.apply(this, arguments)
      if (isNotObject) return isNotObject

      if (
        props.modules &&
        props.modules.toolbar &&
        props.modules.toolbar[0] &&
        props.modules.toolbar[0].type
      )
        return new Error(
          "Since v1.0.0, React Quill will not create a custom toolbar for you " +
            "anymore. Create a toolbar explictly, or let Quill create one. " +
            "See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100"
        )
    },

    toolbar: function(props) {
      if ("toolbar" in props)
        return new Error(
          "The `toolbar` prop has been deprecated. Use `modules.toolbar` instead. " +
            "See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100"
        )
    },

    formats: function(props) {
      let isNotArrayOfString = PropTypes.arrayOf(PropTypes.string).apply(this, arguments)

      if (isNotArrayOfString)
        return new Error(
          "You cannot specify custom `formats` anymore. Use Parchment instead.  " +
            "See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100."
        )
    },

    styles: function(props) {
      if ("styles" in props)
        return new Error(
          "The `styles` prop has been deprecated. Use custom stylesheets instead. " +
            "See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100."
        )
    },

    pollInterval: function(props) {
      if ("pollInterval" in props)
        return new Error(
          "The `pollInterval` property does not have any effect anymore. " +
            "You can safely remove it from your props." +
            "See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100."
        )
    },

    children: function(props) {
      // Validate that the editor has only one child element and it is not a <textarea>
      let isNotASingleElement = PropTypes.element.apply(this, arguments)
      if (isNotASingleElement)
        return new Error("The Quill editing area can only be composed of a single React element.")

      if (React.Children.count(props.children)) {
        let child = React.Children.only(props.children)
        if (child.type === "textarea")
          return new Error("Quill does not support editing on a <textarea>. Use a <div> instead.")
      }
    }
  },

  /*
	Changing one of these props should cause a full re-render.
	*/
  dirtyProps: ["modules", "formats", "bounds", "theme", "children"],

  /*
	Changing one of these props should cause a regular update.
	*/
  cleanProps: [
    "id",
    "className",
    "style",
    "placeholder",
    "tabIndex",
    "onChange",
    "onChangeSelection",
    "onFocus",
    "onBlur",
    "onKeyPress",
    "onKeyDown",
    "onKeyUp"
  ],

  getDefaultProps: function() {
    return {
      theme: "snow",
      modules: {}
    }
  },

  /*
	We consider the component to be controlled if `value` is being sent in props.
	*/
  isControlled: function() {
    return "value" in this.props
  },

  getInitialState: function() {
    return {
      generation: 0,
      value: this.isControlled() ? this.props.value : this.props.defaultValue
    }
  },

  componentWillReceiveProps: function(nextProps, nextState) {
    let editor = this.editor

    // If the component is unmounted and mounted too quickly
    // an error is thrown in setEditorContents since editor is
    // still undefined. Must check if editor is undefined
    // before performing this call.
    if (!editor) return

    // Update only if we've been passed a new `value`.
    // This leaves components using `defaultValue` alone.
    if ("value" in nextProps) {
      let currentContents = this.getEditorContents()
      let nextContents = nextProps.value

      if (nextContents === this.lastDeltaChangeSet)
        throw new Error(
          "You are passing the `delta` object from the `onChange` event back " +
            "as `value`. You most probably want `editor.getContents()` instead. " +
            "See: https://github.com/zenoamaro/react-quill#using-deltas"
        )

      // NOTE: Seeing that Quill is missing a way to prevent
      //       edits, we have to settle for a hybrid between
      //       controlled and uncontrolled mode. We can't prevent
      //       the change, but we'll still override content
      //       whenever `value` differs from current state.
      // NOTE: Comparing an HTML string and a Quill Delta will always trigger
      //       a change, regardless of whether they represent the same document.
      if (!this.isEqualValue(nextContents, currentContents)) {
        this.setEditorContents(editor, nextContents)
      }
    }

    // We can update readOnly state in-place.
    if ("readOnly" in nextProps) {
      if (nextProps.readOnly !== this.props.readOnly) {
        this.setEditorReadOnly(editor, nextProps.readOnly)
      }
    }

    // If we need to regenerate the component, we can avoid a detailed
    // in-place update step, and just let everything rerender.
    if (this.shouldComponentRegenerate(nextProps, nextState)) {
      return this.regenerate()
    }
  },

  componentDidMount: function() {
    this.editor = this.createEditor(this.getEditingArea(), this.getEditorConfig())
    // Restore editor from Quill's native formats in regeneration scenario
    if (this.quillDelta) {
      this.editor.setContents(this.quillDelta)
      this.editor.setSelection(this.quillSelection)
      this.editor.focus()
      this.quillDelta = this.quillSelection = null
      return
    }
    if (this.state.value) {
      this.setEditorContents(this.editor, this.state.value)
      return
    }
  },

  componentWillUnmount: function() {
    let editor
    if ((editor = this.getEditor())) {
      this.unhookEditor(editor)
      this.editor = null
    }
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    let self = this

    // If the component has been regenerated, we already know we should update.
    if (this.state.generation !== nextState.generation) {
      return true
    }

    // Compare props that require React updating the DOM.
    return some(this.cleanProps, function(prop) {
      // Note that `isEqual` compares deeply, making it safe to perform
      // non-immutable updates, at the cost of performance.
      return !isEqual(nextProps[prop], self.props[prop])
    })
  },

  shouldComponentRegenerate: function(nextProps, nextState) {
    let self = this
    // Whenever a `dirtyProp` changes, the editor needs reinstantiation.
    return some(this.dirtyProps, function(prop) {
      // Note that `isEqual` compares deeply, making it safe to perform
      // non-immutable updates, at the cost of performance.
      return !isEqual(nextProps[prop], self.props[prop])
    })
  },

  /*
	If we could not update settings from the new props in-place, we have to tear
	down everything and re-render from scratch.
	*/
  componentWillUpdate: function(nextProps, nextState) {
    if (this.state.generation !== nextState.generation) {
      this.componentWillUnmount()
    }
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.generation !== prevState.generation) {
      this.componentDidMount()
    }
  },

  getEditorConfig: function() {
    return {
      bounds: this.props.bounds,
      formats: this.props.formats,
      modules: this.props.modules,
      placeholder: this.props.placeholder,
      readOnly: this.props.readOnly,
      scrollingContainer: this.props.scrollingContainer,
      tabIndex: this.props.tabIndex,
      theme: this.props.theme
    }
  },

  getEditor: function() {
    return this.editor
  },

  getEditingArea: function() {
    return ReactDOM.findDOMNode(this.editingArea)
  },

  getEditorContents: function() {
    return this.state.value
  },

  getEditorSelection: function() {
    return this.state.selection
  },

  /*
	True if the value is a Delta instance or a Delta look-alike.
	*/
  isDelta: function(value) {
    return value && value.ops
  },

  /*
	Special comparison function that knows how to compare Deltas.
	*/
  isEqualValue: function(value, nextValue) {
    if (this.isDelta(value) && this.isDelta(nextValue)) {
      return isEqual(value.ops, nextValue.ops)
    } else {
      return isEqual(value, nextValue)
    }
  },

  /*
	Regenerating the editor will cause the whole tree, including the container,
	to be cleaned up and re-rendered from scratch.
	*/
  regenerate: function() {
    // Cache selection and contents in Quill's native format to be restored later
    this.quillDelta = this.editor.getContents()
    this.quillSelection = this.editor.getSelection()
    this.setState({
      generation: this.state.generation + 1
    })
  },

  /*
	Renders an editor area, unless it has been provided one to clone.
	*/
  renderEditingArea: function() {
    let self = this
    let children = this.props.children
    let preserveWhitespace = this.props.preserveWhitespace

    let properties = {
      key: this.state.generation,
      tabIndex: this.props.tabIndex,
      ref: function(element) {
        self.editingArea = element
      }
    }

    let customElement = React.Children.count(children) ? React.Children.only(children) : null
    let defaultElement = preserveWhitespace ? DOM.pre : DOM.div
    let editingArea = customElement
      ? React.cloneElement(customElement, properties)
      : defaultElement(properties)

    return editingArea
  },

  render: function() {
    return DOM.div(
      {
        id: this.props.id,
        style: this.props.style,
        key: this.state.generation,
        className: ["quill"].concat(this.props.className).join(" "),
        onKeyPress: this.props.onKeyPress,
        onKeyDown: this.props.onKeyDown,
        onKeyUp: this.props.onKeyUp
      },
      this.renderEditingArea()
    )
  },

  onEditorChangeText: function(value, delta, source, editor) {
    let currentContents = this.getEditorContents()

    // We keep storing the same type of value as what the user gives us,
    // so that value comparisons will be more stable and predictable.
    let nextContents = this.isDelta(currentContents) ? editor.getContents() : editor.getHTML()

    if (!this.isEqualValue(nextContents, currentContents)) {
      // Taint this `delta` object, so we can recognize whether the user
      // is trying to send it back as `value`, preventing a likely loop.
      this.lastDeltaChangeSet = delta

      this.setState({ value: nextContents })

      if (this.props.onChange) {
        this.props.onChange(value, delta, source, editor)
      }
    }
  },

  onEditorChangeSelection: function(nextSelection, source, editor) {
    let currentSelection = this.getEditorSelection()
    let hasGainedFocus = !currentSelection && nextSelection
    let hasLostFocus = currentSelection && !nextSelection

    if (isEqual(nextSelection, currentSelection)) {
      return
    }

    this.setState({ selection: nextSelection })

    if (this.props.onChangeSelection) {
      this.props.onChangeSelection(nextSelection, source, editor)
    }

    if (hasGainedFocus && this.props.onFocus) {
      this.props.onFocus(nextSelection, source, editor)
    } else if (hasLostFocus && this.props.onBlur) {
      this.props.onBlur(currentSelection, source, editor)
    }
  },

  focus: function() {
    this.editor.focus()
  },

  blur: function() {
    this.setEditorSelection(this.editor, null)
  }
})

export default QuillComponent
