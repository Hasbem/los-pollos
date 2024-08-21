import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import tw from "twrnc";
import Categories from "./components/Categories";
import Details from "./components/Details";

const Page = () => {
  return (
    <SafeAreaView style={tw`top-8 `}>
      <ScrollView style={tw`bg-neutral-200`}>
        <Categories />
        <Text style={tw`text-lg font-bold mb-4 pt-2 px-4`}>
          Découvrez nos produits
        </Text>
      </ScrollView>
      <View style={tw`top-8`}>
        <Details />
      </View>
    </SafeAreaView>
  );
};

export default Page;
