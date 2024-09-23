import { useState } from 'react';
import './App.css';
import FilterButtons from './components/FilterButtons/FilterButtons.jsx';
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ProductList from './components/Products/ProductList.jsx';
const products = [
  { name: "SWEET FIRE", 
  category: "rings", 
  price: 399, 
  image: "../imgs/Ring1.png" ,
  info:"JUSTO NEC ULTROCES DUI SAPIEN EGET MEI PROIN SED LIBROE."
},
{ name: "THE HARMONY", 
  category: "rings", 
  price: 399, 
  image: "../imgs/Ring2.png" ,
  info:"JUSTO NEC ULTROCES DUI SAPIEN EGET MEI PROIN SED LIBROE."
},
{
  name: "TIMELESS SKY", 
  category: "rings", 
  price: 399, 
  image: "../imgs/Ring3.png" ,
  info:"JUSTO NEC ULTROCES DUI SAPIEN EGET MEI PROIN SED LIBROE."

},
{
  name: "LAST HOPE", 
  category: "rings", 
  price: 799.49, 
  image: "imgs/Ring4.png" ,
  info:"FEATURES A STUNNING ROUND BRILLIANT DIAMON SET IN A CLASSIC AND TIMELESS."

},{
  name: "MODERN NECKLACE", 
  category: "necklace", 
  price: 300, 
  image: "imgs/necklace.png" ,
  info:"EVERY PIECE WE CREATE IS MORE THAN JUST AN ACCESSORY."

},
{
  name: "ROSE GOLDE EARRINGS ", 
  category: "earrings", 
  price: 300, 
  image: "imgs/earnings.jpg" ,
  info:"STUNNING 585 ROSE GOLDE PEARL DANGLERS !! SO STYLISH AND SO UNIQUE."

},
{
  name: "CAT EYE EYEGLASSES", 
  category: "glasses", 
  price: 150, 
  image: "imgs/glasses.jpg" ,
  info:"Collar Full Rim Glasses Embellished Women Accessories."

},
];
function App() {
  const [filteredProd, setFilteredProd] = useState(products);
  const [title,setTitle]=useState('OUR PRODUCT LISTS')
  const handleFilterChange = (category) => {
    if (category === 'all') {
        setFilteredProd(products);
        setTitle('OUR PRODUCT LISTS')
    } else {
        setFilteredProd(products.filter(product => product.category === category));
        setTitle(`${category} LIST`)
    }
};

  return (
   <>
  <Navbar title={title}/>
  <FilterButtons onFilterChange={handleFilterChange} />
  <ProductList products={filteredProd}/>
  <Footer/>
   </>
  );
}

export default App;
