import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import { Button, Card, Container } from 'react-bootstrap';
import ProductReview from './ProductReview';

const CropTops = () => {
  // State to hold the list of crop tops
  const [cropTops, setCropTops] = useState([
    { id: 1, title: 'Crop Top 1', name: 'Product 1', price: '$20.00', imgSrc: 'https://m.media-amazon.com/images/I/517X315L1gL.jpg' },
    { id: 2, title: 'Crop Top 2', name: 'Product 2', price: '$25.00', imgSrc: 'https://i5.walmartimages.com/asr/4c6efd67-9103-4b37-9835-6b8c713ad0e2.b520f681070497c4dbf5ba190a223eb0.jpeg?odnHeight=432&odnWidth=320&odnBg=FFFFFF' },
    // Add more crop tops as needed
  ]);

  // Function to handle deleting a crop top
  const handleDelete = (id) => {
    setCropTops(cropTops.filter(cropTop => cropTop.id !== id));
  };

  return (
    <div>
      <NavigationBar />
      <Container>
        <div className='cards'>
          {cropTops.map(cropTop => (
            <Card key={cropTop.id} style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src={cropTop.imgSrc} />
              <Card.Body>
                <Card.Title>{cropTop.title}</Card.Title>
                <Card.Text>{cropTop.name}</Card.Text>
                <Card.Text>{cropTop.price}</Card.Text>
                <Button variant="secondary">Go somewhere</Button>
                <Button 
                  variant="danger" 
                  onClick={() => handleDelete(cropTop.id)} 
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

export default CropTops;
