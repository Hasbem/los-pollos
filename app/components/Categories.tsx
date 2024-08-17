import { categories } from "@/assets/data/home";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import tw from "twrnc";

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <View style={tw`w-24  bg-white m-3`} key={index}>
          <Image style={tw`size-24`} source={category.img} />
          <Text style={tw`text-center font-bold text-xs`}>{category.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
