import React from "react";

const Slide = () => {
  const distancia = React.useRef(null);

  function clickLeft(e) {
    distancia.current.scrollLeft -= distancia.current.offsetWidth;
  }
  function clickRight(e) {
    distancia.current.scrollLeft += distancia.current.offsetWidth;
  }

  return (
    <div className="containerTotal">
      <h2>VAMOS VER SE VAI DAR BOM</h2>
      <button id="left" onClick={clickLeft}>
        <img src="./img/seta-neon-azul.png" alt="seta" />
      </button>
      <button id="rigth" onClick={clickRight}>
        {" "}
        <img src="./img/seta-neon-azul.png" alt="seta" />
      </button>
      <div className="slides" ref={distancia}>
        <div className="slide1 slide-First">
          <div>
            <h1>IMAGINE ?</h1>
          <span id="circle"></span>
            <p>
                Image ter uma máquina dessas. Um Mazda RX-Vision!<br />
                Contendo 1.200 cv, motor v8 e fazendo de 0 a 200km/h em 3 segundos. 

            </p>
          </div>
          <div>
            <h1>Mazda RX-Vision GT3</h1>
            <img src="./img/rx-car-1-pn.png"alt="carro" />
            <img id="carSom" src="./img/rx-car-1-pn.png"alt="carro" />
          </div>
        </div>

        <div id="second" className="slide1 slide-Second">
          <h1>IMAGINED ??</h1>
          <p>
            TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE
            TESTE TESTE TESTE TESTETESTE TESTE TESTE TESTE TESTE TESTE TESTE
            TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE
          </p>
          <img src="./img/rx-car-back.jpg" alt="carro" />
        </div>
        <div className="slide1 slide-Three">
          <div>
            <h1>IMAGINED ??</h1>
            <p>
              TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE
              TESTE TESTE TESTE TESTETESTE TESTE TESTE TESTE TESTE TESTE TESTE
              TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE
            </p>
          </div>
          <div>
            <img src="./img/rx-car-dentro.jpg" alt="carro" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
