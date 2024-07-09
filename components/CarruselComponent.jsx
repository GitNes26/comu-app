import { FlatList, Text } from "react-native";
import React from "react";

const CarruselComponent = ({ data = [] }) => {
   return (
      <FlatList
         data={data}
         // keyExtractor={({ item }) => item.id}
         renderItem={({ item }) => (
            <Text className={"text-3xl text-white"}>{item.id}</Text>
         )}
         horizontal
      />
   );
};

export default CarruselComponent;
