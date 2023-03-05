// React
import { router, usePage } from '@inertiajs/react'
import React, { useState } from 'react';
import { Button, Form, Card, Container, Nav, Row } from "react-bootstrap"

// Components
import Navigation from '../Layouts/Components/Navigation';
import Footer from '../Layouts/Components/Footer';

export default function EditProfile() {
    const { auth } = usePage().props;
    const { errors } = usePage().props;

    
    const [values, setForm] = useState({
        name: auth.user.name,
        email: auth.user.email
    })
  
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setForm(values => ({
            ...values,
            [key]: value,
        }))
    }
  
    function handleSubmit(e) {
        e.preventDefault()
        console.log(values)
        router.post('/profile/edit', values)
    }

    return (
    <>
        <Navigation />

        <Container>
            <Row className="justify-content-center pb-4">
                <div className="col-md-10">
                    <Card>
                        <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first" disabled>Cambiar parametros</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/profile/edit/update-password">Cambiar contraseña</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/profile/edit/delete">Borrar cuenta</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card>
                                <Card.Body>
                                    <Form method="POST" onSubmit={handleSubmit}>
                                        {/* Name */}
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="name">Nombre</Form.Label>
                                            <Form.Control 
                                            id="name"
                                            type="name"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            autoComplete="name"
                                            placeholder="Introduce tu nombre"
                                            />
                                            {errors.name && <div><strong>{errors.name}</strong></div>}
                                        </Form.Group>
        
                                        {/* Email */}
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="email">Email</Form.Label>
                                            <Form.Control 
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                autoComplete="email"
                                                placeholder="Introduce tu email"
                                            />
                                            {errors.email && <div><strong>{errors.email}</strong></div>}
                                        </Form.Group>
        
                                        {/* Submit */}
                                        <Button type="submit" className="btn btn-primary">Iniciar sesión</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
        </Container>

        <Footer />
    </>
    )
}