import React, {Component} from 'react';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import ProductList from '../components/ProductList';
// import {actAddProductRequest,acUpdateProductRequest,actGetProductRequest,actFetchProductsRequest} from './../actions/index';
// import itemSelected from './../reducers/itemSelected'
class ProductActionPage extends Component {
  constructor(props){
    super(props);
    this.state ={
        id:'',
        txtname : '',
        txtprice: '',
        txtdescription: '',
        txtrating: '',
        txtimage: ''
    };
  }
  componentDidMount(){
    var {match} = this.props;
    if (match) {
        var id = match.params.id;
        callApi(`products/${id}`,'GET', null).then( res =>{
            var data = res.data;
            this.setState({
                id: data.id,
                txtname : data.name,
                txtprice: data.price,
                txtdescription: data.description,
                txtrating: data.rating,
                txtimage: data.image
            });
        });
    }
  }
  onChange = (e) =>{
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
        [name]: value
    });
  }
  onSave =(e)=>{
    e.preventDefault();
    var{id,txtname,txtprice,txtdescription,txtrating,txtimage} = this.state;
    var { history } = this.props;
    if(id){//update
        callApi(`products/${id}`,'PUT',{
            name: txtname,
            price: txtprice,
            description: txtdescription,
            rating:txtrating,
            image:txtimage
        }).then(res =>{
            history.goBack();
        });
    }else {
        callApi('products','POST',{
        name: txtname,
        price: txtprice,
        description: txtdescription,
        rating:txtrating,
        image:txtimage
        }).then(res => {
             history.goBack();
        });
    }  
  }

render(){
    // var { history } = this.props;
    var {txtname,txtprice,txtdescription,txtrating,txtimage} = this.state;
    
 return (
  <div className="container">
  <h1 className="section-heading">ADD PRODUCT</h1>
              <form onSubmit={this.onSave}>
                  <div className="form-group">
                    <label>Name</label>
                    <input 
                    type="text" 
                    name="txtname" 
                    className="form-control"
                    value ={txtname}
                    onChange = {this.onChange}
                    />
                  </div>
              <div className="form-group">
                    <label>Price</label>
                    <input 
                    name="txtprice" 
                    className="form-control"
                    value ={txtprice}
                    onChange = {this.onChange}
                    />
              </div>
              <div className="form-group">
                    <label>Description</label>
                    <input 
                    name="txtdescription" 
                    className="form-control"
                    value ={txtdescription}
                    onChange = {this.onChange}
                    />
              </div>
              <div className="form-group">
                    <label for="rating">Rating (between 1 and 5):</label>
                    <input 
                    type="number" 
                    id="rating" 
                    name="rating" min="1" 
                    max="5" 
                    name="txtrating"
                    value ={txtrating}
                    onChange = {this.onChange}
                    />
              </div>
              <div className="form-group">
                    <label>Image</label>
                    <input 
                    type="url" 
                    name="txtimage" 
                    className="form-control"
                    value ={txtimage}
                    onChange = {this.onChange}

                    />
              </div>
                  <button type="submit" className="btn btn-primary">Save</button>
                  <Link to="/manage" className="btn btn-danger mr-5">
                  <i className="glyphicon glyphicon-arrow-left"></i> Back
            </Link>
              </form> 
  </div>


 );
}

}

export default (ProductActionPage);