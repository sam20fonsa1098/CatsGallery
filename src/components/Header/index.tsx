import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Container, Header, HeaderTitle, ConfigButton } from './styles';
import { HeaderProps } from './interfaces';

const CustomHeader: React.FC<HeaderProps> = ({ onConfigPress }) => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Gatos</HeaderTitle>
        <ConfigButton onPress={onConfigPress}>
          <Icon name="settings" size={20} color="#f4efe8" />
        </ConfigButton>
      </Header>
    </Container>
  );
};

export default CustomHeader;
