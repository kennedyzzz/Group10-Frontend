import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import { Button, Card, Container } from 'react-bootstrap';
import ProductReview from './ProductReview';
const Jackets = () => {
  // State to hold the list of jackets
  const [jackets, setJackets] = useState([
    { id: 1, title: 'Jacket 1', name: 'Jacket Name 1', price: '$50.00', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCsY6KG9fAtOsFOI-YPpTX0628gECeR2kcQ&s' },
    { id: 2, title: 'Jacket 2', name: 'Jacket Name 2', price: '$55.00', imgSrc: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/933494/1.jpg?9930' },
    // Add more jackets as needed
  ]);

  // Function to handle deleting a jacket
  const handleDelete = (id) => {
    setJackets(jackets.filter(jacket => jacket.id !== id));
  };

  return (
    <div>
      <NavigationBar />
      <Container>
        <div className='cards'>
          {jackets.map(jacket => (
            <Card key={jacket.id} style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src={jacket.imgSrc} />
              <Card.Body>
                <Card.Title>{jacket.title}</Card.Title>
                <Card.Text>{jacket.name}</Card.Text>
                <Card.Text>{jacket.price}</Card.Text>
                <Button variant="secondary">Go somewhere</Button>
                <Button 
                  variant="danger" 
                  onClick={() => handleDelete(jacket.id)} 
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

export default Jackets;
