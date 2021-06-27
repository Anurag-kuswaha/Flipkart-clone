import React from "react";
import ReactDOM from "react-dom";
import { findRenderedComponentWithType } from "react-dom/cjs/react-dom-test-utils.production.min";
import { Link } from "react-router-dom";
import "./Form.css";

export default function Form() {
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");

  // const [formVal, setFormVal] = React.useState({});

  const submitForm = () => {
    const payload = {
      title,
      price,
      category,
      description,
      image,
    };
    console.log(payload);
    fetch("http://localhost:9000/api/courses", {
      method: "POST",
      headers: {

        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(payload),
    }).then();
    alert("Product registered Successfully");
    if (window.confirm('Want to see your added Product ?')) 
{
window.location.href='http://localhost:3000';
};
  };
  const redirectAdminPage =() =>{
   
    if (window.confirm("Hey Admin Welcome! Click OK to the Go to the Product Deletion Page ")) 
{
window.location.href='http://localhost:3000/ProductDeletion';
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

        Are you the Admin ?<br />
        <button className="btn btn-primary" onClick={redirectAdminPage}> Yes</button>
      </h1>
      <div className="box">
        <h2>Product Registration</h2>

        <div id="registration">
          <label for="title">Enter the Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />

          <label for="price">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder=""
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />

          <label for="category">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            placeholder=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />

          <label for="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <label for="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder=""
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
