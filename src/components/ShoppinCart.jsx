import { Box, Container, Typography } from '@mui/material';
import { useReducer } from 'react'
import { shoppingInitlaState, shoppingReducer } from '../reducers/shoppingReducer'
import BasicCard from './ProductItemMUI';

const ShoppinCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitlaState);
    const {products, cart} = state;

    const addToCart = (id) => {
        console.log(id)
    };
    const deleteFromCart = () => {};
    const clearCart = () => {};

  return (
    <Container>
      <Typography variant="h4">Carrito de compras</Typography>
      <Typography variant='h5'>Productos</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, py: 2}}>
        {products.map((product) => (
          <BasicCard key={product.id} data={product} addToCart={addToCart} />
        ))}
      </Box>
      <h3>Carrito</h3>
      <article className='box'></article>
    </Container>
  );
}

export default ShoppinCart