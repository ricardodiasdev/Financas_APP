import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import New from "../pages/New";

export default function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#00b94a"
      inactiveColor="#DDD"
      barStyle={{ backgroundColor: '#171717' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarLabel: 'Registrar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file-edit-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
