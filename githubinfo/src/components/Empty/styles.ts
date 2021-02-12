import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const Message = styled.h4`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  width: 400px;

  @media (max-width: 500px) {
    font-size: 16px;
    width: 350px;
  }
`;
