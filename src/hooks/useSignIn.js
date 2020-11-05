import { SIGN_IN } from "../graphql/mutations";
import AsyncStorage from '@react-native-community/async-storage';
import {useMutation} from "@apollo/react-hooks";

export const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });
    console.log('data: ', data)
    if(data){
      const token = data.authorize.accessToken;
      await AsyncStorage.setItem(token);
    }
    return data
  };
  return [signIn, result];
};
