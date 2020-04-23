import React, {Component} from 'react';
import {connect} from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import callApi from './../utils/apiCaller';


class productcontainer extends Component{
        constructor(props){
            super(props);
            this.state={
                products: []
            };
        }

        componentDidMount(){
            callApi('products','GET', null).then(res=> {
                
                this.setState({
                    products : res.data

                });
            });
        }
        render(){
            //var {products} = this.props;
            var {products} =this.state;
            return (
                   <Products>
                        {this.showProducts(products)}
                   </Products>
                
                );
        }
        showProducts(products) {
        var result = null;
        if (products.length >0) {
            result = products.map((product,index) => {
                return <Product key ={index} product = {product} />// show the list of product
            });
        }
        return result;
    }
        
}

const mapStateToProps = state =>{
    return {
        products : state.products
    }
}
export default connect (mapStateToProps,null)(productcontainer);