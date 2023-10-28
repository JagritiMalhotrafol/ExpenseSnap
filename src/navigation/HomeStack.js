import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import AddCategoryScreen from '../screens/AddCategoryScreen';
import DrawerIcon from '../components/DrawerIcon';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => {
          return {
            title: 'Home',
            headerLeft: () => <DrawerIcon navigation={navigation} />,
          };
        }}
      />
      <Stack.Screen
        name="AddExpenseScreen"
        component={AddExpenseScreen}
        options={{ title: 'Add Expense' }}
      />
      <Stack.Screen
        name="AddCategoryScreen"
        component={AddCategoryScreen}
        options={{ title: 'Add Category' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;