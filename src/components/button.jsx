import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from "react-bootstrap/Button"

const ButtonForm = (props) => {
const validateData = () =>{
  alert("entre al onsubmit");
}
  return (
  <Button variant = "secondary d-flex flex-column mb-2" type = "submit" onSubmit = {props.handleSubmit}>{props.text}</Button>
)


};


export default ButtonForm;