import {
   Image,
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
   View,
} from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors";
import icons from "../constants/icons";

const SearchComponent = ({
   title,
   value,
   placeholder,
   handlChangeText,
   otherStyles,
   keyboardType,
   isPassword = false,
   ...props
}) => {
   const [showPassword, setShowPassword] = useState(isPassword);

   const handlePressIcon = () => {
      value = "";
   };

   return (
      <View className={`space-y-2 ${otherStyles}`}>
         <Text className={`text-base text-gray-100 font-pmedium`}>{title}</Text>
         <View
            className={`border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4`}>
            <TextInput
               className={"text-base mt-0.5 text-white flex-1 font-pregular "}
               value={value}
               placeholder={placeholder}
               placeholderTextColor={colors.gray.DEFAULT}
               onChangeText={handlChangeText}
               secureTextEntry={showPassword}
               keyboardType={keyboardType}
            />
            <TouchableOpacity onPress={handlePressIcon}>
               <Image
                  source={icons.search}
                  className={`w-5 h-5`}
                  resizeMode="contain"
               />
            </TouchableOpacity>
         </View>
      </View>
   );
};

export default SearchComponent;

const styles = StyleSheet.create({});
