import styled from 'styled-components';

export const Container = styled.div`
  width: 321px;
  height: 200px;

  box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.6);

  color: #1f1f1f;

  margin: 0 auto;

  background-color: #fff;

  border-radius: 2%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5px;

  width: 100%;
  height: 50px;

  border-bottom: 1px solid #e7e7e7;

  > div > span {
    font-weight: bold;
    font-size: 14px;
  }
`;

export const Options = styled.div`
  > img {
    cursor: pointer;
    margin-right: 10px;
  }
  /* > img + img {
    margin-left: 20px;
    margin-right: 20px;
  } */
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  font-size: 14px;
`;

export const Footer = styled.footer`
  padding-top: 5px;
  > span > span {
    font-weight: bold;
  }
`;
