import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./src/Styles/main";
import DashboardScreen from "./src/Components/Dashboard/dashboard";
import BudgetScreen from "./src/Components/Budget/budget";
import InvestScreen from "./src/Components/Invest/Invest";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import Header from "./src/Components/Header/Header";

SplashScreen.preventAutoHideAsync().catch(console.warn);

export default function App() {
 
  useEffect(() => {
    async function prepare() {
      try {
        // Perform any operations here that you need before your app can render
        await new Promise(resolve => setTimeout(resolve, 9000));
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        {/* <DashboardScreen /> */}
        <Header />
        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "skyblue",
              borderBottomColor: "green",
              borderBottomWidth: 3,
            },
            tabBarStyle: { backgroundColor: "skyblue" },
            //tabBarLabelStyle: { color: "black" },
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "black",
          }}
        >
          <Tab.Screen
            name="Dashboard"
            options={{
              tabBarIcon: ({ size, color }) => {
                return (
                  <FontAwesome5 name="list-alt" size={size} color={color} />
                );
              },
            }}
          >
            {(props) => <DashboardScreen {...props} />}
          </Tab.Screen>

          <Tab.Screen
            name="Budget"
            options={{
              tabBarIcon: ({ size, color }) => {
                return (
                  <FontAwesome5 name="money-check" size={size} color={color} />
                );
              },
            }}
          >
            {(props) => <BudgetScreen {...props} />}
          </Tab.Screen>

          <Tab.Screen
            name="Invest"
            options={{
              tabBarIcon: ({ size, color }) => {
                return (
                  <FontAwesome5 name="warehouse" size={size} color={color} />
                );
              },
            }}
          >
            {(props) => <InvestScreen {...props} />}
          </Tab.Screen>

        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
