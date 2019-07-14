import React,{Component} from 'react';
import Product from './Product';
import ProductData from '../../models/ProductData';


class ProductListComponent extends Component{
    render(){
        const productData2=ProductData.map(product=><Product key={product.id} product={product}/>)  
        return(
            <div className="container">
                <h1>Product List Component</h1><hr/>
                {productData2}
            </div>
        )
    }
}

export default ProductListComponent