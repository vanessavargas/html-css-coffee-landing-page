import React from "react";

import Card from "./Card";
import { getCards } from "./getCards";

export default function ListCards() {
  return (
      <div className="container-externo">
        <section>
          <div className="flex-container" id="metodos">
            <div>
              <h2>Métodos de Preparo</h2>
            </div>

            <div className="list-metodos">
            {getCards.map((item, index) => (
            <Card indice={index} key={index}/>))}
                          
            </div>
          </div>
        </section>
      </div>
    )
}