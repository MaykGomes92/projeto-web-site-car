import React from "react";
import Patrocinio from "../Patrocinadores/Patrocinio";
import "../Section1/section1.css";

const Section1 = () => {
  const [btnText, setBtnText] = React.useState("button1");

  function handleClick(e) {
    setBtnText(e.target.getAttribute("class"));
  }

  const DefinirInformacao = (e) => {
    if (
      btnText === "button1" ||
      btnText === "pDiv1" ||
      btnText === "logo-divButton1"
    ) {
      return (
        <>
          <p>
            A Mercedes-Benz é uma marca alemã de automóveis pertencente ao grupo
            Daimler AG, criada em 1924 e resultado de uma fusão entre a Benz &
            Cie. E a Daimler-Motoren-Gesellschaft. ... foi a maior empresa
            criada pelo alemão Karl Benz. A Daimler foi fundada por Gottlieb
            Daimler e pelo seu parceiro Wilhelm Maybach em 1890.
          </p>
        </>
      );
    } else if (
      btnText === "button2" ||
      btnText === "pDiv2" ||
      btnText === "logo-divButton2"
    ) {
      return (
        <>
          <p>
            F1 W05 Hybrid é o modelo da Mercedes da temporada de 2014 da Fórmula
            1. O carro foi pilotado por Nico Rosberg e Lewis Hamilton. O modelo
            destacou-se sobre os outros carros da temporada de 2014 por causa do
            motor e de sua aerodinâmica, conquistando o título do Mundial de
            Construtores antecipadamente.
          </p>
        </>
      );
    } else if (
      btnText === "button3" ||
      btnText === "pDiv3" ||
      btnText === "logo-divButton3"
    ) {
      return (
        <>
          <p>
            Desde que a Fórmula 1 passou a adotar motores híbridos, em 2014, só
            deu Mercedes. E sempre com dobradinha carro-piloto. A série
            imbatível dos carros F1 W05, W06, W07, W08, W09 e W10 começou em
            2014, ano do bicampeonato de Lewis Hamilton. Então até anos se
            passarem, a Mercedes e a linha W foram hexacampeão da F1.
          </p>
        </>
      );
    } else {
      return null;
    }
  };

  React.useEffect(
    (e) => {
      try {
        if (
          btnText === "button1" ||
          btnText === "pDiv1" ||
          btnText === "logo-divButton1"
        ) {
          document.querySelector(".button3").classList.remove("ativarCaixa");
          document.querySelector(".button2").classList.remove("ativarCaixa");
          document.querySelector(".button1").classList.add("ativarCaixa");
        } else if (
          btnText === "button2" ||
          btnText === "pDiv2" ||
          btnText === "logo-divButton2"
        ) {
          document.querySelector(".button1").classList.remove("ativarCaixa");
          document.querySelector(".button3").classList.remove("ativarCaixa");
          document.querySelector(".button2").classList.add("ativarCaixa");
        } else if (
          btnText === "button3" ||
          btnText === "pDiv3" ||
          btnText === "logo-divButton3"
        ) {
          document.querySelector(".button1").classList.remove("ativarCaixa");
          document.querySelector(".button2").classList.remove("ativarCaixa");
          document.querySelector(".button3").classList.add("ativarCaixa");
        } else {
          return null;
        }
      } catch {
        console.log("");
      }
    },
    [btnText]
  );

  return (
    <section id="section1">
      <h1 className="firstTitle" id="ancor-lan">Lançamento</h1>

      <div className="containerEspecifi">
        <div className="buttonsEspecifi">
          <div onClick={(e) => handleClick(e)} className="button1">
            Sobre a Mercedes
            <img
              className="logo-divButton1"
              src="./img/mercedes.png"
              alt="logo"
            />
            <p className="pDiv1">Nossa origem!</p>
          </div>

          <div onClick={(e) => handleClick(e)} className="button2">
            Mercedes W05 Hybrid
            <img
              className="logo-divButton2"
              src="./img/car-f1.png"
              alt="logo"
            />
            <p className="pDiv2">Mais detalhes!</p>
          </div>

          <div onClick={(e) => handleClick(e)} className="button3">
            Conquistas
            <img
              className="logo-divButton3"
              src="./img/trofeu-f1.png"
              alt="logo"
            />
            <p className="pDiv3">Vitórias e prêmios!</p>
          </div>
        </div>
        <div className="textosEspecifi">
          <DefinirInformacao className="textosP" />
        </div>
      </div>
      <Patrocinio />
    </section>
  );
};

export default Section1;
