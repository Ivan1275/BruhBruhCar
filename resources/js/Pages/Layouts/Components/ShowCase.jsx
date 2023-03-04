export default function ShowCase() {

    return (
  
      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: 'url("assets/img/bg-showcase-1.jpg")' }} />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Beneficios para el medio ambiente</h2>
              <p className="lead mb-0 bi bi-check-circle">
                Control de emisiones de gases de efecto invernadero
              </p>
              <p className="lead mb-0 bi bi-check-circle">
                La mejor alternativa al transporte público
              </p>
              <p className="lead mb-0 bi bi-check-circle">
                Evita la congestión del tráfico
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: 'url("assets/img/bg-showcase-2.jpg")' }}>
            </div>
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Beneficios para los conductores</h2>
              <p className="lead mb-0 bi bi-check-circle">
              Permite ahorrar gastos
              </p>
              <p className="lead mb-0 bi bi-check-circle">
              Abierto a cualquier trayecto
              </p>
              <p className="lead mb-0 bi bi-check-circle">
              Viajes cómodos y agradables garantizados por el sistema de valoraciones
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: 'url("assets/img/bg-showcase-3.jpg")' }} />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Beneficios para los pasajeros</h2>
              <p className="lead mb-0 bi bi-check-circle">
              Minimiza el coste del desplazamiento
              </p>
              <p className="lead mb-0 bi bi-check-circle">
              Los pasajeros están asegurados
              </p>
              <p className="lead mb-0 bi bi-check-circle">
              Elige a tus compañeros de viaje
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }