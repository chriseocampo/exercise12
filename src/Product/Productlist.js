import React, { Component } from "react";
import axios from "axios";
import Table from "./Table";
import Prodcarousel from "./Prodcarousel";

export default class Productlist extends Component {
  constructor(props) {
    super(props);

    this.state = { products: [] };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    debugger;
    axios
      .get("http://chopardapi.azurewebsites.net/api/products")
      .then((response) => {
        this.setState({ products: response.data });
        debugger;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.products.map(function (object, i) {
      return <Table obj={object} key={i} />;
    });
  }

  render() {
    return (
    <>
        <Prodcarousel />
        <div className="row justify-content-center">
          <br />
          <br />
          <br />
          <br />
          <table className="table table-sm responsive" style={{ marginTop: 5 }}>
            <thead>
              <tr align="center">
                <th>Product Image</th>
                <th>Product Name</th>
                <th className="table-price">Price</th>
                <th>Dial</th>
                <th>Case Dimension</th>
                <th>Metal</th>
                <th>Buckle Type</th>
                <th>Strap</th>
                <th>Product ID</th>
                <th colSpan="4">Action</th>
              </tr>
            </thead>
            <tbody>{this.tabRow()}</tbody>
          </table>
        </div>
      </>
    );
  }
}

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}
