import { useContext } from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import Contexto from '../context/Contexto';
import { AiOutlineShoppingCart } from "react-icons/ai"


const LogoutButton = () => {
    const navegacion = useNavigate();
    const { deslogearme } = useContext(Contexto);
  
    const handleLogout = () => {
      navegacion('login', { replace: true });
      deslogearme();
    };
  
    return <button className="logout-button" onClick={handleLogout}>Logout</button>;
  };
  
  const NavBar = () => {
    return (
      <>
        <nav>
          <div>
            <NavLink to="/Central">Central</NavLink>
            <NavLink to="/AltoParana">Alto Paraná</NavLink>
            <NavLink to="/viaje">Viaje <AiOutlineShoppingCart /></NavLink>
          </div>
          <LogoutButton />
        </nav>
      </>
    );
  };

export default NavBar