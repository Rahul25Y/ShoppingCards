import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { add } from "../store/CardSlice";

export default function Products() {
  const [products, setProducts] = useState([]); // State for storing fetched products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product)); 
  };

  return (
    <div className="cards">
      {products.map((product) => (
        <Card key={product.id} sx={{ maxWidth: 380 }}>
          <CardMedia
            sx={{
              height: 190,
              width: "41%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2rem",
              marginLeft: "5rem",
            }}
            image={product.image}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              onClick={() => handleAdd(product)}
            >
              Add to Cart More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
