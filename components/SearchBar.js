import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa'
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl } from 'react-bootstrap'

const doSomething = () => {
    console.log("bastım gardaş.")
}

class SearchBar extends Component {
    render() {
        return (
            <div>
                <div className="search-box">
                    <a className="search-btn" href="#"><FaSearch style={{color:"#B335F7"}}/></a>
                    <input className="search-txt" type="text" name="" placeholder="Type here" />
                </div>

                <style jsx>{`

                .search-box{
                    height: 40px;
                    border-radius: 40px;
                }
                .search-box:hover{
                    background: #2f3640;
                }
                .search-box:hover > .search-txt{
                    padding: 0 6px;
                    width: 85%;
                }
                .search-box:hover > .search-btn{
                    background: white;

                }
                .search-btn{

                    color: #e84118;
                    float: right;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: #2f3640;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .search-txt{
                    display:block;
                    margin: 0 0 0 auto;
                    border: none;
                    background: none;
                    outline: none;
                    padding: 0;
                    color: white;
                    font-size: 16px;
                    transition: 0.4s;
                    line-height: 40px;
                    width: 0px;
                }
                `}</style>
            </div>
        )
    }
}
export default SearchBar