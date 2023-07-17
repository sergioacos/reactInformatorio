import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import CatCard from "../../components/CatCard";

const QUERY_KEY_CATEGORIES = 'categories';

 const fetchCategories = async ()=>{
    const res = await fetch('https://api.escuelajs.co/api/v1/categories');
    const json = await res.json();
    if(json.error){
        throw new Error(json.error);
    }
    return json;
};
/*const[idcat,setIcat]= useState (1)

useEffect (()=>{fetchProCategories() },[idcat])

const catHandler=()=>{ setIcat(category.id)

}

const fetchProCategories = async ()=>{
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories/``${idcat}/products`);
    const json = await res.json();
    if(json.error){
        throw new Error(json.error);
    }
    return json;
};*/



function Categories(){
    
    const{data, status, error}= useQuery(
        QUERY_KEY_CATEGORIES, 
        fetchCategories
        );
     console.log(data)
     

    return(
        <main>
            
            <h2>Categorías</h2>
            <ul>
                {data && data.map((category)=>{
                    return(
                        
                        <CatCard  key={category.id} nameCat={category.name} idCat={category.id} imageCat={category.image}></CatCard>
                        
                    )
                })}
            </ul>
           { /*<div>{data && json.map((product)=>{
                    return(
                        
                        <Card nameProd={product.title} imageProd={product.image} idProd={product.id} priceProd={product.price} stockProd={0} detailProd={product.description}></Card>
                        
                    )
                })}
                
            </div>*/}

        </main>
        )
}
export default Categories;