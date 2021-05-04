import React, { useState } from "react";

import { TopHeader, MainMenu, MobileMenu, MainCategoriesType } from "..";
import { TypedHeaderQuery } from "./queries";

type Props = {
  mainCategories: MainCategoriesType;
};

const Header: React.FC<Props> = ({ mainCategories }) => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return (
    <header>
      <TypedHeaderQuery renderOnError displayLoader={false}>
        {({ data }) => {
          const navigation = data.shop.navigation;
          return (
            <>
              <TopHeader items={navigation.secondary.items} />
              <MainMenu
                mainCategories={mainCategories}
                toggleMobileMenu={() =>
                  setIsMobileMenuOpened(!isMobileMenuOpened)
                }
              />
              <MobileMenu
                mainCategories={mainCategories}
                opened={isMobileMenuOpened}
                handleClose={() => setIsMobileMenuOpened(false)}
              />
            </>
          );
        }}
      </TypedHeaderQuery>
    </header>
  );
};

export default Header;
