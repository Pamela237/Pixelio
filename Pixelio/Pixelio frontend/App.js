 import 'react-native-gesture-handler';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import React from 'react';
 import HomePage from './Components/HomePage';
 import AlbumPage from './Components/AlbumPage';
 import AlbumContentPage from './Components/AlbumContentPage';
 import ImageDetailPage from './Components/ImageDetailPage';

 const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name=" " component={HomePage} />
        <Stack.Screen name="Albums" component={AlbumPage}  />
        <Stack.Screen name="AlbumContent" component={AlbumContentPage} />
        <Stack.Screen name="ImageDetail" component={ImageDetailPage} />
        {/* Define other screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
