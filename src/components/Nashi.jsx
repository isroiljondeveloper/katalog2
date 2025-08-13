import React from 'react'

const Nashi = () => {
  return (
    <div className="nashi">
    <div className="container">
      <h4 className="fw-bold">Наши магазины</h4>
      <div className="d-flex gap-3 mt-5 flex-wrap">
        <button className="pp">п.Щельяюр</button>
        <button className="pp">д.Вертеп</button>
        <button className="pp">с.Краснобор</button>
        <button className="pp">д.Диюр</button>
      </div>

   <div className="row">
    <div className="col-12">
    <iframe className="w-100 ddd" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d910471.3442283218!2d53.11791107199486!3d63.74680594980041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4475b8cd9d17ae4b%3A0x102a3a583f194c0!2z0KDQtdGB0L8uINCa0L7QvNC4LCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2s!4v1755080105099!5m2!1sru!2s"></iframe>
    </div>
   </div>
  </div>
    </div>
  )
}

export default Nashi
