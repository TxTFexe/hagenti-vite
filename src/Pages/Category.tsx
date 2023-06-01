import React from "react";
import { Card, Pagination, Sortings, Filters } from "../Components";
import { useSelector } from "react-redux";
import Skeleton from "../Components/ItemBlock/Skeleton";
import { fetchProducts } from "../redux/slices/productsSlice";
import { useParams } from "react-router-dom";
import { RootState, useAppDispath } from "../redux/store";
//import { useNavigate } from "react-router-dom";
//import qs from "qs";

const Category: React.FC = () => {
  const { categoryName } = useParams();
  const [currentPage, setCurrentPage] = React.useState(1);

  //const navigate = useNavigate();

  const dispatch = useAppDispath();
  const searchValue = useSelector(
    (state: RootState) => state.search.searchValue
  );
  const { items, status } = useSelector((state: RootState) => state.products);
  const { sort } = useSelector((state: RootState) => state.filter);

  // React.useEffect(() => {
  //   dispatch(setCurrentPage(1));
  // }, []);

  //Получение данных из redux
  const getProducts = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryName?.toUpperCase()!;

    dispatch(
      fetchProducts({
        sortBy,
        order,
        currentPage,
        searchValue,
        category,
      })
    );

    window.scrollTo(0, 0);
  };

  //Создание строки с запросом
  /*React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sort.sortProperty,
      currentPage,
      searchValue,
    });
    navigate(`?${queryString}`);
  }, [[currentPage, sort.sortProperty, searchValue]]);*/

  //Смена страницы на redux
  const onChangePage = React.useCallback((number: number) => {
    setCurrentPage(number);
  }, []);

  //Отлавливание изменений для данных
  React.useEffect(() => {
    getProducts();
  }, [currentPage, sort.sortProperty, searchValue]);

  //Вывод данных на странице
  const videocards = items
    .filter((obj) => {
      if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => (
      <Card
        key={obj.id}
        id={obj.id}
        pic={obj.pic}
        name={obj.name}
        price={obj.price}
        count={obj.count}
        type={obj.type}
      />
    ));

  return (
    <div className="container">
      <div className="category__header">
        <h3>{categoryName?.toUpperCase()}</h3>
      </div>
      <Sortings value={sort} />
      <div className="category-grid">
        {/* Сделать фильтры */}
        <Filters />
        <div className="category-content">
          {status === "loading"
            ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
            : videocards}
        </div>
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Category;
