import React from 'react';

import { HomeComponents } from './components';
import { Container } from './Home.styles';
import { MOCKS } from '../../mocks';
import { HELPERS } from './helpers';

export const Home: React.FC = () => {
  return (
    <Container
      data={HELPERS.shuffleArray(MOCKS.HOME)}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={(props) => <HomeComponents.Item {...props} />}
    />
  );
};
