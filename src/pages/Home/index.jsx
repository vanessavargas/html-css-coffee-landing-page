import React from "react";
import Footer from "./components/Footer";

import Header from './components/Header';
import ListCards from "./components/ListCards";

import Colheres from "./assets/img/tipos.png";
import Xicara from "./assets/img/cafe.png";

export default function Home() {
    return (
      <div className="App">
      <Header />
      <main>
      <section>
        <div className="flex-container apresentacao">
          <div className="text-apresentacao">
            <h1>O Café</h1>
            <p>
              O café é uma bebida produzida a partir dos grãos torrados do fruto
              do cafeeiro. É servido tradicionalmente quente, mas também pode
              ser consumido gelado. O café é um estimulante, por possuir cafeína
              — geralmente 80 a 140 mg para cada 207 ml dependendo do método de
              preparação.
            </p>
            <p><em>Fonte: Wikipédia</em></p>
            <a
              href="https://pt.wikipedia.org/wiki/Caf%C3%A9"
              target="_blank"
              className="btn"
              >Saiba Mais!</a
            >
          </div>

          <div>
            <div>
              <img src={Xicara} alt="xícara de café" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex-container" id="tipos-cafe">
          <div>
            <h2>Tipos de café</h2>
            <p>
              Existem cerca de 124 espécies de cafés no mundo, mas Coffea
              arabica e Coffea canephora, essa conhecida como robusta (no
              Brasil, conilon), são as mais produzidas, representando, em 2019,
              aproximadamente 70 e 30% da produção nacional, respectivamente.
            </p>
            <p>
              <em>Fonte: Revista Campo e Negócio</em>
            </p>
            <a
              href="https://revistacampoenegocios.com.br/variedades-de-cafe-cultivadas-no-brasil-e-no-mundo/"
              target="_blank"
              className="btn"
              >Saiba Mais</a
            >
          </div>

          <div>
            <img src={Colheres} alt="colheres de café" />
          </div>
        </div>
      </section>
  
     <ListCards />

      <section>
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
      </section>
    </main>
    <Footer/>
    </div>
    )
    
}