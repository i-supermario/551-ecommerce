import { createContext, useContext, useState } from "react"

const UserContext = createContext()


export function UserProvider(props){

    const BASE = `http://localhost:7000/auth`

    const [user,setUser] = useState(null)

   
    const SignIn = async (params) => {
        const URL = `${BASE}/register`
        var formBody = [];
        for (var property in params) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(params[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        }

        const response = await fetch(URL,config)
        const res = await response.json()
        console.log(res)
        if(response.status==200){
            return true
        }

        return false
            
    }

    const Login = async (params) => {
        const URL = `${BASE}/login`
        var formBody = [];
        for (var property in params) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(params[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        }

        const response = await fetch(URL,config)
        const res = await response.json()
        console.log(res)
        if(response.status==200){
            
            console.log(res)
            setUser(res.user)
        }

    }

    
    return(
        <UserContext.Provider value={{Login,SignIn,user}} >
            {props.children}
        </UserContext.Provider>
    )
    
}

export function useUser(){
    return useContext(UserContext)
}