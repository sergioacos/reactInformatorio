import { Link, NavLink } from "react-router-dom";
interface Props{
nameProd:string;
imageProd:string;
idProd:number;
priceProd?:number;
stockProd?:number;
detailProd?:string;
}



function Card({nameProd,imageProd,idProd,priceProd,stockProd,detailProd}:Props){
    return(
        <div>
        <NavLink to={`/products/${idProd}`}>
            <a>
                <img src={imageProd} alt="Foto de producto"/>
            </a>
            <h3>Nombre: {nameProd}</h3>
            <h3>Price: $ {priceProd}</h3>
            <p>Stock {stockProd}</p>
            <p>Descripción:{detailProd}</p>
        </NavLink>
    </div>

    )
}
export default Card;