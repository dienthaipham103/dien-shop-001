import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { setProductList } from "../app/productListSlice";

class ProductList extends Component {
  state = {};

  fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Error: ", error);
      });
    this.props.setProductList(response.data);
  };

  componentDidMount() {
    this.fetchProduct();
  }

  render() {
    return (
      <div className="grid-container">
        <Grid
          container
          rowSpacing={{ xs: 4, sm: 3, md: 2 }}
          columnSpacing={{ xs: 4, sm: 3, md: 2 }}
        >
          {this.props.products.map((product) => {
            const { id, title, image, price, category } = product;
            return (
              <Grid item xs={12} sm={6} md={3} key={id}>
                <Link to={`/product/${id}`} className="link">
                  <div className="card">
                    <div className="image">
                      <img src={image} alt={title} />
                    </div>
                    <div className="content">
                      <div className="header">{title}</div>
                      <div className="meta price">$ {price}</div>
                      <div className="meta category">{category}</div>
                    </div>
                  </div>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.productList.products,
});

export default connect(mapStateToProps, { setProductList })(ProductList);