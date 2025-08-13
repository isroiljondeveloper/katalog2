import React from 'react'

const Spes = () => {
  return (
    <div className="spes">
    <div className="container">
      <h4 className="fw-bold">Специальные предложения</h4>
      <div className="row">
        <div className="col-md-6 mt-5">
          <div className="aa d-flex align-items-center">
            <div>
              <h4 className="fw-bold">Оформите карту «Северяночка»</h4>
              <p className="sa">И получайте бонусы при покупке в магазинах и на сайте</p>
            </div>
            <img className="img-fluid car" src="./img/card.png" alt=""/>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <div className="aa1 d-flex align-items-center">
            <div>
              <h4 className="fw-bold">Покупайте <br/> акционные товары</h4>
              <p className="sa">И получайте вдвое больше бонусов </p>
            </div>
            <div>
              <img className="img-fluid" src="./img/korzinka.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Spes
