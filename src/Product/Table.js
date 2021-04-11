import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CurrencyFormat from "react-currency-format";

class Table extends Component {
  constructor(props) {
    super(props);
  }

  Deleteproduct = () => {
    axios
      .delete(
        "http://chopardapi.azurewebsites.net/api/products/deleteproduct?id=" +
          this.props.obj.Id
      )
      .then((json) => {
        if (json.data.Status === "Delete") {
          alert("Product has been deleted successfully.");
          window.location.reload();
        }
      });
  };

  render() {
    return (
      <>
        <tr className="table-data">
          {isEmptyOrSpaces(this.props.obj.URL) ? (
            <td verticalAlign="middle" align="center">
              <img
                src="https://blobstoragecameo.blob.core.windows.net/watchcollection/Chopard Logo.png"
                height="80"
              />
            </td>
          ) : (
            <td valign="middle" align="center">
              <img
                src={this.props.obj.URL}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.height = 80;
                  e.target.src =
                    "https://blobstoragecameo.blob.core.windows.net/watchcollection/Chopard Logo.png";
                }}
                height="200"
              />
            </td>
          )}
          <td valign="middle" align="center">
            {this.props.obj.ProductName}
          </td>
          <CurrencyFormat
            value={this.props.obj.Price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"PHP "}
            fixedDecimalScale={true}
            decimalScale={2}
            renderText={(value) => <td>{value}</td>}
          />
          <td>{this.props.obj.Dial}</td>
          <CurrencyFormat
            value={this.props.obj.CaseDimension}
            displayType={"text"}
            fixedDecimalScale={true}
            decimalScale={2}
            suffix={" mm"}
            renderText={(value) => <td>{value}</td>}
          />
          <td>{this.props.obj.Metal}</td>
          <td>{this.props.obj.BuckleType}</td>
          <td>{this.props.obj.Strap}</td>
          <td>{this.props.obj.ProductID}</td>
          <td>
            <Link
              to={"/edit/" + this.props.obj.Id}
              className="btn btn-outline-success btn-sm"
            >
              Edit
            </Link>
          </td>
          <td>
            <Link
              to={"/details/" + this.props.obj.Id}
              className="btn btn-outline-primary btn-sm"
            >
              Details
            </Link>
          </td>
          <td>
            <button
              type="button"
              onClick={this.Deleteproduct}
              className="btn btn-outline-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  }
}

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

export default Table;
