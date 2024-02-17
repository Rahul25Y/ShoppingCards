import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button as MuiButton } from "@mui/material";
import { Button as BootstrapButton } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import '../Pages/Cards.css';
import { remove } from "../store/CardSlice";
const Cards = () => {
  const products = useSelector((state) => state.cart);
  const dispatch=useDispatch();
  const handleRemove=(productId)=>{
      dispatch(remove(productId))
  }
  return (
    <div>
      <h1 className="c"> AddNew-Item-list</h1>
      <div className="Carts-container">

        {products.map((product) => (
          <Card style={{ width: "20rem" }} key={product.id}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>Title:{product.title}</Card.Title>
              <Card.Text>
                {product.description}
                <br />
                <br />
                <p>Price : {product.price}</p>
              </Card.Text>
              <Button variant="primary" onClick={()=>handleRemove(product.id)}>Go to Remove-Cart</Button>
            </Card.Body>
          </Card>
        ))}

      </div>
    </div>
  );
};

export default Cards;
