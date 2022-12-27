// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import media from 'theme/media';

// eslint-disable-next-line import-helpers/order-imports
import InputMask from 'react-input-mask';

export const Title = styled.h1`
  color: #fff;
`;

export const Background = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const Card = styled.div`
  margin-bottom: 20px;
  background: #016098;
  border-radius: 8px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 20px 20px 35px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.mobile`
  width: 80%;
  `}
`;

export const Input = styled.input`
  border-width: 3px;
  border-radius: 5px;
  height: 40px;
  padding: 0 24px;
  width: 70%;
  margin-top: 20px;
  color: 'red';
`;

export const InputCustom = styled(InputMask)`
  border-width: 3px;
  border-radius: 5px;
  height: 40px;
  padding: 0 24px;
  width: 70%;
  margin-top: 20px;
  color: 'red';
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
  &:hover {
    background: #064875;
  }
`;

export const SubTitle = styled.h2`
  margin-top: 10px;
  color: #fff;
`;
