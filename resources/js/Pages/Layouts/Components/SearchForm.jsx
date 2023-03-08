
import { router, usePage } from '@inertiajs/react'
import React, { useState } from 'react';

export default function SearchForm() {
  const { errors } = usePage().props;

  const [values, setForm] = useState({
    origin: '',
    destination: '',
    date: '',
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
    e.preventDefault();
    router.get('/travels', values) // Permite @old en el formulario
  }

  return (

    <form className="form-subscribe" id="contactForm" onSubmit={handleSubmit}>
      <div className="row">
        {/* Departure */}
        <div className="col" style={{ flex: '1.5 0 0%' }}>
          <select id="origin" className='form-control form-control-lg' value={values.origin} onChange={handleChange} required>
            <option value="">Seleccionar</option>
            <option value="Pto. del Rosario">Pto. del Rosario</option>
            <option value="Castillo">Castillo</option>
            <option value="Corralejo">Corralejo</option>
            <option value="Morrojable">Morrojable</option>
          </select>
          <span className="text-danger">
            {errors.origin}
          </span>
        </div>

        {/* Destination */}
        <div className="col" style={{ flex: '1.5 0 0%' }}>
          {/*<label for="destination" className="form-label ">Destino...</label>*/}
          <select id="destination" className='form-control form-control-lg' value={values.destination} onChange={handleChange} required>
            <option value="">Seleccionar</option>
            <option value="Pto. del Rosario">Pto. del Rosario</option>
            <option value="Castillo">Castillo</option>
            <option value="Corralejo">Corralejo</option>
            <option value="Morrojable">Morrojable</option>
          </select>
          <span className="text-danger">
            {errors.destination}
          </span>
        </div>

        {/* Date*/}
        <div className="col" style={{ flex: '1 0 0%' }}>
          <input
            className="form-control form-control-lg"
            id="date"
            name="date"
            type="date"
            value={values.date}
            onChange={handleChange}
          />
          <span className="text-danger">
            {errors.date}
          </span>
        </div>

        <div className="col-auto"><button className="btn btn-primary btn-lg" id="submitButton" type="submit">Enviar</button></div>
      </div>
      <div className="row" style={{}}>
      </div>


    </form>)
}