import styled from "styled-components";

export const ClimaContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 30%, #1e40af 80%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  /* Mobile - 360x800, 390x844, 412x1040 */
  @media (max-width: 480px) {
    padding: 15px 10px;
    min-height: 100vh;
  }

  /* Tablet - 768x1024, 800x1280 */
  @media (min-width: 481px) and (max-width: 1024px) {
    padding: 30px 20px;
  }

  /* Desktop - 1366x720, 1440x846, 1920x832 */
  @media (min-width: 1025px) {
    padding: 40px;
    justify-content: flex-start;
    padding-top: 60px;
  }
`;

export const Titulo = styled.h1`
  color: #ffffff;
  font-size: 2.2rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;

  /* Mobile */
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 25px;
    padding: 0 10px;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 1024px) {
    font-size: 2.4rem;
    margin-bottom: 35px;
  }

  /* Desktop */
  @media (min-width: 1025px) {
    font-size: 2.6rem;
    margin-bottom: 40px;
  }
`;

export const InputCidade = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
`;

export const BotaoBuscar = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #005c99;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0070b3;
  }
`;

export const InfoClima = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
`;

export const PrevisaoContainer = styled.div`
  margin-top: 30px;

  h4 {
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
  }
`;