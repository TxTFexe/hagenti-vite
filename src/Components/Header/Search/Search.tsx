import React, { ChangeEventHandler } from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import searchStyles from "./Search.module.scss";
import debounce from "lodash.debounce";
import { setSearch } from "../../../redux/slices/searchSlice";
import { RootState } from "../../../redux/store";
import { Link } from "react-router-dom";

const Search: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: RootState) => state.search.searchValue
  );
  const [value, setValue] = React.useState("");
  const [suggestions, setSuggestions] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const searchRef = React.useRef<HTMLDivElement>(null);

  console.log(suggestions);

  const onClickClear = () => {
    dispatch(setSearch(""));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearch(str));
    }, 300),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  React.useEffect(() => {
    document.body.addEventListener("click", (e: any) => {
      if (!e.composedPath().includes(searchRef.current)) {
        setSuggestions(false);
      } else if (
        e.target.parentElement.className === searchStyles.suggestions
      ) {
        setSuggestions(false);
      } else {
        setSuggestions(true);
      }
    });
  }, []);

  return (
    <div ref={searchRef} className={searchStyles.search__block}>
      <div className={searchStyles.nav__search}>
        <form className="nav-search-form">
          <input
            value={value}
            ref={inputRef}
            onChange={onChangeInput}
            type="text"
            placeholder="Поиск"
            className={searchStyles.search}
          ></input>
          {value && (
            <button
              onClick={onClickClear}
              className={searchStyles.search_markX__icon}
              type="submit"
            >
              <HiOutlineXMark />
            </button>
          )}
          <button type="submit" className={searchStyles.search_icon}>
            <FaSearch />
          </button>
        </form>
      </div>
      {suggestions && (
        <div className={searchStyles.suggestions__container}>
          <div className={searchStyles.suggestions}>
            <Link to={"/GPU/1"}>GIGABYTE AORUS GeForce RTX 3080</Link>
            <Link to={"/GPU/2"}>GIGABYTE AORUS GeForce RTX 3080Ti</Link>
            <Link to={"/GPU/3"}>GIGABYTE AORUS GeForce RTX 3080</Link>
            <Link to={"/GPU/4"}>GIGABYTE AORUS GeForce RTX 3080Ti</Link>
          </div>
        </div>
      )}
    </div>
  );
});
export default Search;
