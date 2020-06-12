import React, { FormEvent, useRef} from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, BackgroundImage } from './styles';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(event: FormEvent){

  }

  return (
    <Container>
      <BackgroundImage />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit} >          
          <h1>Login</h1>          
          <Input 
            name="user"
            icon={FiUser}
            type="user"
            placeholder="User"
            disabled
          />
          
          <Input 
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"       
            disabled   
          />
          
          <p>Forgot Password?</p>
                    
          <Button type="submit">Entrar</Button>

          <strong>New Account</strong>
          
        </ Form>
      </Content>      
    </Container>    
  );
}

export default Login;