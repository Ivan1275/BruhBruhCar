// React
import { router, usePage } from '@inertiajs/react'
import React, { useState } from 'react';
import { Button, Card, Container, Form, Row } from "react-bootstrap"

// Components
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

export default function Register() {
  const { errors } = usePage().props;

    
  const [values, setForm] = useState({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
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
      router.post('/register', values)
  }
    
  return (
  <>
      <Navigation />
      
      <Container>
          <Row className="justify-content-center">
              <div className="col-md-8 pb-4">
                  <Card>
                      <Card.Header className="text-center"><h3>Registrarse</h3></Card.Header>
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

                          {/* Password */}
                          <Form.Group className="mb-3">
                            <Form.Label htmlFor="password">Contraseña</Form.Label>
                            <Form.Control 
                              id="password"
                              type="password"
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                              autoComplete="password"
                              placeholder="Introduce tu contraseña"
                            />
                            {errors.password && <div><strong>{errors.password}</strong></div>}
                          </Form.Group>

                          {/* REPEAT - Password */}
                          <Form.Group className="mb-3">
                            <Form.Label htmlFor="password-confirm">Contraseña</Form.Label>
                            <Form.Control 
                              id="password_confirmation"
                              type="password"
                              name="password_confirmationation"
                              value={values.password_confirmation}
                              onChange={handleChange}
                              autoComplete="password_confirmation"
                              placeholder="Repita la contraseña"
                            />
                            {errors.password_confirmation && <div><strong>{errors.password_confirmation}</strong></div>}
                          </Form.Group>

                          {/* Submit */}
                          <Button type="submit" className="btn btn-primary">Confimar</Button>
                        </Form>
                      </Card.Body>
                  </Card>
              </div>
          </Row>
      </Container>
      
      <Footer />
  </>
  )
}