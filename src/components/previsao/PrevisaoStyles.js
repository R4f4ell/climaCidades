import styled from "styled-components";

export const PrevisaoContainer = styled.div`
  margin-top: 25px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 100%;
  max-width: 600px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  h4 {
    text-align: center;
    margin-bottom: 20px;
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 400;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: 0.3px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 18px;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #ffffff;
      font-weight: 300;
      transition: all 0.3s ease;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

      &:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateX(4px);
        border-color: rgba(255, 255, 255, 0.2);
      }

      img {
        width: 50px;
        height: 50px;
        margin-right: 15px;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        transition: transform 0.3s ease;
        flex-shrink: 0;

        &:hover {
          transform: scale(1.1);
        }
      }

      .info-text {
        flex: 1;
        font-size: 1rem;
        text-transform: capitalize;
        
        .temperature {
          font-weight: 400;
          font-size: 1.1rem;
        }
      }
    }
  }

  /* Mobile - 360x800, 390x844, 412x1040 */
  @media (max-width: 480px) {
    padding: 20px 15px;
    margin-top: 20px;
    border-radius: 16px;
    max-width: 85%;

    h4 {
      font-size: 1.3rem;
      margin-bottom: 15px;
    }

    ul {
      gap: 10px;

      li {
        padding: 12px 10px;
        flex-direction: row;
        text-align: left;
        border-radius: 10px;

        img {
          width: 60px;
          height: 60px;
        }

        .info-text {
          font-size: 1.2rem;
          
          .temperature {
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  /* Tablet - 768x1024, 800x1280 */
  @media (min-width: 481px) and (max-width: 1024px) {
    padding: 30px 25px;
    margin-top: 30px;
    max-width: 650px;

    h4 {
      font-size: 2rem;
      margin-bottom: 22px;
    }

    ul {
      gap: 14px;

      li {
        padding: 18px 22px;

        img {
          width: 65px;
          height: 65px;
          margin-right: 18px;
        }

        .info-text {
          font-size: 1.6rem;
          
          .temperature {
            font-size: 1.6rem;
          }
        }
      }
    }
  }

  /* Desktop - 1366x720, 1440x846, 1920x832 */
  @media (min-width: 1025px) {
    padding: 28px 30px;
    margin-top: 28px;
    max-width: 620px;

    h4 {
      font-size: 2rem;
      margin-bottom: 21px;
    }

    ul {
      gap: 13px;

      li {
        padding: 16px 20px;

        img {
          width: 70px;
          height: 70px;
          margin-right: 16px;
        }

        .info-text {
          font-size: 1.6rem;
          
          .temperature {
            font-size: 1.6rem;
          }
        }
      }
    }
  }
`;