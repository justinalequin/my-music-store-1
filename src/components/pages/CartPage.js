import { Box, Typography } from '@mui/material';
import React from 'react';
import CartItem from '../CartItem';
import Layout from '../layout/Layout';
import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const shoppingCart = [
  {
    id: '123',
    title: 'Blue Drumset"',
    price: 89999,
    quantity: 2,
    image: 'https://img.grouponcdn.com/stores/xeedMRUK7jjx6xqd8S8mD7aNKuL/storespi892307-1000x600/v1/c870x524.jpg',
  },
  {
    id: '111',
    title: 'Big piano',
    price: 299999,
    quantity: 2,
    image: 'https://kawaius.com/wp-content/uploads/2020/07/Kawai-DG30-Digital-Grand.jpg',
  },
];

const CartPage = () => {
  return (
    <Layout>
      <Box p={4}>
        {shoppingCart.map(item => (
          <Box mb={4} key={item.id}>
            <CartItem cartItem={{
              id: item.id,
              title: item.title,
              image: item.image,
              quantity: item.quantity,
              price: item.price,
            }} />
          </Box>
        ))}
        <Box display="flex" justifyContent="center" mb={2}>
          <Typography>Total: $9999.99</Typography>
        </Box>
        <Box display="flex" justifyContent="center" mb={2}>
          <Button sx={{width: '220px'}} variant="contained">Checkout</Button>
        </Box>
        <Box display="flex" justifyContent="center" mb={2}>
          <Button sx={{width: '220px'}} startIcon={<ReplayIcon />} variant="contained">Empty cart</Button>
        </Box>
        <Box display="flex" justifyContent="center" mb={2}>
          <Link to="/">
            <Button sx={{width: '220px'}}  startIcon={<HomeIcon />} variant="contained">Back to home page</Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  )
};

export default CartPage;
