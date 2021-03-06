import React,  { useContext }  from "react";
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import theme from "../theme";
import Text from "./Text";
import useAuthorizedUser from "../hooks/useAuthoriserUser";
import AuthStorageContext from "../contexts/AuthStorageContext";
import {useApolloClient} from "@apollo/react-hooks";

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: 10,
    backgroundColor: "#24292e",
    marginBottom: 20,
  },
  text: { color: "white", fontSize: 24, fontWeight: "700" },
  tabTouchable: {
    flexGrow: 0,
  },
  tabContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: theme.fontSizes.subheading,
    color: "white",
  },
  scrollView: {
    flexDirection: 'row',
  },
});

const AppBarTab = ({ children, ...props }) => {
  return (
    <TouchableWithoutFeedback style={styles.tabTouchable} {...props}>
      <View style={styles.tabContainer}>
        <Text fontWeight="bold" style={styles.tabText}>
          {children}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const AppBar = () => {
  const user = useAuthorizedUser()
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  console.log('user: ', user)
  const signOut = async () => {
    await authStorage.removeAccessToken();
    // with incorrect apolloClient as above, re-renders do not occur
    await apolloClient.resetStore();
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to="/" component={AppBarTab}>
          Repositories
        </Link>
        {user ? (
            <Link to="/" component={AppBarTab} onPress={() => signOut()}>
              Sign out
            </Link>
        ) : (
            <Link to="/signIn" component={AppBarTab}>
              Sign in
            </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
