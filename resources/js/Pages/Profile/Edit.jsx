// React
import { router, usePage, useForm } from '@inertiajs/react'
import React, { useState } from 'react';
import { Button, Form, Card, Container, Nav, Row, Alert } from "react-bootstrap"

// Components
import Navigation from '../Layouts/Components/Navigation';
import Footer from '../Layouts/Components/Footer';

export default function EditProfile() {
    const { auth } = usePage().props;
    const { flash } = usePage().props;
    const { errors } = usePage().props;

    console.log(auth.user.avatar)
    
    // const { data, setData } = useForm({
    //     avatar: null,
    // });
    // const src = 'storage/assets/img/';

    function previewFile(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        console.log(file.name)
        reader.readAsText(file);


        setForm({ image: file });


        reader.onerror = () => {
            console.log('fileerror');
        }
    }


    
    const [values, setForm] = useState({
        name: auth.user.name,
        email: auth.user.email,
        image: null
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
                            
                            {flash.message && (
                                <Alert key={'success'} variant={'success'}>
                                    <div>{flash.message}</div>
                                </Alert>
                            )}
                            
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

                                        {/* Img */}
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="image">Avatar</Form.Label>
                                            <Form.Control 
                                                id="image"
                                                type="file"
                                                name="image"
                                                encType="multipart/form-data"
                                                onChange={previewFile}
                                                autoComplete="image"
                                                placeholder="Introduce tu nuevo avatar"
                                            />
                                            {errors.image && <div><strong>{errors.image}</strong></div>}
                                        </Form.Group>

                                        <Row className="text-center justify-content-center pb-3">
                                            <h5>Avatar actual</h5>
                                            {auth.user.avatar == 'avatar.jpg'
                                                ? <img src='/assets/img/avatar.jpg' alt=" avatar" className="rounded-circle" style={{ width: '7.5rem' }}/>
                                                : <img src={"/storage/assets/img/" + auth.user.avatar} alt="custom_avatar" className="rounded-circle" style={{ width: '7.5rem' }}/>
                                            }
                                        </Row>
        
                                        {/* Submit */}
                                        <Button type="submit" className="btn btn-primary">Confirmar</Button>
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