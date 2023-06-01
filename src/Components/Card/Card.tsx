import React from "react";
import { Link } from "react-router-dom";
import { CartItem, addItem } from "../../redux/slices/cartSlice";
import { RootState, useAppDispath } from "../../redux/store";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  addFavoriteItem,
  removeFavoriteItem,
} from "../../redux/slices/favoriteSlice";
import cardStyles from "./Card.module.scss";

type CardProps = {
  id: string;
  pic: string;
  name: string;
  price: number;
  count: number;
  type: string;
};

const Card: React.FC<CardProps> = ({ id, pic, name, price, count, type }) => {
  const dispatch = useAppDispath();
  const [currentShowImage, setCurrentShowImage] = React.useState<number>(0);
  const [onFavorite, setOnFavorite] = React.useState(false);

  const item: CartItem = {
    id,
    name,
    price,
    pic,
    count,
    type,
  };

  const onCLickAdd = () => {
    dispatch(addItem(item));
  };

  const onClickAddToFavorite = () => {
    dispatch(addFavoriteItem(item));
    setOnFavorite(true);
  };

  const onClickDeleteFromFavorite = () => {
    dispatch(removeFavoriteItem(id));
    setOnFavorite(false);
  };

  const [slides, setSlides] = React.useState([
    pic,
    "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26165",
    "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26168",
    "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26169",
  ]);

  return (
    <div className="category-content__item">
      <div
        onMouseLeave={() => {
          setCurrentShowImage(0);
        }}
        className={cardStyles.category_content__item__image}
      >
        <Link to={"/gpu" + "/" + id}>
          <img src={slides[currentShowImage]} alt={name} draggable="false" />
          <div className={cardStyles.category_content__item__picture__overlay}>
            {[...new Array(4)].map((_, index) => (
              <div
                key={index}
                onMouseEnter={() => setCurrentShowImage(index)}
              ></div>
            ))}
          </div>
          <div className="dot__container">
            {[...new Array(4)].map((_, index) => (
              <span
                key={index}
                className={
                  currentShowImage === index ? "dot dot__active" : "dot"
                }
              ></span>
            ))}
          </div>
        </Link>
      </div>
      <div className="category-content__title_and_description">
        <div className={cardStyles.category_content__title}>
          <Link to={"/gpu" + "/" + id} title={name}>
            {name}
          </Link>
          {onFavorite ? (
            <AiFillHeart
              className={cardStyles.heart__icon__active}
              onClick={onClickDeleteFromFavorite}
            />
          ) : (
            <AiOutlineHeart
              className={cardStyles.heart__icon}
              onClick={onClickAddToFavorite}
            />
          )}
        </div>
        <span>Видеочипсет: NVIDIA GeForce RTX 3080, 1830 МГц</span>
        <span>Память: 12288 МБ GDDR6X, 19000 МГц</span>
        <span>Интерфейс: PCI-E 4.0</span>
        <span>Техпроцесс: 8 нм</span>
        <span>Разъемы: Display Port x 3</span>
      </div>
      <div className="category-content__buy__block">
        <p>{price.toLocaleString()}₽</p>
        <a onClick={onCLickAdd} className="category-content__item__button">
          В корзину
        </a>
      </div>
    </div>
  );
};

export default Card;
