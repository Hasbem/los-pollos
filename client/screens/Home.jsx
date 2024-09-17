import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import tw from "twrnc";
import { fetchProducts } from "../api/fetch";
import Details from "../components/Details";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch products to get the list of categories
    fetchProducts().then((data) => {
      const uniqueCategories = [
        "Tous",
        ...new Set(data.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    });
  }, []);

  return (
    <SafeAreaView style={tw`flex-1 top-2`}>
      <ScrollView
        contentContainerStyle={tw`pb-8`}
        showsVerticalScrollIndicator={false}
      >
        <Details selectedCategory={selectedCategory} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
