import styled, {css} from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View`

`;

export const IconContainer = styled.View`
  height: 56px;
  width: 90%;

  align-items: center;
  align-self: center;

  margin-right: 2px;
  border-width: 1px;
  border-color: #FFF;

  border-radius: 5px;

  flex-direction: row;
`;

export const InputText = styled(TextInput)`
  color: #FFF;
  font-size: 15px;

  margin-left: 6px;
`;