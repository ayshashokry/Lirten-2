import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Services from '../../images/Services.png';
import manageImg1 from '../../images/manageImg1.png';
import manageImg2 from '../../images/manageImg2.png';
import manageImg3 from '../../images/manageImg3.png';
import lines from '../../images/lines.png';
import '../../stylesheets/Manage.css';
import Header from '../layout/Header';

import { Link } from 'react-router-dom';
const bg = require('../../images/manage-header.png');

const title = 'L/MANAGE';

const subTitle = 'management of success';
const Ph =
  'We manage projects in an intricate manner coming up with systems and business that eventually become best practices that the whole business will one day aspire to follow.';

export default class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixNav: "py-5  fix-nav float-left  col-md-4 fix",
      display: ""
    };
    this.line = React.createRef();
    this.sticky = React.createRef();

    this.pmsection = React.createRef();
    this.offersection = React.createRef();  
      this.planningsection = React.createRef();
      this.allsolutionsection=React.createRef();
    this.costsection = React.createRef();

    this.solutionsection = React.createRef();
    this.first = React.createRef();
    this.second = React.createRef();

    this.third = React.createRef();
  }

  componentDidMount() {
    console.log(this.props.match.path);
    window.scrollTo(0, 0);

    if (this.props.match.path === '/manage') {
      window.addEventListener('scroll', this.handleScroll4);
      window.addEventListener('scroll', this.fix4);
      console.log('true');
    } else {
      window.removeEventListener('scroll', this.handleScroll4);
      window.removeEventListener('scroll', this.fix4);
      console.log('false');
    } // }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll4);
    window.removeEventListener('scroll', this.fix4);
  }

  fix4 = e => {
    if (window.pageYOffset > this.pmsection.current.offsetTop) {
      this.setState({ fixNav: 'py-5  fix-nav float-left  col-md-4 fix' });
      this.sticky.current.className = this.state.fixNav;
    } else {
      this.sticky.current.classList = ' py-5  fix-nav float-left  col-md-4';
    }
  };
  handleScroll4 = e => {
    if (
      window.pageYOffset > this.pmsection.current.offsetTop &&
      window.pageYOffset < this.offersection.current.offsetTop
    ) {
      this.line.current.classList = "manageline1";
      this.first.current.classList = "white";
      this.second.current.classList = "managecolor1";
      this.third.current.classList = "managecolor1";
    } else if (
      window.pageYOffset > this.offersection.current.offsetTop &&
      window.pageYOffset < this.planningsection.current.offsetTop
    ) {
      this.line.current.classList = 'manageline2';
      this.second.current.classList = 'managecolor3';

      this.first.current.classList = "managegray";
      this.third.current.classList = "managegray";
    } 
    else if (
      window.pageYOffset > this.planningsection.current.offsetTop &&
      window.pageYOffset < this.costsection.current.offsetTop
    ) {
      this.line.current.classList = "manageline2";
      this.second.current.classList = "managecolor3";

      this.first.current.classList = "white";
      this.third.current.classList = "white";
    }
    else if (
      window.pageYOffset > this.solutionsection.current.offsetTop &&
      window.pageYOffset < this.allsolutionsection.current.offsetTop
    ) {
      this.line.current.classList = "manageline3";
      this.third.current.classList = "managecolor3";

      this.first.current.classList = "managegray";
      this.third.current.classList = "managegray";
    }

    else if (window.pageYOffset > this.allsolutionsection.current.offsetTop) {
      this.line.current.classList = "manageline3";
      this.third.current.classList = "managecolor3";

      this.first.current.classList = "white";
      this.second.current.classList = "white";
    }
  };

  render() {
    return (
      <div className="manage">
        <Header img={bg} title={title} subTitle={subTitle} Ph={Ph} />
        <section className="first-section py-5" ref={this.pmsection}>
          
              <div className="d-none d-lg-block">
                <div
                   className="  py-5  fix-nav float-left  col-lg-3"
                  ref={this.sticky}
                >
                  
                  <p ref={this.first} className="white">
                    MANAGEMENT
                    <br />
                    PRACTICE ART
                  </p>
                  <br />
                  <p ref={this.second} className="gray">
                   
                    HUGE DEVELOPMENT
                    <br />
                    BEYON PERCEPTION
                  </p>
                  <br />
                  <p ref={this.third} className="gray">
                    INRICACIES OF BUSINESS
                    <br /> MANAGEMENT
                  </p>
                  <span className="manageline1" ref={this.line}></span>
                </div>
                </div>
                <div className=" py-5 col-lg-8  col-sm-12 float-right ">
                <h4>
                  the art of <br className="d-none d-md-block" />
                  project management{' '}
                </h4>
                <Container>
                  <Row>
                    <Col style={{ padding: '0px' }} sm={12} md={10}>
                      <hr className="manage-hr1" />

                      <p className="p2">
                      From practical methods for making sure work gets
                       done right   <br className="d-none d-xl-block" /> and on time,
                       to the mindset that can make you a great leader   <br className="d-none d-xl-block" />
                        motivating your team to do their best.
                        We provide you    <br className="d-none d-xl-block" />with what you need.

                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>
          
          <img
            alt="offering"
            src={Services}
            className="img-fluid servImg ml-5"
          />
          <img alt="offering" src={lines} className="img-fluid manageLines" />
        </section>
        <div className="offer-section" ref={this.offersection}>
          <Container>
            <Row>
              <Col className="" sm={12} lg={3}></Col>
              <Col sm={12} md={8}>
                <h4>
                 
                  what you can expect
                </h4>
                <Container>
                  <Row>
                    <Col style={{ padding: '0px' }} sm={12} md={10}>
                      <hr className="manage-hr2" />

                      <p className="p3">
                      Project management services specialize in planning, 
                      coordinating, and executing projects according to specific requirements and constraints. 
                      The end goal is to complete the project on time; within budget and scope.

                      </p>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="activity-section" ref={this.planningsection}>
          <Row>
            <Col sm={12} lg={8}>
              <Container className="brandingCon">
                <Row>
                  <Col lg={6}></Col>
                  <Col lg={6} sm={12}>
                    <Col className="brandspan" sm={12}>
                      {' '}
                      <hr className="manage-hr2" />
                      <span>01</span>
                    </Col>
                    <h4>
                     
                      resource planning{' '}
                    </h4>
                    <Container>
                      <Row>
                        <Col
                          style={{ padding: '0px', marginBottom: '48px' }}
                          sm={12}
                          md={10}
                        >
                          <p className="p5">
                          A Resource Plan summarizes the level of resources needed to
                           complete a project. A properly documented Resource Plan will
                            specify the exact quantities of labor, and materials needed to 
                            complete your project. Accuracy is the key to perfection.

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
              <img alt="business hub" src={manageImg1} className="img-fluid" />
            </Col>
          </Row>
        </div>
        <div className="Time-section">
          <Row>
            <Col
              style={{ paddingLeft: '0px' }}
              sm={12}
              lg={6}
              className="brandsection-img"
            >
              <img alt="business hub" src={manageImg2} className="img-fluid" />
            </Col>

            <Col className="businesstxt" sm={12} lg={6}>
              <Col className="brandspan" sm={12}>
                <hr className="manage-hr2" />

                <span>02</span>
              </Col>
              <h4>
                <h4> controlling time</h4>
              </h4>
              <Container className="mb-4 businessContainer">
                <Row>
                  <Col style={{ padding: '0px' }} sm={12} lg={8}>
                    <p className="p4">
                    You control time, you control everything around you. 
                    Scheduling and monitoring your progress ensures you meet your deadlines.

                    </p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </div>

        <div className="cost" ref={this.costsection}>
          <Row>
            <Col sm={12} lg={8}>
              <Container className="brandingCon">
                <Row>
                  <Col lg={6}></Col>
                  <Col lg={6} sm={12}>
                    <Col className="brandspan" sm={12}>
                      <hr className="manage-hr2" />

                      <span>03</span>
                    </Col>
                    <h4>
                      cost estimating <br /> and developing <br />
                      the budget.{' '}
                    </h4>
                    <Container>
                      <Row>
                        <Col style={{ padding: '0px' }} sm={12} md={10}>
                          <p className="p4">
                          Estimate what the actual cost will be when the project is 
                          completed, based on the owner's objectives in terms of cost,
                           time, and technical performance. 
                         “Control your budget before it's too late.” 

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
              <img alt="business hub" src={manageImg3} className="img-fluid " />
            </Col>
          </Row>
        </div>
<div  ref={this.solutionsection}>
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
        <div className="solution">
          <Container fluid>
            <Row>
              <Col sm={12} md={4}></Col>
              <Col sm={12} md={7} className=" mt-5">
                <Container fluid>
                  <h2 className="mb-5">a clear intricate business process </h2>
                  <div>
                    <hr className="solution-hr mt-5" />
                    <p className="rightP">
                    We have a tested workflow and process to find the best outcome for our client. Our process is the way we stay on track and ensure alignment with business goals.
                    </p>
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
</div>
        <div className="PlanningCon" ref={this.allsolutionsection}>
          <div className="">
            <img
              className="img-fluid planningImg"
              alt="solution"
              src={require('../../images/planning.png')}
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
                  Initiating
                </h6>
                <p className="offset-md-1">
                During this phase, the project is conceptualized and feasibility is determined. defining the project goal, scope; identifying the project manager, key stakeholders, potential risks,and producing an estimated budget and timeline along with forming the fineprint and contracts.
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
                  Planning
                </h6>
                <p className="offset-md-1">
                We create a project draft to guide the entire project from ideation through completion. This blueprint will map out the project’s scope; resources required to create the deliverables; estimated time and financial commitments; communication strategy to ensure stakeholders are kept up to date and involved; execution plan; and proposal for ongoing maintenance.
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
                  Executing
                </h6>
                <p className="offset-md-1">
                Execution of the project objectives requires effective management of the team members on the ground. maintaining good relationships with all members and keeping the entire project on time,within scope and budget.
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
                  Monitoring and control{' '}
                </h6>
                <p className="offset-md-1">
                We measure the progress of the project to ensure it is developing properly. Documentation such as data collection, verbal and written status reports are created to ensure quality control.
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
                  Closing.{' '}
                </h6>
                <p className="offset-md-1">
                The closing process occurs once the project deliverables have been produced and the stakeholders validate and approve them. During this phase, the project manager will close contracts with suppliers, external vendors, consultants, and other third-party providers and continue maintaining the product.
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
