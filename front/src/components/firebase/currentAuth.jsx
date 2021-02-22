import { useState, useEffect, useContext, createContext } from "react"
import axios from "axios";

const API_URL = "https://www.sgerd.com/api/usuario/";

// Set authentication context
const AuthContext = createContext({
  user: null
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {

    const currentUser = async () => {
      const { data } = await axios
        .get(API_URL + "usuarioactual");

      // Check whether user has logged in
      if (!data.usuarioActual) {
        setUser(null)
      
        axios.post(API_URL + "cerrarsesion");
      } else {
        setUser(data.usuarioActual)
      }
    }

    return () => currentUser()

  }, [])

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
