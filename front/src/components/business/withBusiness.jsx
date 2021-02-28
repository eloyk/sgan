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
      let propiedades = {}

      // Get initial properties
      if (AuthComponent.getInitialProps) {
        initialProps = await AuthComponent.getInitialProps(ctx)
        propiedades = await AuthComponent.getInitialProps()
      }
      console.log('Estas son las propiedades en with business: ' + JSON.stringify(propiedades))

      // Verify cookie
      //const result = await verifyCurrentBusiness(ctx)

      // Check cookie is valid or not
      return {
      ...initialProps
      }
    }

    componentDidMount() {
      const result = businessMethod.getBusiness(this.props)
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

  function mapStateToProps(state) {
    return {
      currentUser: state.currentUser
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ currentBusinessChange }, dispatch)
  }

  return connect(mapStateToProps, mapDispatchToProps)(Authentication)
}

export default WithVerifyBusiness
