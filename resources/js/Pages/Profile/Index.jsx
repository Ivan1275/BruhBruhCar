// React
import { usePage } from '@inertiajs/react'
import { Image, Container, Row, Card } from "react-bootstrap"

// Components
import Navigation from '../Layouts/Components/Navigation';
import Footer from '../Layouts/Components/Footer';

export default function IndexProfile() {
    const { auth } = usePage().props;

    return (
    <>
        <Navigation />

        <Container>
            <Card>
                <Card.Header>
                    <Row className="text-center pt-2">
                        <h2>{auth.user.name}</h2>
                    </Row>
                </Card.Header>
                <Row className="justify-content-center pt-4 pb-3">
                    {auth.user.avatar == 'avatar.jpg'
                        ? <Image src='/assets/img/avatar.jpg' alt=" avatar" className="rounded-circle" style={{ width: '12.5rem' }}/>
                        : <Image src={"/storage/assets/img/" + auth.user.avatar} alt="custom_avatar" className="rounded-circle" style={{ width: '12.5rem' }}/>
                    }
                </Row>
                <Row className="text-center pb-3">
                    <h4>{auth.user.email}</h4>
                </Row>
            </Card>
                <Row className="text-center pt-3 pb-3">
                    <div className="d-grid">
                        <a href="/profile/edit" className="btn btn-primary btn-block btn-lg">Cambiar datos del perfil</a>
                    </div>
                </Row>
                <Row className="text-center pt-3 pb-3">
                    <div className="d-grid">
                        <a href="/profile/my-ratings/send" className="btn btn-secondary btn-block btn-lg">Ver valoraciones</a>
                    </div>
                </Row>
        </Container>

        <Footer />
    </>
    )
}