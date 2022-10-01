import React from "react";

import Ebulicao from "../assets/img/ebulicao.png";
import Filtragem from "../assets/img/filtragem.png";
import Infusao from "../assets/img/infusao.png";
import Expresso from "../assets/img/expresso.png";

export default function ListCards() {
    return (
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
                    src= { Ebulicao }
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
                    src= { Filtragem }
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
                    src= { Infusao }
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
                    src= { Expresso }
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
    )
}