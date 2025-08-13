import React from "react";
import StatiCard from "./StatiCard";

const Stati = () => {
  return (
    <div className="stati">
      <div className="container ">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="mt-5">Статьи</h2>
          <img className="img-fluid dd3 mt-5" src="./img/bse4.png" alt="" />
        </div>

        <div className="row g-4">
          <StatiCard
            rasm="./img/imgg.png"
            text="Режим использования масок и перчаток на территории магазинов"
            text2="Подробная информация о режимах использования масок и перчаток на территории магазинов ЛЕНТА. Информация обновляется каждый будний день."
          />
          <StatiCard
            rasm="./img/bahor.png"
            text="Весеннее настроение для каждой"
            text2="8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий."
          />
          <StatiCard
            rasm="./img/meva.png"
            text="ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!"
            text2="Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!"
          />
        </div>
      </div>
    </div>
  );
};

export default Stati;
