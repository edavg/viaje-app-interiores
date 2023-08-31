import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../context/Contexto";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Ingrese por lo menos 2 carácteres</p>
  );
};

const Login = () => {
  const [inputValue, setInputValue] = useState("")
  const {logearme,setReferencia}=useContext(Contexto)
  const navegacion=useNavigate();
  const login = () => {
    navegacion('/',{replace:true})
    logearme('')
  }
  const registro=(e)=>{
    setReferencia(e.currentTarget.value)
    setInputValue(e.currentTarget.value)
  }
  const getIsFormValid = () => {
    return inputValue.length>=2
  };
  return (
  <>

   <section className="login">
   <h3>¡Conoce el país!</h3>
   <label htmlFor="referencia">Para entrar: </label>
   <input 
   id="referencia" 
   type="text" 
   pattern="[a-zA-Z]" 
   value={inputValue}
   onChange={registro} 
   placeholder="Insertar nombre" 
   autoFocus autoComplete="off" />
   {inputValue.length<2 ? (<PasswordErrorMessage />) : null}
   <button 
   className="botonRegistro" 
   type="submit" 
   onClick={login} 
   disabled={!getIsFormValid()}>
    Entrar</button>
   </section>
  </>
  )
}

export default Login