import { FC } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../../assets/images/button-arrow.svg';

interface IButton {
  title: string;
  onClick(): unknown;
}

const Wrapper = styled.button`
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 16px;
  padding-right: 18px;
  background-color: #343434;
  outline: none;
  border: none;
  color: #5d9275;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;

  :hover {
    cursor: pointer;
  }
`;

export const Button: FC<IButton> = ({ title, onClick }) => {
  const handleClick = () => onClick();

  return (
    <Wrapper onClick={handleClick}>
      {title} <ArrowIcon />
    </Wrapper>
  );
};
