import { useState, useEffect, useContext, createContext } from "react"
import axios from "axios";
import Router from "next/router"
import PAGE from "config/page.config"

const API_URL = "https://www.sgerd.com/api/'";

// Set authentication context
const BusinessContext = createContext({
  business: null
})

export function AuthProvider({ children }) {
  const [business, setBusiness] = useState(null)

  useEffect(() => {

    const currentBusiness = async () => {
      const { data } = await axios
        .get(API_URL + "empresa");

      // Check whether user has logged in
      if (!data) {
        setBusiness(null)
      
      } else {
        setBusiness(data)
      }
    }

    return () => currentBusiness()

  }, [])

  return <BusinessContext.Provider value={{ business }}>{children}</BusinessContext.Provider>
}

export const useBusiness = () => {
  return useContext(BusinessContext)
}
