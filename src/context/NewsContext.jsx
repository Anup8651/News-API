import { createContext, useContext, useState } from "react";
import api from "../config/axios";



//create context
//provide
//use context

const mycontext = createContext()

const Mycontextprovider = ({children})=>{
    const apiurl = import.meta.env.VITE_NEW_KEY;

    const [news,setNews] = useState([])
    const [loading,setloading] = useState(false)

    const fetchdata = async (url="/everything?q=india")=>{
        setloading(true)
        try {
            const response = await api.get(`${url}&apiKey=${apiurl}`)
            setloading(false)
            return response.data;//ham yaha per return kar rhe hai ok
            
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }

    
    const value = {
        news,
        setNews,
        fetchdata,
        loading
    }
    
    return (
        <mycontext.Provider value={value}>
            {children}
        </mycontext.Provider>
    )
}

const usemycontext = ()=>{
    return useContext(mycontext)
}

export {usemycontext,Mycontextprovider}
