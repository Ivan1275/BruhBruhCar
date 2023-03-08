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
          <Card className="text-center">
            <h2>Realmente pregunto por los Pagos</h2>
          </Card>
        </Row>
        <Row>
            <div className="text-center pt-3 pb-3">
                <img src="/assets/img/clueless.gif" className="img-fluid shadow-4" alt="travel"/>
            </div>
        </Row>
      </Container>
      
      <Footer />
    </>
  )
}