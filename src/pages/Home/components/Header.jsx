import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Header() {
    return (
      <div className="flex-container menu header">
        <div><h1>Amor ao Café</h1></div>
        {/* 
        <ReactAudioPlayer
          src="assets/vitao-cafe.mp3"
          autoPlay loop controls>
          Seu Browser não tem suporte para a execução de áudio
        </ReactAudioPlayer>
        */}
        
        <ul className="list-items">
          <li><a href="#tipos-cafe">Tipos</a></li>
          <li><a href="#metodos">Preparo</a></li>
          <li><a href="#curiosidade">Curiosidades</a></li>
        </ul>
      </div>
    )
}