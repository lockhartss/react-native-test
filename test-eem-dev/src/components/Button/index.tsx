import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
 Container ,
 Title,
} from './style';

interface Props extends RectButtonProps{
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export function Button({title, onPress, enabled = true, loading = false,} : Props){

  return (
    <Container 
      onPress={onPress}
      enabled={enabled}
      style={{ opacity : (enabled === false || loading === true) ? .5 : 1}}
    >
      {loading
        ?<ActivityIndicator color={'#32CFC5'}/>
        :<Title>{title}</Title>
      }
    </Container>
);
}