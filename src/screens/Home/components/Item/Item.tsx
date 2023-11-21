import React from 'react';
import { ListRenderItemInfo, ListRenderItem } from 'react-native';

import { Container, Background, Country, Info, Wrapper } from './Item.styles';

import { IHome } from '../../../../mocks';
import { useNavigation } from '@react-navigation/native';
import { RouteNames } from '../../../../routes';

type IItemProps = IHome;

export const Item: React.FC<ListRenderItemInfo<IItemProps>> = ({
  item,
  index,
}) => {
  const { navigate } = useNavigation();
  const { src, title } = item;
  const isRight = index % 2 === 0;

  const handlePress = () => navigate(RouteNames.Details, { item });

  return (
    <Container isRight={!isRight}>
      <Wrapper onPress={handlePress}>
        <Background source={{ uri: src }} />
        <Info>
          <Background source={{ uri: src }} blurRadius={20} />
          <Country>{title}</Country>
        </Info>
      </Wrapper>
    </Container>
  );
};
