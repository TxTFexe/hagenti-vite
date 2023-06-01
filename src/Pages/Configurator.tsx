import React from "react";
import AsyncSelect from "react-select";
import { Link } from "react-router-dom";
import Atx from "../assets/Img/ATX.png";

const Configurator: React.FC = () => {
  const [currentVideocard, setCurrentVideocard] = React.useState("");

  const getValue = () => {
    return currentVideocard
      ? videcardsOptions.find((v) => v.value === currentVideocard)
      : "";
  };

  const onChange = React.useCallback((newValue: any) => {
    setCurrentVideocard(newValue.value);
  }, []);

  console.log(currentVideocard);

  const videcardsOptions = [
    {
      value: "GIGABYTE AORUS GeForce RTX 3080",
      label: "GIGABYTE AORUS GeForce RTX 3080",
    },
    {
      value: "POWERCOLOR RADEON™ RX 7900 XTX",
      label: "POWERCOLOR RADEON™ RX 7900 XTX",
    },
    { value: "NVIDIA GeForce GT 1030", label: "NVIDIA GeForce GT 1030" },
  ];
  const data = [
    { value: "rtx 3060", label: "Rtx 3060" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="configurator__layout">
        <div className="configurator">
          <img className="configurator__case" draggable="false" src={Atx}></img>
        </div>
        <div className="configurator__settings">
          <div>
            <span>Видеокарта</span>
            <AsyncSelect
              value={getValue()}
              onChange={onChange}
              classNamePrefix="configurator-select"
              options={videcardsOptions}
            />
          </div>
          <div>
            <span>Процессор</span>
            <AsyncSelect classNamePrefix="configurator-select" options={data} />
          </div>
          <div>
            <span>Материнская плата</span>
            <AsyncSelect classNamePrefix="configurator-select" options={data} />
          </div>
          <div>
            <span>ОЗУ</span>
            <AsyncSelect
              isMulti={true}
              classNamePrefix="configurator-select"
              options={data}
            />
          </div>
          <div>
            <span>Накопители</span>
            <AsyncSelect
              isMulti={true}
              classNamePrefix="configurator-select"
              options={data}
            />
          </div>
          <div>
            <span>Блок Питания</span>
            <AsyncSelect classNamePrefix="configurator-select" options={data} />
          </div>
          <div>
            <span>Корпус</span>
            <AsyncSelect classNamePrefix="configurator-select" options={data} />
          </div>
          <div>
            <span>Охлаждение процессора</span>
            <AsyncSelect classNamePrefix="configurator-select" options={data} />
          </div>
          <div>
            <span>Дополнительное охлаждение</span>
            <AsyncSelect classNamePrefix="configurator-select" options={data} />
          </div>
          <div>
            <span>Другое</span>
            <AsyncSelect
              isMulti={true}
              classNamePrefix="configurator-select"
              options={data}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
