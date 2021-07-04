import { routes, priceTag } from './data/routes'

export const delveryPriceCalculator = (pickUpAddress, dropOffAddress, deliveryMethod)  => {

    let pickUpRoute = figureRoute(pickUpAddress);
    let dropOffRoute = figureRoute(dropOffAddress);
  
    function figureRoute(address) {
      let routeValue;
      Object.keys(routes).reduce((acc, key) => {
        const add = address.split(" ").map((a) => a.toUpperCase());
        add.map((ad) => {
          if (routes[key].includes(ad)) {
            if (routeValue === undefined) routeValue = key.toUpperCase();
          }
        });
      }, {});
  
      return routeValue;
    }
  
    function figurePrice(pickup, dropoff) {
      const price = priceTag.find(
        (data) => (data.pickUp === pickup || data.dropOff === pickup) && (data.dropOff === dropoff || data.pickUp === dropoff)
      ).price;
      if (deliveryMethod === 'regular') return price;
      if (deliveryMethod === 'express') return price*2;
    } 
  
    const amountToPay = figurePrice(pickUpRoute, dropOffRoute);
  
    return `Your pick-up route is ${pickUpRoute}, your drop-off route is ${dropOffRoute} and your delivery method is ${deliveryMethod}. So you're to pay ${amountToPay}`;
  };
  
  // console.log(delveryPriceCalculator("17 awomodu street ikorodu owode onirin", "20 fatai atere road mushin lagos", "express"));

