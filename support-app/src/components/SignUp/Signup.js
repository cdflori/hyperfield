import { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/auth';
import {Form, Button} from 'react-bootstrap';
import './style.css';

const Signup = () => {
    const { signup, isLoggedIn } = useAuth();
    // History and location are hooks we can use to manipulate our page's history!
    const history = useHistory();
    const location = useLocation();
    const [userType, setUserType] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [EID, setEID] = useState('');
    const [phone, setPhone] =('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    // For our redirector
    const [redirectToLogin, toggleRedirect] = useState(false);
    // This is the key part to our redirector. We can pull the prior location out here, if it exists
    const { from } = location.state || { from: { pathname: '/' } };

    const handleSubmit = event => {
        event.preventDefault();
        signup(email, password, userType, firstName, lastName, EID, confirmPass).then(res => {
            // Go back to whence you came!
            history.replace(from);
        });
    };

    if (isLoggedIn()) {
        return <Redirect to={location.state || '/'} />;
    }

    if (redirectToLogin) {
        // If someone goes to login, this transfers the redirect
        return <Redirect to={{
            pathname: '/login',
            state: { from: from }
        }}
        />;
    }

    // handleFormSelection() {
    //     this.setState()
    // }

    return (
        <div>
            <h2>
                Signup Page
            </h2>
            <div className='formContainer d-lg-flex justify-content-center'>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control 
                        as ="select" 
                        name='userType'
                        value={userType}
                        onChange={event => setUserType(event.target.value)}>
                        <option>Instructor</option>
                        <option>Oil Rig User</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='first name'>First Name</Form.Label>
                    <Form.Control 
                        name='firstName' 
                        type='firstName' 
                        placeholder='First Name' 
                        value={firstName} 
                        onChange={event => setFirstName(event.target.value)}/>
                    <br/>    
                    <Form.Label htmlFor='last name'>Last Name</Form.Label>    
                    <Form.Control 
                        name='lasttName' 
                        type='lastName' 
                        placeholder='Last Name' 
                        value={lastName} 
                        onChange={event => setLastName(event.target.value)}/>    
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control
                        name='email'
                        placeholder='Email'
                        type='email'
                        autoComplete='username'
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </Form.Group>   
                <Form.Group>
                    <Form.Label htmlFor='Employee ID'>Employee ID</Form.Label>
                    <Form.Control
                        name='EID'
                        placeholder='####'
                        type='EID'
                        // autoComplete='username'
                        value={EID}
                        onChange={event => setEID(event.target.value)}
                    />
                </Form.Group> 
                <Form.Group>
                    <Form.Label htmlFor='Phone Number'>Phone Number</Form.Label>
                    <Form.Control
                        name='phone'
                        placeholder='####'
                        type='phone'
                        // autoComplete='username'
                        value={phone}
                        onChange={event => setPhone(event.target.value)}
                    />
                </Form.Group> 
                <br />
                <Form.Group>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control
                    name='password'
                    placeholder='Password'
                    type='password'
                    autoComplete='password'
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                </Form.Group>
                <Form.Group>
                <Form.Label htmlFor='confirm password'>Confirm Password</Form.Label>
                <Form.Control
                    name='password'
                    placeholder='Password'
                    type='password'
                    autoComplete='password'
                    value={confirmPass}
                    onChange={event => setConfirmPass(event.target.value)}
                />
                </Form.Group>
                <br />
                <Button className='signupBtn' type='submit'>Signup</Button>
            </Form>
            </div>
            <p>
                Already have an account? <button onClick={() => toggleRedirect(true)}>Login Here</button>
            </p>

        </div>
    );
};

export default Signup;