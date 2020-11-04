import { gql } from "apollo-boost";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      pageInfo {
        totalCount
        endCursor
        hasNextPage
      }
      edges {
        node {
          watchersCount
          reviews {
            edges {
              node {
                user {
                  username
                }
              }
            }
          }
          ownerName
          fullName
          forksCount
          authorizedUserHasReviewed
          reviewCount
          ownerAvatarUrl
          openIssuesCount
        }
      }
    }
  }
`;

// other queries...
