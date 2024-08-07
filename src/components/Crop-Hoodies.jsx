import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import { Button, Card, Container } from 'react-bootstrap';
import ProductReview from './ProductReview';
const CropHoodies = () => {
  // State to hold the list of crop hoodies
  const [crophoodies, setCrophoodies] = useState([
    { id: 1, title: 'Crop Hoodie 1', description: 'Description of Crop Hoodie 1', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3ZtkXYJ3DyFBWhQJAW-hHDFRYW5-WN6Q4A&s' },
    { id: 2, title: 'Crop Hoodie 2', description: 'Description of Crop Hoodie 2', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbjWuxGoedp_mH7Z9AtAC9xba87anAWmSAA&s' },
    // Add more crop hoodies as needed
  ]);

  // Function to handle deleting a crop hoodie
  const handleDelete = (id) => {
    setCrophoodies(crophoodies.filter(crophoodie => crophoodie.id !== id));
  };

  return (
    <div>
      <NavigationBar />
      <Container>
        <div>
          {crophoodies.map(crophoodie => (
            <Card key={crophoodie.id} style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src={crophoodie.imgSrc} />
              <Card.Body>
                <Card.Title>{crophoodie.title}</Card.Title>
                <Card.Text>{crophoodie.description}</Card.Text>
                <Button variant="secondary">Go somewhere</Button>
                <Button 
                  variant="danger" 
                  onClick={() => handleDelete(crophoodie.id)} 
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </Button>
                <ProductReview/>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CropHoodies;
