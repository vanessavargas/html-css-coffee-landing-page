import React from "react";

import Xicara from "../../assets/img/cafe.png";

export default function Apresentacao() {
    return (
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
    )
}