import React, {useState} from 'react';
import {StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import * as Yup from 'yup';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import axios from 'axios'

import { Feather } from '@expo/vector-icons';

import {
  Container,
  Header,
  HelpButton,
  SubTitle,
  Form,
  ForgiveButton,
  ForgiveButtonText,
  ForgiveView,
  Bar,
} from './style';

interface Props {
  user: string;
  password: string;
}

export function SignIn(){
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const teste = () => { 
    axios.post('https://api.tst2.escolaapp.com/api/v1/Acesso/login', {
        "login": "rntest",
        "senha": "teste-123"
    })
    .then(function(response){
        console.log(response.data.conteudo)
    })
    .catch(function(error){
        console.log(error)
});
}

  return (
    <KeyboardAvoidingView 
      behavior="position" 
      enabled 
      style={{flex:1, backgroundColor: '#2EC1C9'}}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />

          <Header>
            <BackButton/>

            <HelpButton>
              <Feather
                name="help-circle"
                size={40}
                color={'#FFF'}
              />
            </HelpButton>

          </Header>

          <Form>

          <SubTitle>
            Informe o usuário e a senha {'\n'}
            encaminhados pela escola
          </SubTitle>

            <Input
              icoName="user"
              placeholder="Usuário"
              placeholderTextColor={'#FFF'}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setUser}
              value={user}
            />

            <Input
              icoName="key"
              placeholder="Senha"
              placeholderTextColor={'#FFF'}
              autoCorrect={false}
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />

            <Button
              title="Entrar"
              onPress={teste}
              enabled={true}
            />

            <ForgiveView>
              <ForgiveButton>
                <ForgiveButtonText>
                  Esqueci minha senha
                </ForgiveButtonText>
              </ForgiveButton>

              <Bar>
                |
              </Bar>

              <ForgiveButton>
                <ForgiveButtonText>
                  Política de privacidade
                </ForgiveButtonText>
              </ForgiveButton>
            </ForgiveView>

          </Form>

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}