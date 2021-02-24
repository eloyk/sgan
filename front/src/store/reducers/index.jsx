import { combineReducers } from "redux"
import breadcrumbReducer from "./breadcrumbReducer"
import sidemenuReducer from "./sidemenuReducer"
import asideReducer from "./asideReducer"
import pageReducer from "./pageReducer"
import currentUserReducer from "./currentUserReducer"
import currentBusinessReducer from "./currentBusinessReducer"

// Concatenate all reducers
const reducers = combineReducers({
  sidemenu: sidemenuReducer,
  breadcrumb: breadcrumbReducer,
  aside: asideReducer,
  page: pageReducer,
  currentUser: currentUserReducer,
  currentBusiness: currentBusinessReducer
})

export default reducers
