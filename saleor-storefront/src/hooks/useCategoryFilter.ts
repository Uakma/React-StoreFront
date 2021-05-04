import { useState } from "react";
import { convertSortByFromString } from "../core/utils";
import { ProductOrderField, OrderDirection } from "gqlTypes/globalTypes";

type ProductOrder = {
  field: ProductOrderField;
  direction: OrderDirection;
};

type AvailablePageSizes = 12 | 9 | 6;

export type Filters = {
  sortBy: ProductOrder;
  pageSize: AvailablePageSizes;
  categories: string[];
};

export type FilterSetters = {
  setSortBy: (option: SortOptionValuesType) => void;
  setPageSize: (pageSize: AvailablePageSizes) => void;
  setSubcategories: (subcategories: string[]) => void;
};

type HookArgs = {
  categoryID: string;
};

type HookReturnType = [Filters, FilterSetters];

export function useCategoryFilter({ categoryID }: HookArgs): HookReturnType {
  const [sortBy, setSort] = useState<ProductOrder>(null);
  const [pageSize, setPageSize] = useState<AvailablePageSizes>(9);
  const [categories, setCategories] = useState<string[]>(
    categoryID ? [categoryID] : []
  );

  const setSubcategories = (subcategories: string[]): void => {
    if (subcategories.length) {
      setCategories(subcategories);
    } else {
      setCategories(categoryID ? [categoryID] : []);
    }
  };
  const setSortBy = (sortOption: SortOptionValuesType): void => {
    setSort(convertSortByFromString(sortOption) as ProductOrder);
  };

  console.log(categories);

  return [
    {
      sortBy,
      pageSize,
      categories,
    },
    {
      setSortBy,
      setPageSize,
      setSubcategories,
    },
  ];
}

export type SortOptionValuesType =
  | null
  | "price"
  | "-price"
  | "name"
  | "-name"
  | "updated_at"
  | "-updated_at";

export const sortOptions = [
  {
    label: "Clear...",
    value: null,
  },
  {
    label: "Price Low-High",
    value: "price",
  },
  {
    label: "Price High-Low",
    value: "-price",
  },
  {
    label: "Name Increasing",
    value: "name",
  },
  {
    label: "Name Decreasing",
    value: "-name",
  },
  {
    label: "Last updated Ascending",
    value: "updated_at",
  },
  {
    label: "Last updated Descending",
    value: "-updated_at",
  },
];

export const pageSizeOptions = [
  { label: "6", value: 6 },
  { label: "9", value: 9 },
  { label: "12", value: 12 },
  { label: "15", value: 15 },
];
