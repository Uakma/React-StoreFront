import React from "react";

import { PageHero } from "../../components";

const Page: React.FC = () => {
  return (
    <>
      <PageHero
        title="Delivery information"
        breadcrumbs={[{ text: "About Us", link: "/about" }]}
      />
      <div className="delivery-page"></div>
    </>
  );
};

export default Page;
