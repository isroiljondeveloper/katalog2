import React from 'react'
import Aksi3Card from './Aksi3Card'

const Aksi3 = () => {
  return (
    <div className="aksi">
    <div className="container">
    <div className="d-flex justify-content-between">
      <h3 className="fw-bold mt-5">Покупали раньше</h3>
      <img className="img-fluid dd mt-5" src="./img/bse3.png" alt=""/>
    </div>
    <div className="row mt-5 justify-content-around mt-5">
     <Aksi3Card  rasm="./img/taom6.png" text="77,99
₽"/>
     <Aksi3Card  rasm="./img/taom4.png" text="159,99
₽"/>
     <Aksi3Card rasm="./img/taom5.png" text="599,99
₽"/>
     <Aksi3Card rasm="img/taom2.png" text="49,39
₽"/>
    </div>
    </div>
   </div>
  )
}

export default Aksi3
