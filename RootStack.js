import { StackNavigator } from 'react-navigation';
import GameScreen from './components/GameScreen';
import PlayerScreen from './components/PlayerScreen';
import TestScreen from './components/TestScreen';
import TestScreen2 from './components/TestScreen2';

export const RootStack = StackNavigator(
  {
    Game: {
      screen: GameScreen,
    },
    Player: {
      screen: PlayerScreen,
    },
    Test: {
      screen: TestScreen
    },
    Test2: {
      screen: TestScreen2
    }
  },
  {
    initialRouteName: 'Game',
  }
);