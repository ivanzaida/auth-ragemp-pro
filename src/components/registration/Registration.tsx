import { FC } from 'react';
import styled from 'styled-components';
import { TextInput, Button, Title } from '../shared';
import { useValidatedState } from '../../hooks';
import { Validator } from '../../validators';
import { registrationHandler } from '../../handlers';
import { LINKS, PROJECT_NAME } from '../../const';

const RegistrationWrapper = styled.div`
  position: absolute;
  width: 734px;
  height: 725px;
  left: 116px;
  top: 168px;
  box-sizing: border-box;
  padding: 55px 45px;

  background: linear-gradient(
    91.02deg,
    rgba(50, 50, 50, 0.76) 0.84%,
    rgba(93, 146, 117, 0.038) 104.41%
  );
  backdrop-filter: blur(17px);

  .label {
    width: 117px;
    height: 29px;
    background: #6eca99;
    border-radius: 6px;
    color: rgba(255, 255, 255, 0.81);
    font-weight: 900;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
  }

  .project {
    font-weight: 900;
    font-size: 37.5789px;
    line-height: 47px;
    background: linear-gradient(90deg, #5d9275 0%, #70d09c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    height: 47px;
    margin-bottom: 45px;
  }

  .warning {
    color: #fff;
    height: 54px;
    margin-bottom: 11px;
  }

  .inputs {
    margin-bottom: 20px;
    input {
      margin-bottom: 7px;
    }
  }

  .disclaimer {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #8a8a8a;
    margin-bottom: 21px;
  }
`;

export const Registration: FC = () => {
  const [login, setLogin, isLoginValid] = useValidatedState(
    '',
    Validator.isLoginValid
  );

  const [password, setPassword, isPasswordValid] = useValidatedState(
    '',
    Validator.isPasswordValid
  );

  const [email, setEmail, isEmailValid] = useValidatedState(
    '',
    Validator.isEmailValid
  );

  const [repeatedPassword, setRepeatedPassword, isRepeatedPasswordValid] =
    useValidatedState('', (v) => isPasswordValid && v == password);

  const handleReg = (): void => {
    if (
      !isLoginValid ||
      !isPasswordValid ||
      !isEmailValid ||
      !isRepeatedPasswordValid
    ) {
      return null;
    }
    registrationHandler(login, email, password);
  };

  return (
    <RegistrationWrapper>
      <div className="label">GTA PROJECT</div>
      <div className="project">{PROJECT_NAME}</div>
      <Title title="Регистрация аккаунта" />
      <div className="warning">
        Регистрируя аккаунт на нашем проекте, <br />
        настоятельно рекомендуем ознакомиться с{' '}
        <a href={LINKS.PROJECT_RULES}>правилами проекта.</a>
      </div>
      <div className="inputs">
        <TextInput
          title={'Придумайте себе логин'}
          value={login}
          setValue={setLogin}
          isValid={isLoginValid}
        />
        <TextInput
          title={'Придумайте себе пароль'}
          value={password}
          setValue={setPassword}
          isValid={isPasswordValid}
        />
        <TextInput
          title={'Повторите придуманный пароль'}
          value={repeatedPassword}
          setValue={setRepeatedPassword}
          isValid={isRepeatedPasswordValid}
        />
        <TextInput
          title={'Ваш email адрес'}
          value={email}
          setValue={setEmail}
          isValid={isEmailValid}
        />
      </div>
      <div className="disclaimer">
        Внимание! Продолжая регистрацию вы автоматически соглашаетесь с
        правилами нашего проекта. Если вы еще не ознакомлены с ними обязательно
        ознакомьтесь (
        <a target={'_blank'} href={LINKS.PROJECT_RULES}>
          открыть правила в браузере
        </a>
        )!
      </div>
      <Button title={'ПРОДОЛЖИТЬ РЕГИСТРАЦИЯЮ'} onClick={handleReg} />
    </RegistrationWrapper>
  );
};
