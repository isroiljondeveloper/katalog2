import React from 'react'

const AksiCard = ({rasm, text}) => {
  return (
    <div className="col-lg-3 col-md-2 ss ">
    <img src={rasm} alt=""/>
    <button className="ellik ">-50%</button>
    <div className="d-flex justify-content-between">
      <div>
        <h4 className="fw-bold">44,50
          ₽</h4>
          <p>С картой</p>
      </div>
        <div>
          <h4>50,50
            ₽</h4>
            <p>Обычная</p>
        </div>
    </div>
    <h6>{text}</h6>
    <img src="./img/yulduz.png" alt=""/>
    <button className="bb mt-3">В корзину</button>
  </div> 
  )
}

export default AksiCard
