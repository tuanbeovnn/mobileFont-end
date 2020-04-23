import React, {Component} from 'react';
import ProductItems from './ProductItems'


class ManageProducts extends Component{
        render(){
            let {products} = this.props; 
            return (
            	<div className="container">
            			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            				<div className="card">
                                <div className="card-body">
                                <h1 className="section-heading">PRODUCTS LIST</h1>
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th className="text-center">STT</th>
                                        <th className="text-center">CODE</th>
                                        <th className="text-center">NAME</th>
                                        <th className="text-center">PRICE</th>
                                        <th className="text-center">MADE BY</th>
                                        <th className="text-center">ACTION</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {this.props.children} 
                                    </tbody>
                                  </table>
                                </div>
                            </div>
            			</div>
            	</div>
      

                );
    }
}

export default ManageProducts;