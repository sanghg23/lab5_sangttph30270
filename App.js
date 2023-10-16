import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import lab5 from "./lab5";
import lab6 from "./lab6";

const Stack = createNativeStackNavigator();

export default function App() {

  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="lab5"
          component={lab5}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="lab6"
          component={lab6}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    
    </NavigationContainer>
  );
}
