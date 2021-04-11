import React from "react";
import {
  Container,
  Col,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

class Productdetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      URL: "",
      ProductName: "",
      Price: "",
      Dial: "",
      CaseDimension: "",
      Metal: "",
      BuckleType: "",
      Strap: "",
      ProductID: "",
    };    
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get(
        "http://chopardapi.azurewebsites.net/api/products/productdetailbyid?id=" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          URL: response.data.URL,
          ProductName: response.data.ProductName,
          Price: response.data.Price,
          Dial: response.data.Dial,
          CaseDimension: response.data.CaseDimension,
          Metal: response.data.Metal,
          BuckleType: response.data.BuckleType,
          Strap: response.data.Strap,
          ProductID: response.data.ProductID,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  render() {
    return (
      <>
        <Container style={{ position: "relative", left: "50px", width: "70%" }}>
          <h5 className="PageHeading">Product Details</h5>
          <hr />

          <dl
            className="dl-horizontal"
            style={{ position: "relative", left: "120px" }}
          >
            <dt>Product Image URL:</dt>
            <dd>{this.state.URL}</dd>

            <dt>ProductName:</dt>
            <dd>{this.state.ProductName}</dd>

            <dt>Price:</dt>
            <CurrencyFormat
              value={this.state.Price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"PHP "}
              fixedDecimalScale={true}
              decimalScale={2}
              renderText={(value) => <dd>{value}</dd>}
            />

            <dt>Dial:</dt>
            <dd>{this.state.Dial}</dd>

            <dt>Case Dimension:</dt>
            <CurrencyFormat
              value={this.state.CaseDimension}
              displayType={"text"}
              fixedDecimalScale={true}
              decimalScale={2}
              suffix={" mm"}
              renderText={(value) => <dd>{value}</dd>}
            />

            <dt>Metal:</dt>
            <dd>{this.state.Metal}</dd>

            <dt>Buckle Type:</dt>
            <dd>{this.state.BuckleType}</dd>

            <dt>Strap:</dt>
            <dd>{this.state.Strap}</dd>

            <dt>Product ID:</dt>
            <dd>{this.state.ProductID}</dd>
            <div style={{ position: "relative", left: "-120px" }}>
              <hr />
              <dt></dt>
              <dd>
                <Link
                  to={"/edit/" + this.props.match.params.id}
                  className="btn btn-outline-success btn-sm"
                  style={{ position: "relative", left: "120px" }}
                >
                  Edit
                </Link>
              </dd>              
            </div>
          </dl>
        </Container>
      </>
    );
  }
}

export default Productdetail;
