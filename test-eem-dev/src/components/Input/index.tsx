import React, {useState} from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
 Container,
 IconContainer,
 InputText,
} from './style';

interface InputProps extends TextInputProps{
  icoName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function Input({icoName, value, ...rest} : InputProps){

  return (
    <Container>
      <IconContainer>
        <Feather
          name={icoName}
          size={24}
          color={'#FFF'}
          style={{marginLeft:10}}
        />
        <InputText
          {...rest}
        />
      </IconContainer>   
    </Container>
  );
}