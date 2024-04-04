import React, {useEffect} from 'react';
import {View, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {generatePosition} from '../helpers';
import {FloatingParticlesStyles} from '../styles';

const {width} = Dimensions.get('window');

const CrazyBubble = ({
  size,
  duration,
  colors,
}: {
  size: number;
  duration: number;
  colors?: string[];
}) => {
  const width = Dimensions.get('window').width;
  const [startPosX, endPosX] = generatePosition(size, width);
  const [startPosY, endPosY] = generatePosition(size, width);

  const posX = useSharedValue(startPosX);
  const posY = useSharedValue(startPosY);

  useEffect(() => {
    posX.value = withRepeat(
      withTiming(endPosX, {duration, easing: Easing.linear}),
      -1,
      true,
    );
    posY.value = withRepeat(
      withTiming(endPosY, {duration, easing: Easing.linear}),
      -1,
      true,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: posX.value}, {translateY: posY.value * 1.8}],
    };
  });

  return (
    <Animated.View
      style={[animatedStyle, FloatingParticlesStyles(size, colors).constainer]}
    />
  );
};

export const CrazyBubbles = ({
  numberOfParticles = 300,
  size,
  duration,
  colors,
}: {
  numberOfParticles?: number;
  size?: number;
  duration?: number;
  colors?: string[];
}) => {
  if (numberOfParticles > 300) numberOfParticles = 300;
  if (duration && duration < 1000) duration = 2000;
  return (
    <View style={{flex: 1}}>
      {Array.from({length: numberOfParticles}).map((_, index) => {
        const randomSize = Math.random() * 25 + 5;
        const radomDuration = Math.random() * 5000 + 5000;
        return (
          <CrazyBubble
            key={index}
            size={size ?? randomSize}
            duration={duration ?? radomDuration}
            colors={colors}
          />
        );
      })}
    </View>
  );
};
