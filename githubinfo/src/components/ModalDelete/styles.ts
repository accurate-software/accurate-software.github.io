import styled from 'styled-components';

export const Title = styled.h4`
  text-align: center;
  color: #74b9ff;

  font-weight: bold;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 10px;
`;

export const Button = styled.button`
  color: #fff;
  padding: 10px;
  background-color: ${(props) => props.color};

  border-color: ${(props) => props.color};
  border: 1px solid transparent;

  border-radius: 0.25rem;

  margin-left: 10px;

  &:hover {
    opacity: 0.7;
  }

  cursor: pointer;
`;

export const Input = styled.input`
  padding: 10px;

  text-align: center;

  font-size: 16px;

  border-radius: 5px;
`;
