https://drive.google.com/file/d/1gCkzn_fOwixCQcM8arYR9BSPXQGVqI8r/view?usp=sharing
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


# Customization
`CrazyBubbles` is all about tailoring the animation to fit the unique style of your app. You can customize the component using the following properties:

| Prop                    | Description                                                                                     | Default |
|-------------------------|-------------------------------------------------------------------------------------------------|---------|
| **`color`**             | An array of strings defining the colors of the bubbles. Example: `['#ff0000', '#00ff00']`.     | `[]`    |
| **`size`**              | The maximum size of the bubbles in pixels. Bubbles will vary in size up to this maximum.       | `50`    |
| **`duration`**          | The duration (in milliseconds) for each bubble's animation from the bottom to the top.         | `4000`  |
| **`numberOfParticles`** | The total number of bubbles displayed at any given time.                                       | `300`   |

### Example Usage

To customize your `CrazyBubbles` component, you can adjust its properties as follows:

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

