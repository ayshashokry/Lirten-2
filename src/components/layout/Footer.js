import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
     submail:''}}

     handleSubscribe=e=>{
      e.preventDefault();
    
      const request = {
        email: this.state.submail,
      };
      if (
        this.state.submail === ''
      ) {
        this.setState({ show2: true });
      } else {
        axios
          .post('api/requests/subscribe', request)
          .then(
            this.setState({
              show: true,    
              submail: '',
              show2: false,
              valid: true
            })
          )
          .then(
            setTimeout(() => {
              this.setState({ show: false });
            }, 1300)
          )
          .catch(err => console.log(err));
      }
    }
    handlesubmail=e=>{
      this.setState({submail:e.target.value})
      console.log(e.target.value)
        }
  render() {
    return (
      <footer className="pb-3">
        <Container>
          <Row>
            <Col md={12} lg={4}>
              <div className="footerlogo">
                <img
                  alt="lirtenlogo"
                  src={require('../../images/footerlogo.png')}
                />
              </div>
              <div className="mt-5 info address">
                <span>
                  21/79, Building 25 <br />
                  Maadi, Cairo Governorate 11728
                </span>
              </div>
              <div className="mt-4 info">
                <span>
                  {' '}
                  <span style={{ color: '#D0AD5E' }}> E:</span> info@lirten.com
                </span>{' '}
                <br />
                <span>
                  <span style={{ color: '#D0AD5E' }}> M: </span> +0223596955
                </span>
                <br />
                <span>
                  <span style={{ color: '#D0AD5E' }}> P: </span> +01002424439
                </span>
              </div>{' '}
              {/* <div className="footer-icons mt-4">
                <span className="mr-4">
                  <Link>
                    <img alt="facebook" src={require("../../images/f.png")} />
                  </Link>
                </span>
                <span className="mr-4">
                  <Link>
                    <img
                      alt="instagram"
                      src={require("../../images/instagram.png")}
                    />
                  </Link>
                </span>

                <span className="mr-3">
                  <Link>
                    <img
                      alt="twitter"
                      src={require("../../images/twitter.png")}
                    />
                  </Link>
                </span>

                <span>
                  <Link>
                    <img alt="behance" src={require("../../images/be.png")} />
                  </Link>
                </span>
              </div> */}
            </Col>
            <Col md={12} lg={7} className="offset-lg-1 ">
              <Row>
                <Col sm={12}>
                  {' '}
                  <ul className="pt-5 footerlinksnav">
                    <li>
                      <Link to="/">HOME</Link>
                    </li>

                    <li>
                      <Link to="/design">L/ DESIGN</Link>
                    </li>
                    <li>
                      <Link to="/code">L/ CODE</Link>
                    </li>
                    <li>
                      <Link to="/manage">L/ MANAGE</Link>
                    </li>
                    <li>
                      <Link to="/ContactUs">CONTACT US</Link>
                    </li>
                  </ul>
                </Col>
                <Form> <Col sm={12} className="offset-lg-1">
                  <div className=" footerform">
                    
                    <Form.Group controlId="formGroupEmail">
                    <Form.Control
                      noValidate
                      required
                      type="email"
                      value={this.state.submail}
                      onChange={this.handlesubmail}
                      name="email2"
                      placeholder="Sign up for our newsletter"
                      className="contactForm my-4"
                    /> 
                  </Form.Group>
                   
                  </div>
                </Col>{' '}
                <Col sm={12} className="offset-lg-1">
                  <div className="formbuttons">
                    <Row>
                      <Col md={4}>
                        <Button type="submit " className="px-4 py-2 mr-5" onClick={this.handleSubscribe}>
                        SUBSCRIBE
                    </Button>
                      </Col>
                      <Col md={6}>
                        <p>
                          we’ll always keep you updated on what we’re working
                          on! promise no spam though.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Col> </Form>
              </Row>
            </Col>
          </Row>
          <p className="text-center footer-rights mt-5">
            lirten all rights reserved ©2019{' '}
          </p>
        </Container>
      </footer>
    );
  }
}
