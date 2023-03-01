import { Link, usePage } from '@inertiajs/react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Navigation from '../Layouts/Components/Navigation';
import Footer from '../Layouts/Components/Footer';
import SearchForm from '../Layouts/Components/SearchForm';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Index() {
  const { travels } = usePage().props;

  return (
    <>
      <Navigation />

      <div className="container position-relative">
        <div className="row justify-content-center">
          <Row xs={1} md={2} className="g-4">
            {travels.length ? (
              travels.map(travel => (
                <Col>
                  <Card className='shadow'>
                    <Card.Header as="h4" className="p-3 mb-5 rounded">{travel.origin} <i className="bi bi-arrow-right"></i> {travel.destination}</Card.Header>
                    <Card.Body>
                      <div className="row no-gutters">
                        <div className="col-md-6">
                          <Card.Body>
                            <Card.Title>{new Date(travel.date).toLocaleDateString("es-ES")}</Card.Title>
                            <Card.Title>{travel.dtime.substring(0, 5)} <i className="bi bi-arrow-right"></i> {travel.atime.substring(0, 5)} </Card.Title>
                            <Card.Text>
                              <i class="bi bi-hourglass-split"></i>                              {/* <Moment diff={travel.dtime} unit="seconds" to={travel.atime} */}
                            </Card.Text>
                            <Card.Text>
                              <i className="bi bi-people pe-3" title="Available seats" />
                              {travel.seats}
                            </Card.Text>
                            <Card.Text>
                              <i className="bi bi-person-circle pe-3"></i>
                              <Link href="#">
                                {travel.user.name}
                              </Link>
                            </Card.Text>
                            <Card.Text>
                              <i className="bi bi-star-fill pe-3 text-success"></i> {travel.user.score}
                            </Card.Text>
                            <Link href={"/travels/" + travel.id}>
                              <Button variant="primary">Book this ride</Button>
                            </Link>

                            {/*<Button href={"/bookings/show/" + travel.id} variant="primary">Book this ride</Button>*/}
                          </Card.Body>
                        </div>
                        <div className="col-md-6">
                          <Card.Body>
                            <Card.Title className='text-end'>{travel.price}€</Card.Title>
                          </Card.Body>
                        </div>
                      </div>
                    </Card.Body>
                  </Card >
                </Col>

              ))) : (
              <>
                <Col md="auto">
                  <SearchForm />
                  <div>No rides found. Try again!</div>
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