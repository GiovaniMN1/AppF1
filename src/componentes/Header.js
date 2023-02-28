import React from "react";
import NavLink from "react-router-dom";

const Header=()=>{
    return(
        <nav>
            <NavLink to='/'>Inicio</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/acerca'>Acerca</NavLink>
          </nav>
    )
}

export default Header