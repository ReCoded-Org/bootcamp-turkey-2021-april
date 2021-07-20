import React, { useState } from 'react';
import db from '../../firebaseConfig';
import { Row, Col, Container, Button, InputGroup, FormControl, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import image from '../images/edit.jpg';

function SingleProjectPage( { data, setIsClicked, loggedInUser } ) {

  const [projectData, setProjectData] = useState(data);

  function handleTaskDelete(index){
    const tasksArr = projectData.task;
    tasksArr.splice(index, 1);
    setProjectData({
      ...projectData,
      task: tasksArr
    });
  }

  function handleChange(e){
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value
    });
  }

  function handleTask(e){
    e.preventDefault();
    const tasksArr = projectData.task;
    const inputValue = document.querySelector('.taskInput').value;
    tasksArr.push(inputValue);
    setProjectData({
      ...projectData,
      task: tasksArr
    });
    document.querySelector('.taskInput').value='';
  }

  function handleDelete(){
    db.collection('projects').doc(projectData.id).delete();
    setIsClicked('');
  }

  function handleProjectChange(){
    db.collection('projects').doc(projectData.id).set(projectData);
    setIsClicked('')
  }

  if(loggedInUser.occupation === 'manager'){
    return (
      <Container>
        <Card>
          <Card.Header>
            <Row className="justify-content-md-between">
              <div><input className="form-control" type='text' name='title' value={ projectData.title } onChange={handleChange}></input></div>
              <div><Button variant='outline-danger' onClick={() => setIsClicked('')}>X</Button></div>
            </Row>
          </Card.Header>
          <Card.Body>
            <div>Description: <br /><input className="form-control" type='textarea' name='description' value={ projectData.description } onChange={handleChange}></input></div> <br />
            <div>
              {data.task.map((task, index) => {
                return(
                  <InputGroup className="mb-3">
                    <FormControl placeholder={task} aria-label={task} aria-describedby="basic-addon2" disabled />
                    <Button variant="outline-secondary" id="button-addon2" onClick={() => handleTaskDelete(index)}>Delete</Button>
                  </InputGroup>
                )
              })}
            </div>
            <Row>
              <Col md={10}><input className="form-control taskInput" id="floatingInput" type='text' name='task' placeholder='task...'></input></Col>
              <Col md='auto'><Button variant='outline-primary' onClick={handleTask}>Add Task</Button></Col>
            </Row><br />
            <div>Deadline: <input type='date' name='deadline' value={ projectData.deadline } onChange={handleChange}></input></div> <hr />
            <Row className="justify-content-md-between">
              <Button variant='outline-success' type='submit' onClick={handleProjectChange}>Submit Changes</Button>
              <Button variant='outline-warning' onClick={handleDelete}>Delete Project</Button>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
  else {
    return (
      <Container>
        <Card>
          <Card.Header>
            <Row className="justify-content-md-between">
              <div>{ projectData.title }</div>
              <div><Button variant='outline-danger' onClick={() => setIsClicked('')}>X</Button></div>
            </Row>
          </Card.Header>
          <Card.Body>
            <div>Description: <br />{ projectData.description }</div><hr />
            <ListGroup>List of tasks: { data.task.map(task => <ListGroupItem>{task}</ListGroupItem>) }</ListGroup><hr />
            <div>Deadline: { projectData.deadline }</div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default SingleProjectPage;
