import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
    <div className="container">
      <img src="./img/navbar.logo.png" alt=""/>
      <div className="d-flex gap-3 align-items-center">
        <button className="butt p-2 px-3  d-md-flex d-none "><img src="./img/ikonka.png" alt=""/>Каталог</button>
        <input  className="typ" type="text"  placeholder="Найти товар"/>
      </div>
      <div className="d-flex gap-4">
        <div className="text-center flex-column d-md-flex d-none ">
          <img className="img-fluid ff" src="./img/ikon1.png" alt=""/>
          <p>Избранное</p>
        </div>
        <div className="text-center flex-column d-md-flex d-none">
          <img className="img-fluid ff" src="./img/ikon2.png" alt=""/>
          <p>Заказы</p>
        </div>
        <div className="text-center flex-column d-md-flex d-none">
          <img className="img-fluid ff" src="./img/ikonka3.png" alt=""/>
          <p>Корзина</p>
        </div>
      </div>
      <div className="d-flex gap-3 align-items-center text-center d-md-flex d-none">
        <img src="./img/puple.png" alt=""/>
        <p>Алексей</p>
        <img className="img-fluid" src="./img/ikonka4.png" alt=""/>
      </div>
    </div>
   </div>
  )
}

export default Navbar
