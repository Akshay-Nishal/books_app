import { createContext,useState } from "react";

// the actual value that you need to access.
var Login
if(localStorage.getItem('login')){
    Login = localStorage.getItem('login')
  }
  else{
    Login = true
    localStorage.setItem('login','false')
  }
export const UserContext= createContext({
    login:null,
    setlogin:() => null
})
/* current context value, as given by the nearest context provider for the given context. */
export const UserProvider = ({children})=>{
    const [login,setlogin] = useState(Login)
    const value = {login,setlogin}


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
