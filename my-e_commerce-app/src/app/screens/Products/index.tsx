import { useQuery } from "react-query";
import Card from "../../components/Card/Index";
import { useState } from "react";

const QUERY_KEY_PRODUCTS = 'products';
    interface Product{
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: {
      id: number;
      name: string;
      image: string;
    };
    }


function Products() {
    //estados de filtros
    const fetchProducts = async () => {
        const res = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error);
        }
        return data;
    };

    const { data:products, status, error } = useQuery<Product[]>(
        QUERY_KEY_PRODUCTS,
        fetchProducts
    );
    console.log(products)

     const [ productsF, ] = useState (products)
const [filters, setFilters]= useState ({
    //id: 1, 
    price: 800,
});
    console.log(typeof(products));
    console.log(typeof(productsF));
    //const [productsArray] = Object.entries(productsF);
    //console.log(typeof(productsArray));
    const filterProducts = productsF?.filter((product) => { 
      return product.price > filters.price 
   });
   console.log(typeof(filterProducts));
    /*const filterProducts =  (productsF) => {
        return productsF.filter(productF => {
            return (
                productF.price > filters.price &&
               (
                    filters.category.id===1||
                    productF.category.id===filters.category
                ) 
            )
        })
    }*/

    //const filteredProducts= filterProducts(productsF)
    return (
        <div><h1>Products</h1>

            {filterProducts && filterProducts.map((product)=>{
                    return(
                        
                        <Card  key={product.id} nameProd={product.title} idProd={product.id} imageProd={product.images} priceProd={product.price} detailProd={product.description}></Card>
                        
                    );
                })}
           {/*  {filterProducts && filterProducts.map((product) => {
                return (

                    <Card key={product.id} nameProd={product.title} idProd={product.id} imageProd={product.images} priceProd={product.price} detailProd={product.description}></Card>

                );
            })}*/}
        </div>

    )
}
export default Products;