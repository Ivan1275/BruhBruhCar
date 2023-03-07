// React
import { usePage, router } from '@inertiajs/react';
import { Container, Row } from "react-bootstrap";
// import { redirect } from "react-router-dom";


// Components
import Navigation from '../Layouts/Components/Navigation';
import Footer from '../Layouts/Components/Footer';

export default function ShowProfile() {
    const { profile } = usePage().props;


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
                        <img src="/assets/img/testimonials-2.jpg" className="rounded-circle" alt="..." style={{ width: '12.5rem' }}/>
                    </Row>
                    <Row className="text-center pb-3">
                        <h4>{profile.email}</h4>
                    </Row>
                </>
            }
        </Container>

        <Footer />
    </>
    )
}