import React from "react";

import { TypeCategoryIDQuery } from "../queries";
import View from "./View";
import { useParams } from "react-router";

type Params = {
  slug: string;
};

const ViewWrapper: React.FC = () => {
  const params = useParams<Params>();

  if (params.slug === "all") {
    return <View all />;
  }

  return (
    <TypeCategoryIDQuery variables={{ slug: params.slug }}>
      {({ data }) => {
        return <View categoryID={data.category.id} />;
      }}
    </TypeCategoryIDQuery>
  );
};

export default ViewWrapper;
