import React, { Component } from 'react';
import '../../stylesheets/ContactUsCss.css';
import { Container, Form, Col, Row, Button, Modal } from 'react-bootstrap';
import { NameErrors, EmailErrors, NumberErrors } from '../layout/FormErrors';
//axios
import axios from 'axios';
import Header from '../layout/Header';
// let chosenCategory = [];
// import { Link } from 'react-router-dom';
const bg = require('../../images/contact-header.png');
const title = 'CONTACT US';
const subTitle = 'we are always here for you';
const Ph = 'Our team is always ready to create your next big project.';
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.submit = this.submit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.state = {
      selectedFile: null,
      name: '',
      nameError: '',
      number: '',
      submail: '',
      email: '',
      message: '',
      nameErrors: { name: '' },
      emailErrors: { email: '' },
      numberErrors: { number: '' },
      emailValid: false,
      nameValid: false,
      numberValid: false,
      formValid: false,
      show2: false
      // category: ['Code Service', 'Design Service', 'Management Service'],
    };
  }
  handleShow() {
    this.setState({ show: true });
  }
  // onChoosetype = e => {
  //   e.preventDefault();
  //   chosenCategory = e.target.value;
  //   // chosencategory = e.target.value;
  //   console.log(chosenCategory);
  // };
  handleSubscribe = e => {
    e.preventDefault();
    const request = {
      email: this.state.submail
    };
    if (this.state.submail === '') {
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
  };
  submit(e) {
    e.preventDefault();
    const request = {
      email: this.state.email,
      name: this.state.name,
      number: this.state.number,
      message: this.state.message
    };
    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.number === ''
    ) {
      // alert('da5al l hagat y hiwan');
      this.setState({ show2: true });
    } else {
      axios
        .post('api/requests/contact', request)
        .then(
          this.setState({
            show: true,
            name: '',
            number: '',
            email: '',
            message: '',
            // chosenCategory: '',
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
  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };
  handlemessage = e => {
    this.setState({ message: e.target.value });
    console.log(e.target.value);
  };
  handlesubmail = e => {
    this.setState({ submail: e.target.value });
    console.log(e.target.value);
  };
  validateField(fieldName, value) {
    let nameValidationErrors = this.state.nameErrors;
    let emailValidationErrors = this.state.emailErrors;
    let numberValidationErrors = this.state.numberErrors;
    let emailValid = this.state.emailValid;
    let numberValid = this.state.numberValid;
    let nameValid = this.state.nameValid;
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
      default:
        break;
    }
    this.setState(
      {
        nameErrors: nameValidationErrors,
        emailErrors: emailValidationErrors,
        numberErrors: numberValidationErrors,
        emailValid: emailValid,
        numberValid: numberValid,
        nameValid: nameValid
      },
      this.validateForm
    );
  }
  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid && this.state.numberValid && this.state.nameValid
    });
  }
  errorClass(error) {
    if (error) {
      return error.length === 0 ? '' : 'has-error';
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="contactus">
        {' '}
        <Header img={bg} title={title} subTitle={subTitle} Ph={Ph} />
        <Container className="contactsections">
          <Row>
            <Col md={2}></Col>
            <Col sm={12} md={9} className="ml-4">
              {' '}
              <Row>
                <Col sm={1} classname="slashredycontact">
                  {' '}
                  <img
                    alt="contactvector"
                    src={require('../../images/contactvector.png')}
                  />
                </Col>
                <Col sm={8}>
                  {' '}
                  <h2 className="mt-4 ml-4">
                    ready for your next
                    <br className="d-none d-xl-block" /> big idea?
                  </h2>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={2}></Col>
            <Col sm={12} md={7}>
              <Form
                onSubmit={this.handleSubmit}
                noValidate
                className="offset-lg-2"
              >
                <Container>
                  {' '}
                  <p style={{ fontWeight: '500' }}>Get in touch!</p>
                  <Form.Group>
                    <Form.Control
                      noValidate
                      required
                      type="text"
                      onChange={this.handleUserInput}
                      value={this.state.name}
                      name="name"
                      placeholder="Name*"
                      className="contactForm my-4"
                    />
                    <h6
                      className="panel panel-default"
                      style={{ color: 'red' }}
                    >
                      <NameErrors nameErrors={this.state.nameErrors} />
                    </h6>{' '}
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
                    />{' '}
                    <h6
                      className="panel panel-default"
                      style={{ color: 'red' }}
                    >
                      <EmailErrors emailErrors={this.state.emailErrors} />
                    </h6>
                  </Form.Group>{' '}
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
                    />{' '}
                    <h6
                      className="panel panel-default"
                      style={{ color: 'red' }}
                    >
                      <NumberErrors numberErrors={this.state.numberErrors} />
                    </h6>
                  </Form.Group>
                  {/* <select
                    className="browser-default"
                    value={this.state.category.value}
                    onChange={this.onChoosetype}
                    name={this.state.category.name}
                  >
                    <option selected disabled>
                      Category
                    </option>
                    {this.state.category.map(info => (
                      <option value={info} key={info._id}>
                        {' '}
                        {info}{' '}
                      </option>
                    ))}
                  </select> */}
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      placeholder="Message..."
                      as="textarea"
                      rows="4"
                      onChange={this.handlemessage}
                      value={this.state.message}
                      name="message"
                      type="text"
                      className="contactForm my-4"
                    />
                  </Form.Group>
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
                          * fields marked with an asterisk (*) are required to
                          fullfil the form. failing to complete any of those
                          fields will result in a failure to submit your request
                          accompanied by a failure message.
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
                </Container>
              </Form>
            </Col>
            <Col sm={12} md={3} className="mt-5 contactnote">
              <h6>note:</h6>
              <hr className="contactnote-hr" />
              <p>
                we will be sending you an <br className="d-none d-xl-block" />{' '}
                e-mail shortly with all <br className="d-none d-xl-block" /> the
                details we need to start on <br className="d-none d-xl-block" />{' '}
                your next big project. if <br className="d-none d-xl-block" />{' '}
                you’re in a hurry, you could{' '}
                <br className="d-none d-xl-block" />
                always call us on <br className="d-none d-xl-block" />
                +201123454578 or directly <br className="d-none d-xl-block" />{' '}
                e-mail us on info@lirten.com
              </p>
            </Col>
          </Row>
          ​
          <Row>
            <Col md={2}></Col>
            <Col sm={12} md={9} className="ml-4">
              {' '}
              <Row>
                <Col sm={1}></Col>
                <Col sm={8}>
                  {' '}
                  <h2 className="mt-4 joinsubsc">
                    join our <br className="d-none d-xl-block" />
                    newsletter
                  </h2>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={2}></Col>
            <Col sm={12} md={7}>
              <Form
                onSubmit={this.handleSubmit}
                noValidate
                className="offset-lg-2"
              >
                <Container>
                  {' '}
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
                  <div className=" text-right ">
                    <Button
                      type="submit "
                      className="subscribebtn"
                      onClick={this.handleSubscribe}
                    >
                      Subscribe
                    </Button>
                  </div>
                </Container>
              </Form>
            </Col>{' '}
            <Modal className="mt-2" show={this.state.show}>
              <div id="snackbar">Sent Successfully</div>
            </Modal>
          </Row>
        </Container>
        <div className="pt-5 text-center mymap mt-5 mb-5">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4971290992444!2d31.265093314956008!3d29.965139981911232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458392854707ed9%3A0x5e1ab449ca470260!2sThe%20Co-working%20Hub!5e0!3m2!1sen!2seg!4v1572958934930!5m2!1sen!2seg"
          />
        </div>
      </div>
    );
  }
}
