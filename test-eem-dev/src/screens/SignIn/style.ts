import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #2EC1C9;
`;

export const Header = styled.View`
  width: 100%;
  margin-top: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 70px;
`;

export const HelpButton = styled(BorderlessButton)`
  margin-right: 10px;
`;

export const SubTitle = styled.Text`
  color: #FFF;

  margin-top: 16px;
  font-size: 17px;
  margin-left: 20px;
  margin-bottom: 15px;
`;

export const Form = styled.View`
  width: 100%;
  margin: 64px 0;
`;


export const ForgiveView = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  
  align-items: center;
  justify-content: space-between;
`;

export const ForgiveButton = styled(RectButton)`
  padding: 22px;
`;

export const ForgiveButtonText = styled.Text`
  color: #FFF;
  font-size: 13px;  
`;

export const Bar = styled.Text`
  font-size: 30px;
  color: #FFF;

`;