import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";

export const contactPageQuery = gql``;

export const TypedContactPageQuery = TypedQuery<{}, {}>(contactPageQuery);
