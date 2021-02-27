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

      // Get initial properties
      if (AuthComponent.getInitialProps) {
        initialProps = await AuthComponent.getInitialProps(ctx)
      }
      console.log('Este es el valor del context:' + ctx)
      // Verify cookie
      //const result = await verifyCurrentBusiness(ctx)

      // Check cookie is valid or not
      if (result) {
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
