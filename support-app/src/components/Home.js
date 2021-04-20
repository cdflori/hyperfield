import {Button, Container, Row, Col} from 'react-bootstrap';

function Home() {

    const styles={

        container: {
            position: 'relative',
            paddingTop: '100px'
            // top: '0%',
            // left: '25%'

        },

        loginBtn: {
            backgroundColor: '#4158A1',
            color: '#fffff',
            fontWeight: 'bold',
            padding: '20px 43px',
            margin: '20px',
            fontSize: '18pt'
            
        },

        userBtn: {
            backgroundColor: '#4158A1',
            color: '#fffff',
            fontWeight: 'bold',
            padding: '20px',
            margin: '20px',
            fontSize: '18pt'
        }
    }

    return (
        <div>
            <Container style={styles.container}>
                <Row>
                    <Col lg={true}>
                        <Button block style={styles.loginBtn} href='/login'>Login</Button>
                    </Col>
                    <Col lg={true}>
                        <Button block  style={styles.userBtn} href='/signup'>Create User</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;