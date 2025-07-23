import { BuscaContainer, InputCidade, BotaoBuscar } from "./BuscaStyles";

const Busca = ({ cidade, setCidade, buscarClima }) => {
  const handleBuscar = () => {
    if (!cidade.trim()) return;
    buscarClima();
  };

  return (
    <BuscaContainer as="section" aria-label="Seção de busca por cidade">
      <label htmlFor="cidade" style={{ display: "none" }}>
        Digite o nome da cidade
      </label>
      <InputCidade
        id="cidade"
        name="cidade"
        type="text"
        inputMode="text"
        autoComplete="on"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Digite uma cidade"
        aria-label="Campo de busca de cidade"
      />
      <BotaoBuscar
        type="button"
        onClick={handleBuscar}
        aria-label="Botão para buscar clima da cidade"
      >
        Buscar
      </BotaoBuscar>
    </BuscaContainer>
  );
};

export default Busca;
