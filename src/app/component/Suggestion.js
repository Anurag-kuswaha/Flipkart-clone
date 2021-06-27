import React from 'react';
import ReactDOM from 'react-dom';
import './PLP.css';
import PDP from './PDP';
import { Link } from "react-router-dom";

export default class Suggestion extends React.Component {

        constructor(){
             super();
             this.state={
                 products:[]
             }
        }
        componentDidMount() {
            fetch('https://fakestoreapi.com/products?limit=5').then(
                res=>res.json()).then(
                     (result)  => this.setState( { products : result } ) ); 




        }
    render(){
         return(
         <>
          {console.log(this.state.products)}
          <div className="row">

                    { this.state.products.map((ele, ind) =>
                     {
                       return ( 
                           <Link to={`/details/${ele.id}`} id="Card">                   {/* to make div clickable we put div inside the anchor tag */}
                           <div  className=" ">
                              <div className="Image" >
                                  <img src={ele.image} alt="image of the product"  />
                                  
                                     
                                 
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

     </>
    )
}





}