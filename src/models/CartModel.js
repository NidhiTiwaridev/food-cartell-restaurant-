export const addItemToCart=(items,dish,qty=1)=>{const found=items.find(x=>x.id===dish.id);return found?items.map(x=>x.id===dish.id?{...x,qty:x.qty+qty}:x):[...items,{...dish,qty}]};
export const updateCartQuantity=(items,id,delta)=>items.map(x=>x.id===id?{...x,qty:x.qty+delta}:x).filter(x=>x.qty>0);
export const getCartCount=items=>items.reduce((n,x)=>n+x.qty,0);
export const getCartTotal=items=>items.reduce((n,x)=>n+x.price*x.qty,0);
