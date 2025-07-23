import { PrevisaoContainer } from "./PrevisaoStyles";

const Previsao = ({ previsoes }) => {
  return (
    <PrevisaoContainer as="section" aria-label="Previsão do tempo para as próximas horas">
      <h4>Previsão para as próximas horas</h4>
      <ul>
        {previsoes.map((previsao, index) => (
          <li
            key={index}
            aria-label={`Previsão ${index + 1}: ${previsao.main.temp} graus Celsius, ${previsao.weather[0].description}`}
          >
            <img
              src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
              alt={`Ícone representando o clima: ${previsao.weather[0].description}`}
            />
            <div className="info-text">
              <span className="temperature">{previsao.main.temp}°C</span> - {previsao.weather[0].description}
            </div>
          </li>
        ))}
      </ul>
    </PrevisaoContainer>
  );
};

export default Previsao;