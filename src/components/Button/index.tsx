import React from 'react';
import { Container, ButtonText, CustomIcom } from './styles';
import { ButtonProps } from './interfaces';

const Button: React.FC<ButtonProps> = ({
  icon,
  children,
  textStyle,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {icon && <CustomIcom name={icon} size={20} />}
      <ButtonText style={textStyle}>{children}</ButtonText>
    </Container>
  );
};

export default Button;
