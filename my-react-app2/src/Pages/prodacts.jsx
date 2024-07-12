import CardProduct from "../components/Fragments/cardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at,
          impedit eius sunt ipsam totam non error eaque, reiciendis quis
          delectus possimus iure repellendus, aperiam accusantium culpa libero
          architecto? Laudantium.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000"></CardProduct.Footer>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at,
          impedit eius sunt ipsam totam non error eaque, reiciendis quis
          delectus possimus iure repellendus, aperiam accusantium culpa libero
          architecto? Laudantium.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000"></CardProduct.Footer>
      </CardProduct>
    </div>
  );
};
export default ProductPage;
