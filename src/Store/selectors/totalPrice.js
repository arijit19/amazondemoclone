export const totalPrice = (basket=[])=> {
    let sum =0;
    basket.forEach((item,index)=>{
        sum += item.quantity * item.price
    })
    return sum;
}