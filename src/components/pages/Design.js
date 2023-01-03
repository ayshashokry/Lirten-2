import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../stylesheets/Design.css';
import offering from '../../images/offering.png';
import brandimg from '../../images/brandimg.png';
import aboutBg3 from '../../images/aboutBg3.png';
import aboutBg4 from '../../images/aboutBg4.png';
import Header from '../layout/Header';
import circle from '../../images/design-circle.png';
const bg = require('../../images/design-header.png');

const title = 'L/DESIGN';

const subTitle = 'welcome to the new horizons';
const Ph =
  'We are firm believers in the world of endless creative possibilities. We create pieces of intricate design to help solve a design problem.';
export default class Aboutus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixNav:"py-5  fix-nav float-left  col-md-4 fix",
      display: ""
    };
    this.line = React.createRef();
    this.sticky = React.createRef();

    this.practicesection = React.createRef();
    this.offersection = React.createRef();
    this.uxsection = React.createRef();
    this.brandsection = React.createRef();

    this.solutionsection = React.createRef();
    this.process = React.createRef();

    this.first = React.createRef();
    this.second = React.createRef();

    this.third = React.createRef();
  }

  componentDidMount() {
    console.log(this.props.match.path);
    window.scrollTo(0, 0);

    if (this.props.match.path === '/design') {
      window.addEventListener('scroll', this.handleScroll3);
      window.addEventListener('scroll', this.fix3);
      console.log('true');
    } else {
      window.removeEventListener('scroll', this.handleScroll3);
      window.removeEventListener('scroll', this.fix3);
      console.log('false');
    } // }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll3);
    window.removeEventListener('scroll', this.fix3);
  }

  fix3 = e => {
    if (window.pageYOffset > this.practicesection.current.offsetTop) {
      this.setState({ fixNav: "py-5  fix-nav float-left  col-md-4 fix"  });
      this.sticky.current.className = this.state.fixNav;
    } else {
      this.sticky.current.classList = "py-5  fix-nav float-left  col-md-4";
    }
  };
  handleScroll3 = e => {
    if (
      window.pageYOffset > this.practicesection.current.offsetTop &&
      window.pageYOffset < this.offersection.current.offsetTop
    ) {
      this.line.current.classList = 'codeline1';
      this.first.current.classList = 'white';
      this.second.current.classList = 'codepurple1';
      this.third.current.classList = 'codepurple1';
    } else if (
      window.pageYOffset > this.offersection.current.offsetTop &&
      window.pageYOffset < this.brandsection.current.offsetTop
    ) {
      this.line.current.classList = 'designline2';
      this.second.current.classList = 'codeblue2';

      this.first.current.classList = "gray";
      this.third.current.classList = "gray";
    }
    else if (
      window.pageYOffset > this.brandsection.current.offsetTop &&
      window.pageYOffset < this.uxsection.current.offsetTop
    ) {
      this.line.current.classList = "designline2";
      this.second.current.classList = "codeblue2";

      this.first.current.classList = "white";
      this.third.current.classList = "white";
    }
    else if (window.pageYOffset > this.solutionsection.current.offsetTop && window.pageYOffset < this.process.current.offsetTop) {
      this.line.current.classList = "designline3";
      this.third.current.classList = "codeblue2";

      this.first.current.classList = 'gray';
      this.second.current.classList = 'gray';
    }
    else if (window.pageYOffset > this.process.current.offsetTop) {
      this.line.current.classList = "designline3";
      this.third.current.classList = "codeblue2";

      this.first.current.classList = "white";
      this.second.current.classList = "white";
    }
  };

  render() {
    return (
      <div className="design">
        <Header img={bg} title={title} subTitle={subTitle} Ph={Ph} />

        <section className="our-intricate" ref={this.practicesection}>
        <div className="d-none d-lg-block">
                <div
                   className="  py-5  fix-nav float-left  col-lg-3"
                  ref={this.sticky}
                >
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
                    BEST PRACTICES &
                    <br /> RELIABLE PROCESS
                  </p>
                  <span className="codeline1" ref={this.line}></span>
                </div>
                </div>
                <div className=" py-5 col-lg-8  col-sm-12 float-right pm">

        
                <h4>
                  {/* OUR INTRICATE PRACTICE */}
                  our intricate practice <br className="d-none d-md-block" />
                  {/* IN BUSINESS ORINTED DESIGN */}
                  in business oriented design{' '}
                </h4>
                <Container>
                  <Row>
                    <Col style={{ padding: '0px' }} sm={12} md={10}>
                      <p className="p2" style={{ color: '#fff' }}>
                        Here at Lirten, we follow one clear goal; help the
                        client reach their business target. We believe that
                        design is one of the strongest means to better business,
                        and we know well enough how we can make a business
                        suceed!
                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>
          <img
            alt="offering"
            src={offering}
            className="img-fluid offeringImg"
          />

          <img alt="offering" src={circle} className="img-fluid designcircle" />
        </section>
        <div className="offer-section" ref={this.offersection}>
          <Container>
            <Row>
              <Col className="" sm={12} md={4}></Col>
              <Col sm={12} md={8}>
                <h4>
                  we offer a wide range <br className="" />
                  of services, helping you grow{' '}
                </h4>
                <Container>
                  <Row>
                    <Col style={{ padding: '0px' }} sm={12} md={10}>
                      <hr className="code-offer-hr mt-5" />

                      <p className="p3">
                        We offer a wide range of services in an effort to assist
                        you find what exactly do you need. Our services
                        encompass all what you need in a business environment,
                        from strategy to social media to web and, of course,
                        branding.
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>

        {/* <div className="branding">
          <Container>
            <Row>
              <Col sm={12} md={5}>
                <h3>hhhhhhhh</h3>
              </Col>
              <Col sm={12} md={6}>
                <img
                  alt="business hub"
                  src={brandimg}
                  className="img-fluid brandImg"
                />
              </Col>
            </Row>
          </Container>

        </div> */}

        <div className="branding" ref={this.brandsection}>
          <Row>
            <Col
              style={{ padding: '25px', paddingBottom: '20px' }}
              sm={12}
              lg={8}
            >
              <Container className="brandingCon">
                <Row>
                  <Col lg={6}></Col>
                  <Col lg={6} sm={12}>
                    <Col className="brandspan" sm={12}>
                      {' '}
                      <hr className="design-hr " />
                      <span>01</span>
                    </Col>
                    <h4>
                      brand identity & <br />
                      strategy
                    </h4>
                    <Container>
                      <Row>
                        <Col style={{ padding: '0px' }} sm={12} md={10}>
                          <p className="p4">
                            Yes, we do believe they are one. No identity could
                            be built without a coherent strategy that identifies
                            what the company does, how it does it and why does
                            it exist. The process is clearly dependent on each
                            other.
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col
              style={{ paddingLeft: '0px' }}
              sm={12}
              lg={4}
              className="brandsection-img"
            >
              <img alt="business hub" src={brandimg} className="img-fluid" />
            </Col>
          </Row>
        </div>

        <div className="businessCon">
          <Container fluid>
            <Row>
              <Col
                style={{ paddingLeft: '0px' }}
                className="brandsection-img"
                sm={12}
                lg={6}
              >
                <img
                  alt="business hub p-5"
                  src={aboutBg3}
                  className="img-fluid"
                />
              </Col>

              <Col
                style={{ padding: '25px', paddingBottom: '20px' }}
                className="businesstxt"
                sm={12}
                lg={6}
              >
                <Col className="brandspan" sm={12}>
                  <hr className="design-hr " />

                  <span>02</span>
                </Col>
                <h4>
                  digital marketing & <br className="d-none d-md-block" />
                  social media
                </h4>
                <Container className="mb-4 businessContainer">
                  <Row>
                    <Col style={{ padding: '0px' }} sm={12} lg={8}>
                      <p className="p4">
                        Late in your social media game? Don’t know what to do?
                        Don’t worry, we got you covered! We’ll handle your
                        social media needs to help you reach your target
                        customer. We’ll take care of the proper way to
                        communicate and later properly segment the customers on
                        social media platforms.
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="UX" ref={this.uxsection}>
          <Row>
            <Col sm={12} lg={8}>
              <Container className="brandingCon">
                <Row>
                  <Col lg={6}></Col>
                  <Col lg={6} sm={12}>
                    <Col className="brandspan" sm={12}>
                      <hr className="design-hr " />

                      <span>03</span>
                    </Col>
                    <h4>
                      user experience & <br className="d-none d-md-block" />
                      user interface{' '}
                    </h4>
                    <Container>
                      <Row>
                        <Col style={{ padding: '0px' }} sm={12} md={10}>
                          <p className="p4">
                            Ready for that new great application? Want to prove
                            your online presence through a website? Interisted
                            in creating a new product that would make people’s
                            lives easier? we’ve got all that covered! We’ll help
                            you reach your goal simply and easily.
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col
              style={{ paddingLeft: '0px' }}
              sm={12}
              lg={4}
              className="brandsection-img"
            >
              <img alt="business hub" src={aboutBg4} className="img-fluid " />
            </Col>
          </Row>
        </div>

        <div className="hire offset-lg-1">
          <h6>ready for the new big thing?</h6>
          <div className="button">
            {' '}
            <Button>
              {' '}
              <Link to="/ContactUs">HIRE US!</Link>
            </Button>
          </div>
        </div>
        <div className="solution" ref={this.solutionsection}>
          <Container>
            <Row>
              <Col sm={12} md={4}></Col>
              <Col sm={12} md={7} className="mt-5">
                <Container>
                  <h2 className="mb-5">
                    we follow a process
                    <br className="d-none d-md-block" /> to success{' '}
                  </h2>
                  <div>
                    <hr className="solution-hr mt-5" />
                    <p className="rightP ">
                      {/* We have a tested workflow and proces to find the best
                      outcome for our
                      <br className="d-none d-xl-block" />
                      client. Our process is a way we keep design on track and
                      in a way to only 
                      <br className="d-none d-xl-block" />
                      insure alignment with business goals. */}
                      We have a tested workflow and proces to find the best
                      outcome for our client. Our process is a way we keep
                      design on track and in a way to only insure alignment with
                      business goals
                    </p>
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="processCon" ref={this.process}>
          <div className="">
            <img
              className="img-fluid processImg"
              alt="solution"
              src={require('../../images/process.png')}
            />
          </div>
          <Container>
            <Row className="eachsolution">
              <Col md={3}></Col>
              <Col md={8} sm={12}>
                <h6>
                  {' '}
                  01{' '}
                  <img
                    alt="vector"
                    className="img-fluid px-2"
                    src={require('../../images/Vector1.png')}
                  />{' '}
                  Discovery
                </h6>
                <p className="offset-md-1">
                  We discuss the clients’ expectations as to how they view their
                  business and how would they like that business to grow. We
                  manage such a coherent session to have a clear understanding
                  of how they would like their brand to feel like and look like
                  so that we could never miss a mark.
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
                  Strategy
                </h6>
                <p className="offset-md-1">
                  We make sure that what we create is exactly what the customer
                  wants by creating a clear brand personality, strong story and
                  overall intriguing messaging. We sure that from here on
                  forward, what the client is trying to say to their audience is
                  clearly understandable by their target customer.
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
                  Visual directions
                </h6>
                <p className="offset-md-1">
                  We take what we’ve established with the client and their
                  business into the next level by discovering how they could
                  solve their problem visually. In short, we search for a visual
                  business solution.
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
                  Spreading it Into a Full Brand{' '}
                </h6>
                <p className="offset-md-1">
                  We take all the visual assets that we have built and spread
                  all those details into a full brand that would speak your
                  language no-matter what the touchpoint. We always keep the
                  brand personality in mind and design specifically to suit this
                  exact brand.
                </p>
              </Col>
            </Row>
            <Row className="eachsolution">
              <Col md={3}></Col>
              <Col md={8} sm={12}>
                <h6>
                  {' '}
                  05{' '}
                  <img
                    alt="vector"
                    className="img-fluid px-2"
                    src={require('../../images/Vector2.png')}
                  />{' '}
                  comprehensible and repeatable model.{' '}
                </h6>
                <p className="offset-md-1">
                  We create our design in a way that can be reused infinitely.
                  Our identities are not rigid and give the brand a huge chance
                  to grow into various fields.
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
