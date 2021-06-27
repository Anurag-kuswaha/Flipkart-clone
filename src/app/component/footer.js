import React from 'react';
import brand from './images/brand.png'
import './Footer.css'
export default function Header() {
    const [name, setName] = React.useState('who is the developer ? ') //hooks

    const handleEvent = () => {
        const newName = "Anurag here !";
        setName(newName);

    }

    return (

        <div id="Footer" >
            <div > {name} </div>
            <button className="btn btn-success " onClick={handleEvent}  >lets find out! </button>
            <h1> &#169; Made by Anurag Kuswaha</h1>

            <div >

            </div>

        </div>

    );

}