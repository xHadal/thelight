import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const InputWrapper = styled.div`
  position: relative;
  margin: 0 auto 50px;
  max-width: 280px;
  font-family: 'Inter UI';
  width: 100%;

  /* Label */
  > label {
    position: absolute;
    color: #6d6d6d;
    left: 0;
    top: -5px;
    transition: all 0.5s;
    pointer-events: none;
    font-size: 14px;
  }
 
  /* Input */
  > input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #ccc;
    color: #333;
    width: 100%;
    
    ::-webkit-input-placeholder {
      opacity: 0;
      transition: inherit;
    }
    &:focus + label, &:not(:placeholder-shown) + label  {
      top: -15px;
      transition: all 0.5s;
      font-size: 12px;
    }

    ${({ errorMsg }) => {
    // errorMsg options: undefined, '', 'whatever'
    if (errorMsg) {
      if (errorMsg === '') {
        return 'border-bottom: 2px solid green';
      }
      return 'border-bottom: 2px solid red';
    }
    return null;
  }};


    @media only screen and (max-width: 500px),
      only screen and (max-device-width: 500px) {
    }
  }
  /* Error */
  > span.error-msg {
    color: red;
    margin: 5px 0 0;
  }
  >span.input-control{
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 2px;
    left: 0;
    background: pink;
  }
`;


const Input = ({
  type,
  name,
  required,
  labelText,
  errorMsg,
  onChange,
}) => (
    <InputWrapper errorMsg={errorMsg}>
      <input
        name={name}
        type={type}
        required={required}
        labeltext={labelText}
        onChange={onChange}
        placeholder={name}
      />
      <label htmlFor={name}>
        {name}
      </label>
      {required && (
        <span className="input-control"></span>
      )}
      {errorMsg && (
        <span className="error-msg">{errorMsg}</span>
      )}
    </InputWrapper>
  );

Input.defaultProps = {
  required: false,
  type: undefined,
  labelText: undefined,
  errorMsg: undefined,
  onChange: undefined,
  placeholder: undefined
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  labelText: PropTypes.string,
  errorMsg: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;

