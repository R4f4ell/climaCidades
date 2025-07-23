import { ClimaInfo } from "./ClimaAtualStyles";

const ClimaAtual = ({ clima }) => {
  return (
    <ClimaInfo as="section" aria-label={`Clima atual em ${clima.name}`}>
      <h3>{clima.name}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}
        alt={`Ícone representando o clima: ${clima.weather[0].description}`}
      />
      <p aria-label={`Temperatura atual: ${clima.main.temp} graus Celsius`}>
        {clima.main.temp}°C
      </p>
      <p>{clima.weather[0].description}</p>
    </ClimaInfo>
  );
};

export default ClimaAtual;
