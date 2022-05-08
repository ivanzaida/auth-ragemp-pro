import { FC } from 'react';
import {
  Background,
  Communities,
  Login,
  Registration,
  Title,
} from './components';
import styled from 'styled-components';

const AppWrapper = styled.div`
  * {
    font-family: 'Gilroy', sans-serif;
  }

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #5d9275;
    text-decoration: none;
    :hover {
      cursor: pointer;
    }
  }
  .app-title {
    position: absolute;
    left: 68px;
    top: 74px;
    width: 430px;
  }
`;

export const App: FC = () => {
  return (
    <AppWrapper>
      <Background>
        <div className="app-title">
          <Title title={'Нет аккаунта? пройди регистрацию'} />
        </div>
        <Registration />
        <Login />
        <Communities />
      </Background>
    </AppWrapper>
  );
};
