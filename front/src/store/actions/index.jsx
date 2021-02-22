import { pageChangeHeaderTitle, pageChangeTheme } from "./pageAction"
import { sidemenuToggle, sidemenuChange } from "./sidemenuAction"
import { asideToggle, asideChange } from "./asideAction"
import { breadcrumbChange } from "./breadcrumbAction"
import { firebaseChange } from "./firebaseAction"
import { register, login, logout } from "./auth"
import { setMessage, clearMessage } from "./message"
import { currentUserChange } from "./currentUserAction"

// Export all actions
export {
  pageChangeHeaderTitle,
  pageChangeTheme,
  sidemenuToggle,
  sidemenuChange,
  asideToggle,
  asideChange,
  firebaseChange,
  breadcrumbChange,
  register, 
  login, 
  logout,
  setMessage, 
  clearMessage,
  currentUserChange
}
