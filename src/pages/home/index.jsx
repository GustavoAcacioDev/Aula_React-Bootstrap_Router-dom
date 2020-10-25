import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Carousel, Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return(
        <div>
            <Menu/>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.ilhabela.com.br/wp-content/uploads/2016/01/eventos-em-ilhabela.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            </Carousel>
            <Jumbotron className="text-center">
                <h1>Diversos Eventos em um único local</h1>
                <p>
                    Encontre eventos nos mais diversos segmentos de forma rápida
                </p>
                <p>
                    <Button variant="primary" href='/login'>Login</Button><Button variant="success" href='/cadastrar'>Cadastrar</Button>
                </p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>Col 1</Col>
                    <Col>Col 2</Col>
                    <Col>Col 3</Col>
                </Row>
            </Container>
            <Rodape/>
        </div>
    )
}

export default Home;