import styled from "styled-components"

const Container = styled.div`
.inputWrapper {
  position: relative;
  margin: rem(35) 0;
  min-width: rem(320);

  /* Label */
  label {
    position: absolute;
    @include text-regular(18);
    color: $primary-text-color;
    left: 0;
    top: rem(-5);
    transition: all 0.5s;
    pointer-events: none;
  }
  ::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }
  /* Input */
  .input {
    @include text-regular(14);
    background: transparent;
    border: none;
    border-bottom: rem(2) solid $primary-text-color;
    color: $primary-text-color;
    width: 100%;

    &:focus + label,
    &:not(:placeholder-shown) + label {
      @include text-regular(11);
      top: rem(-10);
      transition: all 0.5s;
      color: #6d6d6d;
    }

    &Valid {
      border-bottom: rem(2) solid $valid-color;
    }
    &Error {
      border-bottom: rem(2) solid $error-color;
    }
    @media only screen and (max-width: 500px),
      only screen and (max-device-width: 500px) {
    }
  }
  /* Error */
  .errorMsg {
    color: $error-color;
    @include text-bold(12);
    margin: rem(5) 0 0;
  }
}

`;

export default Container;