import React, {Component} from 'react'
import classes from './FoodIngredient.module.css'

import PropTypes from 'prop-types'

class Foodingredient extends Component {

    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('breadLeft'):
                ingredient = <div className={classes.breadleft}>سمت چپ نان ساندویچ</div>
                break;
            case ('hotDog'):
                ingredient = <div className={classes.hotDog}>هات داگ</div>
                break;
            case ('cheese'):
                ingredient = <div className={classes.cheese}>پنیر</div>
                break;
            case ('salad'):
                ingredient = <div className={classes.salad}>کاهو</div>
                break;
            case ('breadRight'):
                ingredient = <div className={classes.bread}>سمت راست نان ساندویچ</div>
                break;
            default:
                ingredient = null
        }

        return ingredient;
    }
}

Foodingredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default Foodingredient;