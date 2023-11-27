import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { CONSTANTS } from './Details.constants';

export const Container = styled.View`
  flex: 1;
  margin-top: ${CONSTANTS.PADDING}px;
`;

interface IContentProps {
  bottom: number;
}

export const Content = styled.View<IContentProps>`
  flex: 1;
  margin-top: ${CONSTANTS.PADDING * 4}px;
  margin-bottom: ${({ bottom }: IContentProps) => bottom}px;
  align-items: center;
`;

export const Image = styled(Animated.Image)`
  align-self: center;
  width: ${CONSTANTS.WIDTH}px;
  height: ${CONSTANTS.IMAGE_HEIGHT}px;
  border-radius: ${CONSTANTS.RADIUS}px;
`;

export const Stats = styled(Animated.Text)`
  font-size: 45px;
  color: #000;
  font-family: 'DancingScript_700Bold';
  margin-top: ${CONSTANTS.PADDING}px;
`;
