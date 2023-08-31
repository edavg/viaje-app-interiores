import React, { useReducer, useState } from 'react'
import Contexto from './Contexto'
import miReducer from './miReducer'
import types from './types'
import miReducer2 from './miReducer2'

const init = () => {
    const valor=localStorage.getItem("estado")
    return {
        estado:!!valor
    }
}
const valorInicial = []
const Provider = ({children}) => {
const [contratacion, dispatch2] = useReducer(miReducer2, valorInicial)
const [referencia, setReferencia] = useState("")
const [sumaTotal, setSumaTotal] = useState(0)
const logearme=(user='')=>{
    const action={
        type:types.login
    }
    localStorage.setItem("estado", true)
    dispatch(action)

}
const deslogearme=()=>{
    const action={
        type:types.logout
    }
    localStorage.removeItem("estado")
    dispatch(action)

}
const[logeado, dispatch]=useReducer(miReducer, {}, init)
  return (
    <Contexto.Provider value={{
        contratacion,
        dispatch2,
        ...logeado,
        logearme,
        deslogearme,
        referencia,
        setReferencia,
        sumaTotal,
        setSumaTotal
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider