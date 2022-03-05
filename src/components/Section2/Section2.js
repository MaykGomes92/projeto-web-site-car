import React from "react";
import "../Section2/section2.css";

const Section2 = () => {
  const [texto, setTexto] = React.useState("Lewis Hamilton");

  const Campeoes = () => {
    if (texto === "Lewis Hamilton") {
      return (
        <div className="campeao">
          <h2>Lewis Hamilton</h2>
          <div>
            <img src="./img/lew-hem-p.png" alt="campeao" />
            <p>
              {" "}
              <strong>Lewis Carl Davidson Hamilton</strong> é um automobilista britânico. Sete
              vezes campeão mundial de Fórmula 1, nos anos de 2008, 2014, 2015,
              2017, 2018, 2019 e 2020, Hamilton é considerado um dos maiores
              pilotos de todos os tempos, e um dos desportistas mais bem
              sucedidos da história.
            </p>
          </div>
        </div>
      );
    } else if (texto === "Valtteri Bottas") {
      return (
        <div className="campeao">
          <h2>Valtteri Bottas</h2>
          <div>
            <img src="./img/vatl-bot.png" alt="campeao" />
            <p>
              {" "}
              Após trabalhar como piloto de testes, para a temporada de 2013 <strong>Valtteri Bottas</strong> foi
              confirmado como um dos pilotos titulares da equipe Williams
              substituindo Bruno Senna, que terminara a última temporada apenas
              na décima sexta posição. Em 2014, Bottas conquistou o primeiro
              pódio na categoria ao terminar o Grande Prêmio da Áustria em
              terceiro lugar. Após o Grande Prêmio da Itália equipe o
              confirmou para a temporada de 2015, juntamente com Felipe Massa.
            </p>
          </div>
        </div>
      );
    } else if (texto === "Nico Rosberg") {
      return (
        <div className="campeao">
          <h2>Nico Rosberg</h2>
          <div>
            <img src="./img/nico-ros.png" alt="campeao" />
            <p>
              {" "}
              <strong>Nico Erik Rosberg</strong> alemão que atuou na Fórmula 1 pela Williams e
              Mercedes. Foi vice-campeão por duas vezes, em 2014 e 2015. No
              início de 2003, quando tinha apenas dezessete anos de idade, Nico
              se tornou o piloto mais jovem da história a andar num carro de
              Fórmula 1. Ajudado pelos contatos do pai, o ex-campeão Keke
              Rosberg, passou sem dificuldades pelas principais categorias de
              base, conquistando inclusive o título da GP2 Series em 2005.
            </p>
          </div>
        </div>
      );
    }
  };
  

  function buttonCampeoes(nome){
    if(texto === nome){
      return 'buttonActive'
    } else {
      return null
    }
  }


  return (
    <section className="section2" id="anco-hist">
      <h1>Nossos campeões</h1>

      <div className="buttons">
        <button className={buttonCampeoes('Lewis Hamilton')} onClick={(e) => setTexto(e.target.innerText)}>
          Lewis Hamilton
        </button>
        <button className={buttonCampeoes('Valtteri Bottas')} onClick={(e) => setTexto(e.target.innerText)}>
          Valtteri Bottas
        </button>
        <button className={buttonCampeoes('Nico Rosberg')} onClick={(e) => setTexto(e.target.innerText)}>
          Nico Rosberg
        </button>
      </div>
      {texto !== "" && <Campeoes />}
    </section>
  );
};

export default Section2;
