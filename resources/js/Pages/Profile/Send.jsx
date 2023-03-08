// React
import { usePage, Link } from '@inertiajs/react'
import { Card, Container, Nav, Row, Col } from "react-bootstrap"

// Components
import Navigation from '../Layouts/Components/Navigation';
import Footer from '../Layouts/Components/Footer';

export default function Show_Send() {
    const { ratingFor } = usePage().props;

    console.log(ratingFor)


    return (
    <>
        <Navigation />

        <Container>
            <Row className="justify-content-center pb-4">
                <div className="col-md-12">
                    <Card>
                        <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first" disabled>Enviadas</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/profile/my-ratings/recieve">Recibidas</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Card.Header>
                        <Card.Body>
                            
                            <Row xs={1} md={3} className="g-2 justify-content-center">
                                {ratingFor[0].rating_for.length ? (
                                    ratingFor[0].rating_for.map((user) => (

                                        <Col>
                                            <Card className='shadow'>

                                                <Card.Header as="h4" className="p-3 rounded">

                                                    Usuario:
                                                    <Link href={"/profile/show/" + user.id} className="">
                                                        {user.name}
                                                    </Link>

                                                </Card.Header>

                                                <Card.Body>
                                                    <div className="row no-gutters">
                                                        <div className="col-md">
                                                            <Card.Body>
                                                                <Card.Title>Email:</Card.Title>
                                                                <Card.Text>
                                                                    <i className="bi bi-person-circle pe-3" title="Chofer"></i>
                                                                    {user.email}
                                                                </Card.Text>
                                                                <Card.Title>Comentario: </Card.Title>
                                                                <Card.Text>
                                                                    {user.rating.comment}
                                                                </Card.Text>
                                                                <Card.Title>Valoracion: </Card.Title>
                                                                <Card.Text>
                                                                    {user.rating.score}
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </div>
                                                    </div>
                                                </Card.Body>

                                            </Card >
                                        </Col>

                                    ))) : (
                                    <>
                                        <Col className="m-3 pt-3 text-center">
                                            <h2>No se han encontrado valoraciones. ¡Intentalo de nuevo!</h2>
                                        </Col>
                                    </>
                                )}
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
        </Container>

        <Footer />
    </>
    )
}