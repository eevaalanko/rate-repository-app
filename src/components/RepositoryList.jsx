import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#D3D3D3",
    marginBottom: 20,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;
const RepositoryList = () => {
  const repositories  = useRepositories();
  console.log("repositories:   ", repositories);
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  console.log("repository nodes:   ", repositoryNodes);
  const renderItem = ({ item }) => <RepositoryItem item={item} />;

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
