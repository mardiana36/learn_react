// import Button from "../components/Elements/Button";
// import { useState, useEffect, useRef } from "react";
import CardProduct from "../components/Fragments/cardProduct";
import { getProduct } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import { useEffect, useState } from "react";
import Navbar from "../components/Layouts/navbar";


// import Counter from "../components/Fragments/Counter";
// const products = [
//   {
//     id: 1,
//     name: "Sepatu Baru",
//     price: 1000000,
//     image: "/images/shoes.jpg",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at, impedit eius sunt ipsam totam non error eaque, reiciendis quis delectus possimus iure repellendus, aperiam accusantium culpa libero architecto? Laudantium",
//   },
//   {
//     id: 2,
//     name: "Sepatu Lama",
//     price: 500000,
//     image: "/images/shoes.jpg",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at, impedit eius sunt ipsam totam non error eaque? Laudantium",
//   },
// ];


const ProductPage = () => {
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
 useLogin();

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, [])

  

  // useEffect(() => {
  //   if (products.length> 0 && cart.length > 0) {
  //     const sum = cart.reduce((acc, item) => {
  //       const product = products.find((product) => product.id === item.id);
  //       return acc + product.price * item.qty;
  //     }, 0);
  //     setTotalPrice(sum);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart, products]);

  // const heandelLogout = () => {
  //   localStorage.removeItem("token");
  //   window.location.href = "/login";
  // };

  // const heandelAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };

  // useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const heandelAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  // const totalPriceRef = useRef(null);
  // useEffect(() => {
  //   if (cart.length > 0) {
  //     totalPriceRef.current.style.display = "table-row";
  //   } else {
  //     totalPriceRef.current.style.display = "none";
      
  //   }
  // })
  return (
    <>
     <Navbar/>
      <div className="flex justify-center py-5 px-5 w-full overflow-x-hidden">
        <div className="w-3/4 flex flex-wrap">
          { products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header id={product.id} image={product.image}></CardProduct.Header>
              <CardProduct.Body name={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          {/* <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 && cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}> <b>Total Price</b></td>
                <td><b>{ totalPrice.toLocaleString('id-ID',{style: 'currency', currency: 'USD'}) }</b></td>
              </tr>
            </tbody>
          </table> */}
          <TableCart products={products} />
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center mb-5">
        <Counter></Counter>
      </div> */}
    </>
  );
};
export default ProductPage;
