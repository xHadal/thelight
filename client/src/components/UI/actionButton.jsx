import React from 'react';
import styled, { keyframes } from 'styled-components';



const PinkGlow = keyframes`
    0% {
        -moz-box-shadow: 0px 0px 40px 0px rgb(255, 75, 124);
        -webkit-box-shadow: 0px 0px 40px 0px rgb(255, 75, 124);
        box-shadow: 0px 0px 40px 0px rgb(255, 75, 124, .7);
    }
    50% {
        -moz-box-shadow: 0px 0px 50px 0px rgb(255, 75, 124);
        -webkit-box-shadow: 0px 0px 50px 0px rgb(255, 75, 124);
        box-shadow: 0px 0px 50px 0px rgb(255, 75, 124, .7);
    }
    
    100% {
        -moz-box-shadow: 0px 1px 70px 0px rgb(255, 75, 124);
        -webkit-box-shadow: 0px 0px 70px 0px rgb(255, 75, 124);
        box-shadow: 0px 1px 70px 0px rgb(255, 75, 124, 1);
    }
`;
const WhiteGlow = keyframes`
    0% {
        -moz-box-shadow: 0px 0px 40px 0px rgb(255, 255, 255);
        -webkit-box-shadow: 0px 0px 40px 0px rgb(255, 255, 255);
        box-shadow: 0px 0px 40px 0px rgb(255, 255, 255, .7);
    }
    50% {
        -moz-box-shadow: 0px 1px 50px 0px rgb(255, 255, 255);
        -webkit-box-shadow: 0px 0px 50px 0px rgb(255, 255, 255);
        box-shadow: 0px 1px 50px 0px rgb(255, 255, 255, 1);
    }
    
    100% {
        -moz-box-shadow: 0px 1px 70px 0px rgb(255, 255, 255);
        -webkit-box-shadow: 0px 0px 70px 0px rgb(255, 255, 255);
        box-shadow: 0px 1px 70px 0px rgb(255, 255, 255, 1);
    }
`;

const ActiveAnimation = keyframes`
    0% {
        width: 10rem;
    }
    12% {
        width: 9.7rem;
    }
    25% {
        width: 9.5rem;
    }
    37%{
        width: 9.7rem;
    }
    50% {
        width: 10rem;
    }
    62%{
        width: 10.3rem;
    }
    75% {
        width: 10.5rem;
    }
    87% {
        width: 10.3rem;
    }
    100% {
        width: 10rem;
    }
`;


const CircleBtn = styled.button`

    /* border: 1px solid #FFF; 
    box-shadow: 0px 1px 63px 0px rgb(255, 75, 124);
    -moz-box-shadow: 0px 1px 63px 0px rgb(255, 75, 124);
    -webkit-appearance: none;
    -webkit-box-shadow: 0px 1px 63px 0px rgb(255, 75, 124);
    */
    align-items: center;
    background: #ff4b7c;
    border-radius: 50%;
    border: none;
    box-sizing: border-box;
    color: #fff;
    cursor:pointer;
    display: flex;
    font-size: 25px;
    font-weight: bold;
    height: 10rem;
    justify-content: center;
    padding: 45px 45px;
    transition: all 0.3s ease-in-out;
    width: 10rem;

    &:hover{
        animation: ${ActiveAnimation} .3s ease-in;
    }
    &.on{
        animation: ${PinkGlow} .9s infinite alternate ease-in-out;        
        background: #ffffff;
        color: #ff4b7c;

        &:hover, &:focus {
            animation: ${PinkGlow} .9s infinite alternate ease-in,
            ${ActiveAnimation} .3s ease-in;
        }
    }
    &.off{

    }

    &.white{
       
        &.on{
            animation: ${WhiteGlow} 1s infinite alternate ease-in;
            background: #ff4b7c;
            color: #ffffff;
            &:hover, &:focus{
                animation: ${WhiteGlow} .9s infinite alternate ease-in,
                ${ActiveAnimation} .3s ease-in;
            }
        }
        &.off{
            background: #ffffff;
            color: #ff4b7c;
        }
       
    }
    
   
   
    span{
        text-transform: capitalize;
    }
`;


const ActionButton = ({ text, color, isOn = false, clickFn }) => {
    console.log('isOn?:', { isOn })


    return (
        <CircleBtn
            className={`${isOn ? "on" : "off"} ${color}`}
            onClick={clickFn}
        >
            <span>{text}</span>
        </CircleBtn>
    )
}
/* prop type */

export default ActionButton;