import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import { Button, Card, Container } from 'react-bootstrap'

function CropHoodies() {
    const [crophoodies, setCrophoodies] = useState([])


  return (
    <div>
         <NavigationBar />
         <Container>
         <div>
        {crophoodies.map((crophoodie) => (
            <Card key={crophoodie} style={StyleSheet.crophoodieCard}>
            <Card.Img variant="top" src={"holder.js/100px180"} />
            <Button variant="primary">Go somewhere</Button>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            </Card.Body>
            </Card>
        ))}
       </div>
         </Container>
    </div>
  )
}

export default CropHoodies