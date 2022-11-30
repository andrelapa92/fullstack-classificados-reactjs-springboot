import ProductCard from '../componentes/ProductCard';
import ShowProducts from '../componentes/ProductList';

const Products = () => {
    return (
    <>
      <h1 className='text-center'>Estes são nossos produtos:</h1>
      <br />
      <ShowProducts />
    </>
    );
  };
  
  export default Products;