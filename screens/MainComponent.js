import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import HomeScreen from './screens/HomeScreen';
import DirectoryScreen from './screens/DirectoryScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AboutNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};

const ContactNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contact Us' }} />
    </Stack.Navigator>
  );
};

const MainComponent = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Directory" component={DirectoryScreen} />
      <Drawer.Screen name="AboutNav" component={AboutNavigator} />
      <Drawer.Screen name="ContactNav" component={ContactNavigator} options={{ title: 'Contact Us' }} />
    </Drawer.Navigator>
  );
};

export default MainComponent;


