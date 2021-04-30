import { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/auth';
import { useForm } from 'react-hook-form';
import { Form, Button, Row } from 'react-bootstrap';
import './style.css';

const Signup = () => {
    const { isLoggedIn } = useAuth();
    // History and location are hooks we can use to manipulate our page's history!
    // const history = useHistory();
    const location = useLocation();
    const { watch, setValue, register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'all' });
    const [formStep, setFormStep] = useState(0);
    const [userTypeValue, setUserTypeValue] = useState([])

    const MAX_STEPS = 3;
    // For our redirector
    const [redirectToLogin, toggleRedirect] = useState(false);
    // This is the key part to our redirector. We can pull the prior location out here, if it exists
    const { from } = location.state || { from: { pathname: '/' } };

    // const onSubmit = event => {
    //     event.preventDefault();
    //     signup(data).then(res => {
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
                <Button disabled={!isValid} type='submit' className='signupBtn' >Create Account</Button>
            )
        } else {
            return (
                <Button disabled={!isValid} onClick={completeFormStep} className='signupBtn' type='button'>Next Step</Button>
            )
        }
    }

    const handleFormDropdown = selectedOption => {
        setValue('userType', selectedOption, true);
        setUserTypeValue(selectedOption);
    };

    const isInstructorSelected = userTypeValue.some(option => option.value === 'Instructor');
    const isRigWorkerSelected = userTypeValue.some(option => option.value === 'Oil Rig Worker');

    // const displayTypeForm = () => {
    //     const typeSelection = document.getElementByName('userType');
    //     const ifInstructorSelected = document.getElementsByName('instructorType');
    //     ifInstructorSelected.style.display = typeSelection.value === 'Instructor' ? 'block' : 'none';
    // }

    const previousStep = () => {
        setFormStep(cur => cur - 1)
    }

    const onSubmit = (data) => {window.alert(JSON.stringify(data, null, 2))
    completeFormStep()
    }


    // need to add onSubmit redirect once data is sent to the api... this should then redirect to the logged in page.

return (
        <div className='container signupForm'>
            <div className='p-d-flex p-jc-center'>
                <div className='card'>
                    <h2>Signup Page</h2>
                    <div sm={6} xs={12} className='p-fluid'>  
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            {formStep < MAX_STEPS && (
                                <Row className='p-d-flex p-jc-center'>
                                    {formStep > 0 && (
                                    <button className='backIconBtn' onClick= {previousStep} type='button'>
                                        <i className='fas fa-chevron-left stepIcon'></i>
                                    </button>
                                    )}
                                    <p className='stepText'>
                                        Step {formStep + 1} of {MAX_STEPS}
                                    </p>
                                </Row> )}
                            {formStep === 0 && (
                                <Form.Group>
                                    <Form.Control 
                                        as ='select' 
                                        name ='userType'
                                        onChange = {handleFormDropdown}
                                        {...register('userType', {required: {
                                            value: {userTypeValue},
                                            message: 'Please select user type',
                                        }})}>
                                        {errors.userType && <p>{errors.userType.message}</p>}
                                        <option>Select User Type</option>
                                        <option value='Instructor'>Instructor</option>
                                        <option value='Oil Rig User'>Oil Rig User</option>
                                        
                                    </Form.Control>
                                    <br/>
                                    {isInstructorSelected === 'Instructor' &&  (
                                    <Form.Control
                                    as ='select' 
                                    name='instructorType'
                                    // style= {{display: {'none' : 'true'} }}
                                    {...register('instructorType', {required: {
                                        value: 'Instructor',
                                        message: 'Please select instructor type',
                                    }})}>
                                    {errors.userType && <p>{errors.userType.message}</p>}
                                    <option>Driller</option>
                                    <option>General</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                </Form.Control>
                                    )}
                                    <br/>
                                    {isRigWorkerSelected &&  (
                                    <Form.Control
                                    as ='select' 
                                    name='company'
                                    // style= {{display: {'none' : 'true'} }}
                                    {...register('company', {required: {
                                        value: true,
                                        message: 'Select Company',
                                    }})}>
                                    {errors.userType && <p>{errors.userType.message}</p>}
                                    <option>Company 1</option>
                                    <option>Company 2</option>
                                    <option>Company 3</option>
                                    <option>Company 4</option>
                                </Form.Control>

                                    )}
                                    <br/>
                                    {isRigWorkerSelected === 'Oil Rig User' &&  (
                                    <Form.Control
                                    as ='select' 
                                    name='location'
                                    // style= {{display: {'none' : 'true'} }}
                                    {...register('location', {required: {
                                        value: true,
                                        message: 'Select Location',
                                    }})}>
                                    {errors.userType && <p>{errors.userType.message}</p>}
                                    <option>Location 1</option>
                                    <option>Location 2</option>
                                    <option>Location 3</option>
                                    <option>Location 4</option>
                                </Form.Control>

                                    )}
                                    <br/>
                                    {isRigWorkerSelected === 'Oil Rig User' &&  (
                                    <Form.Control
                                    as ='select' 
                                    name='rigUserType'
                                    // style= {{display: {'none' : 'true'} }}
                                    {...register('rigUserType', {required: {
                                        value: true,
                                        message: 'Select Rig User Type',
                                    }})}>
                                    {errors.userType && <p>{errors.userType.message}</p>}
                                    <option>Manager</option>
                                    <option>Operator</option>
                                    <option>User Type 3</option>
                                    <option>User Type 4</option>
                                </Form.Control>

                                    )}
                                </Form.Group>
                            )}
                            {formStep === 1 && (
                            <Form.Group>
                                <Form.Control
                                    {...register('firstName', {required: {
                                        value: true,
                                    }})}
                                    type='test'
                                    id='firstName'
                                    placeholder='First Name' />
                                {errors.firstName && <p>First Name is required</p>}    
                                <br/>  
                                <Form.Control 
                                {...register('lastName', {required: {
                                    value: true,
                                }})} 
                                    type='lastName' 
                                    placeholder='Last Name' 
                                    /> 
                                    {errors.lastName && <p>Last Name is required</p>} 
                                <br/> 
                                <Form.Control
                                    {...register('email', {required: {
                                        value: true,
                                    }})}
                                    placeholder='Email'
                                    type='email'
                                    autoComplete='username'
                                    /> 
                                    {errors.email && <p>Enter a valid email</p>} 

                                <br/>
                                    <Form.Control
                                        {...register('EID', {required: {
                                            value: true,
                                        }})}
                                        placeholder='Employee ID'
                                        type='EID'
                                    />
                                    {errors.EID && <p>ID must be # digits</p>} 

                                <br/>
                                <Form.Control
                                    {...register('phone', {required: {
                                        value: true,
                                    }})}
                                    placeholder='Phone Number'
                                    type='phone'
                                />
                                {errors.phone && <p>Phone Number must be # digits</p>} 

                            </Form.Group>
                            
                            )} 

                            <br />
                            {formStep === 2 && (
                            <Form.Group>
                            <Form.Control
                                {...register('password', {required: {
                                    value: true,
                                }})}
                                placeholder='Password'
                                type='password'
                                autoComplete='password'
                            />
                            {errors.password && <p>Password must be # characters long</p>} 

                            <br/>
                            <Form.Control
                                {...register('passwordConfirm', {required: {
                                    value: true,
                                }})}
                                placeholder='Confirm Password'
                                type='password'
                                autoComplete='password'
                            />
                            {errors.passwordConfirm && <p>Password must match</p>} 

                            </Form.Group>
                            )}
                            {formStep === 3 && (
                            <h2>Account Created!</h2>
                            )}
                            <br/>
                            {renderButton()}
                            {/* <pre>
                                {JSON.stringify(watch(), null, 2)}
                            </pre> */}
                        </Form>
                    </div>
                    <br/>
                    <p>
                    Already have an account? <button className='toggleBtn' onClick={() => toggleRedirect(true)}>Login Here</button>
                    </p>
                </div>
            </div>                
        </div>
    );
};

export default Signup;