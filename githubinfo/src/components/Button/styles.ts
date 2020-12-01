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
  background-color: #3498db;

  border-color: #3498db;
  border: 1px solid transparent;

  border-radius: 0.75rem;

  &:hover {
    opacity: 0.7;
  }

  cursor: pointer;

  @media (max-width: 500px) {
    width: 90%;
  }
`;
