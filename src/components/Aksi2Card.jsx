import React from 'react'

const Aksi2Card = ({rasm, text, text2}) => {
  return (
    <div className="col-3 ss">
        <img src={rasm} alt=""/>
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="fw-bold mt-3">{text}</h4>
          </div>
        </div>
        <h6 className="mt-4">{text2}</h6>
        <img src="./img/yulduz.png" alt=""/>
        <button className="bb1 mt-3">В корзину</button>
      </div>
  )
}

export default Aksi2Card
