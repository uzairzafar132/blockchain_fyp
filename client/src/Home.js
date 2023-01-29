import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Main from "./components/Main";
import Report from "./Report";




function Home() {
  const history = useNavigate();
  const redirect_to_roles = () => {
    history("/roles");
  };
  const redirect_to_addmed = () => {
    history("/addmed");
  };
  const redirect_to_supply = () => {
    history("/supply");
  };
  const redirect_to_track = () => {
    history("/track");
  };
  return (
    <>
      <div className="flex flex-row">
        <Main />{" "}
        <h3 className="header1">
          <span>FOOD Supply Chain Flow! </span>
        </h3>
      </div>
      <br />
      <div className="header1">
        <h5 className="">
          {" "}
          Owner Should Register Raw material suppliers ,Manufacturers,
          Distributors and Retailers
        </h5>
      </div>
      <div className="row1-container">
        <div className="box box-down cyan">
          <h2>Register Users</h2>
          {/* <h6>(Note: This is a one time step. Skip to step 2 if already done)</h6> */}
          <button
            onClick={redirect_to_roles}
            className="btn btn-outline-primary btn-sm"
          >
            Register
          </button>
        </div>
        <br />
        <div className="box red">
          <h2>Order Product</h2>
          <h5> Owner should order Product</h5>
          <button
            onClick={redirect_to_addmed}
            className="btn btn-outline-primary btn-sm"
          >
            Order Product
          </button>
        </div>
        <br />
        <div className="box box-down blue">
          <h2>Control Supply</h2>
          <h5> Control Supply Chain</h5>
          <button
            onClick={redirect_to_supply}
            className="btn btn-outline-primary btn-sm"
          >
            Control Supply Chain
          </button>
        </div>
        <br />
        <br />
        <div className="box red">
          <h2>Track Product</h2>
          <h5>
            <b>Track</b> the Product
          </h5>
          <button
            onClick={redirect_to_track}
            className="btn btn-outline-primary btn-sm"
          >
            Track Product
          </button>
        </div>
        <br />
        <br />

        <div className="box box-down blue">
          <h2>Report</h2>
          <h5>
            <b>Contact</b>
          </h5>
          <a href="/contact">
            <button className="btn btn-outline-primary btn-sm">Contact</button>
          </a>
        </div>
        {/* <div>
          <div>{<Report />}</div>
        </div> */}
      </div>
    </>
  );
}

export default Home;


