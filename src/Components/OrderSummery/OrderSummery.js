import React from 'react';
import Button from '../UI/Button/Button';
 import './OrderSummery.css'

const OrderSummery = (props) => {
    const ingrediantsummery=Object.keys(props.ingredients)
    .map(igkey =>{
        return <li key={igkey}><span>{igkey}</span>: { props.ingredients[igkey]}</li>
    })
    return (  
        <>
    <div className='orderMain'>  
        <h4> اقلام سفارشی شما</h4>
        <p>ساندویچی  که شما سفارش دادید شامل موارد زیر است:</p>
        <ul>
            {ingrediantsummery}
        </ul>
        <hr/>
        <p>جهت ادامه یکی از دکمه های زیر را انتخاب کنید</p>
        <Button btnType="btn-success" clicked={props.purchaseCheckout}>ثبت سفارش</Button>
        <Button btnType="btn-warning pull-left" clicked={props.purchaseContinue}>ادامه خرید</Button>

        </div>    
        </>
    );
}
 
export default OrderSummery;
