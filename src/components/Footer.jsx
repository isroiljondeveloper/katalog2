import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
    <div className="container">
      <div className="row align-items-center text-center text-md-start">
        
          <div className="col-md-7 mb-2 footer-logo d-flex gap-4">
            <img src="./img/footer.logo.png" alt="Logo"/>
          <div className="flex-wrap d-flex">
            <a href="#" className="me-3 text-dark text-decoration-none">О компании</a>
            <a href="#" className="me-3 text-dark text-decoration-none">Контакты</a>
            <a href="#" className="me-3 text-dark text-decoration-none">Вакансии</a>
            <a href="#" className="me-3 text-dark text-decoration-none">Статьи</a>
            <a href="#" className="text-dark text-decoration-none">Политика обработки персональных данных</a>
          </div>
        </div>

        <div className="col-md-2 mb-2 social-icons">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-vk"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-odnoklassniki"></i></a>
        </div>
  
        <div className="col-md-3 mb-2 mt-3">
          <i className="fas fa-phone"></i> 8 800 777 33 33
        <div className=" mt-2 text-muted">
          Дизайн / <strong>ZASOVSKIY</strong>
        </div>
      </div>
  
      </div>
    </div>
  </div>
  )
}

export default Footer
