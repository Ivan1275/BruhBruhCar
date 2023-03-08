// React
import { Container, Row, Alert, Card } from 'react-bootstrap';

// Components
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

export default function Authenticated() {

  return (
    <>
      <Navigation />
      
      <Container>
        <Row>
          <div className="text-center pt-3">
            <Alert key={'success'} variant={'success'}>
              ¡Has iniciado sesion con exito! <Alert.Link href="/travels">Busca un compañero de viaje</Alert.Link>.
            </Alert>
          </div>
        </Row>
        <Row>
          <Card className="text-center">
            <h2>Busca tu mejor viaje</h2>
          </Card>
        </Row>
        <Row>
          <div className="text-center pb-3">
            <img src="/assets/img/coie.jpg" className="img-fluid shadow-4" alt="travel"/>
          </div>
        </Row>
      </Container>
      
      <Footer />
    </>
  )
}