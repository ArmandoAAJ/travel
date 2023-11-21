import { Dimensions } from 'react-native';

const { width, height, fontScale, scale } = Dimensions.get('window');

const HEIGHT = height / 3;

const RADIUS = 8;

const PADDING = 10;

const WIDTH = width / 2 - PADDING * 1.5;

export const CONSTANTS = {
  WIDTH,
  RADIUS,
  PADDING,
  HEIGHT,
};
