import React, { useState } from "react";
import db from '../../firebaseConfig';
import { Form, Button, Container, Image } from 'react-bootstrap';
import image from '../images/signup.jpg';

function Signup( { registeredData, setLoggedInUser } ){

  const [formData, setFormData] = useState({
    occupation: '',
    username: '',
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
    
    for (let i = 0; i < registeredData.length; i++) {
      if(registeredData[i].username === formData.username) return alert('Username is registered');
      if(registeredData[i].email === formData.email) return alert('Email is registered');
    }

    if (formData.occupation === '') return alert('Please choose an occupation');

    if(formData.occupation === 'manager') db.collection('projectManagers').add(formData);
    else db.collection('developer').add(formData);
    setLoggedInUser(formData);

    setFormData({occupation: '', username: '', email: '', password: ''});
  }

  return (
    <Container className='loginPage container'>
      <div>
        <Image src={image} roundedCircle className='loginImage' />
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" name='username' value={formData.username} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' value={formData.email} onChange={handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" name='password' value={formData.password} onChange={handleChange} />
          </Form.Group>
          <div className='col'>
            <div className="form-check">
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                <input className="form-check-input" id="flexRadioDefault1" type='radio' name='occupation' value='manager' onChange={handleChange}></input>
                Project Manager
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                <input className="form-check-input" id="flexRadioDefault2" type='radio' name='occupation' value='developer' onChange={handleChange}></input>
                Developer
              </label>
            </div>
          </div>
          <br />
          <Button variant="success" type="submit">Signup now!</Button>
        </Form>
      </div>
    </Container>
  );
}

export default Signup;