import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import NavigationBar from './NavigationBar';

const ProductManager = () => {
  // State to hold products by category
  const [products, setProducts] = useState({
    tshirts: [],
    hoodies: [],
    jackets: [],
    crophoodies: []
  });

  // State for form input
  const [form, setForm] = useState({
    category: 'tshirts',
    title: '',
    name: '',
    price: '',
    imgSrc: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Function to handle adding a product
  const handleAddProduct = (e) => {
    e.preventDefault();
    const { category, title, name, price, imgSrc } = form;
    setProducts({
      ...products,
      [category]: [...products[category], { id: Date.now(), title, name, price, imgSrc }]
    });
    // Reset form
    setForm({ category: 'tshirts', title: '', name: '', price: '', imgSrc: '' });
  };

  // Function to render products by category
  const renderProducts = (category) => {
    return products[category].map(product => (
    <div>
       <NavigationBar/>  
      <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
       
        <Card.Img variant="top" src={product.imgSrc} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.name}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
        </Card.Body>
      </Card>
      </div>
    ));
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleAddProduct}>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={form.category}
              onChange={handleInputChange}
            >
              <option value="tshirts">T-Shirts</option>
              <option value="hoodies">Hoodies</option>
              <option value="jackets">Jackets</option>
              <option value="crophoodies">Crop Hoodies</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={form.title}
              onChange={handleInputChange}
              placeholder="Enter product title"
            />
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Enter product name"
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={form.price}
              onChange={handleInputChange}
              placeholder="Enter product price"
            />
          </Form.Group>
          <Form.Group controlId="imgSrc">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="imgSrc"
              value={form.imgSrc}
              onChange={handleInputChange}
              placeholder="Enter image URL"
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Add Product
          </Button>
        </Form>

        <h2>T-Shirts</h2>
        <div className='cards'>
          {renderProducts('tshirts')}
        </div>

        <h2>Hoodies</h2>
        <div className='cards'>
          {renderProducts('hoodies')}
        </div>

        <h2>Jackets</h2>
        <div className='cards'>
          {renderProducts('jackets')}
        </div>

        <h2>Crop Hoodies</h2>
        <div className='cards'>
          {renderProducts('crophoodies')}
        </div>
      </Container>
    </div>
  );
};

export default ProductManager;
