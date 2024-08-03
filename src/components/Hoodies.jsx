import React from 'react'
import NavigationBar from './NavigationBar'
import { Button, Card, Container } from 'react-bootstrap'

function Hoodies() {
  return (
    <div>
        <NavigationBar />
        <Container>
        <div className='cards'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Button variant="primary">Go somewhere</Button>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>name</Card.Text>
        <Card.Text>price</Card.Text>
      </Card.Body>
    </Card>
        </div>
        </Container>
    </div>
  )
}

export default Hoodies