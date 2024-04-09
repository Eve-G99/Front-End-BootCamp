//Common patterns for updateing arrays in state
//All below do not change original array
//在React文档中有更详细的说明，比如需要replace, 别用arr[i],而要用map；需要sort，copy the array first，再sort
const shoppingCart = [
    { id: 1, product: 'bread', price: 4.5 },
    { id: 2, product: 'milk', price: 1.99 },
    { id: 3, product: 'cheese', price: 6.9 }
];

//Add item
const newShoppingCart = [...shoppingCart, { id: 4, product: 'eggs', price: 2.99 }];

//Remove item
shoppingCart.filter((item) => item.id !== 2);

//Update All Element in an array
shoppingCart.map((item) => {
    return {
        ...item,
        product: item.product.toLowerCase() //Overwrite product
    }
})

//Modify a paticular item in an array
shoppingCart.map((item) => {
    if (item.id === 3) {
        return { ...item, price: 10.99 };//重新给price赋值
    } else {
        return item;
    }
})

