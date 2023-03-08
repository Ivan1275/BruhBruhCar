// React
import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import { Button, Row, Col, Card, Alert, Container } from 'react-bootstrap';

// Components
import Navigation from '../Layouts/Components/Navigation';
import Footer from '../Layouts/Components/Footer';

export default function New3(props) {
    const { errors } = usePage().props;
    const { auth } = usePage().props;
    const { flash } = usePage().props;


    const [values, setForm] = useState({
        user_id: auth.user.id,
        origin: "",
        destination: "",
        date: "",
        hour: "",
        seats: "",
        price: ""
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
        router.post('/new-travel', values)
        console.log('hola buenas me salte el redireccionamiento')
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
                                Publicar un viaje
                            </div>

                            <div className="card-body">
                                <form method="POST" onSubmit={handleSubmit}>
                                    <div className="row mb-3">
                                        <label htmlFor="origin" className="col-md-4 col-form-label text-md-end">Origen</label>

                                        <div className="col-md-6">
                                            <select id="origin" className='form-control' value={values.origin} onChange={handleChange} >
                                                <option value="">Seleccionar</option>
                                                <option value="Pto. del Rosario">Pto. del Rosario</option>
                                                <option value="Castillo">Castillo</option>
                                                <option value="Corralejo">Corralejo</option>
                                                <option value="Morrojable">Morrojable</option>
                                            </select>
                                            {errors.origin && <div><strong>{errors.origin}</strong></div>}
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="destination" className="col-md-4 col-form-label text-md-end">Destino</label>

                                        <div className="col-md-6">
                                            <select id="destination" className='form-control' value={values.destination} onChange={handleChange} >
                                                <option value="">Seleccionar</option>
                                                <option value="Pto. del Rosario">Pto. del Rosario</option>
                                                <option value="Castillo">Castillo</option>
                                                <option value="Corralejo">Corralejo</option>
                                                <option value="Morrojable">Morrojable</option>
                                            </select>
                                            {errors.destination && <div><strong>{errors.destination}</strong></div>}
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="date" className="col-md-4 col-form-label text-md-end">Fecha</label>

                                        <div className="col-md-6">
                                            <input id="date" value={values.date} onChange={handleChange} type="date" name="date" className="form-control" autoComplete="date" />
                                            {errors.date && <div><strong>{errors.date}</strong></div>}
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="hour" className="col-md-4 col-form-label text-md-end">Hora</label>

                                        <div className="col-md-6">
                                            <input id="hour" value={values.hour} onChange={handleChange} type="time" className="form-control" name="hour" autoComplete="hour" />
                                            {errors.hour && <div><strong>{errors.hour}</strong></div>}
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="seats" className="col-md-4 col-form-label text-md-end">Asientos</label>


                                        <div className="col-md-6">
                                            <input id="seats" value={values.seats} onChange={handleChange} type="number" className="form-control" name="seats" autoComplete="seats" />
                                            {errors.seats && <div><strong>{errors.seats}</strong></div>}
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="price" className="col-md-4 col-form-label text-md-end">Precio</label>


                                        <div className="col-md-6">
                                            <input id="price" value={values.price} onChange={handleChange} type="number" className="form-control" name="price" autoComplete="price" />
                                            {errors.price && <div><strong>{errors.price}</strong></div>}
                                        </div>
                                    </div>

                                    <div className="row mb-0">
                                        <div className="col-md-6 offset-md-4">
                                            <button type="submit" className="btn btn-primary">
                                                Publicar viaje
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