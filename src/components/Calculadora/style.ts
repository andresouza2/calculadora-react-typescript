import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
  height: auto;
  margin: 100px auto;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 10px;

  h1 {
    text-align: center;
    padding: 32px auto;
  }

  .interface {
    width: calc(100% - 24px);
    margin: 20px auto;
    display: flex;
    flex-direction: column;

    .print {
      max-width: 300px;
      width: calc(90% - 48px);
      margin: 50px auto 10px;
      text-align: right;
      font-size: 2rem;
    }

    & input[type="text"] {
      width: calc(100% - 48px);
      margin: 0 auto;
    }

    & .teclas {
      width: calc(100% - 24px);
      margin: 10px auto 25px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
  }
`;
