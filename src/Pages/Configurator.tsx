import React from "react";
import { Link } from "react-router-dom";

const Configurator: React.FC = () => {
    return(
        <div className="container">
            <div className="develop">
                <h1>Страница находится в разработке</h1>
                <Link to={"/"}>Вернуться назад</Link>
            </div>
        </div>
    );}

export default Configurator;