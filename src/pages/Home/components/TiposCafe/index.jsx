import React from "react";

import Colheres from "../../assets/img/tipos.png";

export default function TiposCafe() {
    return (
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
    )
}