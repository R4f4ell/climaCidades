import "./busca.scss";
import { srOnlyProps } from "../../utils/a11y";

const Busca = ({ cidade, setCidade, buscarClima }) => {
  const handleBuscar = () => {
    if (!cidade.trim()) return;
    buscarClima();
  };

  return (
    <div className="busca" aria-label="Seção de busca por cidade">
      <label htmlFor="cidade" {...srOnlyProps()}>
        Digite o nome da cidade
      </label>

      <input
        id="cidade"
        name="cidade"
        type="text"
        inputMode="text"
        autoComplete="on"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Digite uma cidade"
        aria-label="Campo de busca de cidade"
        className="busca__input"
      />

      <button
        type="button"
        onClick={handleBuscar}
        aria-label="Botão para buscar clima da cidade"
        className="busca__botao"
      >
        Buscar
      </button>
    </div>
  );
};

export default Busca;