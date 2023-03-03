import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react'
import Navigation from '../Layouts/Components/Navigation';
import Footer from '../Layouts/Components/Footer';

export default function New(props) {
    const { errors } = usePage().props;
    const { auth } = usePage().props;


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
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header text-center">
                                Publicar un viaje
                            </div>

                            <div className="card-body">
                                <form method="POST" onSubmit={handleSubmit}>
                                    <div className="row mb-3">
                                        <label htmlFor="origin" className="col-md-4 col-form-label text-md-end">Origen</label>

                                        <div className="col-md-6">
                                            <input id="origin" type="text" className="form-control" name="origin" value={values.name} onChange={handleChange} autoComplete="origin" />
                                            {errors.origin && <div><strong>{errors.origin}</strong></div>}
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="destination" className="col-md-4 col-form-label text-md-end">Destino</label>

                                        <div className="col-md-6">
                                            <input id="destination" type="text" className="form-control " name="destination" value={values.email} onChange={handleChange} autoComplete="destination" />
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
                </div>
            </div>
            <Footer />
        </>
    );
}