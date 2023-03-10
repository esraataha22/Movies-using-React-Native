import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Movies from './pages/movies';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Favourite from './pages/Favourites';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/store/Store';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Main Page" component={Home} />
              <Stack.Screen name="Movies" component={Movies} />
              <Stack.Screen name="MovieDetails" component={MovieDetails} />
              <Stack.Screen name="Favourite" component={Favourite} />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}