import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import CartItem from '../CartItem';
import Layout from '../layout/Layout';
import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const CartPage = (props) => {
  const { removeItem, shoppingCart, emptyShoppingCart } = props;

  return (
    <Layout>
      <Box p={4}>
        {shoppingCart.map(item => (
          <Box mb={4} key={item.id}>
            <CartItem
              removeItem={removeItem}
              cartItem={{
                id: item.id,
                title: item.title,
                image: item.image,
                quantity: item.quantity,
                price: item.price,
              }}
            />
          </Box>
        ))}
        <Box display="flex" justifyContent="center" mb={2}>
          <Typography>Total: $9999.99</Typography>
        </Box>
        <Box display="flex" justifyContent="center" mb={2}>
          <Button sx={{width: '220px'}} variant="contained">Checkout</Button>
        </Box>
        <Box display="flex" justifyContent="center" mb={2}>
          <Button sx={{width: '220px'}} startIcon={<ReplayIcon />} variant="contained" onClick={emptyShoppingCart}>Empty cart</Button>
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
