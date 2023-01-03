import React, { useState, useEffect } from 'react'; 
import "/Users/umarraza/Documents/React/fake-store/src/common.css";

function GetAllProducts(props) {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const product_data = await response.json();
    console.log(product_data);
    setProducts(product_data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (<>
  <h1 className='heading'>Get All Products Data</h1>
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Description</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>

          {
            products.map(p=>(
            
                <tr key={p.id} >
                    <td>{p.id}</td>
                    <td>{p.title}</td>
                    <td>{p.price}</td>
                    <td>{p.category}</td>
                    <td>{p.description}</td>
                    <td>{p.rating.rate}</td>
                </tr>
                
            
            ))
          }  


        
      </tbody>
    </table>
    </>
  );
}

export default GetAllProducts;
