import { PrevisaoContainer } from "./PrevisaoStyles";

const Previsao = ({ previsoes }) => {
  return (
    <PrevisaoContainer>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        {previsoes.map((previsao, index) => (
          <li key={index}>
            <img
              src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
              alt={previsao.weather[0].description}
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