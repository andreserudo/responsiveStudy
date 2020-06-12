import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #6b7a6e;
  border-radius: 10px;
  border: 2px solid #232129; 
  padding: 10px;
  width: 60%;
  color: #232129; 

  display: flex;
  align-items: center;
  margin-top: 5%;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    /* color: #3e3f32; */
    width: 100%;
    height: 100%;

    &::placeholder {
      color: #556055; 
      font-size: 14px;
      
    }
    /*    
    input + input {
      /* background: #ffffff;
      margin-top: 100px;
    }*/
    
  }

  svg{
      margin-left: 0;
      width: 20px;
      height: 20px;   
  }

`;