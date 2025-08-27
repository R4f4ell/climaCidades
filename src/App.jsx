import React, { useState, useEffect } from "react";
import axios from "axios";

import ClimaAtual from "./components/climaAtual/ClimaAtual";
import Previsao from "./components/previsao/Previsao";
import Busca from "./components/busca/Busca";

import useGeolocation from "./hooks/useGeolocation";
import "./app.scss";

const App = () => {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY || "";
  const { coords } = useGeolocation(); 

  useEffect(() => {
    if (!coords) return;
    const { latitude, longitude } = coords;

    const fetchByCoords = async () => {
      try {
        const resposta = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=pt_br`
        );
        setClima(resposta.data);
      } catch (erro) {
        console.error("Erro ao obter clima por geolocalização:", erro);
      }
    };

    fetchByCoords();
  }, [coords, apiKey]);

  const buscarClima = async () => {
    try {
      const respostaClima = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      if (respostaClima?.data?.name) {
        const respostaPrevisao = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
        );

        setClima(respostaClima.data);
        setPrevisao(respostaPrevisao.data.list.slice(0, 5));
      }
    } catch (error) {
      console.error("Erro ao buscar dados do clima:", error);
    }
  };

  return (
    <main>
      <section className="app">
        <h1 className="app__title">Condições Climáticas</h1>

        {/* Início da seção de busca */}
        <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />

        {clima && <ClimaAtual clima={clima} />}
        {previsao.length > 0 && <Previsao previsoes={previsao} />}
      </section>
    </main>
  );
};

export default App;