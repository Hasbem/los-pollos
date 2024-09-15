import { createNativeStackNavigator } from "@react-navigation/native-stack";
import basket from "../screens/basket";
import Home from "../screens/Home";
import LoginPage from "../screens/LoginPage";

const Stack = createNativeStackNavigator();
const Page = () => {
  return (
    <Stack.Navigator initialRouteName="Découvrez nos produits">
      <Stack.Screen name="Découvrez nos produits" component={Home} />
      <Stack.Screen name="basket" component={basket} />
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  );
};

export default Page;
