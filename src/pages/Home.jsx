import React from 'react';

function Card({ imageSrc, title, text }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imageSrc} className="card-img-top" alt="Card image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

const Home = () => {
  const cardData = [
    {
      imageSrc: 'https://tisapthreads.com/cdn/shop/files/DSC01433-Edit_706445e2-b971-4714-aa6d-ff4cface3b2d_375x_crop_center.jpg?v=1716358776',
      title: 'RAVE SHORTS',
      text: 'KSh1,500.00'
    },
    {
      imageSrc: 'https://tisapthreads.com/cdn/shop/files/DSC01474-Edit_960bf70b-ae88-47d2-be30-9ce4fba0caa3_375x_crop_center.jpg?v=1716357834',
      title: 'TISAP T-SHIRT',
      text: 'KSh1,600.00'
    },
    {
      imageSrc: 'https://tisapthreads.com/cdn/shop/files/DSC01282-Edit-2_34d8e425-562c-4475-b092-529b38ac1a3a_375x_crop_center.jpg?v=1716358910',
      title: 'TISAP SHORTS',
      text: 'KSh2,000.00'
    },
    {
      imageSrc: 'https://i.pinimg.com/736x/76/b9/ec/76b9eca569211813052630d50450af3b.jpg',
      title: 'MAMI JEANS',
      text: 'KSh1,600.00'
    },
    {
      imageSrc: 'https://lh3.googleusercontent.com/Ka6g53CarYahy2xr7cttbZmqkT6sKmZjO77JwazEJ8QebIAha8P9dgR2DFwKaJh3RgfNj6O2n3ddF9SLXap1GCqlOH8uILxZxg=s750',
      title: 'UMBRELLA JEANS',
      text: 'KSh1,500.00'
    },
    {
      imageSrc: 'https://thehowler.org/wp-content/uploads/2023/01/trend.jpg',
      title: 'SWEAT SHIRTS',
      text: 'KSh1,200.00'
    },
    {
      imageSrc: 'https://stylecaster.com/wp-content/uploads/2023/10/ASOS-Pants.jpg?w=600',
      title: 'CARGO PANTS',
      text: 'KSh2,500.00'
    },
    {
      imageSrc: 'https://stylegirlfriend.com/wp-content/uploads/2023/12/jeromeparkerr_grey-pants.jpg',
      title: 'SUITS',
      text: 'KSh2,000.00'
    }
  ];

  return (
    <div className="home-background">
      <div className="image-container">
        <img
          src="https://odo-cdn.imgix.net/catalog/product/168/959/1689591020.5708.jpeg?auto=compress,format&w=800&h=800&bg=fff&fit=fill"
          alt="Decorative Banner"
          className="banner-image"
        />
        <div className="welcome-message">Welcome To Tisap</div>
      </div>

      <div className="card-grid">
        {cardData.map((card, index) => (
          <Card key={index} imageSrc={card.imageSrc} title={card.title} text={card.text} />
        ))}
      </div>

      <div className="additional-image-container">
        <img
          src="https://tisapthreads.com/cdn/shop/files/tisap-48.jpg?v=1710422317" // Replace with your desired image URL
          alt="Additional Banner"
          className="additional-image"
        />
      </div>
    </div>
  );
};

export default Home;
