import "./Home.css";
import logo from "../images/logoRealiize.png";
import hashtag from "../images/hashtag.png";
import gusAndBia from "../images/1.png";
import yellowContentTwo from "../images/amarelo_content_two.png";
import yellowTwoContentTwo from "../images/2.png";
import purpleContentTwo from "../images/4.png";
import purpleTwoContentTwo from "../images/6.png";
import piramideContentThree from "../images/3.png";
import React, { useRef } from "react";
import grafic from "../images/5.png";

// Redux
import { createUser } from "../slices/userSlice";

// Components
import { NavLink, Link } from "react-router-dom";

// Hooks
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ContentFour from "../components/ContentFour";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, message, error } = useSelector((state) => state.user);

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [idea, setIdea] = useState(null);
  const [phone, setPhone] = useState(null);
  const [age, setAge] = useState(null);
  const [nicho, setNicho] = useState(null);
  const [budget, setBudget] = useState(null);
  const [company, setCompany] = useState(null);

  const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(false);

  const contentTwoRef = useRef(null); // Referência para o elemento content-two
  const contentFourRef = useRef(null);
  const contentFiveRef = useRef(null);
  const contentSixRef = useRef(null);

  const handleScrollToContentTwo = () => {
    contentTwoRef.current.scrollIntoView({ behavior: "smooth" }); // Rolagem suave até o content-two
    toggleSideNavbar();
  };

  const handleScrollToContentFour = () => {
    contentFourRef.current.scrollIntoView({ behavior: "smooth" }); // Rolagem suave até o content-two
  };
  const handleScrollToContentFive = () => {
    contentFiveRef.current.scrollIntoView({ behavior: "smooth" }); // Rolagem suave até o content-two
  };
  const handleScrollToContentSix = () => {
    contentSixRef.current.scrollIntoView({ behavior: "smooth" }); // Rolagem suave até o content-two
  };

  const toggleSideNavbar = () => {
    setIsSideNavbarOpen(!isSideNavbarOpen);
  };

  const handleSubmitCreateUser = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      idea,
      phone,
      age,
      nicho,
      budget,
      company,
    };

    const createUser1 = await dispatch(createUser(userData));

    if (createUser1.type === "user/create/fulfilled") {
      window.location.reload();
    } else {
      alert(createUser1.payload);
      console.log(createUser1);
    }
  };

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <nav id="nav">
        <div className="left">
          <img id="image" src={logo}></img>
        </div>
        <div className="right">
          <div id="hamburger" onClick={toggleSideNavbar}>
            &#9776;
          </div>
          <button id="span" onClick={handleScrollToContentFour}>
            SERVIÇOS
          </button>
          <button id="span" onClick={handleScrollToContentFive}>
            SEJA UM JOVEM EMPREENDEDOR
          </button>
          <button id="span" onClick={handleScrollToContentSix}>
            QUEM SOMOS
          </button>
        </div>
      </nav>
      <div
        id="sideNavbar"
        className={isSideNavbarOpen ? "active" : "notActive"}
      >
        <div>
          <div>
            <button id="span" onClick={handleScrollToContentFour}>
              SERVIÇOS
            </button>
            <button id="span" onClick={handleScrollToContentSix}>
              QUEM SOMOS
            </button>
            <button id="span" onClick={handleScrollToContentFive}>
              SEJA UM JOVEM EMPREENDEDOR
            </button>
          </div>
        </div>
      </div>
      <div id="home">
        <div className="content-one">
          <div className="form-group">
            <div>
              <div>
                <img src={hashtag} id="hashtag" />
              </div>
              <div>
                <button onClick={handleScrollToContentTwo}>
                  QUERO ALAVANCAR MINHA MARCA!
                </button>
              </div>
            </div>

            <div>
              <img id="gusAndBia" src={gusAndBia} />
            </div>
          </div>
          <div className="form-group">
            <div className="yellow-down">
              <div>SOLUÇÃO COMPLETA PARA SUA EMPRESA</div>
              <div>EMPREENDA COM IMPACTO</div>
              <div>APOIO AOS JOVENS EMPREENDEDORES</div>
            </div>
          </div>
        </div>
        <div className="content-two" ref={contentTwoRef}>
          <div className="before-column">
            <div id="purple-rectangle"></div>
            <img src={yellowContentTwo} id="image-yellow-content-two" />
            <div id="purple-rectangle2"></div>
          </div>
          <div className="before-column-desktop">
            <img src={yellowTwoContentTwo} id="image-yellow-two-content-two" />
          </div>
          <div className="columns">
            <div className="column-one">
              <div className="text-one">DÊ O PRÓXIMO</div>
              <div className="text-two">PASSO</div>
              <div className="text-three">
                A escolha de responder esse formulário, já te diferencia dos
                concorrentes!
              </div>
              <div className="text-four">
                NAS PRÓXIMAS 12h NOSSA EQUIPE ENTRARÁ EM CONTATO COM VOCÊ!
              </div>
            </div>
            <div className="column-two">
              <img src={purpleContentTwo} className="image-one" />
            </div>
            <div className="column-two-two">
              <img src={purpleTwoContentTwo} className="image-two" />
            </div>
            <div className="column-three">
              <form onSubmit={handleSubmitCreateUser}>
                <div>
                  <input
                    placeholder="NOME COMPLETO"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  ></input>
                </div>
                <div>
                  <input
                    placeholder="TELEFONE"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  ></input>
                </div>
                <div>
                  <input
                    placeholder="EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                </div>
                <div>
                  <input
                    placeholder="EMPRESA"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  ></input>
                </div>
                <div>
                  <select
                    value={nicho}
                    onChange={(e) => setNicho(e.target.value)}
                  ></select>
                </div>
                <div>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  ></select>
                </div>
                <button type="submit">ENVIAR</button>
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
            <button onClick={handleScrollToContentTwo}>
              QUERO UMA ESTRATÉGIA PERSONALIZADA
            </button>
          </div>
        </div>
        <div className="content-foury" ref={contentFourRef}>
          <div className="text-one-y">COMO PODEMOS</div>
          <div className="text-two-y">AJUDAR?</div>
          <div>
            <ContentFour />
          </div>
          <button onClick={handleScrollToContentTwo}>
            QUERO DESTACAR MINHA EMPRESA!
          </button>
        </div>
        <div className="content-five" ref={contentFiveRef}>
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
          <div className="form-group-two-two">
            <div className="flex-one">
              <div className="texts">
                <div className="text-one">
                  A Realiize acredita no potencial dessa geração!
                </div>
                <div className="text-two">
                  Temos planos EXCLUSIVOS para jovens até 25 anos.
                </div>
              </div>

              <div className="purple-vertical"></div>
              <img src={grafic} className="image" />
            </div>
          </div>
          <div className="form-group-three">
            <div className="text-one">QUER NOSSA AJUDA?</div>
            <form className="columns-one" onSubmit={handleSubmitCreateUser}>
              <div className="left-side">
                <input
                  placeholder="NOME"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder="TELEFONE"
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="middle-side">
                <input
                  placeholder="EMAIL"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  placeholder="QUAL SUA IDEIA"
                  value={idea}
                  required
                  onChange={(e) => setIdea(e.target.value)}
                />
              </div>
              <div className="right-side">
                <input
                  placeholder="IDADE"
                  value={age}
                  required
                  onChange={(e) => setAge(e.target.value)}
                />
                <button>ENVIAR</button>
              </div>
            </form>
          </div>
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
                <button type="submit">ENVIAR</button>
              </div>
            </form>
          </div>
        </div>
        <div className="content-six" ref={contentSixRef}>
          <div className="text-one">QUEM SOMOS?</div>
          <div className="text-two">
            Somos uma agência de marketing e consultoria empresarial,
            fundamentada em valores essenciais como transparência,
            profissionalismo e responsabilidade.
            <br /> <br />
            Nossa filosofia é simples, mas poderosa: cada marca é única, e é
            nossa missão tratá-la com a singularidade que merece. Acreditamos
            firmemente que por trás de cada empreendimento há um sonho pulsante.
            Mais do que prestadores de serviços, somos catalisadores de
            aspirações, especialmente para os jovens empreendedores que almejam
            transformar suas visões em realidade. Nosso compromisso vai além do
            sucesso superficial; buscamos nutrir o potencial empreendedor,
            fornecendo orientação estratégica e apoio prático. Acreditamos que
            ao ajudar a construir marcas robustas, estamos contribuindo para a
            realização de sonhos.
            <br /> <br />
            Conecte-se conosco e descubra uma parceria onde cada projeto é
            tratado com a dedicação que merece. Aqui, acreditamos no poder dos
            sonhos e nos esforçamos para ser a bússola que guia empreendedores
            rumo ao sucesso duradouro.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
