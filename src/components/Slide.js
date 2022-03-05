import React from "react";

const Slide = () => {

  const distancia = React.useRef(null);
  React.useEffect(
    (e) => {
      setInterval(() => {
        distancia.current.scrollLeft += distancia.current.offsetWidth;
      }, 10000);
      setInterval(() => {
        distancia.current.scrollLeft = 0;
      }, 30000);
    },
    [distancia]
  );

  return (
    <header className="containerTotal" id="slide-house">
      <div className="slides" ref={distancia}>
        <div className="slide1 slide-First">
          <div>
            <h1>IMAGINE ?</h1>
            <span id="circle"></span>
            <p>
              Imagine dirigir uma máquina dessas. Uma Mercedes F1 W05 Hybrid
              <br />
              Originalmente conhecido como Mercedes F1 W05 , foi um carro de corrida de Fórmula 1 da Mercedes-Benz de grande sucesso projetado e desenvolvido sob a direção de Bob Bell , Aldo Costa , Geoff Willis , Loïc Serra , Russell Cooley , John Owen , Mike Elliott e Jarrod Murphy para competir no Campeonato Mundial de Fórmula 1 da FIA 2014 .
            </p>
          </div>
          <div>
            <h1>Mercedes F1 W05 Hybrid</h1>
            <img className="car1" src="./img/form-1.png" alt="carro" />
            <img id="carSom" src="./img/form-1.png" alt="carro" />
          </div>
        </div>

        <div id="second" className="slide1 slide-Second">
          <div>
            <h1>Mais sobre o F1 W05 Híbrido</h1>
            <span className="circle2"></span>
            <p>
            O chassi foi nomeado "F1 W05 Hybrid" para representar o quinto carro de Fórmula 1 que a Mercedes construiu desde 2010 , enquanto o híbrido foi marcado para reconhecer a utilização de unidades de potência híbridas totalmente integradas. O carro fez sua estreia competitiva no Grande Prêmio da Austrália de 2014 , a rodada de abertura da temporada de 2014
            </p>
          </div>
          <div>
            <h1>Encara qualquer Desafio !</h1>
            <img className="car2" src="./img/form-1.png" alt="carro" />
            <img id="carSom2" src="./img/form-1.png" alt="carro" />
          </div>
        </div>
        <div className="slide1 slide-Three">
        <div>
            <h1>Venha conhecer esse Íncrivel Super esportivo! </h1>
            <span className="circle3"></span>
            <p>
              Esse Super esportivo conta com: <br />
              Comprimento	4.800 mm (189 pol.) <br />
              Largura	1.800 mm (71 pol.) <br />
              Altura	950 mm (37 pol.) <br />
              Peso: 691kg <br />
              Potência: <br />
              800–850 cavalos de potência (600–630  kW )
            </p>
          </div>
          <div>
            <h1>De 0 a 300km/h em 3 segundos!</h1>
            <img className="car3" src="./img/form-1.png" alt="carro" />
            <img id="carSom3" src="./img/form-1.png" alt="carro" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Slide;
