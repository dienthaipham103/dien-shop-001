import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setProduct, removeProduct } from "../app/productDetailSlice";
import axios from "axios";
import { Grid, Button } from "@mui/material";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
  }

  fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((error) => {
        console.log(error);
      });
    this.props.setProduct(response.data);
  };

  componentDidMount() {
    let productId = this.props.match.params.productId;
    this.fetchProductDetail(productId);
  }

  componentWillUnmount() {
      this.props.removeProduct();
  }

  render() {
    console.log(this.props.product);
    const { image, title, price, category, description } = this.props.product;
    return (
      <div className="product-detail">
        {Object.keys(this.props.product).length === 0 ? (
          <div className="loading">Loading ...</div>
        ) : (
          <div className="grid-container">
            <Grid container>
              <Grid item xs={12} sm={12} md={6}>
                <div className="avatar">
                  <img className="avatar-image" src={image} />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <div className="info">
                  <h1>{title}</h1>
                  <h2>
                    <a className="info__price">${price}</a>
                  </h2>
                  <h3 className="info_category">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <Button variant="contained" className="btn">Add to Cart</Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { setProduct, removeProduct })(
  withRouter(ProductDetail)
);
