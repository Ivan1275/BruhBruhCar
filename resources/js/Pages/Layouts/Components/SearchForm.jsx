
import { useForm, usePage } from '@inertiajs/react';

export default function SearchForm() {
  const { errors } = usePage().props;

  const { data, setData, get } = useForm({
    origin: '',
    destination: '',
    date: '',
  })

  function handleSubmit(e) {
    e.preventDefault();
    get('/travels', { preserveState: true }) // Permite @old en el formulario
  }

  return (

    <form className="form-subscribe" id="contactForm" onSubmit={handleSubmit}>
      <div className="row">
        {/* Departure */}
        <div className="col" style={{ flex: '1.5 0 0%' }}>
          <input
            className="form-control form-control-lg"
            id="departure"
            value={data.origin}
            name="origin"
            type="text"
            placeholder="Departure"
            onChange={e => setData('origin', e.target.value)}
          />
          <span className="text-danger">
            {errors.origin}
          </span>
        </div>

        {/* Destination */}
        <div className="col" style={{ flex: '1.5 0 0%' }}>
          {/*<label for="destination" className="form-label ">Going to...</label>*/}
          <input
            className="form-control form-control-lg"
            id="destination"
            value={data.destination}
            name="destination"
            type="text"
            placeholder="Destination"
            onChange={e => setData('destination', e.target.value)}
          />
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
            value={data.date}
            onChange={e => setData('date', e.target.value)}
          />
          <span className="text-danger">
            {errors.date}
          </span>
        </div>

        <div className="col-auto"><button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button></div>
      </div>
      <div className="row" style={{}}>
      </div>
    </form>)
}