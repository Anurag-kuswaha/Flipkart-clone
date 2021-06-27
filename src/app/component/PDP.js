import React from 'react';
import * as Bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './PDP.css';
import Suggestion from './Suggestion';
export default class PDP extends React.Component {
    constructor(props) {
        super();
        this.state = {

            product: {}
        }
    }
    componentDidMount() {
        fetch(`http://localhost:9000/api/courses/${this.props.match.params.id}`).then((res) => {
            res.json().then((result) => {
                //console.log(result);
                this.setState({ product: result });
            })
        })

    }
    render() {
        return (
            <>
           <div id="formFill">

             
<a  href="http://localhost:3000">
    <button class='btn btn-success'> HomePage</button></a>
    <a  href="http://localhost:3000/Form">
    <button class='btn btn-success'> Product Registation</button></a>
    <a  href="http://localhost:3000/ProductDeletion">
    <button class='btn btn-success'> Admin</button></a>
</div>


                <div id="pdp" className="row">
                    <div id="pdpImage" className="col-md-6">

                        <div><img src={this.state.product.image}></img></div>
                        <div><button className="btn btn-warning">Add to Cart</button>
                            <button className="btn btn-success" >Buy now</button></div>

                    </div>

                    <div id="pdpDescription" className="col-md-6" >
                        <span> <h2> {this.state.product.title}</h2>
                            <h6 class="float-right"> Product id : {this.state.product.id}</h6>
                            <h1 class="float-left"> ₹ {this.state.product.price}</h1>
                        </span>
                        <span>

                            <h3>{this.state.product.category}</h3>
                            <p>{this.state.product.description}</p>
                        </span>
                    </div>




                </div>
                <h1 id="intrest" >You might be interested in</h1>
                <Suggestion />


            </>



        )

    }
}