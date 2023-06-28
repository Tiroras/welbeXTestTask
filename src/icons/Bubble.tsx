import React from 'react';
import {Circle, G, Path, Svg, SvgProps} from 'react-native-svg';

export const Bubble: React.FC<SvgProps> = props => (
  <Svg
    fill="#000000"
    width="25px"
    height="25px"
    viewBox="0 0 29.75 29.75"
    {...props}>
    <G>
      <G>
        <Path
          d="M26.573,4.026H5.163c-1.884,0-3.413,1.707-3.413,3.321v12.976c0,0.001,0,0.002,0,0.003l-0.004-0.003L0,25.724l4.913-2.717
			c0.084,0.004,0.164,0.02,0.25,0.02h21.41c1.884,0,3.177-1.09,3.177-2.703V7.347C29.75,5.733,28.457,4.026,26.573,4.026z
			 M27.75,20.323c0,0.538-0.548,0.703-1.177,0.703H5.163c-0.629,0-1.413-0.165-1.413-0.703V7.347c0-0.539,0.784-1.321,1.413-1.321
			h21.41c0.629,0,1.177,0.782,1.177,1.321V20.323z"
        />
        <G>
          <Circle cx="9.274" cy="13.526" r="1.874" />
          <Circle cx="15.657" cy="13.526" r="1.874" />
          <Circle cx="22.04" cy="13.526" r="1.874" />
        </G>
      </G>
    </G>
  </Svg>
);