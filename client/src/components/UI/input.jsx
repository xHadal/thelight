import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const InputWrapper = styled.div`
  position: relative;
  margin: 35px 0;
  max-width: 320px;
  font-family: 'Inter UI';

  /* Label */
  > label {
    position: absolute;
    color: #333;
    left: 0;
    top: -5px;
    transition: all 0.5s;
    pointer-events: none;
  }
  ::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }
  /* Input */
  > input {
    background: transparent;
    border: none;
    border-bottom: 2px solid #333;
    color: #333;
    width: 100%;

    &:focus + label {
      top: -15px;
      transition: all 0.5s;
      color: #6d6d6d;
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
  > span {
    color: red;
    margin: 5px 0 0;
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
    />
    <label htmlFor={name}>
      {name}
    </label>
    {errorMsg && (
      <span>{errorMsg}</span>
    )}
  </InputWrapper>
);

Input.defaultProps = {
  required: false,
  type: undefined,
  labelText: undefined,
  errorMsg: undefined,
  onChange: undefined,
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


// export default class Input extends Component {
//   /* Constructor */
//   constructor(props) {
//     super(props);

//     this.state = {
//       error: this.props.required
//     };
//   }

//   componentWillReceiveProps(newProps) {
//     if (newProps.required !== this.props.required) {
//       this.setState({ error: newProps.required });
//       //this.classMethod();
//     }
//   }

//   render() {
//     if (typeof this.props.required !== "undefined") {
//       //console.log("input validation props" + this.state);
//       //console.log(this.state.error);
//       var validationClass = classNames({
//         [styles.inputError]: this.state.error && this.state.error !== null,
//         [styles.inputValid]: !this.state.error && this.state.error !== null
//       });
//     }

//     return (
//       <InputWrapper>
//         <input
//           className={`${styles.input} ${validationClass}`}
//           errormsg={this.props.errorMsg}
//           name={this.props.name}
//           onChange={this.props.onChange}
//           placeholder={this.props.placeholder}
//           ref={inputElement => {
//             this[this.props.htmlRef] = inputElement;
//           }}
//           required={this.props.required}
//           type={this.props.type}
//           value={this.props.value}
//         />
//         <label htmlFor={this.props.name}>{this.props.labelText}</label>
//         {this.state.error && (
//           <span className={styles.errorMsg}>{this.props.errorMsg}</span>
//         )}
//       </InputWrapper>
//     );
//   }
// }
