import { Navigate, useNavigate, useParams } from "react-router-dom"
import data from "../datos/datos";
import types from "../context/types";
import { useContext } from "react";
import Contexto from "../context/Contexto";

const Comprar = () => {
  const {nombre}=useParams();
  const destinoEncontrado=data.find(dato => dato.nombre===nombre)
  const navegacion=useNavigate()
  const volver=()=>{
    navegacion(-1)
  }
 
  const {dispatch2, contratacion, sumaTotal, setSumaTotal}=useContext(Contexto);
  const encontrado = contratacion.find(objeto => objeto.sitio===nombre)
  const contratar = () =>{
    setSumaTotal(sumaTotal+destinoEncontrado.precio)
    const action={
      type:types.contratar,
      payload:{nombre:nombre,precio:destinoEncontrado.precio}
    }
    dispatch2(action)
  }
  const anular = () =>{
    setSumaTotal(sumaTotal-destinoEncontrado.precio)
    const action={
      type:types.anular,
      payload:{nombre:nombre}
    }
    dispatch2(action)
  }
  
  const imagen=`/images/${destinoEncontrado.imagen}`
  if(!destinoEncontrado){
    return <Navigate to="/central" />  
    }

  return (
    <>
    <div className="contenido">
    <h1>{nombre}</h1>
    <div className="servicios">{destinoEncontrado.situacion}</div>
    <div className="precio">₲ {destinoEncontrado.precio}.000</div>
    <div className="imagenGrande"><img  src={imagen} alt=""/></div>
    {(!encontrado) && <button className="boton contratar" onClick={contratar}>Contratar</button>}
    {(encontrado) && <button className="boton anular" onClick={anular}>Anular</button>}
    <button className="volverb"onClick={volver}>Volver</button>
    </div>
    </>
  )
}

export default Comprar