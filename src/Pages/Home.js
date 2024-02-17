import React from "react";
import Products from "../Component/Products";
import Inventory2SharpIcon from '@mui/icons-material/Inventory2Sharp';
import ChildCareSharpIcon from '@mui/icons-material/ChildCareSharp';

const Home = () => {
  return (
    <div>  
      <section>
        <h2 className="Products"><Inventory2SharpIcon style={{fontSize:"27px", color:"red"}}/>
        Products
       <ChildCareSharpIcon className="child-icon" style={{fontSize:"60px", color:"pink"}}/>
        </h2>
       <Products/>
      </section>
    </div>
  );
};

export default Home;
