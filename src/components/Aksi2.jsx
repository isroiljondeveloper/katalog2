import React from 'react'
import Aksi2Card from './Aksi2Card'

const Aksi2 = () => {
  return (
    <div className="aksi">
    <div className="container">
    <div className="d-flex justify-content-between">
      <h3 className="fw-bold mt-5">Новинки</h3>
      <img className="img-fluid dd mt-5" src="./img/bse2.png" alt=""/>
    </div>
    <div className="row mt-5 justify-content-around mt-5">
     <Aksi2Card rasm="./img/taom5.png" text="599,99
₽" text2="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"/>
     <Aksi2Card rasm="./img/taom3.png" text="44,50
₽" text2="Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан..."/>
     <Aksi2Card rasm="./img/taom4.png" text="159,99
₽" text2="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"/>
     <Aksi2Card rasm="./img/taom2.png" text="49,39
₽" text2="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"/>
    </div>
    </div>
   </div>
  )
}

export default Aksi2
