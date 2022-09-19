import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'

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
      <Navbar />
      <div>
        {productList.map(product => (
          <>
            <h3>{product.name}</h3>
            <div>
              <img src={product.image} alt={product.name} />
            </div>
          </>

        )
        )}
      </div>
    </div>
  )
}

export default Home