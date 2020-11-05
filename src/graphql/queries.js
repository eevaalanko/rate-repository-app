import { gql } from "apollo-boost";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          watchersCount
          ownerName
          fullName
          forksCount
          authorizedUserHasReviewed
          reviewCount
          ownerAvatarUrl
          openIssuesCount
          language
        }
      }
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
