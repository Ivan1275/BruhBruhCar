// React
import { Container, Row, Alert } from 'react-bootstrap';

// Components
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

export default function Authenticated() {

  return (
    <>
      <Navigation />
      
      <Container>
        <Row>
          <div className="text-center pb-3 pt-3">
            <Alert key={'success'} variant={'success'}>
              ¡Has iniciado sesion con exito! <Alert.Link href="/travels">busca un compañero de viaje</Alert.Link>.
            </Alert>
          </div>
          <div className="text-center">
            <h2>Busca tu mejor viaje</h2>
            <img src="/assets/img/coie.jpg" className="img-fluid shadow-4" alt="travel"/>
          </div>
        </Row>
      </Container>
      
      <Footer />
    </>
  )
}