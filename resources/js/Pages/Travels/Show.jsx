import { Link, usePage } from "@inertiajs/react"
import { Button, Card, Container } from "react-bootstrap"
import Navigation from "../Layouts/Components/Navigation"
import { useForm } from '@inertiajs/react'

/* No sería mejor pasarle los datos desde la otra página directamente a esta? 
En lugar de volver a hacer la petición a Laravel y devolver la info */

export default function Show() {
  const { travel } = usePage().props;
  const { post } = useForm({ //Para poder pasarle el travel id y descontar un asiento
    travel_id: travel.id,
    travelSeats: travel.seats
  })

  function submit(e) {
    e.preventDefault()
    // console.log(e);
    post('/bookings', travel)
  }

  return (
    <>
      <Navigation />
      <Container>
        <Card className='shadow'>
          <Card.Header as="h4" className="p-3 mb-5 rounded"><i class="bi bi-calendar-check p-3"></i> Check the data and confirm your booking !
          </Card.Header>

          <Card.Body>
            <div className="row no-gutters">
              <div className="col-md-6">
                <Card.Body>
                  <Card.Title>{travel.origin}<i className="bi bi-arrow-right"></i> {travel.destination} </Card.Title>
                  <Card.Title>{new Date(travel.date).toLocaleDateString("es-ES")}</Card.Title>
                  <Card.Title>hey bro <i className="bi bi-arrow-right"></i> hey bro </Card.Title>
                  <Card.Text>
                    <i class="bi bi-hourglass-split"></i>
                    {/* <Moment diff={travel.dtime} unit="seconds" to={travel.atime} */}
                  </Card.Text>

                  <form onSubmit={submit}>
                    <input
                      type="hidden"
                      name="travel_id"
                      value={travel.id}
                    />
                    <Button variant="primary" type="submit">Confirm</Button>
                  </form>
                </Card.Body>
              </div>
              <div className="col-md-6">
                <Card.Body className='text-end'>
                  <Card.Title >{travel.price}€</Card.Title>
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