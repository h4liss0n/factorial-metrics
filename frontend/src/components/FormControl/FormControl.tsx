import styled from "styled-components";

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: normal;
  width: 100%;
  max-width: 400px;
  padding: 10px;

  label {
    display: block;
    margin-bottom: 0.25rem;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 0.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #000303;
    border-radius: 0.25rem;
    background-color: transparent;
    color: #011410;
    font-size: 1rem;
  }
`;
