import React, { useMemo } from 'react';
import { ListRenderItemInfo } from 'react-native';

import { FadeInLeft, FadeInRight, FadeInDown } from 'react-native-reanimated';

import {
  Container,
  Background,
  Country,
  Info,
  Wrapper,
  Likes,
} from './Item.styles';

import { IHome } from '../../../../mocks';
import { useNavigation } from '@react-navigation/native';
import { RouteNames } from '../../../../routes/Stacks/StackTypes';

export const Item: React.FC<ListRenderItemInfo<IHome>> = ({ item, index }) => {
  const { navigate } = useNavigation();
  const { src, country, likes } = item;
  const isRight = index % 2 === 0;

  const entering = isRight ? FadeInLeft : FadeInRight;

  const handlePress = () => {
    navigate(RouteNames.Details, { item });
  };

  return (
    <Container
      isRight={!isRight}
      entering={entering.delay(index + 1 < 10 ? (index + 1) * 250 : 0)}
    >
      <Wrapper onPress={handlePress}>
        <Background
          sharedTransitionTag={`${item?.src}_${item.id}`}
          source={{ uri: src }}
        />
        <Info entering={entering.delay(index + 1 < 10 ? (index + 1) * 350 : 0)}>
          <Country>{country}</Country>
          <Likes>{likes}</Likes>
        </Info>
      </Wrapper>
    </Container>
  );
};
