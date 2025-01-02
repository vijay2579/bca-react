import { useEffect, useState } from "react";
import Popup from "./Popup";

export function Products() {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(async () => {
    let result = await fetch("https://fakestoreapi.com/products");
    setProducts(await result.json());
    return;
  }, []);

  const showPopup = () => {
    setShow(true);
  };
  const filterProducts = async (value) => {
    let result = await fetch(
      `https://fakestoreapi.com/products/category/${value}`
    );
    setProducts(await result.json());
  };
  return (
    <>
      <select onChange={(e) => filterProducts(e.target.value)}>
        <option>Select</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
      </select>
      <ul>
        {products.map(function (product, i) {
          return (
            <li>
              <div className="product">
                <div className="text">
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                </div>
                <button className="view-product" onClick={() => showPopup()}>
                  View Product
                </button>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </li>
          );
        })}
      </ul>

      <Popup showPopup={show} />
    </>
  );
}
