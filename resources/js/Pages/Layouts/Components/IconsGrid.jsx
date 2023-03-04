export default function IconsGrid() {
    return (
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex"><i className="bi bi-search m-auto text-primary" /></div>
                <h3>Busca un viaje</h3>
                <p className="lead mb-0">Escoge tu viaje indicando la localidad de origen, el destino, la fecha y el número de plazas</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex"><i className="bi bi-calendar2-check m-auto text-primary" /></div>
                <h3>Resérvalo</h3>
                <p className="lead mb-0">Reserva tu viaje mediante un simple click y comunícate con el conductor para los detalles de tu reserva</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex"><i className="bi bi-car-front m-auto text-primary" /></div>
                <h3>Viajar acompañado</h3>
                <p className="lead mb-0">Disfruta del viaje y valora tu experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }