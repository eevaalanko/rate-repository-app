import { useContext } from "react";
import { SIGN_IN } from "../graphql/mutations";
import AuthStorageContext from "../contexts/AuthStorageContext";
import { useMutation } from "@apollo/client";

export const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });
    const token = data.authorize.accessToken;
    await authStorage.setAccessToken(token);
    await apolloClient.resetStore();
  };

  return [signIn, result];
};
