import React, { Component } from 'react';
import axios from 'axios';
import {
  NameErrors,
  EmailErrors,
  NumberErrors,
  AnsOneErrors,
  AnsTwoErrors
} from '../layout/FormErrors';
import '../../stylesheets/JoinCss.css';
import '../../stylesheets/HomeCss.css';

import { Col, Row, Tab, Nav, Form, Button,Modal } from 'react-bootstrap';
import Header from '../layout/Header';

const bg = require('../../images/join-header.png');

const title = 'JOIN US';
const subTitle = 'INTERISTED IN BECOMING PART OF THE TEAM?';
const Ph =
  'Lirten welcomes passionate people with the energy to create new things and experience the environment of a better workplace!';

export default class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.submit = this.submit.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      cvfile: null,
      cvname: 'Attach your CV*',
      portfolio: '',
      name: '',
      number: '',
      email: '',
      firstq: '',
      secondq: '',
      jobtitle: 'DEVELOPER',
      show2: false,
      nameErrors: { name: '' },
      emailErrors: { email: '' },
      numberErrors: { number: '' },
      //  cvErrors: { cv: '' },
      ans1Errors: { ans1: '' },
      ans2Errors: { ans2: '' },
      emailValid: false,
      nameValid: false,
      numberValid: false,
      //  cvValid: false,
      ans1Valid: false,
      ans2Valid: false,

      formValid: false
    };
  }
  handleShow() {
    this.setState({ show: true });
  }

  handleposition = e => {
    this.setState({ jobtitle: e.target.name });
    console.log(e.target.name);
  };

  handlecvChange = event => {
    this.setState({
      cvfile: event.target.files[0],
      cvname: event.target.files[0].name
    });
  };

  handleCvUpload = event => {
    event.preventDefault();
    const data = new FormData();
    data.append('mycv', this.state.cvfile);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    axios.post('api/upload', data, config).then(res => {
      this.setState({
        cvfile: res.data.url
      });
      console.log(res);
    });
  };

  submit(e) {
    e.preventDefault();

    const request = {
      email: this.state.email,
      name: this.state.name,
      number: this.state.number,
      firstq: this.state.firstq,
      secondq: this.state.secondq,
      cv: this.state.cvfile,
      jobtitle: this.state.jobtitle,
      portfolio: this.state.portfolio
    };
    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.number === '' ||
      this.state.firstq === '' ||
      this.state.secondq === ''
    ) {
      this.setState({ show2: true });
    } else {
      axios
        .post('api/requests/join', request)
        .then(
          this.setState({
            show: true,
            name: '',
            number: '',
            email: '',
            firstq: '',
            secondq: '',
            cvfile: null,
            portfolio: '',
            show2: false
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

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let nameValidationErrors = this.state.nameErrors;
    let emailValidationErrors = this.state.emailErrors;
    let numberValidationErrors = this.state.numberErrors;
    // let cvValidationErrors = this.state.cvErrors;
    let ans1ValidationErrors = this.state.ans1Errors;
    let ans2ValidationErrors = this.state.ans2Errors;

    let emailValid = this.state.emailValid;
    let numberValid = this.state.numberValid;
    let nameValid = this.state.nameValid;
    // let cvValid = this.state.cvValid;
    let ans1Valid = this.state.ans1Valid;
    let ans2Valid = this.state.ans2Valid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        emailValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'name':
        nameValid = value.length > 2;
        nameValidationErrors.name = nameValid ? '' : ' is too short';
        break;
      case 'number':
        numberValid = value.length >= 6;
        numberValidationErrors.number = numberValid ? '' : ' is too short';
        break;

      // case 'cv':
      //   cvValid = value.length >= 0;
      //   cvValidationErrors.cv = cvValid ? '' : ' Please Attach your CV';
      //   break;

      case 'firstq':
        ans1Valid = value.length >= 0;
        ans1ValidationErrors.ans1 = ans1Valid
          ? ''
          : 'Please answer this question';
        break;

      case 'secondq':
        ans2Valid = value.length >= 0;
        ans2ValidationErrors.ans2 = ans2Valid
          ? ''
          : 'Please answer this question';
        break;
      default:
        break;
    }
    this.setState(
      {
        nameErrors: nameValidationErrors,
        emailErrors: emailValidationErrors,
        numberErrors: numberValidationErrors,
        // cvErrors: cvValidationErrors,
        ans1Errors: ans1ValidationErrors,
        ans2Errors: ans2ValidationErrors,

        emailValid: emailValid,
        numberValid: numberValid,
        nameValid: nameValid,
        //  cvValid: cvValid,
        ans1Valid: ans1Valid,
        ans2Valid: ans2Valid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.numberValid &&
        this.state.nameValid &&
        this.state.ans1Valid &&
        this.state.ans2Valid
    });
  }

  errorClass(error) {
    if (error) {
      return error.length === 0 ? '' : 'has-error';
    }
  }
  handlePortfolio = e => {
    this.setState({ portfolio: e.target.value });
    console.log(e.target.value);
  };

  render() {
    const form = (
      <Row>
        <Col sm={12} lg={5} className=" developer-form offset-lg-3">
          <h3 className="w-75">Fill in the fields below</h3>
          <Form onSubmit={this.handleSubmit} noValidate>
            <Form.Group>
              <Form.Control
                noValidate
                required
                type="text"
                onChange={this.handleUserInput}
                value={this.state.name}
                name="name"
                placeholder="Name*"
                className="contactForm my-4 "
              />{' '}
              <h6 className="panel panel-default" style={{ color: 'red' }}>
                <NameErrors nameErrors={this.state.nameErrors} />
              </h6>
            </Form.Group>

            <Form.Group>
              <Form.Control
                noValidate
                required
                type="email"
                value={this.state.email}
                onChange={this.handleUserInput}
                name="email"
                placeholder="E-Mail*"
                className="contactForm my-4"
              />
              <h6 className="panel panel-default" style={{ color: 'red' }}>
                <EmailErrors emailErrors={this.state.emailErrors} />
              </h6>
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                noValidate
                required
                onChange={this.handleUserInput}
                value={this.state.number}
                name="number"
                placeholder="Mobile Phone/Landline"
                className="contactForm my-4"
              />
              <h6 className="panel panel-default" style={{ color: 'red' }}>
                <NumberErrors numberErrors={this.state.numberErrors} />
              </h6>
            </Form.Group>

            <Form.Group className="cvupload">
              <Form.Control
                type="file"
                name="mycv"
                id="file1"
                onChange={this.handlecvChange}
              />
              <span>{this.state.cvname}</span>
              <label htmlFor="file1">
                <i class="fas fa-paperclip"></i>
              </label>
              <button
                style={{
                  backgroundColor: '#060067',
                  float: 'right',
                  marginTop: '3px'
                }}
                onClick={this.handleCvUpload}
              >
                Upload
              </button>
            </Form.Group>
            <Form.Group>
              <Form.Control
                noValidate
                type="text"
                value={this.state.portfolio}
                onChange={this.handlePortfolio}
                name="portfolio"
                placeholder="A link of your portfolio"
                className="contactForm my-4"
              />
            </Form.Group>
            <div className="formanswers">
              <h3> Answer the following questions</h3>
              <div>
                <p className="mt-3">
                  This is the question that is required by the job?
                </p>
                <Form.Group>
                  <Form.Control
                    noValidate
                    required
                    placeholder="Answer..."
                    as="textarea"
                    rows="4"
                    onChange={this.handleUserInput}
                    value={this.state.firstq}
                    name="firstq"
                    type="text"
                    className="contactForm my-4"
                  />{' '}
                  <h6 className="panel panel-default ans">
                    <AnsOneErrors ansoneErrors={this.state.ans1Errors} />
                  </h6>
                </Form.Group>
              </div>

              <div>
                <p>This is the question that is required by the job?</p>
                <Form.Group>
                  <Form.Control
                    noValidate
                    required
                    placeholder="Answer..."
                    as="textarea"
                    rows="4"
                    onChange={this.handleUserInput}
                    value={this.state.secondq}
                    name="secondq"
                    type="text"
                    className="contactForm my-4"
                  />
                  <h6 className="panel panel-default ans">
                    <AnsTwoErrors anstwoErrors={this.state.ans2Errors} />
                  </h6>
                </Form.Group>
              </div>
            </div>
            <Col sm={12}>
              <Row classname="contactfields">
                <Col sm={9}>
                  <p
                    style={{
                      fontSize: '10px',
                      color: '#AAA',
                      fontWeight: '500',
                      position: 'absolute',
                      left: '0'
                    }}
                  >
                    * fields marked with an asterisk (*) are required to fullfil
                    the form. failing to complete any of those fields will
                    result in a failure to submit your request accompanied by a
                    failure message.
                  </p>
                </Col>
                <Col sm={3}>
                  {' '}
                  <Button
                    onClick={this.submit}
                    type="submit"
                    disabled={!this.state.formValid}
                    className="contactButton"
                  >
                    submit
                  </Button>
                </Col>
              </Row>
            </Col>
          </Form>
        </Col>
        <Col sm={12} lg={3} className="mt-5 contactnote">
          <h6>note:</h6>
          <hr className="contactnote-hr" />
          <p>
            we will be sending you an <br className="d-none d-xl-block" />{' '}
            e-mail shortly with all <br className="d-none d-xl-block" /> the
            details we need to start on <br className="d-none d-xl-block" />{' '}
            your next big project. if <br className="d-none d-xl-block" />{' '}
            you’re in a hurry, you could <br className="d-none d-xl-block" />
            always call us on <br className="d-none d-xl-block" />
            +201123454578 or directly <br className="d-none d-xl-block" />{' '}
            e-mail us on info@lirten.com
          </p>
        </Col>
      </Row>
    );

    return (
      <div className="joinus">
        <Header img={bg} title={title} subTitle={subTitle} Ph={Ph} />

        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          className="py-5"
        >
          <Row className="py-5">
            <Col sm={10} className="mx-auto">
              <Nav variant="pills">
                <Nav.Item className="py-2">
                  <Nav.Link
                    eventKey="first"
                    name="DEVELOPER"
                    onClick={this.handleposition}
                  >
                    DEVELOPER
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                  <Nav.Link
                    eventKey="second"
                    name="SENIOR-DESIGNER"
                    onClick={this.handleposition}
                  >
                    DESIGNER
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                  <Nav.Link
                    eventKey="third"
                    name="JUNIOR-DESIGNER"
                    onClick={this.handleposition}
                  >
                    DESIGNER
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                  <Nav.Link
                    eventKey="fourth"
                    name="BUSINESS"
                    onClick={this.handleposition}
                  >
                    BUSINESS
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12} className="mx-auto px-5">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <Col sm={6} className="mx-auto pt-5">
                      <div className="job">
                        <h2 className="pb-5">A JOB POSITION</h2>

                        <h5 className="pt-3">ABOUT THE JOB</h5>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6} className="mx-auto">
                      <p className="py-5">
                        Explore and study effective UI designs, trends, and best
                        practices when it comes to interactions, animations,
                        layouts, etc.
                        <br />
                        <br /> Create a vision, conceive designs, and
                        consistently meet deadlines and requirements. Design
                        beautiful, intuitive interfaces for web and mobile app
                        interfaces, while adhering to branding and design
                        guidelines. <br />
                        <br />
                        Translate a UX concept from wireframes and sketches into
                        detailed UI design. Development of responsive Frontend
                        designs using tools such as CSS 3 or 4, Sass, HTML5,
                        Bootstrap, JQuery. <br />
                        <br />
                        Creating modern, interactive Frontend components with
                        great usability based on Bootstrap and other frameworks.
                        <br />
                        <br />
                        Creating effective user flow and wireframes and propose
                        new ideas.
                        <br />
                        <br /> Designing websites & mobile application easy and
                        effective to use.
                        <br />
                        Iterate on design in order to evaluate current UX and
                        bring improvement to the look and feel for UX of the
                        product.
                        <br />
                        <br />
                        Ensure the UI Compatibility cross defiant platform and
                        different browsers. <br />
                        <br />
                        Coordinate with the Architect and Senior developers to
                        choose the best control library that should be suitable
                        for the business case.
                      </p>
                    </Col>
                  </Row>
                  {form}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    <Col sm={6} className="mx-auto pt-5">
                      <div className="job">
                        <h2 className="pb-5">A JOB POSITION</h2>

                        <h5 className="pt-3">ABOUT THE JOB</h5>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6} className="mx-auto">
                      <p className="py-5">
                        Explore and study effective UI designs, trends, and best
                        practices when it comes to interactions, animations,
                        layouts, etc.
                        <br />
                        <br /> Create a vision, conceive designs, and
                        consistently meet deadlines and requirements. Design
                        beautiful, intuitive interfaces for web and mobile app
                        interfaces, while adhering to branding and design
                        guidelines. <br />
                        <br />
                        Translate a UX concept from wireframes and sketches into
                        detailed UI design. Development of responsive Frontend
                        designs using tools such as CSS 3 or 4, Sass, HTML5,
                        Bootstrap, JQuery. <br />
                        <br />
                        Creating modern, interactive Frontend components with
                        great usability based on Bootstrap and other frameworks.
                        <br />
                        <br />
                        Creating effective user flow and wireframes and propose
                        new ideas.
                        <br />
                        <br /> Designing websites & mobile application easy and
                        effective to use.
                        <br />
                        Iterate on design in order to evaluate current UX and
                        bring improvement to the look and feel for UX of the
                        product.
                        <br />
                        <br />
                        Ensure the UI Compatibility cross defiant platform and
                        different browsers. <br />
                        <br />
                        Coordinate with the Architect and Senior developers to
                        choose the best control library that should be suitable
                        for the business case.
                      </p>
                    </Col>
                  </Row>{' '}
                  {form}
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    <Col sm={6} className="mx-auto pt-5">
                      <div className="job">
                        <h2 className="pb-5">A JOB POSITION</h2>

                        <h5 className="pt-3">ABOUT THE JOB</h5>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6} className="mx-auto">
                      <p className="py-5">
                        Explore and study effective UI designs, trends, and best
                        practices when it comes to interactions, animations,
                        layouts, etc.
                        <br />
                        <br /> Create a vision, conceive designs, and
                        consistently meet deadlines and requirements. Design
                        beautiful, intuitive interfaces for web and mobile app
                        interfaces, while adhering to branding and design
                        guidelines. <br />
                        <br />
                        Translate a UX concept from wireframes and sketches into
                        detailed UI design. Development of responsive Frontend
                        designs using tools such as CSS 3 or 4, Sass, HTML5,
                        Bootstrap, JQuery. <br />
                        <br />
                        Creating modern, interactive Frontend components with
                        great usability based on Bootstrap and other frameworks.
                        <br />
                        <br />
                        Creating effective user flow and wireframes and propose
                        new ideas.
                        <br />
                        <br /> Designing websites & mobile application easy and
                        effective to use.
                        <br />
                        Iterate on design in order to evaluate current UX and
                        bring improvement to the look and feel for UX of the
                        product.
                        <br />
                        <br />
                        Ensure the UI Compatibility cross defiant platform and
                        different browsers. <br />
                        <br />
                        Coordinate with the Architect and Senior developers to
                        choose the best control library that should be suitable
                        for the business case.
                      </p>
                    </Col>
                  </Row>{' '}
                  {form}
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Row>
                    <Col sm={6} className="mx-auto pt-5">
                      <div className="job">
                        <h2 className="pb-5">A JOB POSITION</h2>

                        <h5 className="pt-3">ABOUT THE JOB</h5>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6} className="mx-auto">
                      <p className="py-5">
                        Explore and study effective UI designs, trends, and best
                        practices when it comes to interactions, animations,
                        layouts, etc.
                        <br />
                        <br /> Create a vision, conceive designs, and
                        consistently meet deadlines and requirements. Design
                        beautiful, intuitive interfaces for web and mobile app
                        interfaces, while adhering to branding and design
                        guidelines. <br />
                        <br />
                        Translate a UX concept from wireframes and sketches into
                        detailed UI design. Development of responsive Frontend
                        designs using tools such as CSS 3 or 4, Sass, HTML5,
                        Bootstrap, JQuery. <br />
                        <br />
                        Creating modern, interactive Frontend components with
                        great usability based on Bootstrap and other frameworks.
                        <br />
                        <br />
                        Creating effective user flow and wireframes and propose
                        new ideas.
                        <br />
                        <br /> Designing websites & mobile application easy and
                        effective to use.
                        <br />
                        Iterate on design in order to evaluate current UX and
                        bring improvement to the look and feel for UX of the
                        product.
                        <br />
                        <br />
                        Ensure the UI Compatibility cross defiant platform and
                        different browsers. <br />
                        <br />
                        Coordinate with the Architect and Senior developers to
                        choose the best control library that should be suitable
                        for the business case.
                      </p>
                    </Col>
                  </Row>{' '}
                  {form}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <Modal className="mt-2" show={this.state.show}>
          <div id="snackbar">Sent Successfully</div>
        </Modal>
      </div>
    );
  }
}
