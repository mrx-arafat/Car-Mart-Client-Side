import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div class="container-fluid mt-5">
      <div class="card bg-white mx-5">
        <div class="row mb-4">
          <div class="col-md-4 col-sm-4 col-xs-4">
            <div class="footer-text pull-left">
              <div class="d-flex">
                <h1 class="font-weight-bold mr-2 px-3"> C </h1>
                <h1>Mart</h1>
              </div>
              <p class="card-text">
                mara khau ektu tahole valo developer hote parba
              </p>
            </div>
          </div>
          <div class="col-md-2 col-sm-2 col-xs-2"></div>
          <div class="col-md-2 col-sm-2 col-xs-2">
            <h5 class="heading">Services</h5>
            <ul>
              <li>IT Consulting</li>
              <li>Development</li>
              <li>Cloud</li>
              <li>Support</li>
            </ul>
          </div>

          <div class="col-md-2 col-sm-2 col-xs-2">
            <h5 class="heading">Company</h5>
            <ul class="card-text">
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Join Us</li>
            </ul>
          </div>
        </div>
        <div class="divider mb-4"> </div>
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="pull-left">
              <p>
                <i class="fa fa-copyright"></i> copyright 2021 &copy; Arafat
              </p>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="pull-right mr-4 d-flex policy">
              <div>Terms of Use</div>
              <div>Privacy Policy</div>
              <div>Cookie Policy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
