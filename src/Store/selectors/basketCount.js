export const basketCount = (basket=[])=> {
    let count =0;
    basket.forEach((item,index)=>{
        count += item.quantity
    })
    return count;
}