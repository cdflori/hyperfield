// import { Link } from 'react-router-dom';
import useAuth from '../../hooks/auth';
import { Navbar, Nav, Image } from 'react-bootstrap';
import './style.css'

const HomeNavbar = () => {
    const { isLoggedIn, logout, getProfile } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='navBar'>
            <Navbar.Brand href="/">
                <Image 
                    src='../../assets/LogoWhite.png'
                    alt='Hyperfield Logo'
                    maxWidth= '100%'
                    height='auto'
                    className="d-inline-block align-top"
                />
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">   
            
                {/* <Nav.Link to="/">Home</Nav.Link> */}
                {isLoggedIn() ?
                    <>
                        <p>Hello, {getProfile().email}</p>
                        <Nav.Link to='/content'>Content</Nav.Link>
                        <Nav.Link onClick={() => logout()} to='/'>Logout</Nav.Link>
                    </>
                    :
                    <>
                        {/* <Nav.Link href="/signup">Signup</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link> */}
                    </>
                }
                
            </Nav> 
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HomeNavbar;