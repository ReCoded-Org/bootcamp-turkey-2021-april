import React, { useState, useEffect } from 'react';
import db from '../../firebaseConfig';
import SingleProjectPage from './SingleProjectPage';
import { Card, Container, Col, Row, Button } from 'react-bootstrap';
// import image from '../images/edit.jpg';

function Projects( { loggedInUser } ) {

  const [projects, setProjects] = useState([]);
  const [isClicked, setIsClicked] = useState('');

  useEffect(() => {
    async function fetchProjects(){
      const arrOfProjects = [];

      await db.collection("projects").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        arrOfProjects.push({id: doc.id, ...doc.data()});
        });
      });
      await setProjects(arrOfProjects);
    };
    fetchProjects();
  });

  if(loggedInUser === '') return <Container><h1>Please sign-in in order to see this page</h1></Container>;
  else return (
    <Container className='container projectsPage' fluid="md">
      <Row className="justify-content-md-center">
      { isClicked !== '' && <SingleProjectPage data={isClicked} setIsClicked={setIsClicked} loggedInUser={loggedInUser} />}
        {projects.map(project => {
          return (
            <Col xs={12} md={4} key={project.title} className="gridSystem">
              <Card border="primary" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Header>{project.title}</Card.Header>
                  <Card.Text>Description: <br />{project.description} </Card.Text>
                  <Card.Text>Deadline: {project.deadline} </Card.Text>
                  <Button variant="outline-primary" onClick={() => setIsClicked(project)}>{loggedInUser.occupation === 'manager' ? 'Edit Project' : 'View Project'}</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Projects;
