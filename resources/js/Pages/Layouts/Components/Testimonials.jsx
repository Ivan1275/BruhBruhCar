export default function Testimonials() {
    return (
  
      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">Qué dicen nuestros usuarios...</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-1.jpg" alt="..." />
                <h5>Margarita E.</h5>
                <p className="font-weight-light mb-0">"¡Esto es fantástico! ¡Muchas gracias chicos!"</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-2.jpg" alt="..." />
                <h5>Alfredo S.</h5>
                <p className="font-weight-light mb-0">
                  "MoviFP es asombrosa. La he estado usando para compartir mi coche y funciona muy bien."
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-3.jpg" alt="..." />
                <h5>Sara W.</h5>
                <p className="font-weight-light mb-0">
                  "¡Muchas gracias por facilitarnos estos recursos gratuitos y por cuidar del medio ambiente!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }