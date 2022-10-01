import React from "react";
import "../../css/style.css";
import Footer from "./components/Footer";

import Header from './components/Header';

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
              <img src="assets/img/cafe.png" alt="xícara de café" />
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
            <img src="assets/img/tipos.png" alt="colheres de café" />
          </div>
        </div>
      </section>

      <div className="container-externo">
        <section>
          <div className="flex-container" id="metodos">
            <div>
              <h2>Métodos de Preparo</h2>
            </div>

            <div className="list-metodos">
              <div className="item-metodos">
                <div className="img-metodos">
                  <img
                    src="assets/img/ebulicao.png"
                    alt="metodo de preparo de cafe por ebulicao"
                  />
                </div>
                <p>Ebulição (Boiling)</p>
                <a href="#openModal1">Como funciona?</a>

                <div id="openModal1" className="modalDialog">
                  <div>
                    <a href="#close" title="Close" className="close">X</a>
                    <h3 className="text-modal">Ebulição</h3>
                    <p className="text-modal">
                      Comum na Europa, se baseia na adição do pó de café no
                      centro de um equipamento moka, que fica na chama do fogão
                      e faz com que a água da parte inferior entre em ebulição e
                      pressione o café líquido para algum recipiente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="item-metodos">
                <div className="img-metodos">
                  <img
                    src="assets/img/filtragem.png"
                    alt="metodo de preparo de cafe por filtragem"
                  />
                </div>
                <p>Filtragem (Filtration)</p>
                <a href="#openModal2">Como funciona?</a>

                <div id="openModal2" className="modalDialog">
                  <div>
                    <a href="#close" title="Close" className="close">X</a>
                    <h3 className="text-modal">Filtragem</h3>
                    <p className="text-modal">
                      Tradicional no Brasil, presente dos coadores caseiros às
                      cafeteiras elétricas, consiste na adição de água quente,
                      mas não fervente, sobre o pó de café, o qual fica
                      acondicionado em um filtro de papel ou pano.
                    </p>
                  </div>
                </div>
              </div>

              <div className="item-metodos">
                <div className="img-metodos">
                  <img
                    src="assets/img/infusao.png"
                    alt="metodo de preparo de cafe por infusao"
                  />
                </div>
                <p>Infusão (Steeping)</p>
                <a href="#openModal3">Como funciona?</a>

                <div id="openModal3" className="modalDialog">
                  <div>
                    <a href="#close" title="Close" className="close">X</a>
                    <h3 className="text-modal">Infusão</h3>
                    <p className="text-modal">
                      Feito em recipientes com o café já misturado com água
                      quente (mas não fervente), introduz-se um filtro para
                      separar o pó de café da bebida pronta. O mais popular é a
                      Prensa Francesa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="item-metodos">
                <div className="img-metodos">
                  <img
                    src="assets/img/expresso.png"
                    alt="metodo de preparo de cafe por pressao"
                  />
                </div>
                <p>Pressão (Pressure)</p>
                <a href="#openModal4">Como funciona?</a>

                <div id="openModal4" className="modalDialog">
                  <div>
                    <a href="#close" title="Close" className="close">X</a>
                    <h3 className="text-modal">Pressão</h3>
                    <p className="text-modal">
                      Popularmente chamado de café expresso, os grãos torrados
                      são moídos na hora e o pó é colocado em um filtro com
                      pressão de água a 90º C e 9kg de pressão por
                      aproximadamente 30 segundos, o que resulta em uma bebida
                      aromática e bem cremosa. É tido por muitos como o melhor
                      dos tipos de preparo de café.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

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