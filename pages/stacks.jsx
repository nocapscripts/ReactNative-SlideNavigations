import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import About from '../screens/aboutscreen';
import HomeScreen from '../screens/homescreen';

const Tab = createMaterialTopTabNavigator();

export default function AboutPage() {
  return (
    <Tab.Navigator

      screenOptions={{
    
        tabBarIndicatorStyle: { backgroundColor: 'blue' },
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', color: '#9CC5A1' },
        tabBarStyle: { backgroundColor: '#1F2421' },
      }}
    
    >
      <Tab.Screen
        name="About"
        component={About}
        options={{
          title: "About",
        }}
      />
      <Tab.Screen
        name="Kodu"
        component={HomeScreen}
        options={{
          title: "Kodu",
        }}
      />
    </Tab.Navigator>
  );
}
