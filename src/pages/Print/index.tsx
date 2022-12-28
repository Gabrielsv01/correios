import React from 'react';

import {useLocation, useNavigate} from 'react-router-dom';

import * as S from './styles';

const Print: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Title>Autorização</S.Title>
      <S.Text>
        Autorizo <b>{location.state.userRemoverOrder.name}</b>, RG nº{' '}
        <b>{location.state.userRemoverOrder.rg}</b>, CPF nº{' '}
        <b>{location.state.userRemoverOrder.cpf}</b>, a retirar o objeto nº{' '}
        <b>{location.state.order.code}</b> postado por{' '}
        <b>{location.state.order.sender}</b> e a mim destinado.
      </S.Text>
      <S.TextLocate>Local e data</S.TextLocate>
      <S.Locate>
        {location.state.userRemoverOrder.locate}, {location.state.date.day} de{' '}
        {location.state.date.month} de {location.state.date.year}
      </S.Locate>
      <S.Line />
      <S.TextLineWrapper>
        <S.TextLine>Nome: {location.state.userSubmitted.name}</S.TextLine>
        <S.TextLine>RG: {location.state.userSubmitted.rg}</S.TextLine>
        <S.TextLine>CPF: {location.state.userSubmitted.cpf}</S.TextLine>
      </S.TextLineWrapper>

      <S.Button
        onClick={() => {
          navigate('/', {state: location.state});
        }}>
        Voltar
      </S.Button>
      <S.Button
        onClick={() => {
          window.print();
        }}>
        Imprimir
      </S.Button>
    </S.Container>
  );
};

export default Print;
