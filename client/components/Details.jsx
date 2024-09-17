import useBasketStore from "@/store/BasketStore";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import { fetchProducts } from "../api/fetch";
import Categories from "./Categories"; // Assurez-vous que le chemin est correct

export default function Details() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      const uniqueCategories = [
        "Tous",
        ...new Set(data.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    });
  }, []);

  const addProduct = useBasketStore((state) => state.addProduct);

  const getFilteredProducts = () => {
    if (selectedCategory === "Tous") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      {/* Affichage des catégories */}
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Affichage des produits filtrés */}
      <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
        {getFilteredProducts().map((product) => (
          <View
            style={tw`w-auto h-auto p-1.5 bg-neutral-200 m-3 flex-row justify-between rounded-lg`}
            key={product.product_id}
          >
            {product.img ? (
              <Image
                style={tw`w-24 h-24 left-3 rounded-md`}
                source={{ uri: product.img }}
              />
            ) : (
              <View
                style={tw`w-24 h-24 left-3 rounded-md bg-gray-300 justify-center items-center`}
              >
                <Text style={tw`text-xs text-gray-500`}>No Image</Text>
              </View>
            )}

            <View style={tw`flex-1 justify-center px-3`}>
              <Text style={tw`font-bold text-sm`}>{product.name}</Text>
              <Text style={tw`text-xs text-gray-500`}>€{product.price}</Text>
            </View>

            <TouchableOpacity onPress={() => addProduct(product)}>
              <Ionicons
                name="add-circle-outline"
                size={24}
                color={"#262626"}
                style={tw`rounded-full top-3/4 right-1`}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
