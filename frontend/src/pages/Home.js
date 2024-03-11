import "./Home.css";
import logo from "../images/logoRealiize.png";

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

const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <div id="home">
      <div className="content-one"></div>
      <div className="content-two">
        <div className="column">
          <div>
            <h2 style={{ fontSize: "35px", marginBottom: "0px" }}>
              DE O PRÓXIMO
            </h2>
            <h3
              style={{
                fontSize: "69.3px",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              PASSO:
            </h3>
            <h3 style={{ fontSize: "17.8px", marginTop: "0px" }}>
              A escolha de responder esse formulário, já te diferencia dos
              concorrentes!
            </h3>
          </div>
          <div>
            <h2 style={{ fontSize: "17.6px", fontWeight: "400" }}>
              NAS PRÓXIMAS 12h NOSSA EQUIPE ENTRARÁ EM CONTATO COM VOCÊ!
            </h2>
          </div>
        </div>
        <div className="column"></div>
        <div className="column">
          <form>
            <div>
              <input placeholder="NOME"></input>
            </div>
            <div>
              <input placeholder="TELEFONE"></input>
            </div>
            <div>
              <input placeholder="EMAIL"></input>
            </div>
            <div>
              <input placeholder="EMPRESA"></input>
            </div>
            <div>
              <input placeholder="NICHO"></input>
            </div>
            <div>
              <input placeholder="FATURAMENTO"></input>
            </div>
          </form>
        </div>
      </div>
      <div className="content-three"></div>
      <div className="content-four"></div>
      <div className="content-five"></div>
      <div className="content-six"></div>
    </div>
  );
};

export default Home;
