import { combineReducers } from "redux"
import breadcrumbReducer from "./breadcrumbReducer"
import sidemenuReducer from "./sidemenuReducer"
import firebaseReducer from "./firebaseReducer"
import asideReducer from "./asideReducer"
import pageReducer from "./pageReducer"
import messageReducer from "./messageReducer"
import authReducer from "./authReducer"

// Concatenate all reducers
const reducers = combineReducers({
  sidemenu: sidemenuReducer,
  breadcrumb: breadcrumbReducer,
  firebase: firebaseReducer,
  aside: asideReducer,
  page: pageReducer,
  message: messageReducer,
  auth: authReducer
})

export default reducers
