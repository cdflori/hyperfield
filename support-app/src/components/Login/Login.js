import { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/auth';
import { Form, Button} from 'react-bootstrap';
import './style.css';

const Login = () => {
    const { login, isLoggedIn } = useAuth();
    // History and location are hooks we can use to manipulate our page's history!
    const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // For our redirector
    const [redirectToSignup, toggleRedirect] = useState(false);
    // This is the key part to our redirector. We can pull the prior location out here, if it exists
    const { from } = location.state || { from: { pathname: '/' } };

    const handleSubmit = event => {
        event.preventDefault();
        login(email, password).then(res => {
            history.replace(from);
        });
    };

    if (isLoggedIn()) {
        return <Redirect to={location.state || '/'} />;
    }

    if (redirectToSignup) {
        return <Redirect to={{
            // If someone goes to signup, this transfers the redirect
            pathname: '/signup',
            state: { from: from }
        }}
        />;
    }

    return (
        <div className='container loginForm'>
            <div className='p-d-flex p-jc-center'>
                <div className='card'>
                <h2 className='p-text-center'>
                    Login Page
                </h2>
                <Form className='p-fluid'>
                    <Form.Group>
                    <Form.Control
                        name='email'
                        placeholder='Email'
                        type='email'
                        autoComplete='username'
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <br />
                    <Form.Control
                        name='password'
                        placeholder='Password'
                        type='password'
                        autoComplete='password'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <br />
                    <Button className= 'loginBtn' type='submit'>Login</Button>
                    </Form.Group>
                </Form>
                <p>
                    Need an account? <a className='toggleBtn' onClick={() => toggleRedirect(true)}>Signup Here</a>
                </p>
            </div>
            </div>
        </div >
    );
};

export default Login;