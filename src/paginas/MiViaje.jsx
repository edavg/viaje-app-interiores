import React, { useContext } from 'react'
import Contexto from '../context/Contexto'
import types from '../context/types'


const MiViaje = () => {
    const {contratacion, dispatch2,referencia,sumaTotal,setSumaTotal}=useContext(Contexto)
  return (
    <>
    <section className='ruta'>
        <h3>Lugares a visitar:</h3>
        {(contratacion.length<1) &&
            <div className='aviso'>Todavia no has contratado ningun viaje. <br/>
        Busca en Central o Alto Paraná para ver las ofertas.</div>}
        {contratacion.map(mapa =>
            <div key={mapa.sitio}>
        <button className="boton anularRuta" onClick={
            () => {
                setSumaTotal(sumaTotal-mapa.precio)
                dispatch2({
                    type:types.anular,
                    payload:{nombre:mapa.sitio}
                })
            }
        }>Anular</button>
        {mapa.sitio} (₲{mapa.precio}.000)
    </div>)}
    <h3>Referencia: {referencia}</h3>
    <h3>Total a Pagar: ₲{sumaTotal}{(contratacion.length<1) ? "" : ".000"}</h3>
    </section>
    </>
  )
}

export default MiViaje