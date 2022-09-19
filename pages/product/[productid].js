import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const router = useRouter();
  const { productid, value } = router.query;
  console.log(router.query)
  return (
    <div>Esta es la pagina del producto { productid } { value }</div>
  )
}

export default ProductItem;