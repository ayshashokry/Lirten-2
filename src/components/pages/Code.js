import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../stylesheets/CodeCss.css';
import Header from '../layout/Header';

import { Link } from 'react-router-dom';
const bg = require('../../images/code-header.png');

const title = 'L/CODE';

const subTitle = ' SYSTEMS IN THE NEW ERA';
const Ph =
  'We are firm believers in the world of endless creative possibilities. We create pieces of intricate design to help solve a design problem.';
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixNav: 'py-5  fix-nav float-left  col-md-4 fix',
      display: ''
    };
    this.line = React.createRef();
    this.sticky = React.createRef();

    this.practicesection = React.createRef();
    this.offersection = React.createRef();
    this.solutionsection = React.createRef();
    this.developsection = React.createRef();
    this.bussinesssection = React.createRef();

    this.allsolutionsection = React.createRef();
    this.first = React.createRef();
    this.second = React.createRef();

    this.third = React.createRef();
  }

  componentDidMount() {
    console.log(this.props.match.path);
    window.scrollTo(0, 0);

    if (this.props.match.path === '/code') {
      window.addEventListener('scroll', this.handleScroll2);
      window.addEventListener('scroll', this.fix2);
      console.log('true');
    } else {
      window.removeEventListener('scroll', this.handleScroll2);
      window.removeEventListener('scroll', this.fix2);
      console.log('false');
    } // }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll2);
    window.removeEventListener('scroll', this.fix2);
  }

  fix2 = e => {
    if (window.pageYOffset > this.practicesection.current.offsetTop) {
      this.setState({ fixNav: 'py-5  fix-nav float-left  col-md-4 fix' });
      this.sticky.current.className = this.state.fixNav;
    } else {
      this.sticky.current.classList = ' py-5  fix-nav float-left  col-md-4';
    }
  };
  handleScroll2 = e => {
    if (
      window.pageYOffset > this.practicesection.current.offsetTop &&
      window.pageYOffset < this.offersection.current.offsetTop
    ) {
      this.line.current.classList = 'codeline1';
      this.first.current.classList = 'white';
      this.second.current.classList = 'codeblue1';
      this.third.current.classList = 'codeblue1';
    } else if (
      window.pageYOffset > this.offersection.current.offsetTop &&
      window.pageYOffset < this.developsection.current.offsetTop
    ) {
      this.line.current.classList = 'codeline2';
      this.second.current.classList = 'codeblue2';

      this.first.current.classList = 'gray';
      this.third.current.classList = 'gray';
    } else if (
      window.pageYOffset > this.developsection.current.offsetTop &&
      window.pageYOffset < this.bussinesssection.current.offsetTop
    ) {
      this.line.current.classList = 'codeline2';
      this.second.current.classList = 'codeblue2';

      this.first.current.classList = 'white';
      this.third.current.classList = 'white';
    } else if (
      window.pageYOffset > this.bussinesssection.current.offsetTop &&
      window.pageYOffset < this.solutionsection.current.offsetTop
    ) {
      this.line.current.classList = 'codeline2';
      this.second.current.classList = 'codeblue2';

      this.first.current.classList = 'white';
      this.third.current.classList = 'white';
    } else if (
      window.pageYOffset > this.solutionsection.current.offsetTop &&
      window.pageYOffset < this.allsolutionsection.current.offsetTop
    ) {
      this.line.current.classList = 'codeline3';
      this.third.current.classList = 'codeblue2';

      this.first.current.classList = 'gray';
      this.second.current.classList = 'gray';
    } else if (window.pageYOffset > this.allsolutionsection.current.offsetTop) {
      this.line.current.classList = 'codeline3';
      this.third.current.classList = 'codeblue2';

      this.first.current.classList = 'white';
      this.second.current.classList = 'white';
    }
  };

  render() {
    return (
      <div className="code">
        <Header img={bg} title={title} subTitle={subTitle} Ph={Ph} />
        <section className="practice py-5 " ref={this.practicesection}>
          <div className="d-none d-lg-block">
            {' '}
            <div
              className="  py-5  fix-nav float-left  col-lg-3"
              ref={this.sticky}
            >
              <div>
                <p ref={this.first} className="white">
                  INTERICATE
                  <br />
                  PRACTICES
                </p>
                <br />

                <p ref={this.second} className="gray">
                  {' '}
                  UNPARALLELED
                  <br />
                  SERVICES
                </p>
                <br />

                <p ref={this.third} className="gray">
                  BEST PRACTICES and
                  <br /> RELIABLE PROCESS
                </p>
                <span className="codeline1" ref={this.line}></span>
              </div>
            </div>
          </div>
          <div className=" py-5 col-lg-8  col-sm-12 float-right practice-paragraph">
            <h2 className="px-2">
         
              our intricate practice <br className="d-none d-xl-block" />in agile development
            </h2>
            <p className="rightP mt-4 px-2">
              {' '}
              If perfection is a dream, progress is a reality. A mantra              <br className="d-none d-xl-block" />
 we follow here at Lirten, and we provide that same               <br className="d-none d-xl-block" />
mantra to our clients through Agile development.
              
            </p>
          </div>
          <div className="clearfix"></div>
        </section>

        <div className="code-offer" ref={this.offersection}>
          {' '}
          <div className="techno-offer">
            <img alt="techno" src={require('../../images/technologies.png')} />
          </div>
          <Container>
            <Row>
              <Col sm={12} lg={3}></Col>
              <Col sm={12} lg={9} className="mt-5">
                <Container>
                  <h2 className="mb-5">
                    We service you with <br className="d-none d-lg-block" /> high level technologies 
                  </h2>
                  <div>
                    <hr className="code-offer-hr mt-3" />
                    <p className="rightP ">
                    Our services rely on using technologies used in the most<br className="d-none d-xl-block" /> professional settings to give you what you deserve. 
                     
                    </p>
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="development" ref={this.developsection}>
          <Row>
            <Col sm={12} lg={8} className="development-caption pt-5 px-4">
              <Container>
                <Row>
                  <Col lg={6}></Col>
                  <Col lg={6} sm={12}>
                    <hr className="dev-hr" />
                    <h2>
                      <p style={{ fontWeight: 'bold' }}>01</p>
                 
                      Enterprise<br className="d-none d-xl-block" /> Level Tech
                    </h2>
                    <p className="pt-4 pr-3">

                      Just because we support startups, doesn’t mean 
                      we won’t provide you with the solutions to rise up the enterprise level. 
                      Utilize the tech and you’ll grow.
                    </p>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col sm={12} lg={4} className="development-img ">
              <img
                alt="development code"
                className="img-fluid"
                src={require('../../images/Rectangle 46.png')}
              />
            </Col>
          </Row>
        </div>
        <div className="digital">
          <Row>
            {' '}
            <Col sm={12} lg={6} className="digital-img">
              <img
                alt="Digital Management"
                className="img-fluid"
                src={require('../../images/Rectangle 50.png')}
              />
            </Col>
            <Col sm={12} lg={6} className="digital-caption px-4">
              <Container>
                <div className="mt-5">
                  <hr className="dig-hr" />
                  <h2>
                    <p style={{ fontWeight: 'bold' }}>02</p>
                  
                    Cloud Based  <br className="d-none d-xl-block" /> Distributed Solutions
                  </h2>
                  <p className="pt-4">
                  We discuss the clients’ expectations as to how they view their business and how would they like that business to grow. We manage such a coherent session to have a clear understanding of how they would like their brand to feel like and look like so that we could never miss a mark. 
                  </p>
                </div>
              </Container>
            </Col>
          </Row>
        </div>
        <div className="management" ref={this.bussinesssection}>
          <Row>
            <Col sm={12} lg={8} className="management-caption pt-5">
              <Container>
                <Row>
                  <Col lg={6}></Col>
                  <Col lg={6} sm={12}>
                    <hr className="mang-hr" />
                    <h2>
                      <p style={{ fontWeight: 'bold' }}>03</p>
                      Progressive <br className="d-none d-xl-block" /> Web Technologies

                    </h2>
                    <p className="pt-4">
                    Why stop working when you don’t have a laptop, with our progressive web technologies, you can continue on your more portable devices to reach your goal!
                    </p>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col sm={12} lg={4} className="management-img">
              <img
                alt="management Business"
                className="img-fluid"
                src={require('../../images/Rectangle 59.png')}
              />
            </Col>
          </Row>
        </div>
        <div ref={this.solutionsection}>
          <div className="hire offset-lg-2">
            <h6>ready for the new big thing?</h6>
            <div className="button">
              {' '}
              <Button>
                {' '}
                <Link to="/ContactUs">HIRE US!</Link>
              </Button>
            </div>
          </div>
          <div className="solution">
            <Container>
              <Row>
                <Col sm={12} md={4}></Col>
                <Col sm={12} md={7} className="mt-5">
                  <Container>
                    <h2 className="mb-5">solutions and ideals</h2>
                    <div>
                      <hr className="solution-hr mt-2" />
                      <p className="rightP ">

                      We have a multitude of solutions that cultivate  <br className="d-none d-xl-block" />all your dreams to reality. 
                    
                      </p>
                    </div>
                  </Container>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="allsolutions" ref={this.allsolutionsection}>
          <div className="allsolutionstechno">
            <img alt="solution" src={require('../../images/SOLUTIONS.png')} />
          </div>
          <Container>
            <Row className="eachsolution">
              <Col md={3}></Col>
              <Col className="pt-5" md={8} sm={12}>
                <h6 className="pt-5">
                  {' '}
                  01{' '}
                  <img
                    alt="vector"
                    className="img-fluid px-2"
                    src={require('../../images/Vector1.png')}
                  />{' '}
                  web and app development
                </h6>
                <p className="offset-md-1">
                We create web and mobile applications for our clients using the latest technologies and frameworks depending on your requirements.
                 
                </p>
              </Col>
            </Row>
            <Row className="eachsolution">
              <Col md={3}></Col>
              <Col md={8} sm={12}>
                <h6>
                  {' '}
                  02{' '}
                  <img
                    alt="vector"
                    className="img-fluid px-2"
                    src={require('../../images/Vector2.png')}
                  />{' '}
                  Cloud Solutions
                </h6>
                <p className="offset-md-1">
                As AWS users ourselves, we provide you with all kinds of cloud solutions; from simple deployment to hosting and creating your new product.
                </p>
              </Col>
            </Row>
            <Row className="eachsolution">
              <Col md={3}></Col>
              <Col md={8} sm={12}>
                <h6>
                  {' '}
                  03{' '}
                  <img
                    alt="vector"
                    className="img-fluid px-2"
                    src={require('../../images/Vector3.png')}
                  />{' '}
                Customized Systems
                </h6>
                <p className="offset-md-1">
                Following an agile development allows us to customize our systems to your needs, or create a whole new system from scratch, just for you! We’re as agile as it gets.
                </p>
              </Col>
            </Row>
            <Row className="eachsolution">
              <Col md={3}></Col>
              <Col md={8} sm={12}>
                <h6>
                  {' '}
                  04{' '}
                  <img
                    alt="vector"
                    className="img-fluid px-2"
                    src={require('../../images/Vector1.png')}
                  />{' '}
                  ERP Solution
                </h6>
                <p className="offset-md-1">
                Using an ERP solution ourselves, we recommend it to the clients that need it. As partners to an ERP solution you don’t need to go far, we can implement it for you. Contact us for more details on the ERP system.
                </p>
              </Col>
            </Row>
         
          </Container>
        </div>
        <div className="interest ">
          <h6>did we interist you?</h6>
          <div className="button">
            {' '}
            <Button>
              {' '}
              <Link to="/ContactUs">HIRE US!</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
