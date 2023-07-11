import { useQuery } from "react-query";
const QUERY_KEY_CATEGORIES = 'categories';

 const fetchCategories = async ()=>{
    const res = await fetch('https://api.escuelajs.co/api/v1/categories');
    const json = await res.json();
    if(json.error){
        throw new Error(json.error);
    }
    return json;
};
function Categories(){
    
    const{data, status, error}= useQuery(
        QUERY_KEY_CATEGORIES, 
        fetchCategories
        );
     console.log(data)
    return(
        <main>
            <h1>Categorías</h1>
            <ul>
                {data && data.map((category)=>{
                    return(
                        <li key={category.id}>{category.name}</li>
                    )
                })}
            </ul>
            

        </main>
        )
}
export default Categories;