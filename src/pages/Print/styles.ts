import styled from 'styled-components';
import media from 'theme/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 0px 100px;

  ${media.mobile`
    padding: 10px 15px;
    height: 100vh;
  `}

  ${media.print`
    padding: 0px 60px;
  `}
`;

export const Title = styled.h1`
  color: black;
  text-transform: uppercase;
  margin-top: 100px;
  margin-bottom: 100px;

  ${media.mobile`
    margin-top: 50px;
    margin-bottom: 20px;
  `}

  ${media.print`
    margin-top: 100px;
    margin-bottom: 100px;
  `}
`;

export const Text = styled.p`
  color: black;
  line-height: 30px;
`;

export const TextLocate = styled.p`
  color: black;
  align-self: flex-end;
  margin-top: 90px;

  ${media.mobile`
    margin-top: 40px;
  `}

  ${media.print`
    margin-top: 120px;
  `}
`;

export const Locate = styled.p`
  color: black;
  align-self: flex-end;
  margin-top: 70px;

  ${media.mobile`
    margin-top: 40px;
  `}

  ${media.print`
    margin-top: 50px;
  `}
`;

export const Line = styled.p`
  margin-top: 50px;
  align-self: flex-end;
`;

export const TextLine = styled.p`
  align-self: flex-start;
  text-transform: uppercase;
`;

export const TextLineWrapper = styled.div`
  margin-top: 20px;
  padding-right: 130px;
  align-self: flex-end;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;
  background: #016098;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-weight: bold;
  margin: 10px;
  transition: background-color 0.2s;
  font-size: 20px;

  ${media.print`
    display: none;
  `}

  &:hover {
    background: #064875;
  }
`;
