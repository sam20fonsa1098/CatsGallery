import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useCallback,
} from 'react';
import {
  Container,
  TextInput,
  Icon,
  EyeIcon,
  EyeButton,
  TextError,
} from './styles';
import { InputProps, InputRef } from './interfaces';

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { icon, messageError, isPassword, containerStyle, iconsStyle, ...rest },
  ref,
) => {
  const [isVisible, setIsVisible] = useState(false);
  const inputElementRef = useRef<any>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleColor = useCallback((): string => {
    if (isFocused) {
      return '#993399';
    }
    if (messageError) {
      return '#c53030';
    }
    return '#666360';
  }, [isFocused, messageError]);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  return (
    <>
      <Container
        isErrored={!!messageError}
        isFocused={isFocused}
        style={containerStyle}
      >
        <Icon name={icon} size={24} color={handleColor()} style={iconsStyle} />
        <TextInput
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          secureTextEntry={isPassword && !isVisible}
          ref={inputElementRef}
          placeholderTextColor="#666360"
          {...rest}
        />

        {isPassword ? (
          <EyeButton
            onPress={() => {
              setIsVisible((prevState) => !prevState);
            }}
          >
            <EyeIcon
              name={isVisible ? 'eye' : 'eye-off'}
              size={24}
              color="#666360"
            />
          </EyeButton>
        ) : null}
      </Container>
      {!!messageError && !iconsStyle && <TextError>{messageError}</TextError>}
    </>
  );
};

export default forwardRef(Input);
