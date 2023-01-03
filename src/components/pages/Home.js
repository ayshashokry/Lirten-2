import React, { Component } from 'react';
import '../../stylesheets/HomeCss.css';
import { Col, Row, Container } from 'react-bootstrap';
import Header from '../layout/Header';

import { Link } from 'react-router-dom';
const bg = require('../../images/home-header.png');

const title = 'L/RTEN';

const subTitle = 'we are lirten';
const Ph =
  'We are a group of enthusiastic critical thinkers and creators that work tirelessly to help startups and professionals find their unique selling point through our very own Integrated Creative Technologies .';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixNav: 'py-5  fix-nav float-left  col-md-4 fix',
      display: ''
    };
    this.line = React.createRef();
    this.sticky = React.createRef();

    this.section2 = React.createRef();
    this.section3 = React.createRef();
    this.section4 = React.createRef();
    this.section5 = React.createRef();
    this.section6 = React.createRef();

    this.first = React.createRef();
    this.second = React.createRef();

    this.third = React.createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    console.log(this.props.match.path);

    if (this.props.match.path === '/') {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('scroll', this.fix);

      console.log('true');
    } else {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('scroll', this.fix);
      console.log('false');
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('scroll', this.fix);
  }

  fix = e => {
    if (window.pageYOffset >= this.section2.current.offsetTop) {
      this.setState({ fixNav: 'py-5  fix-nav float-left  col-md-4 fix' });
      this.sticky.current.className = this.state.fixNav;
    } else {
      this.sticky.current.classList = ' py-5  fix-nav float-left  col-md-4';
    }
  };
  handleScroll = e => {
    if (
      window.pageYOffset > this.section2.current.offsetTop &&
      window.pageYOffset < this.section3.current.offsetTop
    ) {
      this.line.current.classList = 'line1';
      this.first.current.classList = 'blue';

      this.second.current.classList = 'gray';
      this.third.current.classList = 'gray';
    } else if (
      window.pageYOffset > this.section3.current.offsetTop &&
      window.pageYOffset < this.section4.current.offsetTop
    ) {
      this.line.current.classList = 'line2';
      this.first.current.classList = 'pink';

      this.second.current.classList = 'white';
      this.third.current.classList = 'pink';
    } else if (
      window.pageYOffset > this.section4.current.offsetTop 
     
    ) {
      this.line.current.classList = 'line3';
      this.first.current.classList = 'gray';

      this.second.current.classList = 'gray';
      this.third.current.classList = 'blue';
    }
  };

  render() {
    return (
      <div className="home">
        <Header img={bg} title={title} subTitle={subTitle} Ph={Ph} />
        <section className="offer py-5 " ref={this.section2}>
          <div className="d-none d-lg-block">
            {' '}
            <div
              className="  py-5  fix-nav float-left  col-lg-3"
              ref={this.sticky}
            >
              <div>
                <p ref={this.first} className="blue">
                  INTEGRATED
                  <br />
                  CREATIVE TECHNOLOGIES
                </p>
                <br />

                <p ref={this.second} className="gray">
                  {' '}
                  OUR APPROACH TO
                  <br />
                  BUSINESS PROBLEM
                </p>
                <br />

                <p ref={this.third} className="gray">
                  THE WAY WE TREAT
                  <br /> VALUE
                </p>
                <span className="line1" ref={this.line}>
                  {/* <svg
                    src={require("../../images/Rectangle9.svg")}
                    className="image1"
                  />{" "}
                  <img
                    src={require("../../images/Pattern8.svg")}
                    className="image2"
                  /> */}
                </span>
              </div>
            </div>
          </div>
          <div className=" py-5 col-lg-7  col-sm-12 float-right ">
            <h5 className="pb-5 ">
              WE OFFER
              <br /> CREATIVE BUSINESS SOLUTIONS
            </h5>
            <p className="lineholder">
              {' '}
              Integrated Creative Technologies is our unique methodology of
              approaching any business problem in a creative manner to create a
              solution that lasts. We use such a methodology to help people with
              vision find their unique voice and their appropriate touchpoints.
            </p>
          </div>
          <div className="clearfix"></div>
        </section>

        <section className=" py-5 we-design" ref={this.section3}>
          <div className="circle"></div>
          <div className=" py-5 col-lg-7  col-sm-12 rowcl  float-right">
            <h5 className="mt-4">WE DESIGN</h5>
            <p className=" pt-3 pb-5">
              
              First off, we start by assessing the business problem. Think of it
              this way, we search for what makes businesses work, then see what
              could you improve upon your business. We use our unique design
              methodology to find a visual solution that would suit your exact
              needs.
            </p>
            <div className="row">
              {' '}
              <button className=" btn our-button">
                {' '}
                <Link exact to="Design">
                  {' '}
                  VISIT L/DEISGN{' '}
                </Link>
              </button>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>

        <section className=" py-5 we-code">
          <div className="zero"></div>

          <div className=" py-5 col-lg-7  col-sm-12 rowcl2  float-right">
            <h5 className="mt-4">WE CODE</h5>
            <p className=" pt-3 pb-5">
              First off, we start by assessing the business problem. Think of it
              this way, we search for what makes businesses work, then see what
              could you improve upon your business. We use our unique design
              methodology to find a visual solution that would suit your exact
              needs.
            </p>
            <div className="row">
              {' '}
              <button className=" btn our-button">
                <Link exact to="Code">
                  {' '}
                  VISIT L/CODE{' '}
                </Link>
              </button>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>

        <section className=" py-5 we-manage" >
          <div className="lines"></div>

          <div className=" py-5 col-lg-7  col-sm-12 rowcl3  float-right">
            <h5 className="mt-4">WE MANAGE</h5>
            <p className=" pt-3 pb-5">
              First off, we start by assessing the business problem. Think of it
              this way, we search for what makes businesses work, then see what
              could you improve upon your business. We use our unique design
              methodology to find a visual solution that would suit your exact
              needs.
            </p>
            <div className="row">
              {' '}
              <button className=" btn our-button">
                {' '}
                <Link exact to="Manage">
                  VISIT L/MANAGE{' '}
                </Link>
              </button>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>

        <section className=" py-5  value-section" ref={this.section4}>
          <div className=" py-5 col-lg-7  col-sm-12   float-right">
            <h5 className="pb-5">
              WE BELIEVE IN VALUE...
              <br /> ACTUAL , LEGITIMATE VALUE{' '}
            </h5>
            <p className="lineholder">
              We believe that business should be based on solid ideas and not
              purely on how big your bank account is; that design is an integral
              part of a successful business; that startups have the right to
              grow in the crowded marketplace; that young, free thinkers are the
              future of more innovative businesses; that people are the most
              valuable asset any business has.
            </p>
          </div>
          <div className="clearfix"></div>
        </section>

        <section className="py-5 blur-section" ref={this.allsolutionsection}>
          <Container>
            <Row className="eachsolution">
              <Col md={3}></Col>
              <Col md={8} sm={12}>
                <div className="pt-4  inline  first-row mx-auto">
                  <h5>
                    {' '}
                    01 <span className="px-1 mr-3"> </span>
                  </h5>
                  <h5>WE HELP YOU BE CREATIVE</h5>
                  <p className="py-4 pl-5">
                    {' '}
                    Lirten works tirelessly to create and assist in establishing
                    sophisticated and professional enterprises.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              {' '}
              <Col md={3}></Col>
              <Col md={8} sm={12}>
                <div className="pb-4  inline  second-row  mx-auto">
                  <h5>
                    {' '}
                    02 <span className="px-1 mr-3"> </span>
                  </h5>
                  <h5>WE LEVERAGE VALUE</h5>
                  <p className="py-4 pl-5">
                    Lirten is a holding company that works to leverage
                    innovative ideas and maximize the creative output.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              {' '}
              <Col md={3}></Col>
              <Col md={8} sm={12}>
                {' '}
                <div className="py-4  inline  third-row mx-auto">
                  <h5>
                    {' '}
                    03 <span className="px-1 mr-3"> </span>
                  </h5>
                  <h5 className="w-50">WE HELP SMALL AND LARGE</h5>
                  <p className="py-4 pl-5">
                    {' '}
                    Lirten provides creative and technological services to allow
                    enterprises, both small and large, in every field create
                    their unique value.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section
          className="ready-section text-center  py-5"
          ref={this.section6}
        >
          <h4 class="py-3" style={{ fontWeight: '700' }}>
            READY FOR THE NEW BIG THING?
          </h4>

          <button className=" btn  my-3">
            <Link exact to="Contact">
              HIRE US!
            </Link>
          </button>
        </section>
      </div>
    );
  }
}
