import React from "react";
import ReactDOM from "react-dom";
import { findRenderedComponentWithType } from "react-dom/cjs/react-dom-test-utils.production.min";
import { Link } from "react-router-dom";
import "./Form.css";

export default function Form() {
  const [id, setid] = React.useState("");
  

  // const [formVal, setFormVal] = React.useState({});

  const submitForm = () => {
    fetch(`http://localhost:9000/api/courses/${id}`,{
        method: "DELETE",
        headers: {
  
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
         }}
        ).then();
    
    alert("Product deleted Successfully");
    if (window.confirm('Click OK to go to PDP Page')) 
{
window.location.href='http://localhost:3000';
};
  };
  const redirectAdminPage =() =>{
    alert("Hey Admin Welcome! Click OK to the Go to the Product Deletion Page ");
    if (window.confirm()) 
{
window.location.href='http://localhost:3000';
};
  }

  return (
    <div>
           <div id="formFill">

             
<a  href="http://localhost:3000">
    <button class='btn btn-success'> HomePage</button></a>
    <a  href="http://localhost:3000/Form">
    <button class='btn btn-success'> Product Registation</button></a>
    <a  href="http://localhost:3000/ProductDeletion">
    <button class='btn btn-success'> Admin</button></a>
</div>
      <h1>

        Hey Admin welcome to the Page<br />{" "}
       
      </h1>
      <div className="box">
        <h2> Product Deletion Page</h2>

        <div id="registration">
          <label for="title">Enter the ID of the Product </label>
          <input
            type="text"
            name="id"
            id="id"
            placeholder=""
            value={id}
            onChange={(e) => setid(e.target.value)}
          />
          <br />

          <input
            name="submit"
            type="submit"
            id="submit"
            value="Submit"
            onClick={submitForm}
          />
        </div>
      </div>
    </div>
  );
}
