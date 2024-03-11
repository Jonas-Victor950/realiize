import "./Navbar.css";
import logo from "../images/logoRealiize.png"

// Components
import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";

// Hooks
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <nav id="nav">
      <div className="left">
        <img src={logo}></img>
      </div>
      <div className="right">
        <span>SERVIÇOS</span>
        <span>SEJA UM JOVEM EMPREENDEDOR</span>
        <span>QUEM SOMOS</span>
      </div>
    </nav>
  );
};

export default Navbar;
