import Button from "../Elements/Button";

const CardProduct = (params) => {
  const { children } = params;
  return (
    <div className=" w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (params) => {
    const {image}=params
  return (
    <a href="#">
      <img
        src={image}
        alt="product"
        className=" p-8 rounded-t-lg"
      />
    </a>
  );
};

const Body = (params) => {
    const { children, name }=params
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name}
        </h5>
        <p className="text-m text-white">
          {children}
        </p>
      </a>
    </div>
  );
};

const Footer = (params) => {
    const { price, heandelAddToCart, id} = params
  return (
    <div className="flex items-center justify-between px-5 pb-5">
          <span className="text-xl font-bold text-white">{ price.toLocaleString('id-ID',{style: 'currency', currency: 'IDR'}) }</span>
      <Button bg="bg-blue-700" onClick={()=>heandelAddToCart(id)}>Add To Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
