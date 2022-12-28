import styled from 'styled-components';
import media from 'theme/media';
import {theme} from 'theme/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.zero}px 100px;

  ${media.mobile`
    padding: ${theme.spacing.xsmall}px ${theme.spacing.small}px;
    height: 100vh;
  `}

  ${media.print`
    padding: ${theme.spacing.zero}px ${theme.spacing.huge}px;
  `}
`;

export const Title = styled.h1`
  color: ${theme.colors.black};
  text-transform: uppercase;
  margin-top: 100px;
  margin-bottom: 100px;

  ${media.mobile`
    margin-top: ${theme.spacing.xxxlarge}px;
    margin-bottom: ${theme.spacing.medium}px;
  `}

  ${media.print`
    margin-top: 100px;
    margin-bottom: 100px;
  `}
`;

export const Text = styled.p`
  color: ${theme.colors.black};
  line-height: 30px;
`;

export const TextLocate = styled.p`
  color: ${theme.colors.black};
  align-self: flex-end;
  margin-top: 90px;

  ${media.mobile`
    margin-top: ${theme.spacing.xxlarge}px;
  `}

  ${media.print`
    margin-top: 120px;
  `}
`;

export const Locate = styled.p`
  color: ${theme.colors.black};
  align-self: flex-end;
  margin-top: ${theme.spacing.xxhuge}px;

  ${media.mobile`
    margin-top: ${theme.spacing.xxlarge}px;
  `}

  ${media.print`
    margin-top: ${theme.spacing.xxxlarge}px;
  `}
`;

export const Line = styled.div`
  margin-top: ${theme.spacing.xhuge}px;
  align-self: flex-end;
  height: ${theme.border.width.medium}px;
  background-color: ${theme.colors.black};
  width: 50%;

  ${media.mobile`
    height: ${theme.border.width.medium}px;
    background-color: ${theme.colors.black};
    width: 85%;
    -webkit-print-color-adjust: exact; 
  `}

  ${media.print`
    height: ${theme.border.width.medium}px;
    background-color: ${theme.colors.black};
    width: 50%;
    -webkit-print-color-adjust: exact; 
  `}
`;

export const TextLine = styled.p`
  align-self: flex-start;
  text-transform: uppercase;
`;

export const TextLineWrapper = styled.div`
  margin-top: ${theme.spacing.large}px;
  padding-right: 25%;
  align-self: flex-end;
  font-weight: ${theme.fontWeight.bold};
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;
  background: ${theme.colors.secunday};
  border-radius: ${theme.border.width.huge}px;
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.bold};
  margin: ${theme.spacing.xsmall}px;
  transition: background-color 0.2s;
  font-size: 20px;

  ${media.print`
    display: none;
  `}

  &:hover {
    background: ${theme.colors.secundayDark};
  }
`;
