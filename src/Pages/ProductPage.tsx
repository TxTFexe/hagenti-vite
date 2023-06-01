import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { addItem } from "../redux/slices/cartSlice";
import { useAppDispath } from "../redux/store";
import { addFavoriteItem } from "../redux/slices/favoriteSlice";
import { Product } from "../redux/slices/favoriteSlice";

const ProductPage: React.FC = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = React.useState<Product>();
  const [showReviews, setShowReviews] = useState(5);
  const { productId, categoryName } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          `https://6395a92790ac47c680703bcd.mockapi.io/${categoryName?.toUpperCase()}/${productId}`
        );
        setProduct(data);
        setSlides([
          data.pic,
          "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26165",
          "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26168",
          "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26169",
        ]);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    }

    fetchProduct();
  }, [productId]);

  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const onCLickAdd = ({ id, name, price, pic, count, type }: Product) => {
    const item = {
      id,
      name,
      price,
      pic,
      count,
      type,
    };
    dispatch(addItem(item));
  };

  const onClickAddToFavorite = ({
    id,
    name,
    price,
    pic,
    count,
    type,
  }: Product) => {
    const item = {
      id,
      name,
      price,
      pic,
      count,
      type,
    };
    dispatch(addFavoriteItem(item));
  };

  const sections = ["Характеристики", "Отзывы"];

  const [slides, setSlides] = React.useState([
    "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26166",
    "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26165",
    "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26168",
    "https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26169",
  ]);

  const [currentSection, setCurrentSection] = React.useState(0);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [numberSlide, setNumberSlide] = React.useState(1);
  const slider = React.useRef<HTMLDivElement>(null);

  const swapImages = (currSlide: number) => {
    const slidesPositions = [0, -480, -970, -1460];
    setCurrentSlide(slidesPositions[currSlide - 1]);
    setNumberSlide(currSlide);
  };

  const rightArrowClick = () => {
    if (numberSlide < 4) {
      swapImages(numberSlide + 1);
    }
  };

  const leftArrowClick = () => {
    if (!(numberSlide < 2)) {
      swapImages(numberSlide - 1);
    }
  };

  const setSection = (i: number) => {
    setCurrentSection(i);
    window.scrollTo({
      top: 720,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    if (slider.current)
      slider.current.style.transform = `translateX(${currentSlide}px)`;
  }, [currentSlide]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="container">
        <div className="loader__container">
          <div className="loader">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            <div className="bar4"></div>
            <div className="bar5"></div>
            <div className="bar6"></div>
            <div className="bar7"></div>
            <div className="bar8"></div>
            <div className="bar9"></div>
            <div className="bar10"></div>
            <div className="bar11"></div>
            <div className="bar12"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="product_grid">
        <div className="image_block block_bg">
          <div className="product_images">
            <div className="image_display">
              <div ref={slider} className="image_showcase">
                {slides.map((slide, i) => {
                  return <img src={slide} key={i}></img>;
                })}
                {/* <img src={product.pic}></img>
                <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26165"></img>
                <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26168"></img>
                <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26169"></img> */}
              </div>
            </div>
          </div>
          <div className="image_select">
            <button
              onClick={() => leftArrowClick()}
              className="product_images_right_button"
            >
              {"◀"}
            </button>
            <div
              className={
                numberSlide === 1 ? "image_item active_image" : "image_item"
              }
            >
              <a onClick={() => swapImages(1)}>
                <img src={product.pic}></img>
              </a>
            </div>
            <div
              className={
                numberSlide === 2 ? "image_item active_image" : "image_item"
              }
            >
              <a onClick={() => swapImages(2)}>
                <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26165"></img>
              </a>
            </div>
            <div
              className={
                numberSlide === 3 ? "image_item active_image" : "image_item"
              }
            >
              <a onClick={() => swapImages(3)}>
                <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26168"></img>
              </a>
            </div>
            <div
              className={
                numberSlide === 4 ? "image_item active_image" : "image_item"
              }
            >
              <a onClick={() => swapImages(4)}>
                <img src="https://static.gigabyte.com/StaticFile/Image/Global/303d4516244d408a66af70a74dfb8fe6/Product/26169"></img>
              </a>
            </div>
            <button
              onClick={() => rightArrowClick()}
              className="product_images_left_button"
            >
              {"▶"}
            </button>
          </div>
        </div>
        <div className="price_block_container">
          <div className="product_header sticky">
            <h2>
              {product.type} {product.name}
            </h2>
            <div className="price_block_bg">
              <div className="price-n-functions flex-row">
                <h3>{Number(product.price).toLocaleString()}₽</h3>
                <h4>{Math.round(product.price / 4).toLocaleString()}₽ x 4</h4>
                <span>Долями</span>
                <button onClick={() => onClickAddToFavorite(product)}>
                  <AiOutlineHeart />
                </button>
              </div>
              <br />
              <a
                className="product_page__button"
                onClick={() => onCLickAdd(product)}
              >
                Добавить в корзину
              </a>
              <br />
              <h3>Характеристики:</h3>
              <div className="specs">
                <ul>
                  <li>
                    <span>Видеочипсет: </span>
                    <span>NVIDIA GeForce RTX 3080, 1830 МГц</span>
                  </li>
                  <li>
                    <span>Память:</span> <span>12288 МБ GDDR6X, 19000 МГц</span>
                  </li>
                  <li>
                    <span>Интерфейс:</span> <span>PCI-E 4.0</span>
                  </li>
                  <li>
                    <span>Техпроцесс:</span> <span>8 нм</span>
                  </li>
                  <li>
                    <span>Разъемы:</span> <span>Display Port x 3</span>
                  </li>
                  <li>
                    <span>Питание:</span> <span>8+8 pin</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product_bot">
        <div className="product__description__block">
          <h1 className="product__description__title">Описание:</h1>
          <span>
            Sed hendrerit fermentum nisi, iaculis vestibulum mauris laoreet a.
            Fusce imperdiet malesuada nibh, a cursus mauris molestie eu. Sed
            eget purus vel diam pretium semper. Nullam velit odio, iaculis ac
            mattis quis, pulvinar et lacus. Phasellus consequat tristique arcu,
            quis bibendum odio scelerisque non. Curabitur in lorem ut tellus
            mattis placerat. Mauris viverra lorem non odio rhoncus ultricies.
            Vestibulum felis diam, luctus non cursus eget, ullamcorper non nibh.
            Cras ultricies a massa ac ornare. Aenean vitae risus ut orci varius
            tincidunt a et augue. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Praesent commodo, arcu ac imperdiet vehicula,
            est ex hendrerit diam, ac fringilla ante lectus id augue. Proin diam
            lorem, porta ut nisi in, dapibus tincidunt arcu. In auctor ex non
            sem mollis, pulvinar malesuada diam lobortis.
          </span>
        </div>
        <div className="product__sections">
          {sections.map((section, i) => (
            <p
              key={i}
              className={
                currentSection == i
                  ? "product__sections__title active__product__section"
                  : "product__sections__title"
              }
              onClick={() => setSection(i)}
            >
              {section}
            </p>
          ))}
        </div>
        {currentSection === 0 && (
          <div className="product__specs__bg">
            <span>Характеристика: значение</span>
            <span>Характеристика: значение</span>
            <span>Характеристика: значение</span>
            <span>Характеристика: значение</span>
            <span>Характеристика: значение</span>
            <span>Характеристика: значение</span>
            <span>Характеристика: значение</span>
            <span>Характеристика: значение</span>
            <span>Характеристика: значение</span>
            <span>Характеристика: значение</span>
            <span>Характеристика: значение</span>
            <span>Характеристика: значение</span>
            <span>Характеристика: значение</span>
            <span>Характеристика: значение</span>
            <span>Характеристика: значение</span>
            <span>Характеристика: значение</span>
          </div>
        )}
        {currentSection === 1 && (
          <div className="product__feedback">
            {[...new Array(showReviews)].map((_, index) => (
              <div key={index} className="product__feedback__item">
                1
              </div>
            ))}
            <button onClick={() => setShowReviews((prev) => prev + 5)}>
              Показать ещё
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
