import {colors} from '../utils';

export const generatePosition = (size: number, width: number) => {
  let startPos = Math.random() < 0.5 ? -size : Math.random() * (width + size);
  let endPos =
    Math.random() < 0.5 ? width + size : Math.random() * (width + size);
  if (Math.random() < 0.5) {
    [startPos, endPos] = [endPos, startPos];
  }
  return [startPos, endPos];
};
export const generateRandomColor = (newColors: string[] | undefined) => {
  const colorsCurrent = newColors ?? colors;
  const randomIndex = Math.floor(Math.random() * colorsCurrent.length);
  return colorsCurrent[randomIndex];
};
