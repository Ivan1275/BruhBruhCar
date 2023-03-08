// React
import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import { Button, Row, Card, Alert, Container, Form } from 'react-bootstrap';

// Components
import Navigation from '../Layouts/Components/Navigation';
import Footer from '../Layouts/Components/Footer';

export default function New3(props) {
    const { errors } = usePage().props;
    const { user } = usePage().props;
    const { auth } = usePage().props;
    const { flash } = usePage().props;

    const [values, setForm] = useState({
        user1_id: user,
        user2_id: auth.user.id,
        score: "",
        comment: ""
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
        router.post('/rating/new-rating', values)
    }

    function getNumber(num) {
        console.log(num)
    }

    return (

        <>
            <Navigation />

            <Container>

                <div className="pt-2">
                    {flash.message && (
                        <Alert key={'success'} variant={'success'}>
                            <div className="text-center">{flash.message}</div>
                        </Alert>
                    )}
                </div>

                <Row className="justify-content-center">
                    <div className="col-md-8 pb-4">
                        <Card>
                            <Card.Header className='text-center'><h4>Realizar una valoracion</h4></Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    {/* Score 2*/}
                                    <div className="rating">
                                        <label>
                                            <input type="radio" name="score" value= '1' id="score"/>
                                            <span className="icon" onClick={getNumber(1)}>★</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="score" value= '2' id="score"/>
                                            <span className="icon">★</span>
                                            <span className="icon" onClick={getNumber(2)}>★</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="score" value= '3' id="score"/>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon" onClick={getNumber(3)}>★</span>   
                                        </label>
                                        <label>
                                            <input type="radio" name="score" value= '4' id="score"/>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon" onClick={getNumber(4)}>★</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="score" value= '5' id="score"/>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon" onClick={getNumber(5)}>★</span>
                                        </label>
                                        {errors.score && <div><strong>{errors.score}</strong></div>}
                                    </div>
        
                                    {/* Comentario */}
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="comment">Comentario</Form.Label>
                                        <Form.Control 
                                            id="comment"
                                            type="text"
                                            name="comment"
                                            value={values.comment}
                                            onChange={handleChange}
                                            autoComplete="comment"
                                            placeholder="Introduce tu comentario"
                                        />
                                        {errors.comment && <div><strong>{errors.comment}</strong></div>}
                                    </Form.Group>
        
                                    {/* Submit */}
                                    <Button type="submit" className="btn btn-primary">Publicar Valoración</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>

            <Footer />
        </>
    );
}


<div className="rating">
  <label>
    <input type="radio" name="stars" value="1" />
    <span className="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" value="2" />
    <span className="icon">★</span>
    <span className="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" value="3" />
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>   
  </label>
  <label>
    <input type="radio" name="stars" value="4" />
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" value="5" />
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
  </label>
</div>