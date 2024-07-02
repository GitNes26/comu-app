import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
   return (
      <Stack>
         <Text>Holaaa</Text>
         <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
   );
};

export default RootLayout;
