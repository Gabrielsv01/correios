import InputMask from 'react-input-mask';
import styled from 'styled-components';
import media from 'theme/media';
import {theme} from 'theme/variables';

export const Title = styled.h1`
  color: ${theme.colors.white};
`;

export const Background = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xxlarge}px;
`;

export const Card = styled.div`
  margin-bottom: ${theme.spacing.medium}px;
  background: ${theme.colors.secunday};
  border-radius: ${theme.border.radius.small}px;
  padding: ${theme.spacing.medium}px ${theme.spacing.medium}px
    ${theme.spacing.large}px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.mobile`
  width: 80%;
  `}
`;

export const Input = styled.input`
  border-width: ${theme.border.width.large}px;
  border-radius: ${theme.border.radius.xsmall}px;
  height: 40px;
  padding: ${theme.spacing.zero} ${theme.spacing.large}px;
  width: 70%;
  margin-top: ${theme.spacing.medium}px;
`;

export const InputCustom = styled(InputMask)`
  border-width: ${theme.border.width.large}px;
  border-radius: ${theme.border.radius.xsmall}px;
  height: 40px;
  padding: ${theme.spacing.zero} ${theme.spacing.large}px;
  width: 70%;
  margin-top: ${theme.spacing.medium}px;
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;
  background: ${theme.colors.secunday};
  border-radius: ${theme.border.radius.xsmall}px;
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.bold};
  margin: ${theme.spacing.xsmall}px;
  transition: background-color 0.2s;
  font-size: ${theme.fontSize.large}px;
  &:hover {
    background: ${theme.colors.secundayDark};
  }
`;

export const SubTitle = styled.h2`
  margin-top: ${theme.spacing.xsmall}px;
  color: ${theme.colors.white};
`;
