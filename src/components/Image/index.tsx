import React from 'react';
import { ImageStyle } from './styles';
import { ImageProps } from './interfaces';

const Image: React.FC<ImageProps> = ({ image_url, style }) => {
  return (
    <>
      <ImageStyle
        style={style}
        source={{
          uri: image_url,
        }}
      />
    </>
  );
};

export default Image;
