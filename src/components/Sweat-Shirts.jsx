import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import { Button, Card, Container } from 'react-bootstrap';
import ProductReview from './ProductReview';
const SweatShirts = () => {
  // State to hold the list of products
  const [products, setProducts] = useState([
    { id: 1, title: 'Sweatshirt 1', name: 'Product 1', price: '$25.00', imgSrc: 'https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg' },
    { id: 2, title: 'Sweatshirt 2', name: 'Product 2', price: '$30.00', imgSrc: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/115232/1.jpg?9916' },
    // Add more products as needed
  ]);

  // Function to handle deleting a product
  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <NavigationBar />
      <Container>
        <div className='cards'>
          {products.map(product => (
            <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src={product.imgSrc} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.name}</Card.Text>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="secondary">Quick View</Button>
                <Button variant="danger" onClick={() => handleDelete(product.id)} style={{ marginLeft: '10px' }}>
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

export default SweatShirts;
