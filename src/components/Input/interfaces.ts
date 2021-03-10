import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  icon: string;
  messageError: string | undefined;
  isPassword?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  containerStyle?: {};
  // eslint-disable-next-line @typescript-eslint/ban-types
  iconsStyle?: {};
}

export interface InputRef {
  focus(): void;
}

export interface ContainerProps {
  isErrored: boolean;
  isFocused: boolean;
}
