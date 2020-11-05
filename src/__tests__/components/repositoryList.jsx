import React from "react";
import { RepositoryListContainer } from "../../components/RepositoryList";

import { render } from "@testing-library/react-native";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      const { debug, queryAllByTestId, queryAllByText } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      const fullNames = queryAllByTestId("fullName");
      const languages = queryAllByTestId("language");
      const descriptions = queryAllByTestId("description");
      const stargazersCounts = queryAllByText("Stars");
      const forksCounts = queryAllByText("Forks");
      const reviewCounts = queryAllByText("Reviews");
      const ratingAverages = queryAllByText("Rating");

      expect(fullNames[0]).toHaveTextContent("jaredpalmer/formik");

      expect(languages[0]).toHaveTextContent("TypeScript");
      expect(languages[1]).toHaveTextContent("JavaScript");

      expect(descriptions[0]).toHaveTextContent(
        "Build forms in React, without the tears"
      );
      expect(stargazersCounts[0].parent.parent).toHaveTextContent("21856");
      expect(forksCounts[0].parent.parent).toHaveTextContent("1619");
      expect(reviewCounts[0].parent.parent).toHaveTextContent("3");
      expect(ratingAverages[0].parent.parent).toHaveTextContent("88");
    });
  });
});
