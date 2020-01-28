import React, { Component } from 'react'
import { FaLinkedinIn, FaMediumM, FaGithub, FaKaggle} from 'react-icons/fa'
import { Nav} from 'react-bootstrap'
class SocialMediaIcons extends Component {
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
            <div>
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
            </div>
        )
    }
}
export default SocialMediaIcons;