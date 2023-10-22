import styled from "styled-components";

export const Select = styled.select`
  appearance: none;
  border: 0;
  outline: 0;
  width: 20rem;
  padding: 0.5rem;
  border-radius: 0.25em;
  border: 1px solid #000303;
  cursor: pointer;
  &::-ms-expand {
    display: none;
  }
  &:focus {
    outline: none;
  }
`;
