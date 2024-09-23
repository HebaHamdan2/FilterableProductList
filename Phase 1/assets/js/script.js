// array of product objects
const products = [
    { name: "Sweet Fire", 
    category: "rings", 
    price: 399, 
    image: "assets/imgs/Ring1.png" ,
    info:"JUSTO NEC ULTROCES DUI SAPIEN EGET MEI PROIN SED LIBROE."
},
{ name: "THE HARMONY", 
    category: "rings", 
    price: 399, 
    image: "assets/imgs/Ring2.png" ,
    info:"JUSTO NEC ULTROCES DUI SAPIEN EGET MEI PROIN SED LIBROE."
},
{
    name: "THE HARMONY", 
    category: "rings", 
    price: 399, 
    image: "assets/imgs/Ring3.png" ,
    info:"JUSTO NEC ULTROCES DUI SAPIEN EGET MEI PROIN SED LIBROE."

},
{
    name: "LAST HOPE", 
    category: "rings", 
    price: 799.49, 
    image: "assets/imgs/Ring4.png" ,
    info:"FEATURES A STUNNING ROUND BRILLIANT DIAMON SET IN A CLASSIC AND TIMELESS."

},{
    name: "MODERN NECKLACE", 
    category: "necklace", 
    price: 300, 
    image: "assets/imgs/necklace.png" ,
    info:"EVERY PIECE WE CREATE IS MORE THAN JUST AN ACCESSORY."

},
{
    name: "ROSE GOLDE EARRINGS ", 
    category: "earrings", 
    price: 300, 
    image: "assets/imgs/earnings.jpg" ,
    info:"STUNNING 585 ROSE GOLDE PEARL DANGLERS !! SO STYLISH AND SO UNIQUE."

},
{
    name: "CAT EYE EYEGLASSES", 
    category: "glasses", 
    price: 150, 
    image: "assets/imgs/glasses.jpg" ,
    info:"Collar Full Rim Glasses Embellished Women Accessories."

},
];

// Function to filter products
function filterProd(category) {
    let filteredProducts;
    let catego=document.getElementById('category')

    if (category === 'all') {
        filteredProducts = products;
  catego.innerHTML="OUR PRODUCT LISTS";
    } else {
        filteredProducts = products.filter(product => product.category === category);
          catego.innerHTML=`${category.toUpperCase()} LIST`
    }

    displayProd(filteredProducts);

    const buttons = document.querySelectorAll('#filter-btns button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.innerText.toLowerCase() === category) {
            button.classList.add('active');
        }
    });
}
// display products
function displayProd(filteredProducts) {
    const productContainer = document.getElementById('prod-container');
    productContainer.innerHTML = '';
 
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category.toUpperCase()}</p>
            <p> ${product.info.toUpperCase()}</p>
            <h4>$${product.price}</h4>
        `;
        productContainer.appendChild(productCard);
    });
}
displayProd(products);