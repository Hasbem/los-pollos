import { fetchProducts } from "@/api/fetch";
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

interface Product {
  id: string;
  name: string;
  img?: string;
  category: string;
}

interface DetailsProps {
  selectedCategory: string;
}

export default function Details({ selectedCategory }: DetailsProps) {
  const addProduct = useBasketStore((state) => state.addProduct);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const getFilteredProducts = () => {
    if (selectedCategory === "Tous") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  };

  return (
    <SafeAreaView style={tw``}>
      <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
        {getFilteredProducts().map((product, index) => (
          <View
            style={tw`w-auto h-auto p-1.5 bg-neutral-200 m-3 flex-row justify-between rounded-lg`}
            key={index}
          >
            {product.img ? (
              <Image
                style={tw`size-24 left-3 rounded-md`}
                source={{ uri: product.img }}
              />
            ) : (
              <View
                style={tw`size-24 left-3 rounded-md bg-gray-300 justify-center items-center`}
              >
                <Text style={tw`text-xs text-gray-500`}>No Image</Text>
              </View>
            )}
            <Text style={tw`text-center font-bold text-xs self-center`}>
              {product.name}
            </Text>
            <TouchableOpacity onPress={() => addProduct(product)}>
              <Ionicons
                name="add-circle-outline"
                size={20}
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
