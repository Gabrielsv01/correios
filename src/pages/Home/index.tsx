import React, {useEffect, useState} from 'react';

import logo from 'assets/logo.png';
import DatePicker from 'react-date-picker';
import {useLocation, useNavigate} from 'react-router-dom';

import * as S from './styles';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [startDate, setStartDate] = useState<Date>();
  const [code, setCode] = useState('');
  const [sender, setSender] = useState('');
  const [userSubmittedCPF, setUserSubmittedCPF] = useState<string>('');
  const [userSubmittedRG, setUserSubmittedRG] = useState<string>('');
  const [userSubmittedName, setUserSubmittedName] = useState<string>('');

  const [userRemoverOrderCPF, setUserRemoverOrderCPF] = useState<string>('');
  const [userRemoverOrderRG, setUserRemoverOrderRG] = useState<string>('');
  const [userRemoverOrderLocate, setUserRemoverOrderLocate] =
    useState<string>('');
  const [userRemoverOrderName, setUserRemoverOrderName] = useState('');

  const handleSubmit = (e: {preventDefault: () => void}) => {
    e.preventDefault();

    const dataPrint = {
      order: {
        code: code.toLocaleUpperCase(),
        sender,
      },
      userSubmitted: {
        name: userSubmittedName.toLocaleUpperCase(),
        cpf: userSubmittedCPF,
        rg: userSubmittedRG,
      },
      userRemoverOrder: {
        name: userRemoverOrderName.toLocaleUpperCase(),
        locate: userRemoverOrderLocate,
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

  useEffect(() => {
    if (location.state) {
      const data = location.state;
      setCode(data.order.code);
      setSender(data.order.sender);
      setUserSubmittedCPF(data.userSubmitted.cpf);
      setUserSubmittedRG(data.userSubmitted.rg);
      setUserSubmittedName(data.userSubmitted.name);
      setUserRemoverOrderName(data.userRemoverOrder.name);
      setUserRemoverOrderLocate(data.userRemoverOrder.locate);
      setUserRemoverOrderCPF(data.userRemoverOrder.cpf);
      setUserRemoverOrderRG(data.userRemoverOrder.rg);
      setStartDate(new Date());
    }
  }, [location.state]);

  return (
    <S.Background onSubmit={handleSubmit}>
      <S.ImageWrapper>
        <S.Image src={logo} alt="Logo" />
      </S.ImageWrapper>
      <S.Card>
        <S.Title>Encomenda</S.Title>
        <S.InputCustom
          required
          type="text"
          mask=""
          placeholder="Codigo de rastreio"
          value={code}
          onChange={value => setCode(value.target.value)}
        />
        <S.InputCustom
          type="text"
          required
          mask=""
          placeholder="Quem enviou?"
          value={sender}
          onChange={value => setSender(value.target.value)}
        />
      </S.Card>
      <S.Card>
        <S.Title>Quem vai retirar?</S.Title>
        <S.InputCustom
          type="text"
          required
          placeholder="Nome"
          mask=""
          value={userRemoverOrderName}
          onChange={value => setUserRemoverOrderName(value.target.value)}
        />
        <S.InputCustom
          type="numeric"
          required
          placeholder="CPF"
          mask="999.999.999-99"
          value={userRemoverOrderCPF}
          onChange={value => setUserRemoverOrderCPF(value.target.value)}
        />
        <S.InputCustom
          type="numeric"
          required
          placeholder="RG"
          mask="9.999.999-9"
          value={userRemoverOrderRG}
          onChange={value => setUserRemoverOrderRG(value.target.value)}
        />
        <S.InputCustom
          type="text"
          required
          mask=""
          placeholder="Local de retirada"
          value={userRemoverOrderLocate}
          onChange={value => setUserRemoverOrderLocate(value.target.value)}
        />
        <S.SubTitle>Quando?</S.SubTitle>
        <DatePicker required onChange={setStartDate} value={startDate} />
      </S.Card>
      <S.Card>
        <S.Title>Para quem foi enviado?</S.Title>
        <S.InputCustom
          type="text"
          required
          mask=""
          placeholder="Nome"
          value={userSubmittedName === '' ? undefined : userSubmittedName}
          onChange={value => setUserSubmittedName(value.target.value)}
        />
        <S.InputCustom
          type="numeric"
          required
          mask="999.999.999-99"
          placeholder="CPF"
          value={userSubmittedCPF}
          onChange={value => setUserSubmittedCPF(value.target.value)}
        />
        <S.InputCustom
          type="numeric"
          required
          placeholder="RG"
          mask="9.999.999-9"
          value={userSubmittedRG}
          onChange={value => setUserSubmittedRG(value.target.value)}
        />
      </S.Card>
      <S.Button type="submit">Gerar Autorização</S.Button>
    </S.Background>
  );
};

export default Home;
