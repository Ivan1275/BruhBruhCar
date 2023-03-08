// React
import { Link, usePage } from '@inertiajs/react';
import { Button, Row, Col, Card, Alert } from 'react-bootstrap';

// Components
import Navigation from '../Layouts/Components/Navigation';
import TravelFilter from '../Layouts/Components/TravelFilter';
import Footer from '../Layouts/Components/Footer';
import SearchForm from '../Layouts/Components/SearchForm';


export default function Index() {
  const { auth } = usePage().props;
  const { flash } = usePage().props;
  const { travels } = usePage().props;


  return (
    <>
      <Navigation />

      <div className="pt-2">
        {flash.message && (
          <Alert key={'success'} variant={'success'}>
            <div className="text-center">{flash.message}</div>
          </Alert>
        )}
      </div>

      <div className="pt-2">
        {flash.errormessage && (
          <Alert key={'warning'} variant={'warning'}>
            <div className="text-center">{flash.errormessage}</div>
          </Alert>
        )}
      </div>
      
      <div className="container position-relative mb-4 mt-4">
        <SearchForm />
        <TravelFilter />
        <div className="row justify-content-center">
          <Row xs={1} md={3} className="g-2 justify-content-center">
            {travels.length ? (
              travels.map(travel => (
                <Col>
                  <Card className='shadow'>
                    <Card.Header as="h4" className="p-3 rounded">Ruta: {travel.origin} <i className="bi bi-arrow-right"></i> {travel.destination}</Card.Header>

                    <Card.Body>
                      <div className="row no-gutters">
                        <div className="col-md-7">
                          <Card.Body>
                            <Card.Title>Fecha: {new Date(travel.date).toLocaleDateString("es-ES")}</Card.Title>
                            <Card.Text>
                              <i className="bi bi-hourglass-split pe-3 p-lg" title="Hora de salida"></i>
                              {travel.hour}
                            </Card.Text>
                            <Card.Text>
                              <i className="bi bi-people pe-3" title="Asientos disponibles" />
                              {travel.seats}
                            </Card.Text>
                            <Card.Text>
                              <i className="bi bi-person-circle pe-3" title="Chofer"></i>
                              <Link href={auth.user == null ? ("/profile/show/" + travel.user.id) : (travel.user.id == auth.user.id ? ("/profile") : ("/profile/show/" + travel.user.id))}>
                                {travel.user.name}
                              </Link>
                            </Card.Text>
                            <Link href={"/travel/show/" + travel.id}>
                              <Button variant="primary">Reservar</Button>
                            </Link>
                          </Card.Body>
                        </div>
                        <div className="col-md-5">
                          <Card.Body>
                            <Card.Title className='text-end'>Precio: {travel.price}€</Card.Title>
                          </Card.Body>
                        </div>
                      </div>
                    </Card.Body>

                  </Card >
                </Col>

              ))) : (
              <>
                <Col className="m-3 pt-3 text-center">
                  <Card>
                    <h2>No se han encontrado viajes. ¡Intentalo de nuevo!</h2>
                  </Card>
                </Col>
              </>
            )}
          </Row>
        </div>
      </div>
      <Footer />
    </>

  )
}

// if (auth == null) {
//   "/profile/show/" + travel.user.id
// } else {
//   {travel.user.id == auth.user.id ? ("/profile") : ("/profile/show/" + travel.user.id)}
// }

