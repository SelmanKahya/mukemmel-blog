import React, { Component } from 'react'
import SearchBar from '../components/SearchBar';
import Link from "next/link";
import auth0 from '../services/auth0';
import SocialMediaIcons from "../components/SocialMediaIcons";



export default class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { isAuthenticated,user } = this.props;
        return (
            <div className="cont">
                <div className="title fixed-top">
                    <div className="head1">
                    <Link href="/"><a className="brand">Ahmet Dadak</a></Link>
                    </div>
                    <div className="head2">
                    <ul className="nav-list">
                        <li><Link href="/"><a className="a-header">Home</a></Link></li>
                        <li><Link href="/about"><a className="a-header">About</a></Link></li>
                        {
                            !isAuthenticated && <li onClick={auth0.login} ><a className="a-header clickable" >Login</a></li>

                        }
                        {
                            isAuthenticated && <li onClick={auth0.logout}><a className="a-header clickable">Logout</a></li>
                        }

                    </ul>
                    </div>
                    <div className="head3">
                    <SearchBar/>
                    </div>
                </div>
                <div className="header-image-div">
                    <img src = "header2.jpg" className="header-image"/>
                    <div className="centered">Ahmet Dadak</div>
                </div>
                <div className="social"><SocialMediaIcons/></div>

{/*
            <Navbar className="fixed-top justify-content-center" bg="dark" variant="dark">
              <Navbar.Brand href="/">Ahmet Dadak</Navbar.Brand>
            </Navbar>

            <Nav className="bg-dark justify-content-center" style={{ paddingTop: "60px", paddingBottom: "5px" }} >
              <Nav.Link className="text-light" href="/">Home</Nav.Link>
              <Nav.Link className="text-light" href="/posts">Posts</Nav.Link>
              <Nav.Link className="text-light" href="about">About</Nav.Link>
              <Nav.Link className="text-light clickable" onClick={auth0.login}>Login</Nav.Link>
              <Nav.Link className="text-light clickable" onClick={auth0.logout}>Logout</Nav.Link>
              <SearchBar />
            </Nav>
            <SocialMediaIcons /> */}
            <style jsx>{`
                .cont{

                }
                .clickable{
                    cursor: pointer;
                }
                .title{
                    background:  rgb(41,43,44);
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                }
                .header-image-div{
                    position: relative;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    font-family: 'Qwigley', cursive;
                    color: #fff;
                    font-size: 100px;
                }
                .header-image{
                    width: 100%;
                    height:300px;
                }
                .social{
                }
                .nav-list{
                    background: rgb(41,43,44);
                    padding: 0;
                    list-style: none;
                    display: table;
                    margin: auto;
                }
                .brand{
                    color: #B335F7;
                    font-size: 20px;
                    text-decoration: none;
                }
                .brand:hover{
                    color: #A21CFF;
                }
                .head1{
                    margin-left:13.5%;
                    float:left;
                    width:33%;
                }
                .head2{
                    float:left;
                    align: center;
                    width:34%;
                }
                .head3{
                    margin-right:13.5%;
                    float:right;
                    width:33%;
                }
                li {
                    display: inline;
                    float: left;
                    margin: 0 10px;
                }
                .a-header:hover{
                    color #9C4AFF;
                }
                .a-header{
                    text-decoration: none;
                    color: #C169FF;
                }
                .header-search{
                    position: fixed;
                    background-color:#292c2f;
                    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.15);
                    padding: 20px 40px;
                    height: 80px;
                    color: #ffffff;
                    box-sizing: border-box;
                }
                .social{
                    marign-top:100px;
                }
                .centered {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

            `}
            </style>
          </div>
        )
    }
}
