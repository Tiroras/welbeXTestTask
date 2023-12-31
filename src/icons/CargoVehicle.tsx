import React from 'react';
import {G, Path, Svg, SvgProps} from 'react-native-svg';

export const CargoVehicle: React.FC<SvgProps> = props => (
  <Svg
    width="25px"
    height="25px"
    viewBox="0 0 128 128"
    enable-background="new 0 0 128 128"
    {...props}>
    <G>
      <G>
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#B0BEC5"
          d="M64,64h8v-8h-8V64z M80,64h8v-8h-8V64z M96,64h8v-8h-8V64z
			 M120,64v-8h-8v8H120z M72,48v8h8v-8H72z M88,48v8h8v-8H88z M104,56h8v-8h-8V56z M64,40v8h8v-8H64z M80,40v8h8v-8H80z M96,48h8v-8
			h-8V48z M120,48v-8h-8v8H120z M80,32h-8v8h8V32z M96,40v-8h-8v8H96z M104,32v8h8v-8H104z M120,24h-8v8h8V24z M104,24h-8v8h8V24z
			 M88,24h-8v8h8V24z M64,24v8h8v-8H64z"
        />
      </G>
    </G>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      fill="#212121"
      d="M112,96c0,8.836-7.16,16-16,16s-16-7.164-16-16H48
	c0,8.836-7.16,16-16,16s-16-7.164-16-16C7.164,96,0,88.836,0,80v-8.008L14.922,48c4.121-8.836,14.625-16,23.461-16H56V16h72v48v8v8
	C128,88.836,120.836,96,112,96z M96,104c4.41,0,8-3.586,8-8s-3.59-8-8-8s-8,3.586-8,8S91.59,104,96,104z M32,104c4.41,0,8-3.586,8-8
	s-3.59-8-8-8s-8,3.586-8,8S27.59,104,32,104z M120,24H64v8v32h56V24z M120,72H56v-8V40H38.383c-5.707,0-13.434,5.422-16.211,11.383
	l-0.203,0.43l-0.254,0.414L14.395,64L8,72v8c0,4.414,3.59,8,8,8h2.219c2.77-4.766,7.871-8,13.781-8s11.012,3.234,13.781,8h36.438
	c2.77-4.766,7.871-8,13.781-8s11.012,3.234,13.781,8H112c4.41,0,8-3.586,8-8V72z"
    />
  </Svg>
);
