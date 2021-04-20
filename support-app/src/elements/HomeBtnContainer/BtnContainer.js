import {Button, Container, Row, Col} from 'react-bootstrap';
import './style.css'


function BtnContainer() {


    return(
        <>
            <Container d-flex justify-content-center >
                <Row>
                    <Col md={6} sm={12}>
                        <Button block className='login' href='/login'>Login</Button>
                    </Col>
                    <Col md={6} sm={12}>
                        <Button block className='userBtn' href='/signup'>Create User</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BtnContainer;