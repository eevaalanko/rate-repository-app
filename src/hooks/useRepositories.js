import { useState, useEffect } from "react";
import Constants from "expo-constants";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  console.log("apollo uri: ", Constants.manifest.extra.apolloUri);

  const fetchRepositories = async () => {
    setLoading(true);

    // Replace the IP address part with your own IP address!
    const response = await fetch(
      Constants.manifest.extra.apolloUri + "/api/repositories"
    );
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
