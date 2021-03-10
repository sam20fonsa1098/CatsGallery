import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { vh, vw } from '../../utils/dimensions';
import { ContainerProps } from './interfaces';

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${8 * vh}px;
  padding: 0 ${4 * vw}px;
  flex-direction: row;
  background-color: #232129;
  border-radius: 10px;
  margin-top: ${vh}px;
  border-width: 2px;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #993399;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: ${1.5 * vh}px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: ${1.5 * vw}px;
`;

export const EyeButton = styled.TouchableOpacity``;

export const EyeIcon = styled(FeatherIcon)`
  margin-right: auto;
`;

export const TextError = styled.Text`
  font-size: ${1.25 * vh}px;
`;
