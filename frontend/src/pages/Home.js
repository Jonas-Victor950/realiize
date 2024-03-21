import "./Home.css";
import logo from "../images/logoRealiize.png";
import hashtag from "../images/hashtag.png"
import gusAndBia from "../images/1.png"
import yellowContentTwo from "../images/amarelo_content_two.png"

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
            <img src={hashtag} id="hashtag"/>
          </div>
          <div>
            <button>QUERO ALAVANCAR MINHA MARCA!</button>
          </div>
        </div>
        <div className="form-group">
          <div>
            <img id="gusAndBia" src={gusAndBia}/>
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
          <img src={yellowContentTwo} id="image-yellow-content-two"/>
        </div>
        <div>

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
