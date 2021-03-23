import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishablekey = 
       'pk_test_51IEgBDAbFtZQmUeNGI76WEHM1js2XItzGJxcFxO1ZlwBpRRsG8Ekp98uj0okbZC3vWVHqRAQEYlPvJ0tJHEmTk2y003R59a2zG'
    
    const onToken = token => {
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='ALL in One'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/en/23161774f5'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={ onToken }
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton
