import { bindActionCreators } from "redux"
import { currentBusinessChange } from "store/actions"
import { connect } from "react-redux"
import verifyCurrentBusiness from "components/business/verifyCurrentBusiness"
import Router from "next/router"
import PAGE from "config/page.config"
import businessMethod from "components/business/clientBusiness"

function WithVerifyBusiness(AuthComponent) {
  class Authentication extends React.Component {
    static async getInitialProps(ctx) {
      let initialProps = {}

      // Get initial properties
      if (AuthComponent.getInitialProps) {
        initialProps = await AuthComponent.getInitialProps(ctx)
      }
      // Verify cookie
      //const result = await verifyCurrentBusiness(ctx)

      // Check cookie is valid or not
      return {
      ...initialProps
      }
    }

    componentDidMount() {
      const result = businessMethod.getBusiness(this.props, this.props.user.empresaId)
      if (result) {
        this.props.currentBusinessChange(result)
          
      }else {
        this.props.currentBusinessChange(null)

      }
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
