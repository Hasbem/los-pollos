import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import tw from "twrnc";
import Categories from "./components/Categories";
import Details from "./components/Details";

const Page = () => {
  return (
    <SafeAreaView style={tw`flex-1 top-2`}>
      <View>
        <Categories />
      </View>
      <ScrollView
        contentContainerStyle={tw`pb-8`}
        showsVerticalScrollIndicator={false}
      >
        <Text style={tw`text-lg font-bold mb-4 pt-2 px-4`}>
          Découvrez nos produits
        </Text>
        <Details />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
