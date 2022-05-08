import styled from 'styled-components';
import { FC } from 'react';
import { ReactComponent as Circles } from '../../../assets/images/cicrles.svg';

interface ITitle {
  title: string;
}

const TitleWrapper = styled.div`
  color: #eaeaf5;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  position: relative;
  height: 32px;
  margin-bottom: 21px;
  svg {
    position: absolute;
    left: 0;
    top: 0;
  }
  div {
    margin-left: 8px;
    position: absolute;
  }
`;

export const Title: FC<ITitle> = ({ title }) => {
  return (
    <TitleWrapper className="title">
      <Circles />
      <div>{title}</div>
    </TitleWrapper>
  );
};
