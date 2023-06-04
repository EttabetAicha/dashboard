import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
import { ProductSort, ProductList} from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function ProductsPage() {

  

  return (
    <>
      <Helmet>
        <title> Dashboard: Models</title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Models
          
        </Typography>


        <ProductList products={PRODUCTS} />
        
      </Container>
    </>
  );
}
