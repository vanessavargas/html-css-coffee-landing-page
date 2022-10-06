import React from "react";

export default function Curiosidades() {
    return (
        <div className="flex-container" id="curiosidade">
          <div><h2>Curiosidades</h2></div>
          <div className="list-curiosidade">
            <div className="item-curiosidade">
              <h3>História</h3>
              <ul>
                <li>Começou a ser</li>
                <p>consumido por volta de 575 d.C.</p>
                <br />
                <li>A primeira cafeteria</li>
                <p>do mundo surgiu na Turquia, por volta de 1475</p>
              </ul>
            </div>

            <div className="item-curiosidade">
              <h3>Brasil</h3>
              <ul>
                <li>É o maior produtor</li>
                <p>
                  de café de acordo com a com a Organização Internacional do
                  Café (OIC).
                </p>
                <br />
                <li>Aumento de 35% no</li>
                <p>
                  consumo de café no Brasil durante o primeiro mês da
                  pandemia, segundo a ABIC
                </p>
              </ul>
            </div>

            <div className="item-curiosidade">
              <h3>Cultivo</h3>
              <ul>
                <li> Os cafés ‘especiais’ </li> 
                <p>têm um cuidado todo minucioso
                    desde seu plantio e são selecionados manualmente por
                    profissionais dedicados apenas a isso.</p> 
                    <br/>
                <li> É necessário esperar </li> 
                <p>de três a cinco anos para um pé de café começar a gerar frutos.</p> 
              
              </ul>
            </div>
          </div>
        </div>
    )
}