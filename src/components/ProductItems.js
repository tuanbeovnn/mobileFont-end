import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class ProducItems extends Component{

    onDelete =(id) =>{
        if (confirm("Are you sure ?")) {//eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render(){
            let {product,index} = this.props;
           
        return (

            <tr>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{product.id}</td>
                    <td className="text-center">{product.name}</td>
                    <td className="text-center">{product.price}</td>
                    <td className="text-center">{product.description}</td>
                    <td className="text-center">
                        <Link 
                        to = {`/${product.id}/edit`}
                        className="btn btn-warning"

                        >
                            <span className="fa fa-pencil mr-5"></span>Edit
                        </Link>
                                        &nbsp;
                        <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={() =>this.onDelete(product.id)}

                        >
                            <span className="fa fa-trash mr-5" 

                            ></span>Remove
                        </button>
                    </td>
            </tr>
            
        );
    }
}

export default ProducItems;