import { bindActionCreators } from "redux"
import { currentUserChange } from "store/actions"
import { connect } from "react-redux"
import verifyCurrentUserPrueba from "components/firebase/verifyCurrentUserPrueba"
import verifyCurrentUser from "components/firebase/verifyCurrentUser"
import Router from "next/router"
import PAGE from "config/page.config"

function WithAuth(AuthComponent) {
  class Authentication extends React.Component {
    static async getInitialProps(ctx) {
      let initialProps = {}

      // Get initial properties
      if (AuthComponent.getInitialProps) {
        initialProps = await AuthComponent.getInitialProps(ctx)
      }
      
      const result = await verifyCurrentUserPrueba(ctx,'test2@gmail.com','123456')
      // Verify cookie
      result = await verifyCurrentUser(ctx)

      // Check cookie is valid or not
      if (!result) {
        // Redirect to login page
        if (ctx.res) {
          ctx.res.writeHead(302, { Location: PAGE.loginPagePath })
          ctx.res.end()
        } else {
          Router.push(PAGE.loginPagePath)
        }

        return {
          ...initialProps,
          user: null
        }
      }

      return {
        ...initialProps,
        user: result
      }
    }

    componentDidMount() {
      this.props.currentUserChange(this.props.user)
    }

    render() {
      return <AuthComponent {...this.props} />
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ currentUserChange }, dispatch)
  }

  return connect(null, mapDispatchToProps)(Authentication)
}

export default WithAuth
