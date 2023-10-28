import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomSidebar = ({handleToken, ...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Home"
            onPress={() => {
              props.navigation.navigate('HomeScreen');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="clipboard-text-outline" color={color} size={size} />
            )}
            label="Add Expense"
            onPress={() => {
              props.navigation.navigate('AddExpenseScreen');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="folder-plus-outline" color={color} size={size} />
            )}
            label="Add Category"
            onPress={() => {
              props.navigation.navigate('AddCategoryScreen');
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            props.navigation.closeDrawer();
            handleToken(null);
          }}
        />
      </Drawer.Section>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: primaryColor,
    },
    logo: {
      resizeMode: 'center',
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      alignSelf: 'center',
    },
    drawerContent: {
      flex: 1,
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1,
    },
  });

export default CustomSidebar;
