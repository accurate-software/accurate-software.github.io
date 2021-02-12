import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;

  display: flex;
  position: relative;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;

  padding: 10px;
  margin: 0;

  width: 100%;
  height: auto;
  background-color: #74b9ff;

  color: #fff;
  font-weight: bold;
`;

export const LoginContainer = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  width: calc(100% - 10px);
`;

export const Logo = styled.img`
  width: 75px;
  height: 75px;

  margin-top: 10px;
`;

export const Text = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;
