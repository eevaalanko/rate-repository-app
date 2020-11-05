import ApolloClient from "apollo-boost";
import Constants from "expo-constants";

const createApolloClient = () => {
  console.log("apollo uri: ", Constants.manifest.extra.apolloUri);
  return new ApolloClient({
    uri: Constants.manifest.extra.apolloUri
  });
};

export default createApolloClient;
