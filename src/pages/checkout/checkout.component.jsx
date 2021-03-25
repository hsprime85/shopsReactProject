import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
  } from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>PRODUCT</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>DESCRIPTION</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>QUANTITY</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>PRICE</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>REMOVE</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => 
                (<CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            )
        }
        <TotalContainer>TOTAL: ${total}</TotalContainer>
        <WarningContainer>
            * Test credit card for payments <br/>
            4242 4242 4242 - Exp: 01/22 - cvv: 123
        </WarningContainer>
        <StripeCheckoutButton price={total}/>
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
