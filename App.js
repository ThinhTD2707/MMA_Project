import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from 'expo-splash-screen';
import BottomTabNavigation from "./nagivation/BottomTabNavigation"
import { NavigationContainer } from "@react-navigation/native"
import { Cart, ProductDetails } from "./screens"

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    regular: require("./assets/font/Poppins-Regular.ttf"),
    light: require("./assets/font/Poppins-Light.ttf"),
    bold: require("./assets/font/Poppins-Bold.ttf"),
    medium: require("./assets/font/Poppins-Medium.ttf"),
    extrabold: require("./assets/font/Poppins-ExtraBold.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {

    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: "extrabold",
    fontSize: 20,
  }
});
