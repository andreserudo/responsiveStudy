import styled from 'styled-components';
import { shade } from 'polished';

import signBackgroundImg from '../../assets/pine-watt--unsplash.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const BackgroundImage = styled.div`
  flex: 1;
  background: url(${signBackgroundImg}) no-repeat center;
  background-size: cover;

  @media (max-width:900px) {
    display: none;
  }
  
`;

export const Content = styled.div`
  width: 40%;
  @media (max-width:1400px) {
    width: 50%;
  }
  @media (max-width:900px) {
    width: 100%;
  }  
  background: #ccdbcf;

  display:flex;
  align-items: center;
  justify-content: center;

  form{
    @media (max-width:900px) {
      width: 70%;
    }
    width: 50%;
    height: 60%;


    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;


    background: #8c9a8e;

    border: 1px solid #6b7a6e;
    -moz-box-shadow:    3px 3px 5px 6px #556055;
    -webkit-box-shadow: 3px 3px 5px 6px #556055;
    box-shadow:         3px 3px 5px 6px #556055;
    border-radius: 4px;

    h1{      
      margin-bottom: 5%;
      color: #1a201b;
    }

    a{
      height: 6%;
      width: 50%;      

      color: #ffffff;
      background: #3e3f32;

      border: 0;
      border-radius: 120px;

      &:hover{
        cursor: pointer;
        background: ${shade(0.2, '#3e3f32')}
      }
    }

    p {
      margin-top: 5%;
      margin-bottom: 5%;
    }

    strong {
      margin-top: 20%;
    }
  }
`;