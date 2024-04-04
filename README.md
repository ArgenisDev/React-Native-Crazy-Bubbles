# React-Native-Crazy-Bubbles

Dive into a world where your React Native apps come alive with React-Native-Crazy-Bubbles! Powered by the latest Reanimated 3, this package brings a whimsical touch to your mobile apps, offering a delightful bubble animation that can light up any interface. 

#Features
Smooth Performance: Leverages Reanimated 3 for buttery smooth animations that don't bog down your app.
Plug and Play: Getting started is a breeze. With just a few lines, you can infuse your app with bubbling fun.
Fully Customizable: You're in control. Tailor the bubble size, color, and dynamics to fit your app's mood.
Cross-Platform Joy: Designed to work seamlessly on both iOS and Android.

#Installation
To get started with React-Native-Crazy-Bubbles in your project, run:

npm install react-native-crazy-bubbles

or, if you're using yarn:


yarn add react-native-crazy-bubbles

#usage
Implementing CrazyBubbles in your app is as simple as:

import React from 'react';
import { View } from 'react-native';
import CrazyBubbles from 'react-native-crazy-bubbles';

const MyApp = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <CrazyBubbles />
  </View>
);

export default MyApp;


#Customization
CrazyBubbles is all about making it yours. Play around with the props to customize:

color: string[].
size: number.
duration: number //miliseconds.
numberOfParticles:number //default 300

#Contribute
Got ideas on how to make CrazyBubbles even better? We'd love to hear them! Feel free to fork the repo, push your changes, and submit a pull request. Or if you've encountered a bug or have a feature request, drop us an issue.

#License
React-Native-Crazy-Bubbles is available under the MIT license. Check out the LICENSE file in the repo for more info.

