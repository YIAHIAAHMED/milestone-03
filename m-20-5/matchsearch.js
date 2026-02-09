function matchProducts(products, search){
    const matched = [];
    for (const product of products){
        if (product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}



const products = [
    { name: 'laptop', price: 50000 },
    { name: 'mobile phone', price: 20000 },
    { name: 'watch', price: 10000 },
    { name: 'tablet phone', price: 30000 },
    { name: 'headphones phone', price: 15000 }
];
const result = matchProducts (products, 'phone');
console.log(result);

