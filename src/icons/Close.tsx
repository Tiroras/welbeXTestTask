import React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

export const Close: React.FC<SvgProps> = props => (
  <Svg viewBox="0 0 50 50" width="25px" height="25px" {...props}>
    <Path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
  </Svg>
);
