import styled from 'styled-components/native';
import { vh, vw } from '../../utils/dimensions';

export const Container = styled.View``;

export const Header = styled.View`
  background: #28262e;
  flex-direction: row;
  align-items: center;
  height: ${8 * vh}px;
  margin-top: ${3 * vh}px;
`;

export const HeaderTitle = styled.Text`
  color: #f4efe8;
  font-size: ${1.8 * vh}px;
  font-family: 'RobotoSlab-Regular';
  line-height: ${2.5 * vh}px;
  margin-right: auto;
  margin-left: ${4 * vw}px;
`;

export const UserName = styled.Text`
  color: #ff9000;
  font-family: 'RobotoSlab-Medium';
`;

export const ConfigButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: ${4 * vw}px;
`;
