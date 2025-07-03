// Description:
// Accountant time! For a given quantity and price (per mango), calculate the total cost of the mangoes.
// But! Every third mango is free!

// My code:

function mango(quantity, price){
  return (quantity - Math.floor(quantity / 3)) * price

}