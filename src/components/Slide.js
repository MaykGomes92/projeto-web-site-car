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

  let car2 = document.querySelector(".car2");
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
              Contendo motor rotativo de 562 cv de potência e fazendo de 0 a
              300km/h em 3 segundos. É definitivamente uma obra de arte! O novo
              "Mazda RX-Vision GT3 Concept" está chegando e você não pode ficar
              de fora.
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
            <h1>Mazda RX-Vision GT3 Concept </h1>
            <span className="circle2"></span>
            <p>
              Esse Super esportivo conta com: <br />
              Comprimento/largura/altura: 4590 mm/2075 mm/1120 mm <br />
              Eixo: 2700 mm <br/>
               Largura de banda de rodagem F/R: 1720 mm/1760 mm{" "}
              <br />
              Peso: 1250kg <br />
              Distribuição de peso dianteira/traseira 48:52 <br />
              Potência máxima: 562 BHP
            </p>
          </div>
          <div>
            <h1>De 0 a 300km/h em 3 segundos!</h1>
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
