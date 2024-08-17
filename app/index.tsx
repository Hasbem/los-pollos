import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import tw from "twrnc";
import Categories from "./components/Categories";

const Page = () => {
  return (
    <SafeAreaView style={tw`top-8 bg-neutral-200`}>
      <ScrollView>
        <Categories />
        <Text style={tw`text-lg font-bold mb-4 pt-2 px-4`}>
          Découvrez nos produits
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
