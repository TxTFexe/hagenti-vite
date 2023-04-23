import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

const Filters: React.FC = () => {
    //const dispatch = useDispatch();
    //const sort = useSelector(state => state.filter.sort)

    const [activeIndex, setActiveIndex] = useState<number>();

    const filters = [
        {name: 'Сначала дешевле', sortProperty: '-price'},
        {name: 'Сначала дороже', sortProperty: 'price'},
        {name: 'Популярные', sortProperty: 'popular'},
        {name: 'Рейтинг', sortProperty: 'rating'},
    ];

    const onClickSort = (index: number) => {
        setActiveIndex(index);
    }

    return(
        <>
        <div className="category-filters-sidebar">
                    <div className="category-sort">
                        <details open={true}>
                            <summary>Производители</summary>
                                <ul>
                                    <li><a>Amd</a></li>
                                    <li><a>Nvidia</a></li>
                                </ul>
                        </details>
                        <details open={true}>
                            <summary>Вендоры</summary>
                                <ul>
                                    <li><a>Gigabyte</a></li>
                                    <li><a>Maxsun</a></li>
                                    <li><a>Asus</a></li>
                                    <li><a>China Refab</a></li>
                                </ul>
                        </details>
                        <details open={true}>
                            <summary>Модели</summary>
                                <ul>
                                    <li><a>RTX 3080</a></li>
                                    <li><a>RTX 3080Ti</a></li>
                                </ul>
                        </details>
                    </div>
                </div>
        </>
    )
}

export default Filters;