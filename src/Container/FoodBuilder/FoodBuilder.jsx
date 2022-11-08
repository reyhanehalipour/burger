import React, { Component } from 'react';
import Modal from '../../Components/UI/Modal/Modal';
import Food from './../../Components/Food/Food';
import axios from '../../axios-orders'
import Spinner from '../../Components/UI/Spinner/Spinner';
import FoodControls from '../../Components/Food/FoodControls/FoodControls';
import OrderSummery from '../../Components/OrderSummery/OrderSummery';
const INGREDINET_PRICE={
    hotDog:20000,
    cheese:10000,
    salad:8000
}
class FoodBuilder extends Component{

constructor(props){
    super(props)
    this.state={
        ingredients:{
            hotDog:0,
            cheese:0,
            salad:0,
        },
        Totalprice:0,
        purchasable:false,
        purchasing:false,
        loading:false
    }

}
updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchasable: sum >0})
}
purchaseHandler = (isOpen) => {
    if (isOpen) {
      
            this.setState({ purchasing: true })
        }else{
            this.setState({ purchasing: false })
    
        
    }

}

Addingredient=(type)=>{
    const oldcount=this.state.ingredients[type]
    const updatecount=oldcount +1
    const updateingedients={
        ...this.state.ingredients
    }
    updateingedients[type]=updatecount;
    const priceAddition=INGREDINET_PRICE[type]
    const oldprice=this.state.Totalprice;
    const newprice= oldprice+priceAddition;
    this.setState({Totalprice:newprice, ingredients:updateingedients})
    this.updatePurchaseState(updateingedients)
}

removeingredient=(type)=>{
    const oldcount=this.state.ingredients[type]
    if(oldcount <=0 ){
        return;
    }
    const updatecount=oldcount - 1
    const updateingedients={
        ...this.state.ingredients
    }
    updateingedients[type]=updatecount;
    const priceAddition=INGREDINET_PRICE[type]
    const oldprice=this.state.Totalprice;
    const newprice= oldprice - priceAddition;
    this.setState({Totalprice:newprice, ingredients:updateingedients})
}


purchaseContinue = () => {
    alert('آیا می خواهید ادامه دهید؟')
}
purchaseCheckout = () => {
  // alert('پرداخت')
  this.setState({loading:true})
  const order={
      ingredients:this.state.ingredients,
      price: this.state.Totalprice,
      costomer:{
          name:'ریحانه علی پور',
         address:'تهران خیابان دماوند',
       
      },
      email:'reyhanehalipour78@gmail.com'
  }
  axios.post('posts', order)
  .then(response =>{

    this.setState({loading:false})

      console.log(response)})

  .catch(error=> {
      
    this.setState({loading:false})
    
    console.log(error)})
  alert('ایا می خواهید سفارش خود را ثبت کنید؟')
}
    render(){
        const disableInfo={
            ...this.state.ingredients
        }

        for(let key in disableInfo){

            disableInfo[key]=disableInfo[key] <=0
        }
       let ordersummery= <OrderSummery 
        purchaseContinue={this.purchaseContinue}
        purchaseCheckout={this.purchaseCheckout}
        ingredients={this.state.ingredients}
        />
        if(this.state.loading){
            ordersummery=<Spinner/>
        }
        return(

            <>
            <Modal show={this.state.purchasing}  modalClosed={()=>this.purchaseHandler(false)}>
           {ordersummery}
            </Modal>
            <div> <Food ingredients={this.state.ingredients}/></div>
            <div><FoodControls
             ingredientAdd={this.Addingredient}
             ingredientremove={this.removeingredient}
             disabled={disableInfo}
             ordered={()=>this.purchaseHandler(true)}
             price={this.state.Totalprice}
             purchasable={this.state.purchasable}/> </div>
            
            </>
        )
    }
}
export default FoodBuilder