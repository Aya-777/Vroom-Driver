import React from 'react';
import Svg, { Path } from 'react-native-svg';

const PATH = `
  M174 510
  C174 510, 95 425, 55 350
  C20 285, 5 225, 5 165
  C5 55, 95 0, 174 0
  C253 0, 343 55, 343 165
  C343 225, 328 285, 293 350
  C253 425, 174 510, 174 510
  Z
`;

export const PinMask = () => (
    <Svg width="100%" height="100%" viewBox="0 0 348 520">
        <Path d={PATH} fill="white" />
    </Svg>
);