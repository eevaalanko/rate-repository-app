import { gql } from "apollo-boost";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          watchersCount
          ownerName
          fullName
          forksCount
          authorizedUserHasReviewed
          reviewCount
          ownerAvatarUrl
          openIssuesCount
          language
          stargazersCount
          ratingAverage
          url
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query getRepository($id: ID!) {
    repository(id: $id) {
      id
      watchersCount
      ownerName
      fullName
      forksCount
      authorizedUserHasReviewed
      reviewCount
      ownerAvatarUrl
      openIssuesCount
      language
      stargazersCount
      ratingAverage
      url
    }
  }
`;

export const GET_AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;
