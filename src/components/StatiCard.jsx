import React from 'react'

const StatiCard = ({rasm, text, text2}) => {
  return (
    <div className="col-md-4 col-sm-6 mt-5">
    <div className="card article-card h-100">
        <img src={rasm} className="card-img-top" alt="mask image"/>
        <div className="card-body">
            <div className="article-date">05.03.2021</div>
            <div className="article-title">{text}</div>
            <p className="card-text">{text2}</p>
            <button className="btn btn-more">Подробнее</button>
        </div>
    </div>
</div>
  )
}

export default StatiCard
