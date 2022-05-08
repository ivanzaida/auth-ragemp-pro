import { FC } from 'react';
import styled from 'styled-components';
import { TextInput, Title, Button } from '../shared';
import { useValidatedState } from '../../hooks';
import { Validator } from '../../validators';
import { loginHandler } from '../../handlers';
import { LINKS } from '../../const';

const LoginWrapper = styled.div`
  position: absolute;
  width: 734px;
  height: 421px;
  bottom: 94px;
  right: 109px;
  background: linear-gradient(
    90deg,
    rgba(50, 50, 50, 0.76) 0%,
    rgba(93, 146, 117, 0.038) 63.68%
  );
  backdrop-filter: blur(17px);
  box-sizing: border-box;
  padding: 55px 45px;

  .problems {
    color: #8a8a8a;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    width: 470px;
    height: 54px;
    margin-bottom: 11px;
  }

  .inputs {
    input {
      margin-bottom: 7px;
    }
    margin-bottom: 35px;
  }

  button {
    width: 170px;
  }
`;

export const Login: FC = () => {
  const [login, setLogin, isLoginValid] = useValidatedState(
    '',
    Validator.isLoginValid
  );

  const [password, setPassword, isPasswordValid] = useValidatedState(
    '',
    Validator.isPasswordValid
  );

  const handleLogin = (): void => {
    if (!isLoginValid || !isPasswordValid) {
      return null;
    }
    loginHandler(login, password);
  };

  return (
    <LoginWrapper>
      <Title title="Выполните вход в аккаунт" />
      <div className="problems">
        У вас возникли проблемы с входом в аккаунт? воспользуйтесь{' '}
        <a href={LINKS.RESET_PASSWORD}>сбросом пароля</a> так же вы можете
        открыть тикет на <a href={LINKS.FORUM}>нашем форуме</a> <br /> для
        восстановления аккаунта
      </div>
      <div className="inputs">
        <TextInput
          title="Введите логин"
          value={login}
          setValue={setLogin}
          isValid={isLoginValid}
        />
        <TextInput
          title="Введите пароль"
          value={password}
          setValue={setPassword}
          isValid={isPasswordValid}
        />
      </div>
      <Button title="ПРОДОЛЖИТЬ" onClick={handleLogin} />
    </LoginWrapper>
  );
};
