import ShowProducts from "./ProductList";

function ProductByCategory(props) {
    return (
      <div className='productCard d-inline-block text-center'>
          <ShowProducts
          />
      </div>
    );
  }
  
  export default ProductByCategory;