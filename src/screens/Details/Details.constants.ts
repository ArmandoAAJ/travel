import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const HEIGHT = height;

const RADIUS = 8;

const PADDING = 10;

const WIDTH = width - 20;

const IMAGE_HEIGHT = height * 0.5;

export const CONSTANTS = {
  WIDTH,
  RADIUS,
  PADDING,
  HEIGHT,
  IMAGE_HEIGHT,
};
