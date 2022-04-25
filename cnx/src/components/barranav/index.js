import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./Navbarelements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require("../../imagens/logo.png")} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/cnx" activeStyle>
            CNX
          </NavLink>
          <NavLink to="/planos" activeStyle>
            Planos
          </NavLink>
          <NavLink to="/eventos" activeStyle>
            Eventos
          </NavLink>
          <NavLink to="/inscreva" activeStyle>
            Inscreva-se
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
