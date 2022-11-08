import React from 'react'

import FoodControl from './FoodControl/FoodControl';
import classes from './FoodControls.module.css'

const controls = [
    { label: 'هات داگ', type: 'hotDog' },
    { label: 'پنیر', type: 'cheese' },
    { label: 'سالاد', type: 'salad' }
]

const FoodControls = (props) => {
    return (
        <>
      
            <div className={classes.mainBackground}>
            <p>قیمت کل: <strong>{props.price}  تومان</strong></p>
                {controls.map(ctrl => (
                    <FoodControl
                        key={ctrl.label}
                        label={ctrl.label}
                        added={()=> props.ingredientAdd(ctrl.type)}
                        removed={()=> props.ingredientremove(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                   />
                ))}
                <button className='btn btn-primary' disabled={! props.purchasable} onClick={props.ordered}> خرید</button>
               
           </div>
       </>
    )
}

export default FoodControls