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
                    <input className="search-txt" type="text" name="" placeholder="Type here" />
                    <a className="search-btn" href="#">
                        <FaSearch/>
                    </a>
                </div>

                <style jsx>{`
                .container{
                    margin: 0;
                    padding:;
                    background: #e84118
                }
                .search-box{
                    position: absolute;
                    margin-bottom: 2px;
                    background: #2f3640;
                    height: 40px;
                    border-radius: 40px;
                }
                .search-box:hover > .search-txt{
                    width: 240px;
                    padding: 0 6px;
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
                    transition: 0.4s;

                }
                .search-txt{
                    border: none;
                    background: none;
                    outline: none;
                    float: left;
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