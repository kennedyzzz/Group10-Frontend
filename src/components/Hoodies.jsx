import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import { Button, Card, Container } from 'react-bootstrap';
import ProductReview from './ProductReview';
const Hoodies = () => {
  // State to hold the list of hoodies
  const [hoodies, setHoodies] = useState([
    { id: 1, title: 'Hoodie 1', name: 'Hoodie Name 1', price: '$40.00', imgSrc: 'https://theelegance.pk/wp-content/uploads/2023/11/Buy-High-Quality-Custom-Your-Design-Here-Hoodies.webp' },
    { id: 2, title: 'Hoodie 2', name: 'Hoodie Name 2', price: '$45.00', imgSrc: 'https://huckberry.imgix.net/spree/products/733913/original/40772_Flint_and_Tinder_10-Year_Full_Zip_Hoodie_Black_01.jpg?auto=format%2C%20compress&crop=top&fit=fill&cs=tinysrgb&ar=4%3A5&fill=solid&fill-color=FFFFFF&ixlib=react-9.8.1' },
    // Add more hoodies as needed
  ]);

  // Function to handle deleting a hoodie
  const handleDelete = (id) => {
    setHoodies(hoodies.filter(hoodie => hoodie.id !== id));
  };

  return (
    <div>
      <NavigationBar />
      <Container>
        <div className='cards'>
          {hoodies.map(hoodie => (
            <Card key={hoodie.id} style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src={hoodie.imgSrc} />
              <Card.Body>
                <Card.Title>{hoodie.title}</Card.Title>
                <Card.Text>{hoodie.name}</Card.Text>
                <Card.Text>{hoodie.price}</Card.Text>
                <Button variant="secondary">Go somewhere</Button>
                <Button 
                  variant="danger" 
                  onClick={() => handleDelete(hoodie.id)} 
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

export default Hoodies;
