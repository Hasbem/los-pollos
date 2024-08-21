import { menus } from "@/assets/data/home";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import tw from "twrnc";

interface DetailsProps {
  selectedCategory: string;
}

export default function Details({ selectedCategory }: DetailsProps) {
  const getFilteredMenus = () => {
    if (selectedCategory === "Tous") {
      return menus;
    }
    return menus.filter((menu) => menu.id === selectedCategory);
  };

  return (
    <SafeAreaView style={tw``}>
      <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
        {getFilteredMenus().map((menu, index) => (
          <View
            style={tw`w-auto h-auto p-1.5 bg-neutral-200 m-3 flex-row justify-between rounded-lg`}
            key={index}
          >
            {menu.img ? (
              <Image style={tw`size-24 left-3 rounded-md`} source={menu.img} />
            ) : (
              <View
                style={tw`size-24 left-3 rounded-md bg-gray-300 justify-center items-center`}
              >
                <Text style={tw`text-xs text-gray-500`}>No Image</Text>
              </View>
            )}
            <Text style={tw`text-center font-bold text-xs self-center`}>
              {menu.text}
            </Text>
            <Ionicons
              name="add-circle-outline"
              size={20}
              color={"#262626"}
              style={tw`rounded-full top-3/4 right-1`}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
