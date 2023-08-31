import {Route, Routes, Navigate} from 'react-router-dom'
import NavBar from '../navbar/NavBar'
import Central from '../paginas/Central'
import AltoParana from '../paginas/AltoParana'
import Comprar from '../paginas/Comprar'
import MiViaje from '../paginas/MiViaje'


const Router2 = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="Central" element={<Central/>}/>
        <Route path="AltoParana" element={<AltoParana/>}/>
        <Route path="viaje" element={<MiViaje/>}/>
        <Route path="destino/:nombre" element={<Comprar />}/>
        <Route path="/*" element={<Navigate to="/Login"/>}/>
    </Routes>
    </>
  )
}

export default Router2