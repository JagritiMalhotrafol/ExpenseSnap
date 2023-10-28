import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import CustomSidebar from '../components/CustomSidebar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

const AppStack = ({ token, handleToken }) => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      drawerContent={props => (
        <CustomSidebar handleToken={handleToken} {...props} />
      )}
    >
      <Drawer.Screen name="HomeStack" options={{ headerShown: false }}>
        {props => <HomeStack {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default AppStack;