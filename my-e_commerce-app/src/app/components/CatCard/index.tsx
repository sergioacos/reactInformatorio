import { Link, NavLink } from "react-router-dom";
interface Props{
nameCat:string;
imageCat?:string;
idCat:number;
}



function CatCard({nameCat,imageCat,idCat}:Props){
    return(
        <div>
        <NavLink  to={`/categories/${idCat}`}>
            
                <img src={imageCat} alt="Foto según categoría"/>
            
            <h3>{nameCat}</h3>
        </NavLink>
    </div>

    )
}
export default CatCard;