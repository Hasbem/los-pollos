import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import tw from "twrnc";

export const Navbar = ({ navigation }) => {
  return (
    <View
      style={tw`h-8 w-4/6 rounded-lg self-center justify-center items-center bg-neutral-400 absolute bottom-3`}
    >
      <View style={tw`flex-row gap-10 justify-center items-center`}>
        <TouchableOpacity>
          <Ionicons
            name="home-outline"
            size={20}
            color={"#262626"}
            style={tw`rounded-full`}
            onPress={() => navigation.navigate("Découvrez nos produits")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="cart-outline"
            size={20}
            color={"#262626"}
            style={tw`rounded-full`}
            onPress={() => navigation.navigate("basket")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="heart-outline"
            size={20}
            color={"#262626"}
            style={tw`rounded-full`}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="person-circle-outline"
            size={20}
            color={"#262626"}
            style={tw`rounded-full`}
            onPress={() => navigation.navigate("Login")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
