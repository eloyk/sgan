import { bindActionCreators } from "redux"
import { currentBusinessChange } from "store/actions"
import { connect } from "react-redux"
import verifyCurrentBusiness from "components/business/verifyCurrentBusiness"
import Router from "next/router"
import PAGE from "config/page.config"

function WithVerifyBusiness(AuthComponent) {
  class Authentication extends React.Component {
    static async getInitialProps(ctx) {
      let initialProps = {}
      let propiedades = {}

      // Get initial properties
      if (AuthComponent.getInitialProps) {
        initialProps = await AuthComponent.getInitialProps(ctx)
        propiedades = await AuthComponent.getInitialProps
      }
      console.log('Este es el valor del context:' + JSON.stringify(propiedades))
      // Verify cookie
      //const result = await verifyCurrentBusiness(ctx)

      // Check cookie is valid or not
      if (false) {
        return {
          ...initialProps,
          business: result
        }
      }else {
        return {
        ...initialProps,
        business: null
        }
      }
    }

    componentDidMount() {
      this.props.currentBusinessChange(this.props.business)
    }

    render() {
      return <AuthComponent {...this.props} />
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ currentBusinessChange }, dispatch)
  }

  return connect(null, mapDispatchToProps)(Authentication)
}

export default WithVerifyBusiness
