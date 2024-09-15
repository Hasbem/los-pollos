import { categories } from "@/assets/data/home";
import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

interface CategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export default function Categories({ onSelectCategory }: CategoriesProps) {
  return (
    <ScrollView
      style={tw`bg-neutral-300 rounded-md w-96 self-center`}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          style={tw`w-32 h-6 bg-white m-3 rounded-md items-center justify-center`}
          key={index}
          onPress={() => onSelectCategory(category.id || "Tous")}
        >
          <Text style={tw`text-center font-bold text-xs`}>{category.text}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
