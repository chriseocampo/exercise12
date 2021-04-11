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
import validator from "validator";

class Editproduct extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

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
      errors: {
        URL: "",
        ProductName: "",
        Price: "",
        Dial: "",
        CaseDimension: "",
        Metal: "",
        BuckleType: "",
        Strap: "",
        ProductID: "",
      },
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
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    const re = /^[0-9.\b]+$/;

    //modify
    if (name == "URL") {
      if (!validator.isURL(value)) {
        errors.URL = "Input a valid image URL or leave this blank.";
      } else {
        errors.URL = "";
      }
    }

    if (name == "ProductName") {
      if (value.length > 40) {
        errors.ProductName =
          "Maximum characters allowed for Product Name has been reached.";
      } else if (value.length < 3) {
        errors.ProductName = "Product Name is too short. ";
      } else {
        errors.ProductName = "";
      }
    }

    if (name == "Price") {
      if (!(value >= 1 && value <= 99999999)) {
        errors.Price =
          "Please input a valid price for new product.  Range is from PHP 1.00 to PHP 99,999,999.00";
      } else {
        errors.Price = "";
      }
      if (!(value === '' || re.test(value))) {
        errors.Price = "Invalid input type. Please input numbers only.";
     }
    }

    if (name == "Dial") {
      if (value.length > 30) {
        errors.Dial =
          "Maximum characters allowed for Dial details has been reached.";
      } else if (value.length < 2) {
        errors.Dial = "Dial detail is too short. ";
      } else {
        errors.Dial = "";
      }
    }

    if (name == "CaseDimension") {
      if (!(value >= 26 && value <= 38)) {
        errors.CaseDimension =
          "Case Dimension must be between 26 to 38 mm.";
      } else {
        errors.CaseDimension = "";
      }
      if (!(value === '' || re.test(value))) {
        errors.CaseDimension = "Invalid input type. Please input numbers only.";
     }
    }

    if (name == "Metal") {
      if (value.length > 30) {
        errors.Metal =
          "Maximum characters allowed for metal details has been reached.";
      } else if (value.length < 2) {
        errors.Metal = "Metal detail is too short. ";
      } else {
        errors.Metal = "";
      }
    }

    if (name == "BuckleType") {
      if (value.length > 30) {
        errors.BuckleType =
          "Maximum characters allowed for Buckle Type details has been reached.";
      } else if (value.length < 2) {
        errors.BuckleType = "Buckle Type detail is too short. ";
      } else {
        errors.BuckleType = "";
      }
    }
    
    if (name == "Strap") {
      if (value.length > 50) {
        errors.Strap =
          "Maximum characters allowed for Strap details has been reached.";
      } else if (value.length < 2) {
        errors.Strap = "Strap detail is too short. ";
      } else {
        errors.Strap = "";
      }
    }

    if (name == "ProductID") {
      if (!(value >= 1000000000 && value <= 9999999999)) {
        errors.ProductID =
          "Please input a 10 digit whole number value for the Product ID.";
      } else {
        errors.ProductID = "";
      }
      if (!(value === '' || re.test(value))) {
        errors.ProductID = "Invalid input type. Please input numbers only.";
     }
    }

    this.setState({ errors, [name]: value });
  };

  onSubmit = async (e) => {
    debugger;
    e.preventDefault();
    const obj = {
      Id: this.props.match.params.id,
      URL: this.state.URL,
      ProductName: this.state.ProductName,
      Price: this.state.Price,
      Dial: this.state.Dial,
      CaseDimension: this.state.CaseDimension,
      Metal: this.state.Metal,
      BuckleType: this.state.BuckleType,
      Strap: this.state.Strap,
      ProductID: this.state.ProductID,
    };

    await axios
      .post(
        "http://chopardapi.azurewebsites.net/api/products/AddOrEditProduct",
        obj
      )
      .then((res) => {
      if (res.data.Status === "Success") {
        console.log(res.data.Status);
        this.props.history.push("/Productlist");
      } else {
        alert("Product cannot be updated. One or more inputs has an invalid input type.");
        debugger;
      }
    });
  };

  render() {
    return (
      <Container className="App">
        <h5 className="PageHeading">Update Product Information</h5>
        <br />
        <Form className="form" onSubmit={this.onSubmit}>
          <Col>
            <FormGroup row>
              <Label for="URL" sm={2}>
                Product Image
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="URL"
                  onChange={this.handleChange} noValidate
                  value={this.state.URL}
                  placeholder="Enter an image URL."
                />
                <span className="error">{this.state.errors.URL}</span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="ProductName" sm={2}>
                Product Name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="ProductName"
                  onChange={this.handleChange} noValidate
                  value={this.state.ProductName}
                  placeholder="Enter Product Name"
                />
                <span className="error">{this.state.errors.ProductName}</span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Price" sm={2}>
                Price
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Price"
                  onChange={this.handleChange} noValidate
                  value={this.state.Price}
                  placeholder="Enter price of product."
                />
                <span className="error">{this.state.errors.Price}</span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Dial" sm={2}>
                Dial
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Dial"
                  onChange={this.handleChange} noValidate
                  value={this.state.Dial}
                  placeholder="Enter dial details."
                />
                <span className="error">{this.state.errors.Dial}</span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="CaseDimension" sm={2}>
                Case Dimension
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="CaseDimension"
                  onChange={this.handleChange} noValidate
                  value={this.state.CaseDimension}
                  placeholder="Enter case dimension details."
                />
                <span className="error">{this.state.errors.CaseDimension}</span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Metal" sm={2}>
                Metal
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Metal"
                  onChange={this.handleChange} noValidate
                  value={this.state.Metal}
                  placeholder="Enter metal details."
                />
                <span className="error">{this.state.errors.Metal}</span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="BuckleType" sm={2}>
                Buckle Type
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="BuckleType"
                  onChange={this.handleChange} noValidate
                  value={this.state.BuckleType}
                  placeholder="Enter buckle type details."
                />
                <span className="error">{this.state.errors.BuckleType}</span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Strap" sm={2}>
                Strap
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Strap"
                  onChange={this.handleChange} noValidate
                  value={this.state.Strap}
                  placeholder="Enter Strap details."
                />
                <span className="error">{this.state.errors.Strap}</span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="ProductID" sm={2}>
                Product ID
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="ProductID"
                  onChange={this.handleChange} noValidate
                  value={this.state.ProductID}
                  placeholder="Enter Product ID."
                />
                <span className="error">{this.state.errors.ProductID}</span>
              </Col>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup row>
              <Col sm={5}></Col>
              <Col sm={1}>
                <Button type="submit" color="success">
                  Submit
                </Button>{" "}
              </Col>
              <div>&nbsp;&nbsp;&nbsp;</div>
              <Col sm={1}>
                <Button type="cancel" color="danger">Cancel</Button>{" "}
              </Col>
              <Col sm={5}></Col>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default Editproduct;
