import {Button} from 'react-bootstrap';

function Home() {

    const styles={

        container: {
            position: 'relative'
        },

        btnDiv: {
            position: 'absolute',
            top: '50%',
            left: '35%'
        },

        loginBtn: {
            backgroundColor: '#4158A1',
            color: '#fffff',
            fontWeight: 'bold',
            padding: '20px',
            margin: '20px',
            // position:'absolute',
            // top: '50%',
            // // left: '40%'
        },

        userBtn: {
            backgroundColor: '#4158A1',
            color: '#fffff',
            fontWeight: 'bold',
            padding: '20px',
            margin: '20px',
            // position:'absolute',
            // top: '50%',
            // right: '40%'
        }
    }

    return (
        <div style={styles.contatiner}>
            <div style={styles.btnDiv}>
                <Button style={styles.loginBtn} href='/login'>Login</Button>
                <Button style={styles.userBtn} href='/signup'>Create User</Button>
            </div>
        </div>
    );
}

export default Home;