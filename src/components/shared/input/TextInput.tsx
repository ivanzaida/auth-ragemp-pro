import { FC, useMemo } from 'react';
import styled from 'styled-components';

interface ITextInput {
  title: string;
  placeholder?: string;
  value: string;
  setValue(v: string): unknown;
  isValid?: boolean;
}

const InputWrapper = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .input-title {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }

  input {
    width: 383px;
    height: 49px;
    background-color: #2b2b2b;
    outline: none;
    border: none;
    border-left: 3px solid #474747;
    box-sizing: border-box;
    padding-left: 19px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #848484;
  }

  &.valid {
    input {
      border-left-color: #5d9275;
    }
  }
  &.invalid {
    input {
      border-left-color: #925d5d;
    }
  }
`;

export const TextInput: FC<ITextInput> = ({
  title,
  placeholder,
  value,
  setValue,
  isValid,
}) => {
  const className = useMemo(() => {
    if (!value) {
      return '';
    }
    switch (isValid) {
      case true:
        return 'valid';
      case false:
        return 'invalid';
      default:
        return '';
    }
  }, [isValid, value]);

  return (
    <InputWrapper className={className}>
      <div className="input-title">{title}</div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputWrapper>
  );
};
