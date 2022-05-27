import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: auto;
  margin: 0 auto;
  background-color: #dfdfdf;

  h1 {
    text-align: center;
    padding: 32px auto;
  }

  .interface {
    width: calc(100% - 24px);
    margin: 20px auto;
    display: flex;
    flex-direction: column;

    & input[type="text"] {
      width: calc(100% - 48px);
      margin: 0 auto;
    }

    & .teclas {
      width: calc(100% - 24px);
      margin: 10px auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
  }
`;
