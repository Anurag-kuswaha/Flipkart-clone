import React from 'react';
import brand from './images/brand.png'
import './Header.css'
export default function Header() {
   const [count,setcount]= React.useState(0);
      return (

            <div id="Header" >

                  <div > <img src={brand} className="float-left" /> </div>
                  <div id="searchBar">
                        <input type="text"></input>
                        <button id="button" type="button">Search </button>
                  </div>
                  <div>

                  </div>



            </div>



      );

}