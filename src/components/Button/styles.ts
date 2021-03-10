import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { vh, vw } from '../../utils/dimensions';

export const Container = styled(RectButton)`
  width: 100%;
  height: ${8 * vh}px;
  background-color: #993399;
  border-radius: 10px;
  margin-top: ${0.9 * vh}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
  font-size: ${2 * vh}px;
`;

export const CustomIcom = styled(Icon)`
  color: #fff;
  margin-right: auto;
  margin-left: ${3 * vw}px;
`;
