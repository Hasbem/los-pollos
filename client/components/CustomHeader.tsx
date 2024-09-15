import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";

const CustomHeader = () => {
  return (
    <SafeAreaView style={tw`bg-neutral-200 p-4 `}>
      <View style={tw`flex-1 items-center flex-row gap-4 bold justify-between`}>
        <TouchableOpacity>
          <Image
            style={tw`size-10 rounded-full`}
            source={require("../assets/images/logo.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex-1`}>
          <Text style={tw`font-bold text-sm text-neutral-800`}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="person-outline"
            size={20}
            color={"#262626"}
            style={tw`bg-neutral-300 rounded-full p-3`}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
