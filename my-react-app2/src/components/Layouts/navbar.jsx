import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    },[cart])
  const heandelLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end h-20 bg-blue-700 text-white items-center px-10">
      {username}
      <Button onClick={heandelLogout} bg="bg-black ml-5">
        Logout
          </Button>
          <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
              <div>
                  {totalCart}
              </div>
          </div>
    </div>
  );
};
export default Navbar;
