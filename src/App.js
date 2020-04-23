import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
 // import Products from './components/Products';
 // import ProductContainer from './containers/productcontainer';
// import Message from './components/Message';
 //import Cart from './components/Cart';
//import Footer from './components/Footer';
//import ManageProducts from './ManageProducts';


class App extends Component{
        render(){
            return (
                    <div>
                        <Header />
                        <main id="mainContainer">
                            <div className="container">                             
                                   {/* <ProductContainer />*/}
                
                                    {/*<Message />*/}
                                  
                                    {/*<Cart />*/}
                            </div>
                        </main>
                    {/*<Footer />*/}
                    </div>
             
                );
    }
}

export default App;