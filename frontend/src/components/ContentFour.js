import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sideArrow from "../images/91.png";
import service1 from "../images/8.png";
import service2 from "../images/7.png";
import service3 from "../images/14.png";
import service4 from "../images/11.png";
import service5 from "../images/13.png";
import service6 from "../images/9.png";
import service7 from "../images/10.png";
import service8 from "../images/12.png";
import "./ContentFour.css";

const ContentFour = () => {
  const sliderRef = useRef(null);

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div>
        <img
          alt="returnArrow"
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
    const { className, onClick } = props;
    return (
      <div>
        <img
          alt="nextArrow"
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
    infinite: true,
    speed: 600,
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
            <img src={service1} alt="" className="teste" />
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
              {/* <div className="img">
                <img src={service1} alt="" />
              </div> */}
            </div>
          </div>
          <div className="content">
            <img src={service2} alt="" className="teste" />
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
              {/* <div className="img2">
                <img src={service2} alt="" />
              </div> */}
            </div>
          </div>
          <div className="content">
            <img src={service3} alt="" className="teste" />
            <div className="text-one">PRESENÇA ONLINE</div>
            <div className="text-two">Desenvolvimento de Site:</div>
            <div className="text-three">
              • Criação de páginas web personalizadas.
            </div>
            <div className="text-three">
              • Layout visual atrativo e organização clara.
            </div>
            <div className="text-three">
              • Funcionalidades interativas e acessibilidade.
            </div>
            <div className="text-four">Formatação de Marketplace:</div>
            <div className="text-five">
              <div className="texts">
                • Integração com principais marketplaces. <br></br>• Atualização
                automática de produtos e estoques.
                <br></br>• Simplificação da gestão para maximizar visibilidade.
              </div>

              {/* <div className="img3">
                <img src={service3} alt="" />
              </div> */}
            </div>
          </div>
          <div className="content">
            <img src={service4} alt="" className="teste" />
            <div className="text-one">MENTALIDADE DA EQUIPE</div>
            <div className="text-two">Capacitação da Equipe de Vendas:</div>
            <div className="text-three">
              • Instruções sobre produtos/serviços.
            </div>
            <div className="text-three">
              • Técnicas de vendas e gestão de relacionamento.
            </div>
            <div className="text-three">
              • Aprimoramento das práticas de comunicação.
            </div>
            <div className="text-four">
              Desenvolvimento de Plano de Carreira:
            </div>
            <div className="text-five">
              <div className="texts">
                • Criação de roadmap para crescimento profissional. <br></br>•
                Definição de metas e competências necessárias.
                <br></br>• Incentivo à motivação, engajamento e retenção de
                talentos.
              </div>

              {/* <div className="img4">
                <img src={service4} alt="" />
              </div> */}
            </div>
          </div>
          <div className="content">
            <img src={service5} alt="" className="teste" />
            <div className="text-one">OTIMIZAÇÃO EMPRESARIAL</div>
            <div className="text-two">Configuração de Sistemas de Gestão:</div>
            <div className="text-three">
              • Personalização de categorias e cadastros.
            </div>
            <div className="text-three">
              • Lançamento de estoque e organização financeira.
            </div>
            <div className="text-three">
              • Ajustes fiscais para alinhamento aos processos.
            </div>
            <div className="text-four">Consultoria Financeira:</div>
            <div className="text-five">
              <div className="texts">
                • Otimização de rentabilidade via precificação. <br></br>•
                Análise de resultados com DRE.
                <br></br>• Gestão de fluxo de caixa com DFC. <br></br>•
                Dashboards, planilhas e análises mensais para fortalecer a saúde
                financeira
              </div>

              {/* <div className="img5">
                <img src={service5} alt="" />
              </div> */}
            </div>
          </div>
          <div className="content">
            <img src={service6} alt="" className="teste" />
            <div className="text-one">REESTRUTURAÇÃO EMPRESARIAL</div>
            <div className="text-five">
              <div className="texts">
                • Fortalecimento e revitalização para crescimento sustentável.
                <br></br>• Identificação de oportunidades de eficiência e
                otimização.
                <br></br>• Processo abrangente para mudanças significativas.{" "}
                <br /> • Realinhamento com objetivos futuros. <br /> • Ajustes
                na estrutura organizacional. <br />• Preparação para desafios e
                oportunidades futuras.
              </div>
              {/* <div className="img6">
                <img src={service6} alt="" />
              </div> */}
            </div>
          </div>
          <div className="content">
            <img src={service7} alt="" className="teste" />
            <div className="text-one">ARQUITETURA</div>
            <div className="text-five">
              <div className="texts">
                • Consultoria e Desenvolvimento de Projetos:<br></br>•
                Planejamento de Layout Interno:
                <br></br>• Desenvolvimento de Planta Baixa: <br /> • Maquetes
                Eletrônicas e Animações: <br /> • Desenvolvimento de Fachadas:
                <br />• Acompanhamento de Obras: <br />• Emissão de RRT
                (Registro de Responsabilidade Técnica) <br /> • Regularização de
                Imóveis <br /> • Mapeamento Aéreo
              </div>
              {/* <div className="img7">
                <img src={service7} alt="" />
              </div> */}
            </div>
          </div>
          <div className="content">
            <img src={service8} alt="" className="teste" />
            <div className="text-one">CONTABILIDADE</div>
            <div className="text-five">
              <div className="texts">
                • Constituição de empresas<br></br>• Escrituração fiscal
                <br></br>• Departamento pessoal e RH <br /> • Planejamento
                tributário <br /> • Controladoria e planejamento financeiro
                <br />• Contabilidade em geral
              </div>
              {/* <div className="img8">
                <img src={service8} alt="" />
              </div> */}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ContentFour;
