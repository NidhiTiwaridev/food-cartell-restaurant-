export const createReservationRequest=data=>({...data,createdAt:new Date().toISOString(),status:'demo-requested'});
