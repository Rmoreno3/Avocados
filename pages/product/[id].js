import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState({});
  const API = `/api/avo/${id}`;



  useEffect(() => {
    if (id) {
      fetch(API)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch(err => console.error(err))
  }
}, [id])
  
  
  return (
    <div>
      {product 
        ? 
          <>
            <h3>{product.name}</h3>
            <div>
              <img src={product.image} alt={product.name} />
            </div>
          </>
        : 
        (
          <>
            <div>error</div>
          </>
        )
      }
    </div>
  )
}

export default ProductItem;