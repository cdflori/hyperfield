import { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/auth';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import './style.css';

const Signup = () => {
    const { isLoggedIn } = useAuth();
    // History and location are hooks we can use to manipulate our page's history!
    // const history = useHistory();
    const location = useLocation();
    const { watch, register, formState: { errors } } = useForm();
    const [formStep, setFormStep] = useState(0)
    // const [userType, setUserType] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [EID, setEID] = useState('');
    // const [phone, setPhone] =('');
    // const [password, setPassword] = useState('');
    // const [confirmPass, setConfirmPass] = useState('');
    // For our redirector
    const [redirectToLogin, toggleRedirect] = useState(false);
    // This is the key part to our redirector. We can pull the prior location out here, if it exists
    const { from } = location.state || { from: { pathname: '/' } };

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     signup().then(res => {
    //         // Go back to whence you came!
    //         history.replace(from);
    //     });
    // };

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

    const completeFormStep = () => {
        setFormStep(cur => cur + 1)
    }

    const renderButton = () => {
        if (formStep > 2) {
            return undefined
        } else if (formStep === 2){
            return (
                <Button onClick={completeFormStep} className='signupBtn' type='button'>Create Account</Button>
            )
        } else {
            return (
                <Button onClick={completeFormStep} className='signupBtn' type='button'>Next Step</Button>
            )
        }
    }

    return (
        <div>
            <h2>
                Signup Page
            </h2>
            <div className='formContainer d-lg-flex justify-content-center'>
            <Form>
                {formStep === 0 && (
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Control 
                            as ="select" 
                            name='userType'>
                            <option>Instructor</option>
                            <option>Oil Rig User</option>
                            ref={register({
                                required: {
                                    value: true,
                                    message: 'Please select user type',
                                },
                            })}
                        </Form.Control>
                    </Form.Group>
                )}
                {formStep === 1 && (
                <Form.Group>
                    <Form.Label htmlFor='first name'>First Name</Form.Label>
                    <Form.Control 
                        name='firstName' 
                        type='test' 
                        id='firstName'
                        placeholder='First Name' 
                        ref={register()}
                    />
                    <br/>    
                    <Form.Label htmlFor='last name'>Last Name</Form.Label>    
                    <Form.Control 
                        name='lasttName' 
                        type='lastName' 
                        placeholder='Last Name' 
                        />  
                    <br/> 
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control
                        name='email'
                        placeholder='Email'
                        type='email'
                        autoComplete='username'
                    /> 
                    <br/>
                    <Form.Label htmlFor='Employee ID'>Employee ID</Form.Label>
                        <Form.Control
                            name='EID'
                            placeholder='####'
                            type='EID'
                        />
                    <br/>
                    <Form.Label htmlFor='Phone Number'>Phone Number</Form.Label>
                    <Form.Control
                        name='phone'
                        placeholder='####'
                        type='phone'
                    />
                </Form.Group>
                
                )}   
                <br />
                {formStep === 2 && (
                <Form.Group>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control
                    name='password'
                    placeholder='Password'
                    type='password'
                    autoComplete='password'
                />
                <br/>
                <Form.Label htmlFor='confirm password'>Confirm Password</Form.Label>
                <Form.Control
                    name='password'
                    placeholder='Password'
                    type='password'
                    autoComplete='password'
                />
                </Form.Group>
                )}
                <br />
                {formStep === 3 && (
                <h2>You've Created An Account!</h2>
                )}
                <br/>
                {renderButton()}
                <pre>
                    {JSON.stringify(watch(), null, 2)}
                </pre>
            </Form>
            </div>
            <p>
                Already have an account? <button onClick={() => toggleRedirect(true)}>Login Here</button>
            </p>

        </div>
    );
};

export default Signup;