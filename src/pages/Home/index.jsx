import React from "react";

import Footer from "./components/Footer";
import Header from './components/Header';
import ListCards from "./components/ListCards";
import Apresentacao from "./components/Apresentacao";
import TiposCafe from "./components/TiposCafe";
import Curiosidades from "./components/Curiosidades";

export default function Home() {
    return (
      <div className="App">
      <Header />
      <main>
        <Apresentacao />
        <TiposCafe />
        <ListCards />
        <Curiosidades />
    </main>
    <Footer/>
    </div>
    )
    
}