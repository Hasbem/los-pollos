import { TouchableOpacity, View } from "react-native";
import tw from "twrnc";

export function LoginPage() {
  return (
    <View
      style={tw`w-screen h-screen flex-1 item-center justify-center bg-neutral-200`}
    >
      <form style={tw`flex-col flex h-full w-4/6 self-center`}>
        <p>Username</p>
        <input
          type="text"
          name="username"
          style={tw`bg-neutral-300 rounded-lg border border-neutral-500 h-7 w-full`}
        />
        <p>Password</p>
        <input
          type="text"
          name="username"
          style={tw`bg-neutral-300 rounded-lg border border-neutral-500 h-7 w-full`}
        />
        <TouchableOpacity>
          <button
            style={tw`mt-8 h-10 rounded-lg border-0 bg-neutral-300 font-bold`}
          >
            Connexion
          </button>
        </TouchableOpacity>
      </form>
    </View>
  );
}

export default LoginPage;
