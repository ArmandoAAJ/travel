import React from 'react';

import { HomeComponents } from './components';
import { Container } from './Home.styles';
import { MOCKS } from '../../mocks';

export const Home: React.FC = () => {
  return (
    <Container
      data={MOCKS.HOME}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={(props) => <HomeComponents.Item {...props} />}
    />
  );
};
