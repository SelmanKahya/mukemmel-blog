import React, { Component } from 'react';
import {Link} from '../routes';
import moment from 'moment';

class Card extends Component {
    render() {
        return (
            <div>

                <div className="card-outer" style={{marginTop: this.props.marginTop}}>
                <Link route = {this.props.route}>
                <a>
                    <div className="card-image-outer">
                    <img className="card-image" src = "./cover.jpg"></img>
                    </div>
                    </a>

</Link>
                    <div className="card-info">

                        <h4 className="card-entry-title" >
                            {this.props.title}
                        </h4>
                        <div className="card-context-info">
                            <h6 className="card-context-date">{moment(this.props.date).format('LL')}</h6>
                            <div className="vl"/>

                            <div className="card-feed">
                            <h6 className="card-feed-numbers-comment">120</h6>
                            <i className="fa fa-comment"/>
                            <h6 className="card-feed-numbers-heart">220</h6>
                            <i className="fa fa-heart"/>
                            <i className="fa fa-share-alt"/>
                            </div>
                            <div className="card-minute-read">
                            {this.props.minute} min read
                        </div>
                        </div>
                        <div className="card-article">
                            {this.props.body}
                        </div>

                    </div>
                </div>

                <style jsx>{`
                .card-outer{
                  width:320px;
                }
                .card-image-outer{

                    width: 320px;
                    height: 240px;
                    overflow: hidden;
                }
                .card-image{

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
                    color: #A993BF;
                    display: inline-block;
                }
                .card-feed-numbers-comment{
                    margin-right:1%;
                    color: #A993BF;
                    display: inline-block;
                }
                .card-info{

                    width: 320px;
                    height: auto;
                    background-color: #fbfbfb;
                }
                .card-entry-title {
                    padding-top: 20px;
                    padding-left: 20px;
                    padding-right: 20px;
                    color: #3a3a3a;
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
                    color: #A993BF;
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
                    font-family: "Noto Sans", Helvetica, Arial, sans-serif;
                    font-size: 16px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    line-height: 1.75;
                    text-transform: none;
                    color: #626264;
                }
                .card-minute-read{
                    color: #D697FF;
                }
            `}</style>
            </div>
        )
    }
}
export default Card;