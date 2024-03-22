import React, { useRef } from "react";
import Slider from "react-slick";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../images/logoRealiize.png";
import hashtag from "../images/hashtag.png";
import "./ContentFour.css";

const ContentFour = () => {
  const sliderRef = useRef(null);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "-30px", zIndex: 1}}
        onClick={onClick}
      >
        <BsArrowLeftCircleFill />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "-30px", zIndex: 1 }}
        onClick={onClick}
      >
        <BsArrowRightCircleFill />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 20, // Definindo o tempo de transição para 2 segundos
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Ativar o modo de reprodução automática
    autoplaySpeed: 20, // Definindo o tempo de exibição de cada slide para 2 segundos
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="content-fourth">
      <div style={{ width: "80vw" }}>
        <Slider {...settings} ref={sliderRef}>
          <div className="content">
            <div className="text-one">MARKETING</div>
            <div className="text-two">
              Gestão Estratégica de Redes Sociais:
            </div>
            <div className="text-three">
              • Planejamento e criação de estratégias.
            </div>
            <div className="text-three">
              • Gerenciamento de conteúdo e interação.
            </div>
            <div className="text-three">
              • Monitoramento de métricas para alcançar objetivos.
            </div>
            <div className="text-four">Criação de Artes e Edições:</div>
            <div className="text-five">
              • Produção de vídeos e imagens profissionais.
            </div>
            <div className="text-five">
              • Alinhamento com a estratégia definida.
            </div>
            <div className="text-five">
              • Foco na qualidade e objetivos online.
            </div>
            <div className="text-five">
              • Design profissional para panfletos, cartões, banners...
            </div>
            <div className="text-five">
              • Comunicação efetiva da mensagem desejada.
            </div>
          </div>

          <div className="content">
            <img src={hashtag} alt="Descrição da imagem 2" />
            <h2>Título do Slide 2</h2>
            <p>Texto do Slide 2</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ContentFour;
