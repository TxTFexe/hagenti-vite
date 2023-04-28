import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Sort, setSort } from "../redux/slices/filterSlice";
import { RootState, useAppDispath } from "../redux/store";

type SortProperty = "popular" | "-price" | "price";

type SortProps = {
  value: Sort;
};

const Sortings: React.FC<SortProps> = React.memo(({ value }) => {
  const dispatch = useAppDispath();
  const [activeIndex, setActiveIndex] = useState<number>();

  const fix = value;

  type SortItem = {
    name: string;
    sortProperty: SortProperty;
  };

  const sortList: SortItem[] = [
    { name: "Популярные", sortProperty: "popular" },
    { name: "Сначала дешевле", sortProperty: "-price" },
    { name: "Сначала дороже", sortProperty: "price" },
    //{name: 'Рейтинг (DESK)', sortProperty: 'rating'},
  ];

  const onClickSort = (obj: SortItem, i: number) => {
    dispatch(setSort(obj));
    setActiveIndex(i);
  };

  return (
    <>
      <div className="category-filters">
        <span>Сортировать по:</span>
        {sortList.map((obj, i) => (
          <a
            onClick={() => onClickSort(obj, i)}
            key={i}
            className={activeIndex === i ? "active" : ""}
          >
            {obj.name}
          </a>
        ))}
      </div>
    </>
  );
});

export default Sortings;
