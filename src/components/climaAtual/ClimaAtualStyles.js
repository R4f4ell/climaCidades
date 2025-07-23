import styled from "styled-components";

export const ClimaInfo = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.19);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 25px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.12);
  width: 100%;
  max-width: 400px;
  transition: all 0.3s ease;

  h3 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #ffffff;
    font-weight: 400;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: 0.5px;
  }

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 15px;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }

  p {
    margin-bottom: 8px;
    color: #ffffff;
    font-weight: 300;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

    &:first-of-type {
      font-size: 2.5rem;
      font-weight: 200;
      margin-bottom: 10px;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    &:last-of-type {
      font-size: 1.3rem;
      opacity: 0.9;
      text-transform: capitalize;
      margin-bottom: 0;
    }
  }

  /* Mobile - 360x800, 390x844, 412x1040 */
  @media (max-width: 480px) {
    padding: 25px 20px;
    margin-bottom: 20px;
    border-radius: 16px;
    max-width: 70%;

    h3 {
      margin-bottom: 12px;
    }

    img {
      width: 80px;
      height: 80px;
      margin-bottom: 12px;
    }

    p {
      margin-bottom: 6px;

      &:first-of-type {
        font-size: 2.2rem;
        margin-bottom: 8px;
      }
    }
  }

  /* Tablet - 768x1024, 800x1280 */
  @media (min-width: 481px) and (max-width: 1024px) {
    padding: 35px;
    max-width: 450px;
    margin-bottom: 30px;

    h3 {
      margin-bottom: 18px;
    }

    img {
      width: 110px;
      height: 110px;
      margin-bottom: 18px;
    }

    p {
      margin-bottom: 10px;

      &:first-of-type {
        font-size: 2.8rem;
        margin-bottom: 12px;
      }
    }
  }

  /* Desktop - 1366x720, 1440x846, 1920x832 */
  @media (min-width: 1025px) {
    padding: 35px 40px;
    max-width: 420px;
    margin-bottom: 30px;

    h3 {
      margin-bottom: 16px;
    }

    img {
      width: 105px;
      height: 105px;
      margin-bottom: 16px;
    }

    p {
      margin-bottom: 9px;

      &:first-of-type {
        font-size: 2.6rem;
        margin-bottom: 11px;
      }
    }
  }
`;