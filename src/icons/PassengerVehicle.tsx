import React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

export const PassengerVehicle: React.FC<SvgProps> = props => (
  <Svg
    width="25px"
    height="25px"
    viewBox="0 0 64 64"
    enable-background="new 0 0 64 64"
    {...props}>
    <Path
      fill="#231F20"
      d="M60,28c0-8.301-5.016-24-24-24h-8C9.016,4,4,19.699,4,28c-2.211,0-4,1.789-4,4v16c0,2.211,1.789,4,4,4h4v4
	c0,2.211,1.789,4,4,4h4c2.211,0,4-1.789,4-4v-4h24v4c0,2.211,1.789,4,4,4h4c2.211,0,4-1.789,4-4v-4h4c2.211,0,4-1.789,4-4V32
	C64,29.789,62.211,28,60,28z M16,44c-2.211,0-4-1.789-4-4s1.789-4,4-4s4,1.789,4,4S18.211,44,16,44z M12,28c0-0.652,0.184-16,16-16
	h8c15.41,0,15.984,14.379,16,16H12z M48,44c-2.211,0-4-1.789-4-4s1.789-4,4-4s4,1.789,4,4S50.211,44,48,44z"
    />
  </Svg>
);
