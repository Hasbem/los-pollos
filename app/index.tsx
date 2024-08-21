import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import tw from "twrnc";
import Categories from "./components/Categories"; // Chemin correct vers le fichier Categories
import Details from "./components/Details"; // Chemin correct vers le fichier Details

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  return (
    <SafeAreaView style={tw`flex-1 top-2`}>
      <View>
        <Categories onSelectCategory={setSelectedCategory} />
      </View>
      <ScrollView
        contentContainerStyle={tw`pb-8`}
        showsVerticalScrollIndicator={false}
      >
        <Text style={tw`text-lg font-bold mb-4 pt-2 px-4`}>
          Découvrez nos produits
        </Text>
        <Details selectedCategory={selectedCategory} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
