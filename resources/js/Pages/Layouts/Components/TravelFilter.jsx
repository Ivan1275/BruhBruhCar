
import { router, usePage } from '@inertiajs/react'
import React, { useState } from 'react';

export default function TravelFilter() {
    const { errors } = usePage().props;

    const [values, setForm] = useState({
        filter: ""
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
        router.get('/travels', values) 
    }

    return (

        <form className='mt-3' onSubmit={handleSubmit}>
            <label>
                Filtrar por:
                <select id="filter" className='mx-2 p-1' value={values.filter} onChange={handleChange} required >
                    <option value="">Seleccionar</option>
                    <option value="date">Fecha</option>
                    <option value="hour">Hora de salida</option>
                    <option value="seats">Asientos</option>
                    <option value="price">Precio</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}