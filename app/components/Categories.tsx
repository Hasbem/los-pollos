import { categories } from "@/assets/data/home";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import tw from "twrnc";

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <View
          style={tw`w-32 h-6  bg-white m-3 rounded-md items-center justify-center`}
          key={index}
        >
          <Text style={tw`text-center font-bold text-xs`}>{category.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
