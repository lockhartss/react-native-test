import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import {
 Container 
} from './style';

interface Props extends BorderlessButtonProps{
  color?: string;
}

export function BackButton({color, ...rest} : Props){

  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={40}
        color={color ? color : '#FFF'}
      />
    </Container>
  );
}