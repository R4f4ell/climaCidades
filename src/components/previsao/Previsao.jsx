import "./previsao.scss";
import {
  getIconUrl,
  roundTemp,
  buildWeatherAlt,
} from "../../utils/weatherFormat";
import { hasForecastItem } from "../../utils/guards";

const Previsao = ({ previsoes }) => {
  return (
    <div
      className="previsao"
      aria-label="Previsão do tempo para as próximas horas"
    >
      <h3>Previsão para as próximas horas</h3>
      <ul>
        {previsoes.map((previsao) => {
          if (!hasForecastItem(previsao)) return null;

          const { dt, main, weather } = previsao;
          const { temp } = main;
          const { icon, description } = weather[0];

          return (
            <li
              key={dt}
              aria-label={`Previsão em ${new Date(
                dt * 1000
              ).toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              })}: ${roundTemp(temp)} graus Celsius, ${description}`}
            >
              <img
                src={getIconUrl(icon)}
                alt={buildWeatherAlt(description)}
                loading="lazy"
              />
              <div className="info-text">
                <span className="temperature">{roundTemp(temp)}°C</span> -{" "}
                {description}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Previsao;