var shop=[
    {
        product:"pineapple",
        price:80,
    },
    {
        product:"mangoes",
        price:50,
    },
    {
        product:"orange",
        price:60,
    }
]
function getTotalCost(product,quantity){
    let b=shop.find(item=>item.product===product)
    console.log(`${quantity} ${product} for Kes ${b.price*quantity}`)
}
getTotalCost("pineapple",4)


 
