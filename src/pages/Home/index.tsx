import React, {useState} from 'react';

import DatePicker from 'react-date-picker';
import {useNavigate} from 'react-router-dom';

import './style.css';
import {OrderProps} from './types';

import * as S from './styles';

const Home = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date>();
  const [order, setOrder] = useState<OrderProps>({code: '', sender: ''});
  const [userSubmittedCPF, setUserSubmittedCPF] = useState<string>('');
  const [userSubmittedRG, setUserSubmittedRG] = useState<string>('');
  const [userSubmittedName, setUserSubmittedName] = useState<string>('');

  const [userRemoverOrderCPF, setUserRemoverOrderCPF] = useState<string>('');
  const [userRemoverOrderRG, setUserRemoverOrderRG] = useState<string>('');
  const [userRemoverOrder, setUserRemoverOrder] = useState({
    name: '',
    locate: '',
  });
  const handleSubmit = (e: {preventDefault: () => void}) => {
    e.preventDefault();

    const dataPrint = {
      order,
      userSubmitted: {
        name: userSubmittedName.toLocaleUpperCase(),
        cpf: userSubmittedCPF,
        rg: userSubmittedRG,
      },
      userRemoverOrder: {
        name: userRemoverOrder.name.toLocaleUpperCase(),
        locate: userRemoverOrder.locate,
        cpf: userRemoverOrderCPF,
        rg: userRemoverOrderRG,
      },
      date: {
        day: startDate && startDate.getDate(),
        month:
          startDate && startDate.toLocaleDateString('pt-br', {month: 'long'}),
        year: startDate && startDate.getFullYear(),
      },
    };

    navigate('/print', {state: dataPrint});
  };
  return (
    <S.Background onSubmit={handleSubmit}>
      <S.Card>
        <S.Title>Encomenda</S.Title>
        <S.Input
          required
          type="text"
          placeholder="Codigo de rastreio"
          onChange={value => {
            order.code = value.target.value;
            setOrder(order);
          }}
        />
        <S.Input
          type="text"
          required
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
          required
          placeholder="Nome"
          onChange={value => {
            userRemoverOrder.name = value.target.value;
            setUserRemoverOrder(userRemoverOrder);
          }}
        />
        <S.InputCustom
          type="text"
          required
          placeholder="CPF"
          mask="999.999.999-99"
          value={userRemoverOrderCPF}
          onChange={value => setUserRemoverOrderCPF(value.target.value)}
        />
        <S.InputCustom
          type="text"
          required
          placeholder="RG"
          mask="99.999.999-9"
          value={userRemoverOrderRG}
          onChange={value => setUserRemoverOrderRG(value.target.value)}
        />
        <S.Input
          type="text"
          required
          placeholder="Local de retirada"
          onChange={value => {
            userRemoverOrder.locate = value.target.value;
            setUserRemoverOrder(userRemoverOrder);
          }}
        />
        <S.SubTitle>Quando?</S.SubTitle>
        <DatePicker required onChange={setStartDate} value={startDate} />
      </S.Card>
      <S.Card>
        <S.Title>Para quem foi enviado?</S.Title>
        <S.Input
          type="text"
          required
          placeholder="Nome"
          onChange={value => setUserSubmittedName(value.target.value)}
        />
        <S.InputCustom
          type="text"
          required
          mask="99.999.999-99"
          placeholder="CPF"
          value={userSubmittedCPF}
          onChange={value => setUserSubmittedCPF(value.target.value)}
        />
        <S.InputCustom
          type="text"
          required
          placeholder="RG"
          mask="99.999.999-9"
          value={userSubmittedRG}
          onChange={value => setUserSubmittedRG(value.target.value)}
        />
      </S.Card>
      <S.Button type="submit">Gerar Autorização</S.Button>
    </S.Background>
  );
};

export default Home;
