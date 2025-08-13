import React from 'react'
import AksiCard from './AksiCard'

const Aksi = () => {
  return (
    <div className="aksi">
    <div className="container">
    <div className="d-flex justify-content-between">
      <h3 className="fw-bold mt-5">Акции</h3>
      <img className="img-fluid dd mt-5" src="./img/bse.png" alt=""/>
    </div>
    <div className="row mt-5 justify-content-around">
      <AksiCard  rasm="./img/taom1.png" text="Г/Ц Блинчики с мясом вес,  Россия"/>
      <AksiCard  rasm="./img/taom2.png" text="Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное..."/>
      <AksiCard  rasm="./img/taom3.png" text="Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан..."/>
      <AksiCard  rasm="./img/taom4.png" text="Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро..."/>
    </div>
    </div>
   </div>
  )
}

export default Aksi
