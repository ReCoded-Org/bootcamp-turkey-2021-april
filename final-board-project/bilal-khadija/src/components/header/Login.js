import React, { useState } from 'react';
import { Form, Button, Container, Image } from 'react-bootstrap';
import image from '../images/login.jpg';

function Login( { registeredData, setLoggedInUser } ) {
  
  const [formData, setFormData] = useState({
    email: '',
    password: null
  });

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    
    let notAvailable = 0;

    for(let i = 0; i < registeredData.length; i++){
      if(formData.email === registeredData[i].email){
        if(formData.password === registeredData[i].password){
          setLoggedInUser(registeredData[i]);
          setFormData({email: '', password: ''});
        }
        else return alert('Password is incorrect, please try again');
        notAvailable = notAvailable + 1;
      }
    }

    if(notAvailable === 0) return alert('Email is not registered!, please press sign-up instead')
  }

  return (
    <Container className='loginPage container'>
      <div>
        <Image src={image} roundedCircle className='loginImage' />
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' value={formData.email} onChange={handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' value={formData.password} onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">Login</Button>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
