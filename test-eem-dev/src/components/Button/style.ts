import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled(RectButton)`
  width: 90%;

  align-self: center;
  padding: 10px;
  justify-content: center;
  align-items: center;

  background-color: #FFF;
  margin-bottom: 8px;
  margin-top: 20px;
  border-radius: 6px;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: #32CFC5;

`;