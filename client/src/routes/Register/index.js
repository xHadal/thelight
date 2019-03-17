// import React, { Component } from "react";
// import Button from "../Button";
// import Input from "../Input/Input";
// import styled from "styled-components"

// import { validateField } from "../../services/validate";

// // import api from "./../../services/api";
// const Container = styled.div`

// .mainWrapper {
//   display: flex;
//   background: #07010e;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// }
// .formWrapper {
//   display: flex;
//   align-items: center;
//   background: #07010e;
//   color: #333;
//   max-width: rem(320);
//   text-align: center;
// }

// /*----------- LEFT ----------*/
// .leftWrapper {
//   background: grey;
//   flex-grow: 1;
//   width: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .leftChild {
//   display: block;
//   width: 100%;
//   position: relative;
// }

// /*---------- RIGHT -----------*/
// .rightWrapper {
//   background: black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-grow: 1;
//   width: 50%;
// }
// .rightChild {
//   display: block;
//   width: 100%;
//   position: relative;
// }

// `;
// export default class Register extends Component {
//   /* Constructor */
//   constructor(props) {
//     super(props);

//     this.state = {
//       errors: {
//         userName: null,
//         email: null,
//         repeatedEmail: null
//       },
//       fields: {
//         userName: "",
//         email: "",
//         repeatedEmail: ""
//       },
//       validForm: false,
//       formErrorMsg: "",
//       isRegistered: false
//     };

//     /* Functions bind */
//     this.inputOnChange = this.inputOnChange.bind(this);
//     this.updateInputValue = this.updateInputValue.bind(this);
//     this.validateField = this.validateField.bind(this);
//     this.validateForm = this.validateForm.bind(this);
//     this.saveNewUser = this.saveNewUser.bind(this);
//   }
//   inputOnChange(e) {
//     this.updateInputValue(e);
//     this.validateField(e);
//   };
//   updateInputValue(e) {
//     const field = e.target.name;
//     const fieldValue = e.target.value;
//     this.setState(prevState => ({
//       fields: {
//         ...prevState.fields,
//         [field]: fieldValue
//       }
//     }));
//   };

//   /* Validate Form */
//   validateForm (e) {
//     e.preventDefault();

//     let numErrors = 0;
//     console.log(this.state.errors);

//     Object.keys(this.state.errors).map((error, i) => {
//       if (this.state.errors[error] === null) {
//         console.log(error);
//         this.setState(prevState => ({
//           errors: {
//             ...prevState.errors,
//             [error]: true
//           },
//           validForm: false
//         }));

//         numErrors++;
//       } else if (this.state.errors[error] === true) {
//         this.setState({ validForm: false });
//         numErrors++;
//       } else {
//         this.setState({ validForm: true });
//       }
//     });
//     if (numErrors === 0) {
//       this.setState({ validForm: true });
//       this.saveNewUser();
//     }
//   };

//   /* Validate Field */
//   validateField (e) {
//     //make as callback
//     //this.updateInputValue(e);
//     const type = e.target.name;
//     const inputValue = e.target.value;

//     let errorMsg = "Campo obligatorio.";
//     //console.log("type-> " + type);

//     let regex;
//     switch (type) {
//       case "email":
//         //  console.log("value-> " + inputValue);
//         regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))
//           @((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|
//          (([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         errorMsg = "Formato de email no válido";
//         break;
//       case "repeatedEmail":
//         //  console.log("value-> " + inputValue);
//         regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))
//           @((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|
//           (([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//         break;
//       case "userName":
//         //  console.log("value-> " + inputValue);
//         regex = /^[ña-zÑA-Z0-9_]{2,15}$/;
//         errorMsg = "Introduce un nombre de usuario válido.";
//         break;
//       default:
//         //  console.log("value-> " + inputValue);
//         let errorMsg = "Campo obligatorio.";
//         regex = /^[ña-zÑA-Z0-9_]{1,15}$/;
//         break;
//     }

//     if (regex.test(inputValue)) {
//       // Valid mail
//       this.setState(prevState => ({
//         errors: {
//           ...prevState.errors,
//           [type]: false
//         }
//       }));
//     } else {
//       // Invalid email
//       this.setState(prevState => ({
//         errors: {
//           ...prevState.errors,
//           [type]: true
//         }
//       }));
//     }

//     //console.log("register state-> " + this.state.errors[type]);
//     //console.log("Input reg state-> " + this.repeatedEmail.props.valid);
//   };

//   /* SUBMIT */
//   registerSubmit (e) {
//     e.preventDefault();
//   };
//   /* Submit */
//   saveNewUser() {
//     //e.preventDefault();
//     const bodyRequest = {
//       email: this.state.fields.email,
//       name: this.state.fields.userName,
//       requestInfo: true
//     };

//     api.postUser(bodyRequest).then(data => {
//       console.log("data ->" + data);
//       data === 400
//         ? this.setState({ formErrorMsg: "No existe ese usuario" })
//         : this.redirectToTarget();
//     });
//   };

//   /* Redirect  */
//   //make as coponent
//   redirectToTarget() {
//     this.props.history.push("/");
//   };

//   /* RENDER */
//   render() {
//     /* Return */
//     if (!this.state.isRegistered) {
//       return (
//         <Container>
//           <div className={styles.mainWrapper}>
//             {/* ---------- FORM ----------*/}
//             <div className={styles.formWrapper}>
//               <form onSubmit={this.registerSubmit}>
//                 <p>
//                   Registrate para enviar cartas a los Reyes Magos y Papa Noel y
//                   seguir el viaje de tu carta!
//                 </p>

//                 {/* User name */}
//                 <Input
//                   name="userName"
//                   type="text"
//                   placeholder="Escribe tu nombre"
//                   required={this.state.errors.userName}
//                   labelText="Escribe tu nombre"
//                   htmlRef="userName"
//                   errorMsg="Introduce nombre de usuario válido."
//                   onChange={this.inputOnChange}
//                 />

//                 {/* User email  */}
//                 <Input
//                   name="email"
//                   fieldType="email"
//                   type="text"
//                   placeholder="Escribe tu email"
//                   labelText="Escribe tu email"
//                   required={this.state.errors.email}
//                   htmlRef="email"
//                   errorMsg="Username or Password is incorrect."
//                   onChange={this.inputOnChange}
//                 />

//                 {/* User repeated email  */}
//                 <Input
//                   name="repeatedEmail"
//                   type="text"
//                   fieldType="email"
//                   placeholder="Repite tu email"
//                   labelText="Repite tu email"
//                   required={this.state.errors.repeatedEmail}
//                   htmlRef="repeatedEmail"
//                   onChange={this.inputOnChange}
//                   errorMsg="Username or Password is incorrect."
//                 />

//                 {/* Button */}
//                 <Button
//                   onClick={this.validateForm}
//                   type="text"
//                   text="Regístrate"
//                 />
//                 {this.state.formErrorMsg && (
//                   <span className={styles.errorMsg}>
//                     {this.state.formErrorMsg}
//                   </span>
//                 )}
//               </form>
//             </div>
//           </div>
//         </Container>
//       );
//     } else {
//     }
//   }
// }
