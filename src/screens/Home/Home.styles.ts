import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from './Home.constants';

export const Container = styled(FlatList).attrs({
  columnWrapperStyle: {
    justifyContent: 'space-evenly',
  },
  contentContainerStyle: {
    paddingTop: CONSTANTS.PADDING,
    paddingBottom: CONSTANTS.PADDING * 4,
  },
})`` as unknown as typeof FlatList;
