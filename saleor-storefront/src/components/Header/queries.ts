import gql from "graphql-tag";
import { TypedQuery } from "../../core/queries";
import { Header } from "./gqlTypes/Header";

export const header = gql`
  fragment MainMenuSubItem on MenuItem {
    id
    name
    category {
      id
      slug
      name
    }
    url
    collection {
      id
      slug
      name
    }
    page {
      slug
    }
    parent {
      id
    }
  }

  query Header {
    shop {
      navigation {
        main {
          id
          items {
            ...MainMenuSubItem
            id
            name
            children {
              ...MainMenuSubItem
              id
              name
              children {
                ...MainMenuSubItem
                id
                name
              }
            }
          }
        }
        secondary {
          id
          items {
            ...MainMenuSubItem
            id
            name
          }
        }
      }
    }
  }
`;

export const TypedHeaderQuery = TypedQuery<Header, {}>(header);
