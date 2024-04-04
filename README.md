# React-Native-Crazy-Bubbles

Dive into a world where your React Native apps come alive with React-Native-Crazy-Bubbles! Powered by the latest Reanimated 3, this package brings a whimsical touch to your mobile apps, offering a delightful bubble animation that can light up any interface. 

# Features
Smooth Performance: Leverages Reanimated 3 for buttery smooth animations that don't bog down your app.
Plug and Play: Getting started is a breeze. With just a few lines, you can infuse your app with bubbling fun.
Fully Customizable: You're in control. Tailor the bubble size, color, and dynamics to fit your app's mood.
Cross-Platform Joy: Designed to work seamlessly on both iOS and Android.

# Installation
To get started with React-Native-Crazy-Bubbles in your project, run:

```bash
npm install react-native-crazy-bubbles
```

or, if you're using yarn:

```bash
yarn add react-native-crazy-bubbles
```

# usage
Implementing CrazyBubbles in your app is as simple as:

import React from 'react';
import { View } from 'react-native';
import CrazyBubbles from 'react-native-crazy-bubbles';

```jsx
const MyApp = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <CrazyBubbles />
  </View>
);
```
export default MyApp;


Customization
CrazyBubbles is designed to be fully customizable, allowing you to tailor the appearance and behavior of the bubbles to perfectly match the style and theme of your application. Below are the props you can adjust to customize your CrazyBubbles component:

color: string[]:

An array of color strings that determines the colors of the bubbles. Colors are chosen randomly from this array for each bubble. This allows for a vibrant and diverse color palette that can be aligned with your app's design. For example, ['#ff0000', '#00ff00', '#0000ff'] would create bubbles in red, green, and blue.
size: number:

Sets the maximum size of the bubbles in pixels. Each bubble is generated with a random size up to this maximum, giving a natural variation that enhances the visual appeal of the animation. A larger size will create bigger, more prominent bubbles.
duration: number (milliseconds):

Defines how long each bubble's ascent animation should last from the moment it appears at the bottom until it disappears at the top. A shorter duration results in faster-moving bubbles, while a longer duration creates a slower, more gentle rising effect. This can affect the overall energy and mood of the animation.
numberOfParticles: number (default: 300):

Specifies the total number of bubbles to display at any given time. Increasing this number creates a denser, more lively bubble effect, while decreasing it results in a more sparse, tranquil appearance. The default value is set to 300, offering a balanced look, but feel free to adjust this number to suit the visual density you're aiming for in your application.
Customizing CrazyBubbles is straightforward. Here's an example of how to implement these props:

```jsx
<CrazyBubbles
  color={['#ff69b4', '#ba55d3', '#87cefa']}
  size={50}
  duration={4000}
  numberOfParticles={500}
/>
```


# Contribute
Got ideas on how to make CrazyBubbles even better? We'd love to hear them! Feel free to fork the repo, push your changes, and submit a pull request. Or if you've encountered a bug or have a feature request, drop us an issue.

# License
React-Native-Crazy-Bubbles is available under the MIT license. Check out the LICENSE file in the repo for more info.

