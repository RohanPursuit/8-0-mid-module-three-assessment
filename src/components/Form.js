import React from "react";
import formatPrice from "../helpers/formatPrice";


export default class Form extends React.Component {

    onFormSubmit = (event) => {
        event.preventDefault()
        const {zipCode, creditCard, firstName, lastName, email} = event.target
        let message = "Purchase complete" + formatPrice(this.props.total)
        
        if(!firstName.value || !lastName.value || !email.value){
            message = "Input is not valid"
        } else if(event.target.zipCode.value.length < 4){
            message = "Zip code is not valid"
        } else if (event.target.creditCard.value.length < 9){
            message = "Credit card number is not valid"
        }
        
        alert(message)

    }
    render (){
        return (
            <form onSubmit={this.onFormSubmit}>
                <label>
                First Name
                <input type="text" name="firstName"/>
                </label>
                <label>
                Last Name
                <input type="text" name="lastName"/>
                </label>
                <label>
                Email
                <input type="text" name="email"/>
                </label>
                <label>
                Credit Card
                <input type="text" name="creditCard"/>
                </label>
                <label>
                Zip Code
                <input type="text" name="zipCode"/>
                </label>
                <label id="checkout"> 
                <input type="submit" value="Buy Now"/>
                </label>
            </form>
        )
    }
}