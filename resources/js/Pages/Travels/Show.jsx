import { Link, usePage } from "@inertiajs/react"
import { Button, Card, Container } from "react-bootstrap"
import Navigation from "../Layouts/Components/Navigation"
import { useForm } from '@inertiajs/react'

/* No sería mejor pasarle los datos desde la otra página directamente a esta? 
En lugar de volver a hacer la petición a Laravel y devolver la info */

export default function Show() {
  const { travel } = usePage().props;
  const { auth } = usePage().props;
  const { post } = useForm({ //Para poder pasarle el travel id y descontar un asiento
    travelId: travel.id,
    travelSeats: travel.seats
  })

  function submit(e) {
    e.preventDefault()
    console.log(travel);
    post('/bookings', travel)
  }

  return (
    <>
      <Navigation />
      <Container>
        <Card className='shadow'>
          <Card.Header as="h4" className="p-3 mb- rounded"><i className="bi bi-calendar-check p-3"></i>
            ¡Consulta los datos y confirma tu reserva!
          </Card.Header>

          <Card.Body>
            <div className="row no-gutters">
              <div className="col-md-6">
                <Card.Body>
                  <Card.Title> Trayecto: {travel.origin}<i className="bi bi-arrow-right"></i> {travel.destination} </Card.Title>
                  <Card.Title>Fecha: {new Date(travel.date).toLocaleDateString("es-ES")}</Card.Title>

                  <Card.Title>Horario</Card.Title>
                  <Card.Text>De salida: {travel.hour}</Card.Text>
                  <Card.Text>De llegada: --:-- </Card.Text>
                  <Card.Title>
                    <p>Chofer: <Link href="#">
                      {auth.user.name}
                    </Link></p>
                  </Card.Title>

                  <form onSubmit={submit}>
                    <input
                      type="hidden"
                      name="travelId"
                      value={travel.id}
                    />
                    <Button variant="primary" type="submit">Confirmar</Button>
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
        </Card >
      </Container>
    </>
  )
}