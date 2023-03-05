// React
import { usePage } from '@inertiajs/react'
import { Image, Container, Row } from "react-bootstrap"

// Components
import Navigation from '../Layouts/Components/Navigation';
import Footer from '../Layouts/Components/Footer';

export default function IndexProfile() {
    const { auth } = usePage().props;

    return (
    <>
        <Navigation />

        <Container>
            <Row className="text-center pt-4 pb-3">
                <h2>{auth.user.name}</h2>
            </Row>
            <Row className="justify-content-center pb-3">
                <Image className="rounded-circle" src="assets/img/testimonials-3.jpg" alt="..." style={{ width: '12.5rem' }}/>
            </Row>
            <Row className="text-center pb-3">
                <h4>{auth.user.email}</h4>
            </Row>
            <Row className="text-center pb-3">
                <div className="d-grid">
                    <a href="/profile/edit" className="btn btn-primary btn-block btn-lg">Cambiar datos del perfil</a>
                </div>
            </Row>
        </Container>

        <Footer />
    </>
    )
}