import logo from './logo.svg';
import  data from './data';
import {BrowserRouter , Route , Link} from 'react-router-dom';
import './index.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen  from './Screens/ProductScreen';


function App() {

  const openMenu = () =>{
    document.querySelector('.sidebar').classList.add('open');
  }
  const closeMenu = () =>{
    document.querySelector('.sidebar').classList.remove('open');
  }
  return (

  <BrowserRouter> 
    <div className ="grid-container">
        <header className = "header">
                <div className ="brand">
                    <button onClick ={openMenu}> &#9776;</button>
                    <Link to = "/" > Voting System</Link>
                </div>

                <div className = "header-links">
                    <a href = "cart.html">Sgin Up</a>
                    <a href = "sginin.html">Sgin In</a>
                </div>
            </header>
            
            <main className = "main">
                <div className ="content">
                  <Route path = "/product/:id" component = {ProductScreen} />
                  <Route path ="/"  exact ={true} component = {HomeScreen} />
                    <ul className = "products">
                      {
                        data.products.map(product =>
                          <li>
                            <div className = "product">
                                <img  className ="product-image" src ={product.image} alt ="product"/>
                                <div className ="product-name"> 
                                    <a href ="product.html">{product.name}</a>
                                </div>
                                <div className ="product-brand">{product.brand}</div>
                                <div className ="product-price">${product.price}</div>
                                <div className ="product-rating">{product.rating}Stars({product.numReviews})</div>
                            </div>
                        </li>)
                      }
                        
                    </ul>

                </div>
            </main>
            <footer className ="footer">
                All rights reserved.
            </footer>
        </div>
  </BrowserRouter>
  );
}

export default App;
