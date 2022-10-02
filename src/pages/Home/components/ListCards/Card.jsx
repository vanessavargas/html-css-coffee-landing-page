import React from "react";
import { getCards } from "./getCards";

export default function Card(props) {
  const indice = props.indice;
  const item = getCards [indice];  
  
  return (
        <div className="item-metodos">
                <div className="img-metodos">
                  <img
                    src= {item.image}
                    alt="metodo de preparo de café"
                  />
                </div>
                <p>{item.title}</p>
                <a href="#openModal1">Como funciona?</a>

                <div id="openModal1" className="modalDialog">
                  <div>
                    <a href="#close" title="Close" className="close">X</a>
                    <h3 className="text-modal">{item.titleModal}</h3>
                    <p className="text-modal">{item.textModal}</p>
                  </div>
                </div>
              </div>
    )
}