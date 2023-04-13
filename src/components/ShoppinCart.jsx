import { Alert, Box, Button, Container, Snackbar, Typography } from '@mui/material';
import { useReducer } from 'react'
import { TYPES } from '../actions/shoppingActions';
import { shoppingInitlaState, shoppingReducer } from '../reducers/shoppingReducer'
import { CartDrawer } from './CartDrawer';
import { CartItem } from './CartItem';
import BasicCard from './ProductItemMUI';

const ShoppinCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitlaState);
    const {products, cart, alert} = state;

    const addToCart = (id) => {
      dispatch({type: TYPES.ADD_TO_CART , payload: id})
    };

    const deleteFromCart = (id, all = false) => {
      if(all) {
        dispatch({type: TYPES.REMOVE_ALL_FROM_CART , payload: id})
      } else {
        dispatch({type: TYPES.REMOVE_ONE_FROM_CART , payload: id})
      }
    };

    const clearCart = () => {
      dispatch({type: TYPES.CLEAR_CART})
    };

    const handleClose = () => {
      dispatch({type: TYPES.CLOSE_ALERT})
    };

  return (
    <Container>
      <Box sx={{display: 'flex', justifyContent: 'space-between', py: 2}}>
        <Typography variant="h4">Carrito de compras</Typography>
        <CartDrawer>
          <Button size="small" onClick={clearCart}>
            Limpiar Carrito
          </Button>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              py: 2,
              justifyContent: "center",
            }}
          >
            {cart.map((item, index) => (
              <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
            ))}
          </Box>
        </CartDrawer>
      </Box>
      <Typography variant="h5">Productos</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          py: 2,
          justifyContent: "center",
        }}
      >
        {products.map((product) => (
          <BasicCard key={product.id} data={product} addToCart={addToCart} />
        ))}
      </Box>
      <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          OK!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default ShoppinCart