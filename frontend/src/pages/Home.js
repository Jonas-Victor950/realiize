import "./Home.css";
import logo from "../images/logoRealiize.png";
import hashtag from "../images/hashtag.png";
import gusAndBia from "../images/1.png";
import yellowContentTwo from "../images/amarelo_content_two.png";
import purpleContentTwo from "../images/4.png";

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
      <div className="content-one">
        <div className="form-group">
          <div>
            <img src={hashtag} id="hashtag" />
          </div>
          <div>
            <button>QUERO ALAVANCAR MINHA MARCA!</button>
          </div>
        </div>
        <div className="form-group">
          <div>
            <img id="gusAndBia" src={gusAndBia} />
          </div>
          <div className="yellow-down">
            <div>SOLUÇÃO COMPLETA PARA SUA EMPRESA</div>
            <div>EMPREENDA COM IMPACTO</div>
            <div>APOIO AOS JOVENS EMPREENDEDORES</div>
          </div>
        </div>
      </div>
      <div className="content-two">
        <div>
          <div id="purple-rectangle"></div>
          <img src={yellowContentTwo} id="image-yellow-content-two" />
        </div>
        <div className="columns">
          <div className="column-one">
            <div className="text-one">DÊ O PRÓXIMO</div>
            <div className="text-two">PASSO</div>
            <div className="text-three">
              A escolha de responder esse formulário, já te diferencia dos
              concorrentes!
            </div>
          </div>
          <div className="column-two">
            <img src={purpleContentTwo} className="image-one" />
          </div>
          <div className="column-three">
            <form>
              <div>
                <input placeholder="NOME COMPLETO"></input>
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
                <select></select>
              </div>
              <div>
                <select></select>
              </div>
              <button>ENVIAR</button>
            </form>
            <div className="text-one">NAS PRÓXIMAS 12h NOSSA EQUIPE ENTRARÁ EM CONTATO COM VOCÊ!</div>
          </div>
        </div>
        <div id="purple-rectangle2"></div>
      </div>
      <div className="content-three">

      </div>
      <div className="content-four"></div>
      <div className="content-five"></div>
      <div className="content-six"></div>
    </div>
  );
};

export default Home;
