import React, { Component } from 'react'
import { FaCommentAlt, FaHeart, FaShareAlt } from 'react-icons/fa'
//import '../node_modules/font-awesome/css/font-awesome.css'
class Card extends Component {
    render() {
        return (
            <div>
                <div className="card-outer">
                    <div className="card-image-outer">
                    <img className="card-image" src = "./cover.jpg"></img>
                    </div>
                    <div className="card-info">
                        <h4 className="card-entry-title" >
                            Buraya uzunca bir başlık gelecek how to hav tu mav tu
                            bilmem ne bilmem ne
                        </h4>

                        <div className="card-context-info">
                            <h6 className="card-context-date">29 September 2020</h6>
                            <div className="vl"/>
                            <div className="card-feed">
                            <h6 className="card-feed-numbers-comment">120</h6>
                            <i className="fa fa-comment"/>
                            <h6 className="card-feed-numbers-heart">220</h6>
                            <i className="fa fa-heart"/>
                            <i className="fa fa-share-alt"/>
                            </div>
                        </div>
                        <div className="card-article">
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                        </div>
                        <div className="card-minute-read">
                            4 minutes read
                        </div>
                    </div>

                </div>
                <style jsx>{`
                .card-outer{
                  border-radius: 5px;
                  margin-top: 60px;
                  width:320px;
                }
                .card-image-outer{
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    width: 320px;
                    height: 240px;
                    overflow: hidden;
                }
                .card-image{
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    width: 320px;
                    height: 240px;
                    -webkit-transform: scale(1);
                    transform: scale(1);
                    -webkit-transition: .3s ease-in-out;
                    transition: .3s ease-in-out;
                }
                .card-image:hover{
                    opacity: 0.6;
                    cursor: pointer;
                    -webkit-transform: scale(1.1);
                    transform: scale(1.1);
                }
                .card-feed{
                    width: 100%;
                    text-align: justify;
                    display: inline;
                }
                .fa-comment{
                    margin-right: 3%;
                    display: inline-block;
                    height: 20px;
s                }
                .fa-share-alt:hover{
                    color: #FF5D40;
                }
                .fa-share-alt{
                    cursor: pointer;
                    display: inline-block;
                    height: 20px;
                }
                .fa-heart{
                    margin-right: 4%;
                    display: inline-block;
                    height: 20px;
                }
                .card-feed-numbers-heart{
                    margin-right: 1%;
                    color: #567E99;
                    display: inline-block;
                }
                .card-feed-numbers-comment{
                    margin-right:1%;
                    color: #567E99;
                    display: inline-block;
                }
                .card-info{
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    width: 320px;
                    height: 320px;
                    background-color:#435866;
                }
                .card-entry-title {
                    padding-top: 20px;
                    padding-left: 20px;
                    padding-right: 20px;
                    color: white;
                    font-family: "Noto Serif", Georgia, serif;
                    font-size: 23px;
                    font-weight: 700;
                    line-height: 1.2;
                    cursor: pointer;
                }

                .card-context-info{
                    text-align: justify;
                    margin-left: 20px;
                    margin-right: 20px;
                }
                .card-context-date{
                    display: inline;
                    margin-right: 2%;
                    color: #567E99;
                }
                .vl {
                    margin-right: 2%;
                    border-left: 1px solid;
                    height: 20px;
                    display: inline;
                }
                .card-entry-title:hover {
                    color: #FF5D40;
                }
                .card-feed-comment-icon{
                    color: white;
                }
                .card-article{
                    padding: 20px;
                    color: white;
                }
                .card-minute-read{
                    margin-right: 20px;
                    float: right;
                    color: #567E99;
                }
            `}</style>
            </div>
        )
    }
}
export default Card;