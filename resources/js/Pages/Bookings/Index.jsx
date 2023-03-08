// React
import { Link, usePage } from '@inertiajs/react';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';

// Components
import Navigation from '../Layouts/Components/Navigation';
import TravelFilter from '../Layouts/Components/TravelFilter';
import Footer from '../Layouts/Components/Footer';
import SearchForm from '../Layouts/Components/SearchForm';


export default function Index() {
    const { users } = usePage().props;
    
    return (
        <>
            <Navigation />

            <Container className="position-relative mb-4 mt-4">
                <SearchForm />

                <TravelFilter />

                <Row xs={1} md={3} className="g-2 justify-content-center">
                    {users[0].bookings.length ? (
                        users[0].bookings.map((travel) => (

                            <Col>
                                <Card className='shadow'>
                                    <Card.Header as="h4" className="p-3 rounded">Ruta: {travel.origin} <i className="bi bi-arrow-right"></i> {travel.destination}</Card.Header>

                                    <Card.Body>
                                        <Row className="no-gutters">
                                            <div className="col-md-6">
                                                <Card.Body>
                                                    <Card.Title>Fecha: {new Date(travel.date).toLocaleDateString("es-ES")}</Card.Title>
                                                    <Card.Text>
                                                        <i className="bi bi-hourglass-split pe-3 p-lg" title="Hora de salida"></i>                              {/* <Moment diff={travel.dtime} unit="seconds" to={travel.atime} */}
                                                        {travel.hour}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <i className="bi bi-people pe-3" title="Asientos disponibles" />
                                                        {travel.seats}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <i className="bi bi-person-circle pe-3" title="Chofer"></i>
                                                        <Link href={"/profile/show/" + travel.user.id}>
                                                            {travel.user.name}
                                                        </Link>
                                                    </Card.Text>
                                                    <Link href={"/travel/show/" + travel.id}>
                                                        <Button variant="primary">Informacion</Button>
                                                    </Link>
                                                </Card.Body>
                                            </div>
                                            <div className="col-md-6">
                                                <Card.Body>
                                                    <Card.Title className='text-end'>Precio: {travel.price}€</Card.Title>
                                                </Card.Body>
                                            </div>
                                        </Row>
                                    </Card.Body>

                                </Card >
                            </Col>

                            ))) : (
                            <>
                                <Col className="m-3 pt-3 text-center">
                                    <h2>No se han encontrado viajes. ¡Intentalo de nuevo!</h2>
                                </Col>
                            </>
                        )}
                    </Row>
            </Container>

            <Footer />
        </>

    )
}