import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../Main/main.css";

const Main = () => {
  //  data-aos="fade-up"
  React.useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <main id="main1">
      <h1 className="firstTitle">MERCEDES F1 W05 HYBRID </h1>

      <div className="firstImgs">
        <img className="imgTitle" src="img/seal-warranty.webp" alt="roda" />
        <img className="imgTitle" src="img/mercedes.png" alt="logoAguia" />
      </div>

      <section className="firstSection">
        <div data-aos="fade-right" className="firstDivSection">
          <div>
          <img src="img/roda-f1.png" alt="roda" />
          <p id="sombraRoda"></p>
          </div>
          <div>
            <h1>RODAS KR M17 MODELO BBS RS / ARO 15X7 / (5X100) ET30</h1>

            <p>
              Características do Produto: <br />
              Modelo: BBS ZK370 <br />
              Aro: 15 <br />
              Furação: 4X100/108 <br/>
              Pintura: PRATA DIAMANTADA, PRETA DIAMANTADA.<br/>
              Material: liga leve (Alumínio).<br/>
              <p className="linhaFirstDiv"></p>
            </p>
          </div>
        </div>

        <div data-aos="fade-left" className="secondDivSection">
          <div>
            <h1>
            MOTOR TURBO V6 de 1,6 LITROS
            </h1>
            <p>
                Aceleração: 0 a 100km/h 2,4 segundos <br/>
                Rotações máximas do ICE: 15.000 rpm <br/>
                Cilindros: 6  <br/>
                Número de válvulas: 24 <br/>
                Ângulo: 90° <br/>
                Potência máxima do MGU-H: Ilimitada.<br/>
              <p className="linhaFirstSecond"></p>
            </p>
          </div>
          <img src="img/motor1.png" alt="roda" />
          <p id="sombraMotor"></p>
        </div>
      </section>
    </main>
  );
};

export default Main;
