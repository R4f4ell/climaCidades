import { ClimaInfo } from "./ClimaAtualStyles";
import { getIconUrl, roundTemp, buildWeatherAlt } from "../../utils/weatherFormat";
import { hasWeatherPayload } from "../../utils/guards";

const ClimaAtual = ({ clima }) => {
  if (!hasWeatherPayload(clima)) return null;

  const { name, main, weather } = clima;
  const { temp } = main;
  const { icon, description } = weather[0];

  return (
    <ClimaInfo as="section" aria-label={`Clima atual em ${name}`}>
      <h2>{name}</h2>
      <img
        src={getIconUrl(icon)}
        alt={buildWeatherAlt(description)}
        loading="lazy"
      />
      <p aria-label={`Temperatura atual: ${roundTemp(temp)} graus Celsius`}>
        {roundTemp(temp)}°C
      </p>
      <p>{description}</p>
    </ClimaInfo>
  );
};

export default ClimaAtual;