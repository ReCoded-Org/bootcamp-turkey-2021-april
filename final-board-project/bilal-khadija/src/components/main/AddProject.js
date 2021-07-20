import React, { useState } from 'react';
import db from '../../firebaseConfig';
import { Form, Button, Col, Row, Image, ListGroup, ListGroupItem } from 'react-bootstrap';
import image from '../images/add.jpg';

function AddProject() {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    task: []
  });

  const [taskData, setTaskData] = useState('');

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleTask(e){
    e.preventDefault();
    console.log(formData);
    setFormData({
      ...formData, 
      task: [...formData.task, taskData]
    });
    setTaskData('');
  }

  function handleProject(e){
    e.preventDefault();
    db.collection('projects').add(formData);
    setFormData({title: '', description: '', deadline: '', task: []});
  }
  
  return (
    <div className='addProjectPage'>
      <div style={{marginRight: '2%'}}>
        <Image src={image} roundedCircle className='loginImage' />
      </div>
      <div style={{width: '50%'}}>
        <Form onSubmit={handleProject}>
          <Form.Group controlId="formBasic">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" name='title' value={formData.title} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" name='description' value={formData.description} onChange={handleChange} rows={3} required />
          </Form.Group>
          <Form.Group controlId="formBasic">
            <Form.Label>Deadline</Form.Label>
            <Form.Control type="date" name='deadline' value={formData.deadline} onChange={handleChange} required />
          </Form.Group>
          <Row>
            {/* <Col auto><Form.Label htmlFor="floatingInput">Task</Form.Label></Col> */}
            <Col md={10}><input className="form-control" id="floatingInput" type='text' name='task' placeholder='Task' value={taskData} onChange={(e) => setTaskData(e.target.value)}></input></Col>
            <Col md='auto'><button className='btn btn-primary' onClick={handleTask}>Add Task</button></Col>
          </Row>
          <br />
          <Col>
            <ListGroup>
              {formData.task && formData.task.map(task => <ListGroupItem>{task}</ListGroupItem>)}
            </ListGroup> <br />
          </Col>
          <Button variant="outline-success" type="submit" size="lg" block>Add Project</Button>
        </Form>
      </div>
    </div>
  );
}

export default AddProject;