import React, { useState, ChangeEvent } from "react";
import "./scss/category-filter.scss";

import {
  TypedCategorySubcategoriesQuery,
  TypedMainCategoriesQuery,
} from "./queries";
import { Checkbox } from "..";

type Props = {
  categoryID: string;
  categories: string[];
  onChange: (categories: string[]) => void;
};

const CategoryFilters: React.FC<Props> = ({
  categoryID,
  categories,
  onChange,
}) => {
  const [subcategoryIDs, setSubcategoryIDs] = useState({});

  return (
    <div className="category-filter">
      <h4 className="category-filter__title">Category</h4>
      <ul className="category-filter__categories">
        {categoryID ? (
          <TypedCategorySubcategoriesQuery variables={{ id: categoryID }}>
            {({ data }) => {
              const subcategories = data.category.children.edges.map(
                edge => edge.node
              );

              const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
                const updatedSubcategoryIDs = {
                  ...subcategoryIDs,
                  [e.target.value]: e.target.checked,
                };
                setSubcategoryIDs(updatedSubcategoryIDs);

                const checkedIds: string[] = Object.keys(
                  updatedSubcategoryIDs
                ).filter(key => updatedSubcategoryIDs[key]);

                onChange(checkedIds);
              };

              return subcategories.map(subcategory => (
                <li className="category-filter__category" key={subcategory.id}>
                  <Checkbox
                    value={subcategory.id}
                    checked={!!subcategoryIDs[subcategory.id]}
                    onChange={handleChange}
                  />
                  <span className="category-filter__category__name">
                    {subcategory.name}
                  </span>
                </li>
              ));
            }}
          </TypedCategorySubcategoriesQuery>
        ) : (
          <TypedMainCategoriesQuery>
            {({ data }) => {
              const subcategories = data.categories.edges.map(
                edge => edge.node
              );

              const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
                const updatedSubcategoryIDs = {
                  ...subcategoryIDs,
                  [e.target.value]: e.target.checked,
                };
                setSubcategoryIDs(updatedSubcategoryIDs);

                const checkedIds: string[] = Object.keys(
                  updatedSubcategoryIDs
                ).filter(key => updatedSubcategoryIDs[key]);

                onChange(checkedIds);
              };

              return subcategories.map(subcategory => (
                <li className="category-filter__category" key={subcategory.id}>
                  <label>
                    <input
                      type="checkbox"
                      value={subcategory.id}
                      checked={!!subcategoryIDs[subcategory.id]}
                      onChange={handleChange}
                    />
                    <span className="checkbox"></span>
                  </label>
                  <span className="category-filter__category__name">
                    {subcategory.name}
                  </span>
                </li>
              ));
            }}
          </TypedMainCategoriesQuery>
        )}
      </ul>
    </div>
  );
};

export default CategoryFilters;
