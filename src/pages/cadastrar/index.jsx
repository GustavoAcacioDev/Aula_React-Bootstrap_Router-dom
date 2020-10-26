import React from 'react';
import Rodape from '../../components/rodape';
import Menu from '../../components/menu';
import { Form, Button, Container} from 'react-bootstrap';
import './cadastrar.css'

const Cadastrar =  () => {
    return(
        <div>
            <Menu/>
             <Container className='form-height'>
                 <Form className='form-signin'>
                    <div className='text-center'>
                       <img src="" alt=""/>
                    </div>
                    <br/>
                    <small>Informe os dados abaixo</small>
                    <hr/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>nome</Form.Label>
                        <Form.Control type="email" placeholder="Nome Completo" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Informe o email" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicSenha">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    <br/><br/>
                    <a href="/cadastrar" style={{ marginTop : '30px' }}>Não tenho conta!</a>
                 </Form>
             </Container>
        
        </div>
    )
}

export default Cadastrar;