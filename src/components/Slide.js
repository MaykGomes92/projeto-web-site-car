import React from "react";

const Slide = () => {
  // const [ativo, setAtivo] = React.useState(false)

  // function clickLeft(e) {
  //   setAtivo(!ativo)
  //   distancia.current.scrollLeft -= distancia.current.offsetWidth;
  //   if(ativo){
  //     teste()
  //   }
  // }

  // let imgCar1 = document.querySelector('.car1')
  // let circle2 = document.querySelector('.circle2')
  // let imgCar2 = document.querySelector('.car2')

  // function clickRight(e) {
  //   setAtivo(!ativo)
  //   distancia.current.scrollLeft += distancia.current.offsetWidth;
  //   if(ativo){
  //     teste()
  //   }
  // }

  let car2 = document.querySelector('.car2')
  const distancia = React.useRef(null);
  React.useEffect(
    (e) => {
      // try {
      //   teste()
      // } catch{
      //   console.log('')
      // }
      setInterval(() => {
        distancia.current.scrollLeft += 1920;
      }, 10000);
      setInterval(() => {
        distancia.current.scrollLeft = 0;
      }, 30000);
    },
    [distancia]
  );

  return (
    <div className="containerTotal">
      <div className="slides" ref={distancia}>
        <div className="slide1 slide-First">
          <div>
            <h1>IMAGINE ?</h1>
            <span id="circle"></span>
            <p>
              Image ter uma máquina dessas. Um Mazda RX-Vision!
              <br />
              Contendo 1.200 cv, motor v8 e fazendo de 0 a 200km/h em 3
              segundos.
            </p>
          </div>
          <div>
            <h1>Mazda RX-Vision GT3</h1>
            <img className="car1" src="./img/rx-car-1-pn.png" alt="carro" />
            <img id="carSom" src="./img/rx-car-1-pn.png" alt="carro" />
          </div>
        </div>

        <div id="second" className="slide1 slide-Second">
          <div>
            <h1>IMAGINED ??</h1>
            <span className="circle2"></span>
            <p>
              TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE
              TESTE TESTE TESTE TESTETESTE TESTE TESTE TESTE TESTE TESTE TESTE
              TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE
            </p>
          </div>
          <div>
            <img className="car2" src="./img/rx-car-1-pn.png" alt="carro" />
            <img id="carSom2" src="./img/rx-car-1-pn.png" alt="carro" />
          </div>
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
