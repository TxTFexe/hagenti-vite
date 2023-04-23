import React from "react";
import { Link } from "react-router-dom";

function Develop() {
    return(
        <div className="container">
            <div className="develop">
                <h1>Страница находится в разработке</h1>
                <Link to={"/"}>Вернуться назад</Link>
            </div>
        </div>
    );}

export default Develop;