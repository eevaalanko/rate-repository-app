import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import * as Linking from "expo-linking";
import { useParams } from "react-router-native";
import React from "react";
import Text from "./Text";
import theme from "../theme";
import { useHistory } from "react-router-dom";
import useRepository from "../hooks/useRepository";

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    marginBottom: 15,
    paddingLeft: 6,
  },
  avatarContainer: {
    flexGrow: 0,
    marginRight: 15,
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  countContainer: {
    flexDirection: "row",
    paddingRight: 100,
  },
  countItem: {
    flexGrow: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  countItemFirst: {
    flexGrow: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 15,
  },
  countItemText: {
    fontWeight: "bold",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  nameText: {
    marginBottom: 2,
    fontSize: theme.fontSizes.title,
    fontWeight: theme.fontWeights.bold,
  },
  languageContainer: {
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 8,
  },
  languageText: {
    color: "white",
    backgroundColor: "#0366d6",
    borderRadius: 7,
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  button: {
    flexGrow: 0,
    marginRight: 15,
    marginLeft: 6,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});

const CountItem = ({ label, count, isFirst }) => {
  return (
    <View style={isFirst ? styles.countItemFirst : styles.countItem}>
      <Text style={styles.countItemText}>{count}</Text>
      <Text>{label}</Text>
    </View>
  );
};

export const RepositoryItem = ({ item }) => (
  <View style={styles.topContainer}>
    <View style={styles.avatarContainer}>
      <Image
        source={{
          uri: item.ownerAvatarUrl,
        }}
        style={styles.avatar}
      />
    </View>
    <View style={styles.contentContainer}>
      <Text testID="fullName" style={styles.nameText} fontSize="subheading">
        {item.fullName}
      </Text>
      <Text testID="description" color="textSecondary">
        {item.description}
      </Text>
      <View style={styles.languageContainer}>
        <Text testID="language" style={styles.languageText}>
          {item.language}
        </Text>
      </View>
      <View style={styles.countContainer}>
        <CountItem count={item.stargazersCount} label="Stars" isFirst />
        <CountItem count={item.forksCount} label="Forks" />
        <CountItem count={item.reviewCount} label="Reviews" />
        <CountItem count={item.ratingAverage} label="Rating" />
      </View>
    </View>
  </View>
);

export const TouchableRepositoryItem = ({ item }) => {
  let history = useHistory();
  const onPress = () => {
    history.push(`/${item.id}`);
  };
  return (
    <TouchableOpacity onPress={onPress} testID="touch">
      <RepositoryItem item={item} />
    </TouchableOpacity>
  );
};

export const SingleRepositoryItem = () => {
  const { id } = useParams();
  const item = useRepository(id);
  const openLink = () => {
    console.log("LINKKK", item);
    Linking.openURL(item.url);
  };
  console.log("item ", item);
  if (item)
    return (
      <div>
        <RepositoryItem item={item} />
        <View style={styles.button}>
          <TouchableWithoutFeedback onPress={openLink} testID="submitButton">
            <Text style={styles.buttonText}>Open in GitHub</Text>
          </TouchableWithoutFeedback>
        </View>
      </div>
    );
  else return null;
};
