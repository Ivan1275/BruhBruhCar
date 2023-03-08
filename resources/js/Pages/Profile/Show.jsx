// React
import { Link, usePage, router } from '@inertiajs/react';
import { Container, Row, Button, Col, Card } from "react-bootstrap";
// import { redirect } from "react-router-dom";


// Components
import Navigation from '../Layouts/Components/Navigation';
import Footer from '../Layouts/Components/Footer';

export default function ShowProfile() {
    const { profile } = usePage().props;
    const { auth } = usePage().props;
    const { userRatings } = usePage().props;
    const { ratingFor } = usePage().props;
    console.log(userRatings[0].my_ratings);
    console.log(ratingFor[0].rating_for);

    return (
        <>
            <Navigation />

            <Container>
                {profile == null &&
                    <>
                        <Row className="text-center pt-4 pb-3">
                            <h1>No existe tal usuario</h1>
                            <h3>Regrese donde y busque otro usuario</h3>
                        </Row>
                    </>
                }

                {profile != null &&
                    <>
                        <Row className="text-center pt-4 pb-3">
                            <h2>{profile.name}</h2>
                        </Row>
                        <Row className="justify-content-center pb-3">
                            {profile.avatar == 'avatar.jpg'
                                ? <img src='/assets/img/avatar.jpg' alt=" avatar" className="rounded-circle" style={{ width: '12.5rem' }} />
                                : <img src={"/storage/assets/img/" + auth.user.avatar} alt="custom_avatar" className="rounded-circle" style={{ width: '12.5rem' }} />
                            }
                        </Row>
                        <Row className="text-center pb-3">
                            <h4>{profile.email}</h4>
                        </Row>
                        <Row className="text-center pb-3">
                            <Link href={"/rating/new-rating/" + profile.id}>
                                <Button variant="primary">Realizar una valoración</Button>
                            </Link>
                        </Row>
                    </>
                }
            </Container>
            <div className="container position-relative mb-4 mt-4">
                <div className="row justify-content-center">
                    <Row className='text-center bg-info'><h2>Comentarios de los usuarios</h2></Row>
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
                </div>
            </div>

            <div className="container position-relative mb-4 mt-4">
                <div className="row justify-content-center">
                <Row className='text-center align-items-center bg-info'><h2>Mis comentarios</h2></Row>
                    <Row xs={1} md={3} className="g-2 justify-content-center">
                        {userRatings[0].my_ratings.length ? (
                            userRatings[0].my_ratings.map((user) => (

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
                </div>
            </div>

            <Footer />
        </>
    )
}