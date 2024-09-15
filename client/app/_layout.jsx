import { Stack, useNavigation } from "expo-router";
import { SafeAreaView, View } from "react-native";
import "react-native-reanimated";
import tw from "twrnc";
import CustomHeader from "../components/CustomHeader";
import Navbar from "../components/Navbar";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex-1`}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              header: () => <CustomHeader />,
            }}
          />
        </Stack>
      </View>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
}
