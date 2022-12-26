import React, {useState} from 'react';

import DatePicker from 'react-date-picker';
import {useNavigate} from 'react-router-dom';

import './style.css';
import {OrderProps} from './types';

import * as S from './styles';

const Home = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [order, setOrder] = useState<OrderProps>({code: '', sender: ''});
  const [userSubmitted, setUserSubmitted] = useState({
    name: '',
    cpf: '',
    rg: '',
  });
  const [userRemoverOrder, setUserRemoverOrder] = useState({
    name: '',
    cpf: '',
    rg: '',
  });

  return (
    <S.Background>
      <S.Card>
        <S.Title>Encomenda</S.Title>
        <S.Input
          type="text"
          placeholder="Codigo de rastreio"
          onChange={value => {
            order.code = value.target.value;
            setOrder(order);
          }}
        />
        <S.Input
          type="text"
          placeholder="Quem enviou?"
          onChange={value => {
            order.sender = value.target.value;
            setOrder(order);
          }}
        />
      </S.Card>
      <S.Card>
        <S.Title>Quem vai retirar?</S.Title>
        <S.Input
          type="text"
          placeholder="Nome"
          onChange={value => {
            userRemoverOrder.name = value.target.value;
            setUserRemoverOrder(userRemoverOrder);
          }}
        />
        <S.Input
          type="text"
          placeholder="CPF"
          onChange={value => {
            userRemoverOrder.cpf = value.target.value;
            setUserRemoverOrder(userRemoverOrder);
          }}
        />
        <S.Input
          type="text"
          placeholder="RG"
          onChange={value => {
            userRemoverOrder.rg = value.target.value;
            setUserRemoverOrder(userRemoverOrder);
          }}
        />
        <S.SubTitle>Quando?</S.SubTitle>
        <DatePicker onChange={setStartDate} value={startDate} />
      </S.Card>
      <S.Card>
        <S.Title>Para quem foi enviado?</S.Title>
        <S.Input
          type="text"
          placeholder="Nome"
          onChange={value => {
            userSubmitted.name = value.target.value;
            setUserSubmitted(userSubmitted);
          }}
        />
        <S.Input
          type="text"
          placeholder="CPF"
          onChange={value => {
            userSubmitted.cpf = value.target.value;
            setUserSubmitted(userSubmitted);
          }}
        />
        <S.Input
          type="text"
          placeholder="RG"
          onChange={value => {
            userSubmitted.rg = value.target.value;
            setUserSubmitted(userSubmitted);
          }}
        />
      </S.Card>
      <S.Button
        onClick={() => {
          const dataPrint = {
            order,
            userSubmitted,
            userRemoverOrder,
          };
          navigate('/print', {state: dataPrint});
        }}>
        Gerar Autorização
      </S.Button>
    </S.Background>
  );
};

export default Home;
