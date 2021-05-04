import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import { Footer } from "./gqlTypes/Footer";

const footer = gql`
  query Footer {
    shop {
      navigation {
        main {
          id
          items {
            id
            name
          }
        }
      }
    }
  }
`;

export const TypedFooterQuery = TypedQuery<Footer, {}>(footer);
