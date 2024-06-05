import React from 'react'
import { Container, ListGroup, Row, Col, Button, Card, Image,  } from 'react-bootstrap'

function Home() {

  return ( 
    <Container fluid className='mt-5'>
      <Row>
        <Col md={3} className="left-sidebar bg-white rounded">

          <ListGroup className='mt-3'>
            <ListGroup.Item action href="#" style={{fontSize: '20px'}}><i className="fa-solid fa-house-chimney" style={{color: "#53311c",}} /> Home</ListGroup.Item>
            <ListGroup.Item action href="#" style={{fontSize: '20px'}}><i className="fa-solid fa-envelope" style={{color: "#5a4a14",}} /> Message</ListGroup.Item>
            <ListGroup.Item action href="#" style={{fontSize: '20px'}}><i className="fa-solid fa-user" style={{color: "#5a4a14",}}/> Profile</ListGroup.Item>
            <ListGroup.Item action href="#" style={{fontSize: '20px'}}><i className="fa-brands fa-wpexplorer" style={{color: "#514f1e",}} /> Explore</ListGroup.Item>
            <ListGroup.Item action href="#" style={{fontSize: '20px'}}><i className="fa-solid fa-hard-drive" style={{color: "#513f1e",}} /> AI</ListGroup.Item>
            <ListGroup.Item action href="#" style={{fontSize: '20px'}}><i className="fa-solid fa-school" style={{color: "#513f1e",}} /> School</ListGroup.Item>
            <ListGroup.Item action href="#" style={{fontSize: '20px'}}><i className="fa-solid fa-newspaper" style={{color: "#513f1e",}}/> News</ListGroup.Item>
            <ListGroup.Item action href="#" style={{fontSize: '20px'}}><i className="fa-solid fa-gears" style={{color: "#513f1e",}}/> Setting</ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item className='bttom'action href="#" style={{fontSize: '20px'}}><i className="fa-solid fa-signs-post" style={{color: "#513f1e",}}/> Create Post</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
            <Card.Title>main content</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>Click to View Content</Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum fuga facere pariatur?
            </Card.Text>
            <Card.Link href=''>Card Link</Card.Link>
            </Card.Body>
          </Card>
          <Row className='mt-2'>
            {/* render post items here  */}
          </Row>
        </Col>
        <Col  md={3} className='right-sidebar bg-white rounded pt-3'>
          <Card>
            <Card.Body>
              <Card.Title>Chat Room</Card.Title>
              <Card.Text>Click on a chat room to view message.</Card.Text>
              <ListGroup>
                <ListGroup.Item action href='#'>Room1</ListGroup.Item>
                <ListGroup.Item action href="#">Room2</ListGroup.Item>
                <ListGroup.Item action href="#">Room3</ListGroup.Item>
                <ListGroup.Item action href="#">Room4</ListGroup.Item>
                <ListGroup.Item action href='#'>Room1</ListGroup.Item>
                <ListGroup.Item action href="#">Room2</ListGroup.Item>
              </ListGroup>
              <Button href='#' variant='primary' block>Open Chat</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home