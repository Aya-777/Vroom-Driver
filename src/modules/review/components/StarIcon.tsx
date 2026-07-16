import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../../../core/theme/useTheme';

type Props = {
    active: boolean;
};

export default function StarIcon({ active }: Props) {

    const { colors } = useTheme();
    return (
        <Svg width={32} height={32} viewBox="0 -960 960 960">
            <Path
                d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"
                fill={active ?colors.primary  : 'transparent'}
                stroke="#E4D9FF"
                strokeWidth={20}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}