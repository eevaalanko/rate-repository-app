import { SIGN_IN } from "../graphql/mutations";
import AsyncStorage from '@react-native-community/async-storage';
import {useMutation, useApolloClient} from "@apollo/react-hooks";
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';

export const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(SIGN_IN);
  const apolloClient = useApolloClient();
  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });
    console.log('data: ', data)
    if(data){
      const token = await data.authorize.accessToken;
      await authStorage.setAccessToken(token);
      await apolloClient.resetStore();
    }
    return data
  };
  return [signIn, result];
};
