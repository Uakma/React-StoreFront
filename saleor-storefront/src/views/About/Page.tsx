import React from "react";

import { PageHero } from "../../components";

const Page: React.FC = () => {
  return (
    <>
      <PageHero
        title="About us"
        breadcrumbs={[{ text: "About Us", link: "/about" }]}
      />
      <div className="about-page"></div>
    </>
  );
};

export default Page;
