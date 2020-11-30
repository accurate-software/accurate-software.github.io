import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;

  display: flex;
  justify-content: center;

  width: 100%;
`;

export const ButtonRepository = styled.button`
  width: 30%;

  color: #fff;
  padding: 10px;
  background-color: #0984e3;

  border-color: #0984e3;
  border: 1px solid transparent;

  border-radius: 0.25rem;

  &:hover {
    opacity: 0.7;
  }

  cursor: pointer;
`;
