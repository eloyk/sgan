import { useState, useEffect, useContext, createContext } from "react"
import axios from "axios";

const API_URL = "https://www.sgerd.com/api/usuario/";

const BusinessContext = createContext({
  business: null
})

export function BusinessProvider({ children }) {
  const [business, setBusiness] = useState(null)
  console.log('estas son las propiedades en current business: ' + JSON.stringify(children) )

  // useEffect(() => {

  //   const currentBusiness = async () => {
  //     // const { data } = await axios
  //     //   .get(API_URL + "usuarioactual");

  //     // Check whether user has logged in
  //     if (true) {
  //       setBusiness(null)
      
  //       //axios.post(API_URL + "cerrarsesion");
  //     } else {
  //       setUser(data.usuarioActual)
  //     }
  //   }

  //   return () => currentBusiness()

  // }, [])

  return <BusinessContext.Provider value={{ business }}>{children}</BusinessContext.Provider>
}

export const useBusiness = () => {
  return useContext(BusinessContext)
}
