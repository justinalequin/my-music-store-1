import React from 'react';
import Layout from '../layout/Layout';
import ProductDisplay from '../ProductDisplay';



const HomePage = () => {
  return (
  <Layout color="red">
    <ProductDisplay
      product={{
        id: '123',
        title: 'Blue Drumset"',
        brand: 'Yamaha',
        price: 89999,
        description: 'This is a great drum set you should buy it today!',
        image: 'https://img.grouponcdn.com/stores/xeedMRUK7jjx6xqd8S8mD7aNKuL/storespi892307-1000x600/v1/c870x524.jpg',
      }}
    />
    <ProductDisplay
      product={{
        id: '456',
        title: 'Red Drumset',
        brand: 'Yamaha',
        price: 99999,
        description: 'This is a great drum set you should buy it today! but this on is red',
        image: 'https://media.sweetwater.com/images/items/750/SBP8F3CR-large.jpg?v=59a77bcd3841c67a',
      }}
    />
  </Layout>
  )
};

export default HomePage;
