import styled from "styled-components";

export const BuscaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;
  max-width: 500px;
  gap: 12px;

  /* Mobile - 360x800, 390x844, 412x1040 */
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
    max-width: 100%;
    margin-bottom: 25px;
  }

  /* Tablet - 768x1024, 800x1280 */
  @media (min-width: 481px) and (max-width: 1024px) {
    max-width: 600px;
    gap: 15px;
  }

  /* Desktop - 1366x720, 1440x846, 1920x832 */
  @media (min-width: 1025px) {
    max-width: 550px;
    margin-bottom: 35px;
  }
`;

export const InputCidade = styled.input`
  padding: 14px 18px;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  outline: none;
  flex: 1;
  transition: all 0.3s ease;
  color: #2d3436;
  
  &::placeholder {
    color: #636e72;
  }

  &:focus {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }

  /* Mobile */
  @media (max-width: 480px) {
    width: 70%;
    font-size: 18px;
    padding: 16px 18px;
    border-radius: 10px;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 1024px) {
    font-size: 20px;
    padding: 15px 20px;
  }

  /* Desktop */
  @media (min-width: 1025px) {
    font-size: 20px;
    padding: 14px 18px;
  }
`;

export const BotaoBuscar = styled.button`
  padding: 14px 24px;
  background: linear-gradient(135deg, #00b894 0%, #10b981 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 184, 148, 0.3);
  white-space: nowrap;

  &:hover {
    background: linear-gradient(135deg, #00a085 0%, #00b894 100%);
    box-shadow: 0 6px 20px rgba(0, 184, 148, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(0, 184, 148, 0.3);
  }

  /* Mobile */
  @media (max-width: 480px) {
    width: 50%;
    padding: 16px 24px;
    font-size: 18px;
    border-radius: 10px;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 1024px) {
    padding: 15px 28px;
    font-size: 20px;
  }

  /* Desktop */
  @media (min-width: 1025px) {
    padding: 14px 26px;
    font-size: 20px;
  }
`;