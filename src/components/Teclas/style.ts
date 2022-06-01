import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: #e09d1f;
    color: #ffffff;
    transition: all 1500ms ease;

    &:hover {
      background-color: #8c5f0b;

    }
  }
`;
