import styled from 'styled-components';


export default styled.button`
    background: #333;
    color: #ccc;
    text-align: center;
    border: none;
    border-radius: 5px;
    padding: 15px;
    min-width: 250px;
    margin: 0 auto;
    display: block;
    font-family: 'Inter UI';


    &:hover {
      background: #444;
      cursor: pointer;
    }
    @media only screen and (max-width: 500px),
      only screen and (max-device-width: 500px) {
    }
`;


