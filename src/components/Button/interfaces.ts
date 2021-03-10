import { TouchableOpacityProps, TextStyle } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  icon?: string;
  textStyle?: TextStyle;
}
