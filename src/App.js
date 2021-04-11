import "./App.css";
import Productlist from "./Product/Productlist";
import Addproduct from "./Product/Addproduct";
import Editproduct from "./Product/Editproduct";
import Productdetail from "./Product/Productdetail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-sm navbar-light fixed-top">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/Addproduct"} className="nav-link">
                  Add New Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Productlist"} className="nav-link">
                  Product List
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/About"} className="nav-link">
                About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/FAQ"} className="nav-link">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </nav>{" "}
        <div class="header" id="home">
          <br />
          <br />
          <div class="text-center">
            <img
              src="https://blobstoragecameo.blob.core.windows.net/watchcollection/Chopard Geneve.png"
              alt="Chopard"
              height="100"
            />
            <h6>
              <br />
              <br />
              <a>
                S&nbsp;&nbsp;W&nbsp;&nbsp;I&nbsp;&nbsp;S&nbsp;&nbsp;S
                &nbsp;&nbsp;
              </a>
              <a>
                &nbsp;&nbsp;L&nbsp;&nbsp;U&nbsp;&nbsp;X&nbsp;&nbsp;U&nbsp;&nbsp;R&nbsp;&nbsp;Y
                &nbsp;&nbsp;&nbsp;
              </a>
              <a>
                &nbsp;W&nbsp;&nbsp;A&nbsp;&nbsp;T&nbsp;&nbsp;C&nbsp;&nbsp;H&nbsp;&nbsp;E&nbsp;&nbsp;S{" "}
              </a>
              <br />
              <br />
            </h6>
          </div>
        </div>
        <br />
        <Switch>
          <Route exact path="/Addproduct" component={Addproduct} />
          <Route path="/Productlist" component={Productlist} />
          <Route path="/edit/:id" component={Editproduct} />
          <Route path="/details/:id" component={Productdetail} />
        </Switch>
        <footer>
          <br />
          <br />
          <br />
          <br />
          <div class="text-center">
            <img
              src="https://blobstoragecameo.blob.core.windows.net/watchcollection/Chopard Logo.png"
              alt="Chopardt"
              height="100"
            />
            <h6>C&nbsp;H&nbsp;O&nbsp;P&nbsp;A&nbsp;R&nbsp;D</h6>
            <p>[ LEGAL NOTICES ] - &copy; 2021 Chopard</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
