import {createStackNavigator, createAppContainer} from 'react-navigation';

import Search from './screens/Search';
import Identified from './screens/Identified';
import History from './screens/History';

const MainNavigator = createStackNavigator(
  {
    Search : {screen : Search},
    Identified : {screen : Identified},
    History : {screen : History}
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName : "History"
  },
);


const App = createAppContainer(MainNavigator);

export default App;

