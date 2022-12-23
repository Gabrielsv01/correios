// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const Background = styled.div`
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const Empty = styled.div`
  width: 55vw;
  height: 100vh;
  display: flex;
`;

export const CurveContainer = styled.div`
  height: 100vh;
  width: 45vw;
`;

export const Curve = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  flex-direction: column;
  display: flex;
  align-items: flex-end;
`;

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
  width: 50%;
  #MyPicture {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin-top: 25%;
  }
  h1 {
    font-family: 'Open Sans', sans-serif;
    color: #707070;
    font-size: 33px;
    margin-bottom: 0;
    margin-top: 13px;
  }
  #Nickname {
    font-family: 'Open Sans', sans-serif;
    color: #707070;
    font-size: 20px;
    margin-top: 8px;
  }
`;

export const SocialNetworking = styled.div`
  display: flex;
  #Instagram {
    margin-left: 8px;
    width: 25px;
  }
  #GitHub {
    margin-right: 8px;
    width: 25px;
  }
`;

export const ProjectButton = styled.button`
  background-color: #0e62d4;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #707070;
  border-radius: 25px;
  width: 170px;
  height: 40px;
  #Work {
    font-family: 'Open Sans', sans-serif;
    color: #ffff;
    font-size: 20px;
    margin-top: 0;
    text-decoration: none;
  }
`;

export const Phaser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 400px;
  height: 300px;
  margin-right: 20px;

  #Phaser {
    color: #000000;
    font-family: 'Dancing Script', cursive;
    line-height: 30px;
    font-size: 22px;
    padding-left: 20px;
    margin-bottom: 0;
    margin-top: 10px;
  }
  #Author {
    color: #707070;
    font-family: 'Dancing Script', cursive;
    line-height: 30px;
    font-size: 22px;
    padding-left: 20px;
    margin-top: 0;
    margin-right: 20px;
  }
`;
