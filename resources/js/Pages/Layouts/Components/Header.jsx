// React
import { usePage } from '@inertiajs/react';
import { Alert} from 'react-bootstrap';

// Components
import SearchForm from '../Components/SearchForm';


export default function Header() {

  const { flash } = usePage().props;
  
  return (
    <header className="masthead">
      <div className="container position-relative">

      <div>
      {flash.errormessage && (
        <Alert key={'warning'} variant={'warning'}>
          <div>{flash.errormessage}</div>
        </Alert>
      )}
      </div>

        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="text-center text-white">
              <h1 className="mb-5">¿A dónde quieres ir?</h1>
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}