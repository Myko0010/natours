/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51Qzye7Q7WICd4s5lZXxU4sBWbkO0yl2vGhzaIhXxfBQ0CNKdrzLt3AyYWu1ghKtkKBZlbbGkBgrr4iQuiusAy3yE00ImdBkhB0'
);

export const bookTour = async tourId => {
  try {
    //1) get check out session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    //console.log(session);
    //2) create checkout form + chancel credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
