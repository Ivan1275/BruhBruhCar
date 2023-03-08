// React
import { Link, router, usePage, useForm } from '@inertiajs/react'
import React, { useState } from 'react';
import { Button, Form, Card, Container, Nav, Row, Modal } from "react-bootstrap"

// Components
import Navigation from '../Layouts/Components/Navigation';
import Footer from '../Layouts/Components/Footer';


export default function Show() {
  const { errors } = usePage().props;
  const { travel } = usePage().props;
  const { auth } = usePage().props;
  const { user } = usePage().props;
  const { flash } = usePage().props;
  
  const { post } = useForm({ //Para poder pasarle el travel id y descontar un asiento
    travelId: travel.id,
    travelSeats: travel.seats
  })

  // Realizar la reserva
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  function submit(e) {
    e.preventDefault()
    console.log(travel);
    post('/bookings', travel)
  }
  
  // Borrar travel
  const [values, setForm] = useState({
      password: "",
      travel_id: travel.id,
  });

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
    router.post('/travel/delete', values)
  }


  return (
    <>
      <Navigation />
      
      <Container className="pb-3">

        <div className="pt-2">
          {flash.message && (
            <Alert key={'success'} variant={'success'}>
              <div className="text-center">{flash.message}</div>
            </Alert>
          )}
        </div>

        <Card className='shadow'>
          <Card.Header as="h4" className="p-3 mb- rounded"><i className="bi bi-calendar-check p-3"></i>
            ¡Consulta los datos y confirma tu reserva!
          </Card.Header>

          <Card.Body>
            <div className="row no-gutters">
              <div className="col-md-6">
                <Card.Body>
                  <Card.Title>Trayecto: {travel.origin}<i className="bi bi-arrow-right"></i> {travel.destination} </Card.Title>
                  <Card.Title>Fecha: {new Date(travel.date).toLocaleDateString("es-ES")}</Card.Title>

                  <Card.Title>Horario</Card.Title>
                  <Card.Text>De salida: {travel.hour}</Card.Text>
                  <Card.Text>De llegada: --:-- </Card.Text>
                  <Card.Title>
                    <p>Chofer: <Link href="#">
                      {user.name}
                    </Link></p>
                  </Card.Title>

                  <form onSubmit={submit}>
                    <input
                      type="hidden"
                      name="travelId"
                      value={travel.id}
                    />

                    { // Si el usuario actual es el creador del travel
                      travel.user_id == auth.user.id 
                        // Se desactiva el boton
                        ? <Button variant="danger" onClick={handleShow}>BORRAR</Button>
                        // Si no, permanece activo
                        : <Button variant="primary" type="submit">Confirmar</Button>
                    }

                  </form>
                </Card.Body>
              </div>
              <div className="col-md-6">
                <Card.Body className='text-end'>
                  <Card.Title >{travel.price} €</Card.Title>
                  <Card.Text>Total amount for 1 passenger</Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>

      <Footer/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>¿Esta seguro que desea borrar la cuenta?</Modal.Title>
        </Modal.Header>

        <Form method="POST" onSubmit={handleSubmit}>
          <Modal.Body>
            {/* Mensaje de Aviso */}
            <p>Una vez tu cuenta haya sido borrada, todos los recursos y datos seran permanentemente borrados. Por favor, <strong>introduce tu contraseña para confirmar</strong> por si desea borrar su cuenta de manera permanente</p>
                
            {/* Password */}
            <Form.Group className="mb-3">
              <Form.Control 
                id="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                autoComplete="password"
                placeholder="Introduce su contraseña"
              />
              {errors.password && <div><strong>{errors.password}</strong></div>}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            {/* Submit */}
              <Form.Group className="mb-3">
                <Button variant="info btn-sm" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button type="submit" className="btn btn-danger btn-sm">BORRAR</Button>
              </Form.Group>
          </Modal.Footer>
        </Form>

    </Modal>
    </>
  )
}