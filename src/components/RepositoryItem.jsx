import { View, Image, StyleSheet } from "react-native";
import React from "react";
import Text from './Text';
import theme from "../theme";

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    marginBottom: 15,
    paddingLeft: 6
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
});

const CountItem = ({ label, count, isFirst }) => {
  return (
    <View style={isFirst ? styles.countItemFirst : styles.countItem}>
      <Text style={styles.countItemText}>{count}</Text>
      <Text>{label}</Text>
    </View>
  );
};

const RepositoryItem = ({ item }) => (
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
      <Text testID="fullName" style={styles.nameText} fontSize="subheading">{item.fullName}</Text>
      <Text testID="description" color="textSecondary">{item.description}</Text>
      <View style={styles.languageContainer}>
        <Text testID="language" style={styles.languageText}>{item.language}</Text>
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

export default RepositoryItem;
