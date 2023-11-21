import styled from 'styled-components/native';

import { CONSTANTS } from '../../Home.constants';
import { css } from 'styled-components';
import { Animated } from 'react-native';

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

export const Background = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  borderRadius: CONSTANTS.RADIUS,
})`
  height: 100%;
  width: 100%;
`;

export const Info = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  justify-content: center;
  padding: 0 4px 4px 4px;
  border-radius: ${CONSTANTS.RADIUS}px;
`;

export const Country = styled.Text`
  font-size: 20px;
  color: #fff;
  position: absolute;
  padding: 0 10px;
  font-family: 'DancingScript_700Bold';
`;
