import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Index";
import { useState } from "react";



const QUERY_KEY_CATPROD = 'catProd';
const QUERY_KEY_CATEGORIES = 'categories';
//const eventHandler: ()=>void;


//eventHandler(event)


function CatDetail() {


    const { id } = useParams();

    //consta
    const [catId, setCatId] = useState(id);
    const eventHandler = () => { console.log("hola") };


    const fetchCategories = async () => {
        const res = await fetch('https://api.escuelajs.co/api/v1/categories');
        const json = await res.json();
        if (json.error) {
            throw new Error(json.error);
        }
        return json;
    };

    const fetchProCategories = async () => {
        const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${catId}/products`);
        const json = await res.json();
        if (json.error) {
            throw new Error(json.error);
        }
        return json;
    };

    const { data, status, error } = useQuery(
        QUERY_KEY_CATEGORIES,
        fetchCategories
    );
    console.log(data)

    const Queryproduct = useQuery([QUERY_KEY_CATPROD, catId],
        fetchProCategories, { keepPreviousData: true });


    return (
        <main>

            <h2>Categorías</h2>
            <ul>
                {data && data.map((category) => {
                    return (

                        <div ><a key={category.id} onClick={() => setCatId(category.id)} >{category.name}</a></div>

                    )
                })}
            </ul>
            
            <div>{Queryproduct.data && Queryproduct.data.map((catProd) => {
                return (
                    <Card nameProd={catProd.title} imageProd={catProd.images} idProd={catProd.id} priceProd={catProd.price} detailProd={catProd.description}></Card>
                )
            })}
            </div>
        </main>

    )
}
export default CatDetail;