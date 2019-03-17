import styled from "styled-components"

const Container = styled.div `
  
.mainWrapper {
  display: flex;
  background: #07010e;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.formWrapper {
  display: flex;
  align-items: center;
  background: #07010e;
  color: #333;
  max-width: rem(320);
  text-align: center;
}

/*----------- LEFT ----------*/
.leftWrapper {
  background: grey;
  flex-grow: 1;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.leftChild {
  display: block;
  width: 100%;
  position: relative;
}

/*---------- RIGHT -----------*/
.rightWrapper {
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 50%;
}
.rightChild {
  display: block;
  width: 100%;
  position: relative;
}

`;

export default Container;