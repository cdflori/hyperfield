import {Button, Container, Row, Col} from 'react-bootstrap';
import './style.css'


function BtnContainer() {


    return(
        <>
            <Container >
                <Row>
                    <Col lg={true}>
                        <Button block className='login' href='/login'>Login</Button>
                    </Col>
                    <Col lg={true}>
                        <Button block  className='userBtn' href='/signup'>Create User</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BtnContainer;