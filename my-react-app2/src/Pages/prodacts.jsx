import Button from "../components/Elements/Button";
import { useState, useEffect, useRef } from "react";
import CardProduct from "../components/Fragments/cardProduct";
// import Counter from "../components/Fragments/Counter";
const prodacts = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image: "/images/shoes.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at, impedit eius sunt ipsam totam non error eaque, reiciendis quis delectus possimus iure repellendus, aperiam accusantium culpa libero architecto? Laudantium",
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: 500000,
    image: "/images/shoes.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at, impedit eius sunt ipsam totam non error eaque? Laudantium",
  },
];
const email = localStorage.getItem("email");
const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = prodacts.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const heandelLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const heandelAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  const heandelAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
      
    }
  })
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-700 text-white items-center px-10">
        {email}
        <Button onClick={heandelLogout} bg="bg-black ml-5">
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5 px-5 w-full overflow-x-hidden">
        <div className="w-3/4 flex flex-wrap">
          {prodacts.map((prodact) => (
            <CardProduct key={prodact.id}>
              <CardProduct.Header image={prodact.image}></CardProduct.Header>
              <CardProduct.Body name={prodact.name}>
                {prodact.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={prodact.price}
                heandelAddToCart={heandelAddToCart}
                id={prodact.id}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = prodacts.find(
                  (prodact) => prodact.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}> <b>Total Price</b></td>
                <td><b>{ totalPrice.toLocaleString('id-ID',{style: 'currency', currency: 'IDR'}) }</b></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center mb-5">
        <Counter></Counter>
      </div> */}
    </>
  );
};
export default ProductPage;
