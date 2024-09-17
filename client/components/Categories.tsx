import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

interface CategoriesProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

export default function Categories({
  categories = [],
  onSelectCategory,
  selectedCategory,
}: CategoriesProps) {
  return (
    <View style={tw`bg-neutral-300 rounded-md w-96 self-center`}>
      <ScrollView
        style={tw`h-13`} // Définir une hauteur fixe pour la barre de filtres
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            style={tw.style(
              `w-32 h-7 m-3 rounded-md items-center justify-center`,
              category === selectedCategory ? "bg-blue-500" : "bg-white"
            )}
            key={index}
            onPress={() => onSelectCategory(category)}
          >
            <Text
              style={tw.style(
                `text-center font-bold text-xs`,
                category === selectedCategory ? "text-white" : "text-black"
              )}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
