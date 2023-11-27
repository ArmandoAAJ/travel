import styled from 'styled-components/native';

import { CONSTANTS } from '../../Home.constants';
import { css } from 'styled-components';
import Animated from 'react-native-reanimated';

interface IContainerProps {
  isRight: boolean;
}

export const Wrapper = styled.Pressable`
  flex: 1;
`;

export const Container = styled(Animated.View)<IContainerProps>`
  width: ${CONSTANTS.WIDTH}px;
  height: ${CONSTANTS.HEIGHT}px;
  border-radius: ${CONSTANTS.RADIUS}px;

  ${({ isRight }) =>
    isRight &&
    css`
      margin-top: ${40}px;
    `}
`;

export const Background = styled(Animated.Image).attrs({
  resizeMode: 'cover',
  borderRadius: CONSTANTS.RADIUS,
})`
  height: 100%;
  width: 100%;
`;

export const Info = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 4px 4px 4px;
  border-radius: ${CONSTANTS.RADIUS}px;
  align-items: center;
`;

export const Country = styled.Text`
  font-size: 22px;
  color: #fff;
  position: absolute;
  padding: 4px 0px 0px 0px;
  font-family: 'DancingScript_700Bold';
`;

export const Likes = styled(Animated.Text)`
  font-size: 12px;
  color: #fff;
  position: absolute;
  bottom: 8px;
  font-family: 'DancingScript_700Bold';
`;
