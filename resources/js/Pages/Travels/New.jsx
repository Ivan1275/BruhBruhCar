import { router } from '@inertiajs/react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Navigation from '../Layouts/Components/Navigation';
import Footer from '../Layouts/Components/Footer';
import Form from 'react-bootstrap/Form';

export default function New() {
  // const validated = false;
  // const setValidated = false;

  const handleSubmit = (event) => {
    event.preventDefault();
    router.post('/newtravel', values);

    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // } else {
    //   setValidated(true);
    //   router.post('/newtravel', values);
    // }
  }
  
  return (
    <>
      <Navigation />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 pb-4">
            <div className="card">
              <div className="card-header"><h3>Login</h3></div>

              <div className="card-body">
                <Form method="POST" /*noValidate validated={validated}*/ onSubmit={handleSubmit}>
                  <Form.Group className="mb-3 mt-3" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/>
                    {/* <Form.Control.Feedback type="invalid">
                      Please provide a valid email.
                    </Form.Control.Feedback> */}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                    {/* <Form.Control.Feedback type="invalid">
                      Please provide a valid password.
                    </Form.Control.Feedback> */}
                  </Form.Group>

                  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group> */}

                  <Button variant="primary btn-sm" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}