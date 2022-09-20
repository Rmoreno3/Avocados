import React, { useEffect, useState } from 'react';

const Home = () => {
  const [productList, setProductList] = useState([]);
  const API = '/api/avo';

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(({ data, length }) => {
        setProductList(data);
      })
  }, [])


  return (
    <div>
      <div>
        {productList.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <div>
              <img src={product.image} alt={product.name} />
            </div>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default Home