import React from 'react';
import {useParams} from "react-router-dom";
import {adidasArr} from "./Adidas";

export const Model = () => {
    const {id} = useParams()
    const adidasItem = adidasArr.find(el => el.id === Number(id));
    return (
        <div>
            {adidasItem ?
                <>
                    <div>
                        <h3>Collection : {adidasItem.collection}</h3>
                        <h4>Price :{adidasItem.price}</h4>
                        <p>Model :{adidasItem.model}</p>
                        <img src={adidasItem.picture} alt={adidasItem.model} style={{width: '400px', height: 'auto'}}/>
                    </div>
                </>
                : <h2 style={{textAlign: 'center'}}> Товара нет в наличии </h2>
            }
        </div>
    );
};