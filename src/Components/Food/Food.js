import React from 'react'
import './Food.css'
import Foodingredient from './Foodingredient/Foodingredient';

const Food = (props) => {
    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <Foodingredient key={igKey + i} type={igKey} />;
            });
        })

        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])

    if (transformIngredients.length === 0) {
        transformIngredients = <p className='nullIngredients'>لطفا مواد غذایی خود را انتخاب کنید</p>
    }


    return (
        <div className="container">
            <Foodingredient className='breadeft' type="breadLeft" />
            {transformIngredients}
            <Foodingredient type="breadRight" />
        </div>
    )
}

export default Food;