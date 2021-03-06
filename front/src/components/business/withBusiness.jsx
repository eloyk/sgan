import { bindActionCreators } from "redux"
import { currentBusinessChange } from "store/actions"
import { connect } from "react-redux"
import verifyCurrentUser from "components/user/verifyCurrentUser"
import verifyCurrentBusiness from "components/business/verifyCurrentBusiness"
import Router from "next/router"
import PAGE from "config/page.config"
import businessMethod from "components/business/clientBusiness"

function WithVerifyBusiness(BusinessComponent) {
  class Business extends React.Component {
    static async getInitialProps(ctx) {
      let initialProps = {}

      // Get initial properties
      if (BusinessComponent.getInitialProps) {
        initialProps = await BusinessComponent.getInitialProps(ctx)
      }

      // Verify cookie
      const User = await verifyCurrentUser(ctx)

      if (User.empresaId){
        const result = await verifyCurrentBusiness(ctx, User.empresaId)
        if (result) {
          console.log('resultado de withBusiness: '+ JSON.stringify(result))
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
      }else{
      // Check cookie is valid or not
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
      return <BusinessComponent {...this.props} />
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ currentBusinessChange }, dispatch)
  }

  return connect(null, mapDispatchToProps)(Business)
}

export default WithVerifyBusiness
