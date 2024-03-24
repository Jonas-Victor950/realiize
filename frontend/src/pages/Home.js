import "./Home.css";
import logo from "../images/logoRealiize.png";
import hashtag from "../images/hashtag.png";
import gusAndBia from "../images/1.png";
import yellowContentTwo from "../images/amarelo_content_two.png";
import purpleContentTwo from "../images/4.png";
import piramideContentThree from "../images/3.png";
import React from "react";
import grafic from "../images/5.png";

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
import ContentFour from "../components/ContentFour";

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
          <div id="purple-rectangle2"></div>
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
            <div className="text-one">
              NAS PRÓXIMAS 12h NOSSA EQUIPE ENTRARÁ EM CONTATO COM VOCÊ!
            </div>
          </div>
        </div>
      </div>
      <div className="content-three">
        <div className="column-one">
          <div>
            <img src={piramideContentThree} className="image-one" />
          </div>
        </div>
        <div className="column-two">
          <div>MÉTODO ÚNICO PARA VOCÊ CRESCER!</div>
          <button>QUERO UMA ESTRATÉGIA PERSONALIZADA</button>
        </div>
      </div>
      <div className="content-four">
        <div className="text-one">COMO PODEMOS</div>
        <div className="text-two">AJUDAR?</div>
        <div>
          <ContentFour />
        </div>
        <button>QUERO DESTACAR MINHA EMPRESA!</button>
      </div>
      <div className="content-five">
        <div className="form-group-one">
          <div className="text-one">JOVEM,</div>
          <div className="text-two">TIRE SUA IDEIA DO PAPEL!</div>
        </div>
        <div className="form-group-two">
          <img src={grafic} className="image" />
          <div className="flex-one">
            <div className="text-one">
              A Realiize acredita no potencial dessa geração!
            </div>
            <div className="purple-vertical"></div>
            <div className="text-two">
              Temos planos EXCLUSIVOS para jovens até 25 anos.
            </div>
          </div>
        </div>
        <div className="form-group-three"></div>
        <div className="form-group-four">
          <div className="text-one">QUER NOSSA AJUDA?</div>
          <form className="columns-one">
            <div className="left-side">
              <input placeholder="NOME" />
              <input placeholder="TELEFONE" />
              <input placeholder="EMAIL" />
              <input placeholder="QUAL SUA IDEIA" />
            </div>
            <div className="right-side">
              <input placeholder="IDADE" />
              <button>ENVIAR</button>
            </div>
          </form>
        </div>
      </div>
      <div className="content-six">
        <div className="text-one">QUEM SOMOS?</div>
        <div className="text-two">
          Somos uma agência de marketing e consultoria empresarial, fundamentada
          em valores essenciais como transparência, profissionalismo e
          responsabilidade.
          <br /> <br/>
          Nossa filosofia é simples, mas poderosa: cada marca é única, e é nossa
          missão tratá-la com a singularidade que merece. Acreditamos firmemente
          que por trás de cada empreendimento há um sonho pulsante. Mais do que
          prestadores de serviços, somos catalisadores de aspirações,
          especialmente para os jovens empreendedores que almejam transformar
          suas visões em realidade. Nosso compromisso vai além do sucesso
          superficial; buscamos nutrir o potencial empreendedor, fornecendo
          orientação estratégica e apoio prático. Acreditamos que ao ajudar a
          construir marcas robustas, estamos contribuindo para a realização de
          sonhos.
          <br /> <br/>
          Conecte-se conosco e descubra uma parceria onde cada projeto é tratado
          com a dedicação que merece. Aqui, acreditamos no poder dos sonhos e
          nos esforçamos para ser a bússola que guia empreendedores rumo ao
          sucesso duradouro.
        </div>
      </div>
    </div>
  );
};

export default Home;
