import React from "react";

import { PageHero } from "../../components";

const Page: React.FC = () => {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        breadcrumbs={[{ text: "About Us", link: "/about" }]}
      />
      <div className="faq-page"></div>
    </>
  );
};

export default Page;
