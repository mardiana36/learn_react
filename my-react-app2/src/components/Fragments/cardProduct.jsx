import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (params) => {
  const { children } = params;
  return (
    <div className=" w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (params) => {
    const {image, id} = params
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="product"
        className=" p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
};

const Body = (params) => {
    const { children, name }=params
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)}...
        </h5>
        <p className="text-m text-white">
          {children.substring(0,100)}...
        </p>
      </a>
    </div>
  );
};

const Footer = (params) => {
  const { price, id } = params
  const dispach = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 pb-5">
          <span className="text-xl font-bold text-white">{ price.toLocaleString('id-ID',{style: 'currency', currency: 'USD'}) }</span>
      <Button bg="bg-blue-700" onClick={()=>dispach(addToCart({id,qty:1}))}>Add To Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
