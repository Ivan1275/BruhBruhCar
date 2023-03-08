// React
import { usePage } from '@inertiajs/react';
import { Container, Row, Card } from "react-bootstrap";
// import { redirect } from "react-router-dom";


// Components
import Navigation from '../Layouts/Components/Navigation';
import Footer from '../Layouts/Components/Footer';

export default function ShowProfile() {
    const { profile } = usePage().props;
    const { auth } = usePage().props;


    return (
        <>
            <Navigation />

            <Container className='pb-4'>
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
                        <Card>
                            <Card.Header>
                                <Row className="text-center pt-2">
                                    <h2>{profile.name}</h2>
                                </Row>
                            </Card.Header>
                            <Row className="justify-content-center pt-4 pb-3">
                                {auth.user.avatar == 'avatar.jpg'
                                    ? <img src='/assets/img/avatar.jpg' alt=" avatar" className="rounded-circle" style={{ width: '12.5rem' }}/>
                                    : <img src={"/storage/assets/img/" + auth.user.avatar} alt="custom_avatar" className="rounded-circle" style={{ width: '12.5rem' }}/>
                                }
                            </Row>
                            <Row className="text-center pb-3">
                                <h4>{profile.email}</h4>
                            </Row>
                        </Card>
                    </>
                }
            </Container>

            <Footer />
        </>
    )
}