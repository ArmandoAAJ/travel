import React from 'react';

import { RouteProp, useRoute } from '@react-navigation/native';

import { Container, Content, Stats, Image } from './Details.styles';
import {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackParamList } from '../../routes/Stacks/StackTypes';

type Route = RouteProp<StackParamList, 'Details'>;

export const Details: React.FC = () => {
  const { bottom } = useSafeAreaInsets();
  const { params } = useRoute<Route>();
  const { item } = params;

  return (
    <Container>
      <Image
        source={{ uri: item?.src }}
        resizeMode="cover"
        sharedTransitionTag={`${item?.src}_${item.id}`}
      />
      <Content bottom={bottom}>
        <Stats entering={FadeInUp.delay(500)}>{item?.emoji}</Stats>
        <Stats entering={FadeInLeft.delay(600)}>{item?.country}</Stats>
        <Stats entering={FadeInRight.delay(700)}>♥️</Stats>
        <Stats entering={FadeInDown.delay(800)}>{item?.likes}</Stats>
      </Content>
    </Container>
  );
};
