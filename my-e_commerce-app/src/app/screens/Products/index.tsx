import { useQuery } from "react-query";
import Card from "../../components/Card/Index";
import { useState } from "react";

const QUERY_KEY_PRODUCTS = 'products';

const fetchProducts = async ()=>{
   const res = await fetch('https://api.escuelajs.co/api/v1/products');
   const json = await res.json();
   if(json.error){
       throw new Error(json.error);
   }
   return json;
};


function Products(){
const [products] = useState (data.products)
const [filters, setFilters]= useState ({
    category: "all", 
    minPrice: 0
});
    const{data, status, error}= useQuery(
        QUERY_KEY_PRODUCTS, 
        fetchProducts
        );
     console.log(data)

const filterProducts =  (products) => {
    return products.filter(product => {
        return (
            product.price >= filters &&
            (
                filters.category==="all"||
                product.category===filters.category
            ) 
        )
    })
}



    return(
        <div><h1>Products</h1>
        
         {data && data.map((product)=>{
                    return(
                        
                        <Card  key={product.id} nameProd={product.title} idProd={product.id} imageProd={product.images} priceProd={product.price} detailProd={product.description}></Card>
                        
                    );
                })}
        
        </div>
        
        )
}
export default Products;