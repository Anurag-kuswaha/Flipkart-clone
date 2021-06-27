
import React from 'react';
import ReactDOM from 'react-dom';
import './PLP.css';
import * as ReactBootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PDP from './PDP';
import { Link } from "react-router-dom";


export default class PLP extends React.Component {
    constructor() {
        super();
        this.state = {
            arr: []

        }
    }
    componentDidMount() {
        fetch('http://localhost:9000/api/courses').then((res) => {
            res.json().then((result) => {
                console.log(result);
                this.setState({ arr: result });
            })
        })

    }
    render() {
        return (


            <div className="row">
                 <div id="formFill">

             
                         <a  href="http://localhost:3000">
                             <button class='btn btn-success'> HomePage</button></a>
                             <a  href="http://localhost:3000/Form">
                             <button class='btn btn-success'> Product Registation</button></a>
                             <a  href="http://localhost:3000/ProductDeletion">
                             <button class='btn btn-success'> Admin</button></a>
                 </div>
                {this.state.arr.map((ele, ind) => {
                    return (
                        <Link to={`/details/${ele.id}`} id="Card">                   {/* to make div clickable we put div inside the anchor tag */}
                            <div className=" ">
                                <div className="Image" >
                                    <img src={ele.image} className="card-img-top" alt="image of the product" />
                                    <a href=" "></a>


                                </div>
                                <div id="Description">
                                    <div id="disc">{ele.title} </div>
                                    <h3> ₹{ele.price} </h3>

                                </div>
                            </div>
                        </Link>
                    );
                }
                )
                }
            </div>
        );

    }
}
