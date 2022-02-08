import { Box } from '@mui/material';
import React from 'react';
import CartItem from '../CartItem';
import Layout from '../layout/Layout';

const CartPage = () => {
  return (
    <Layout>
      <h1>
        This is the Shopping cart 
      </h1>
      <Box p={4}>
        <Box mb={4}>
          <CartItem cartItem={{
            id: '123',
            title: 'Drum set blue',
            image: 'https://media.sweetwater.com/images/items/750/SBP8F3CR-large.jpg?v=59a77bcd3841c67a',
            quantity: 2,
            price: 89999,
          }} />
        </Box>
        <Box mb={4}>
          <CartItem cartItem={{
            id: '123',
            title: 'Drum set blue',
            image: 'https://media.sweetwater.com/images/items/750/SBP8F3CR-large.jpg?v=59a77bcd3841c67a',
            quantity: 2,
            price: 89999,
          }} />
        </Box>
        <Box mb={4}>
          <CartItem cartItem={{
            id: '123',
            title: 'Drum set blue',
            image: 'https://media.sweetwater.com/images/items/750/SBP8F3CR-large.jpg?v=59a77bcd3841c67a',
            quantity: 2,
            price: 89999,
          }} />
        </Box>
      </Box>
    </Layout>
  )
};

export default CartPage;
