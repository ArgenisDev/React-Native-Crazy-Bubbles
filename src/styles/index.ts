import {StyleSheet} from 'react-native';
import {generateRandomColor} from '../helpers';

export const FloatingParticlesStyles = (size: number, colors: string[] | undefined) => {
  return StyleSheet.create({
    constainer: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: generateRandomColor(colors),
      position: 'absolute',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
};
