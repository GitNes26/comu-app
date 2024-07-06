import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";

const SignIn = () => {
   return (
      <SafeAreaView className={"bg-primary h-full"}>
         <ScrollView>
            <View className={"w-full justify-center min-h-[85vh] px.4 my-6"}>
               <Image
                  source={images.logo}
                  className={"w-[115px] h-[35px]"}
                  resizeMode="contain"
               />
               <Text className={""}>Registrate en ComuApp</Text>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default SignIn;

const styles = StyleSheet.create({});
