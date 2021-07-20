import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Container, Card } from 'react-bootstrap';

function Home( { loggedInUser } ) {

  const renderButtons = (
    <Card.Body>
      <Row className="justify-content-md-center">
        <Col xs lg="2"><Link to='/login'><Button variant="outline-primary">Login now!</Button></Link></Col>
        <Col xs lg="2"><Link to='/sign-up'><Button variant="outline-success">Signup now!</Button></Link></Col>
      </Row>
    </Card.Body>  
  );

  return (
    <Container className='container projectsPage' fluid="md">
      <Col className="justify-content-md-center">
        <Card className="justify-content-md-center">
          <Card.Header style={{ fontSize: '1.5rem', textAlign: 'center'}}>Welcome to <b><i>Project Manager</i></b></Card.Header>
          <Card.Body>
            <Card.Text style={{ fontSize: '1.2rem', textAlign: 'center'}}>Where all your projects are managed smoothly.</Card.Text>
            <Card.Text style={{ fontSize: '1.1rem'}}>
              Using Project Manager, you will not only be able to list projects, tasks, deadlines, more and more to cover, but you will also be able to edit them and view changes before submitting.
              You don't have to face your manager any more, all you need to do is check what kind of projects and tasks are assigned to you and you will be relaxed.
              <br />
              { loggedInUser === '' && <h5>Get rid of your boss now, and join our community!</h5>}
            </Card.Text>
          </Card.Body>
          <hr />
        { loggedInUser === '' && renderButtons }
        { 
          loggedInUser !== '' &&
          <Card.Body>
            <Row className="justify-content-md-center">
              <Col xs={12} md={3} className="gridSystem">
                <Link to='/projects'><Button variant="outline-primary" className='homeButtons'>View the list of <br /> <b><i>projects</i></b> now!</Button></Link>
              </Col>
              {
                loggedInUser.occupation === 'manager' &&
                <Col xs={12} md={3} className="gridSystem">
                  <Link to='/add-project'><Button variant="outline-success" className='homeButtons'>Do you want to <br /> <b><i>add a new project?</i></b><br /> GO AHEAD </Button></Link>
                </Col>
              }
              <Col xs={12} md={3} className="gridSystem">
                <Link to={'/'+loggedInUser.username}><Button variant="outline-warning" className='homeButtons'>Edit <br /> <b><i>profile</i></b></Button></Link>
              </Col>
              <Col xs={12} md={3} className="gridSystem">
                <Link to='/about'><Button variant="outline-secondary" className='homeButtons'>Click here to learn more <br /><b><i>about us</i></b></Button></Link>
              </Col>
            </Row>
          </Card.Body>
        }
        </Card>
      </Col>
    </Container>
  );
}

export default Home;