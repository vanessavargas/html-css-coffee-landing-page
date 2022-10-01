import React from "react";

export default function Header() {
    return (
      <div className="flex-container menu">
        <div><h1>Amor ao Café</h1></div>
        <audio src="assets/vitao-cafe.mp3" autoplay loop controls>
          Seu Browser não tem suporte para a execução de áudio
        </audio>
        <ul className="list-items">
          <li><a href="#tipos-cafe">Tipos</a></li>
          <li><a href="#metodos">Preparo</a></li>
          <li><a href="#curiosidade">Curiosidades</a></li>
        </ul>
      </div>
    )
}