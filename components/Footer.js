import React, { Component } from 'react'
import { FaLinkedinIn, FaMediumM, FaGithub, FaKaggle } from 'react-icons/fa'
import { Nav, Form, Button, FormControl } from 'react-bootstrap'
class Footer extends Component {
  constructor() {
    super();
    this.state = {
      isMediumHover: false,
      isLinkedinHover: false,
      isGithubHover: false,
      isKaggleHover: false
    };
  }
  onMouseEnterHandlerMedium= () => {
    this.setState({
      isMediumHover: true
    });
  }

  onMouseLeaveHandlerMedium = () => {
    this.setState({
      isMediumHover: false
    });
  }
  onMouseEnterHandlerLinkedin = () => {
    this.setState({
      isLinkedinHover: true
    });
  }

  onMouseLeaveHandlerLinkedin = () => {
    this.setState({
      isLinkedinHover: false
    });
  }
  onMouseEnterHandlerGithub = () => {
    this.setState({
      isGithubHover: true
    });
  }

  onMouseLeaveHandlerGithub = () => {
    this.setState({
      isGithubHover: false
    });
  }
  onMouseEnterHandlerKaggle = () => {
    this.setState({
      isKaggleHover: true
    });
  }

  onMouseLeaveHandlerKaggle = () => {
    this.setState({
      isKaggleHover: false
    });
  }
  render() {
    return (

      <div className="footer" >
        <h2>
          Ahmet Dadak
            </h2>

        <Nav className=" justify-content-center" style={{ background: "rgb(41,43,44)" }} >
          <Nav.Link href="https://www.medium.com/@ahmetdadak" onMouseEnter={this.onMouseEnterHandlerMedium} onMouseLeave={this.onMouseLeaveHandlerMedium}>
            {this.state.isMediumHover ? <FaMediumM style={{ fill: "#00ab6c" }} /> : <FaMediumM style={{ fill: "#f5f5f5" }} />}
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/ahmetdadak" onMouseEnter={this.onMouseEnterHandlerLinkedin} onMouseLeave={this.onMouseLeaveHandlerLinkedin}>
            {this.state.isLinkedinHover ? <FaLinkedinIn style={{ fill: "#00a0dc" }} /> : <FaLinkedinIn style={{ fill: "#f5f5f5" }} />}
          </Nav.Link>
          <Nav.Link href="https://www.github.com/ahmetdadak" onMouseEnter={this.onMouseEnterHandlerGithub} onMouseLeave={this.onMouseLeaveHandlerGithub}>
            {this.state.isGithubHover ? <FaGithub style={{ fill: "#bd2c00" }} /> : <FaGithub style={{ fill: "#f5f5f5" }} />}
          </Nav.Link>
          {/* <Nav.Link href="https://www.kaggle.com/ahmetdadak" onMouseEnter={this.onMouseEnterHandlerKaggle} onMouseLeave={this.onMouseLeaveHandlerKaggle}>
            {this.state.isKaggleHover ? <FaKaggle style={{ fill: "#20beff" }} /> : <FaKaggle style={{ fill: "#f5f5f5" }} />}
          </Nav.Link> */}
        </Nav>

        <h5>
          Subscribe the email feed to get notification about latest posts
            </h5>
        <Form inline className="justify-content-center" style={{ paddingBottom: "50px" }}>
          <FormControl type="text" placeholder="Your email" className="mr-sm-2" />
          <Button variant="outline-primary">Subscribe</Button>
        </Form>
        <style jsx>{`
              .footer{
                margin-top: 50px;
                text-align:center;
                background-color: rgb(41,43,44);
              }
              .footer h2{
                color: #f7f7f7;
              }
              .footer h5{
                margin-top: 40px;
                color: #f7f7f7;
              }
            `}</style>
      </div>
    )
  }
}

export default Footer;