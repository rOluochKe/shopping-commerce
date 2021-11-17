import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51JMZeHC6su9OEK8y56jiPWiVKeiQcke6Z8XuTFaUhz8CCTGHAt69X0E0LrRoAWvKjJC1UxBjiNWoFFtZVrrjOS2G00MG96Je2M'

  const onToken = (token) => {
    console.log(token)
    alert('Payment Succesful!')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Shopping Commerce Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
