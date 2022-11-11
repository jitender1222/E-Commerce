import axios from "axios";
import reducer from "../Reducer/ProductReducer"

// to create a context

import { createContext, useContext, useEffect, useReducer } from "react";

const AppContext=createContext();

// storing the url of an API

const API= "https://api.pujakaitem.com/api/products";

// create a provider

const AppProvider=({children})=>{

    const initialState={
        isLoading:false,
        isError:false,
        products:[],
        featureProducts:[],
    };

    const [state,dispatch]=useReducer(reducer,initialState);

    const getProduct=async (url)=>{
        dispatch({type:"SET_LOADING"});
        try{
        const res=await axios.get(url);
        const data=await res.data;

        dispatch({type:"MY_API_DATA",payload: data });
        }

        catch(error){
            dispatch({type:"API_ERROR"});
        }
    }

    useEffect(()=>{
        getProduct(API);
    },[])

    return <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
    
}

//custom hooks

const useProductContext=()=>{
    return useContext(AppContext);
}


export {AppProvider,AppContext,useProductContext};