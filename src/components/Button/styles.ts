import styled from 'styled-components';
import {shade } from 'polished';

export const Container = styled.button`
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

`;