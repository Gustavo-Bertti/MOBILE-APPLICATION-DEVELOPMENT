/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Home = () => {
  return (
    <View>
      <Text>Olá mundo</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
