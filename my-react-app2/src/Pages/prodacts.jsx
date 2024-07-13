import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/cardProduct";
const prodacts = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "/images/shoes.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at, impedit eius sunt ipsam totam non error eaque, reiciendis quis delectus possimus iure repellendus, aperiam accusantium culpa libero architecto? Laudantium",
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 100.000",
    image: "/images/shoes.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at, impedit eius sunt ipsam totam non error eaque? Laudantium",
  },
];
const email = localStorage.getItem('email')
const ProductPage = () => {
  const heandelLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href="/login"
  }
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-700 text-white items-center px-10">{email}
        <Button onClick={heandelLogout} bg="bg-black ml-5">Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        {prodacts.map((prodact) => (
          <CardProduct key={prodact.id}>
            <CardProduct.Header image={prodact.image}></CardProduct.Header>
            <CardProduct.Body name={prodact.name}>
              {prodact.description}
            </CardProduct.Body>
            <CardProduct.Footer price={prodact.price}></CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </>
  );
};
export default ProductPage;
