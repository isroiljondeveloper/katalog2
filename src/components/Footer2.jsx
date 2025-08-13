import React from 'react'

const Footer2 = () => {
  return (
    <div className="col-12 d-sm-none bottom-nav d-flex justify-content-around text-center ">
    <div>
      <a href="#"><i className="fas fa-bars"></i><br/>Каталог</a>
    </div>
    <div>
      <a href="#"><i className="far fa-heart"></i><br/>Избранное</a>
    </div>
    <div>
      <a href="#"><i className="fas fa-box"></i><br/>Заказы</a>
    </div>
      <a href="#"><i className="fas fa-shopping-cart"></i><span className="cart-badge">1</span><br/>Корзина</a>
    <div>
      <a href="#"><img src="./img/puple.png" alt="User" /><br/>Профиль</a>
    </div>
  </div>
  )
}

export default Footer2
