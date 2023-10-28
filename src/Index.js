import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/HomeScreen';
import AddExpense from './screens/AddExpenseScreen';
import Category from './screens/AddCategoryScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="AddExpenseScreen" component={AddExpense} />
      <Stack.Screen name="AddCategoryScreen" component={Category} />
    </Stack.Navigator>
  );
};

const Index = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Index;
