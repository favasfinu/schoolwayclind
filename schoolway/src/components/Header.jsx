import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <Navbar className="bg-body-transparent">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand href="#home" >
          <i className="fa-thin fa-school fa-beat-fade"  style={{color: "#FFD43B",}} />
            {' '}
            Schoolway
          </Navbar.Brand>
          </Link>
          <Link className='btn btn-success' to={'/profile'}>
          Profile {''}
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header