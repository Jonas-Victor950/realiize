import React, { useRef } from "react";
import Slider from "react-slick";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../images/logoRealiize.png";
import sideArrow from "../images/91.png";
import hashtag from "../images/hashtag.png";
import service1 from "../images/8.png";
import service2 from "../images/7.png"
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
      <div>
        <img
          className={className}
          onClick={onClick}
          src={sideArrow}
          style={{
            width: "20px",
            transform: "rotate(180deg)",
          }}
        />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div>
        <img
          src={sideArrow}
          className={className}
          onClick={onClick}
          style={{ width: "20px", zIndex: 1000 }}
        />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 20,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="content-fourth">
      <div style={{ width: "80vw" }}>
        <Slider {...settings} ref={sliderRef}>
          <div className="content">
            <div className="text-one">MARKETING</div>
            <div className="text-two">Gestão Estratégica de Redes Sociais:</div>
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
              <div className="texts">
                • Produção de vídeos e imagens profissionais. <br></br>•
                Alinhamento com a estratégia definida.
                <br></br>• Foco na qualidade e objetivos online. <br></br>•
                Design profissional para panfletos, cartões, banners...{" "}
                <br></br>• Comunicação efetiva da mensagem desejada.
              </div>
              <div className="img">
                <img src={service1} alt="" />
              </div>
            </div>
          </div>

          <div className="content">
            <div className="text-one">TRÁFEGO PAGO</div>
            <div className="text-two">Gestão de Tráfego Pago:</div>
            <div className="text-five">
              <div className="texts">
                • Estratégias para impulsionar tráfego em plataformas
                específicas. <br></br>• Criação de campanhas pagas e seleção de
                canais adequados.
                <br></br>• Otimização contínua com base em análises para metas
                específicas.
              </div>
              <div className="img2">
                <img src={service2} alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ContentFour;
