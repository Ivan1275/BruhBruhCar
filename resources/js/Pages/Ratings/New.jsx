// React
import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import { Button, Row, Col, Card, Alert, Container } from 'react-bootstrap';

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
        console.log(e)
        router.post('/rating/new-rating', values)
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
                        <div className="card">
                            <div className="card-header text-center">
                                Realizar una valoracion
                            </div>

                            <div className="card-body">
                                <form method="POST" onSubmit={handleSubmit}>

                                    <div className="row mb-3">
                                        <label htmlFor="score" className="col-md-4 col-form-label text-md-end">Valoración</label>

                                        <div className="col-md-6">
                                            <input id="score" type="number" className="form-control" name="score" value={values.score} onChange={handleChange} autoComplete="score" />
                                            {errors.score && <div><strong>{errors.score}</strong></div>}
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="comment" className="col-md-4 col-form-label text-md-end">Comentario</label>

                                        <div className="col-md-6">
                                            <input id="comment" type="text" className="form-control " name="comment" value={values.comment} onChange={handleChange} autoComplete="comment" />
                                            {errors.comment && <div><strong>{errors.comment}</strong></div>}
                                        </div>
                                    </div>

                                    <div className="row mb-0">
                                        <div className="col-md-6 offset-md-4">
                                            <button type="submit" className="btn btn-primary">
                                                Publicar Valoración
                                            </button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>

            <Footer />
        </>
    );
}