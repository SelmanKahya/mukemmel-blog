import React, { Component } from 'react'

class SideBar extends Component {
  render() {
    return (
      <div className="sidebarContainer" style={{width: this.props.width, marginTop: this.props.marginTop}}>
      <div className="about">
        {/* <div className="cardHeaderAbout">
          <span>About Me</span>
        </div> */}
        <div className="profileImageContainer">
          <img src="./2.jpg" />
        </div>
        <p className="aboutContext">
          Hello. I am Ahmet Dadak. I am a junior computer
          engineering student. I am currently working on
          data science. I am excited to find an opportunity
          to have an internship in that field. Here I write
          about my thoughts about things in life.
              </p>
      </div>
      <div className="featured">
        <div className="cardHeaderFeatured">
          <span >Featured</span>
        </div>
        <div className="widget_most_popular">
          <ul>
            <li>
              <div className="media">
                <img width="150" height="150" src="https://codeless.co/thype/blog/wp-content/uploads/2018/12/Depositphotos_135490180_xl-2015-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" />
              </div>
              <div className="content">
                <h5>
                  <a href="https://codeless.co/thype/blog/?p=2520">How to Use Checklists to Improve Your UX</a>
                </h5>
                <span className="data">
                  <span className="author">by admin</span>
                  <span className="divider"> / </span>December 6, 2018
              </span>
              </div>
            </li>
            <li>
              <div className="media">
                <img width="150" height="150" src="https://codeless.co/thype/blog/wp-content/uploads/2018/12/Depositphotos_135490180_xl-2015-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" />
              </div>
              <div className="content">
                <h5>
                  <a href="https://codeless.co/thype/blog/?p=2520">How to Use Checklists to Improve Your UX</a>
                </h5>
                <span className="data">
                  <span className="author">by admin</span>
                  <span className="divider"> / </span>December 6, 2018
              </span>
              </div>
            </li>
            <li>
              <div className="media">
                <img width="150" height="150" src="https://codeless.co/thype/blog/wp-content/uploads/2018/12/Depositphotos_135490180_xl-2015-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" />
              </div>
              <div className="content">
                <h5>
                  <a href="https://codeless.co/thype/blog/?p=2520">How to Use Checklists to Improve Your UX</a>
                </h5>
                <span className="data">
                  <span className="author">by admin</span>
                  <span className="divider"> / </span>December 6, 2018
              </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mc4wp-form-fields">
      <div className="cardHeaderNewsletter">
          Newsletter Signup
        </div>
        <input type="email" name="EMAIL" placeholder="Your email address" required />
        <input className = "newsbutton" type="submit" value="Subscribe" />
      </div>
      <div  className="coffee">
          <button className="coffeebutton"> Buy me a cup of coffee</button>
      </div>
      <style jsx>{`
              .sidebarContainer{

              }
              .about{
                border-top: 1px solid #eaeaea;
                border-left: 1px solid #eaeaea;
                border-right: 1px solid #eaeaea;
                border-bottom: 1px solid #eaeaea;
                background: #ffffff;
              }
              .cardHeaderAbout{
                text-transform: uppercase;
                font-size: 15px;
                text-align: center;
                padding: 10px 0;
                box-sizing: border-box;
                letter-spacing: 2px;
                color: #5E2C99;
              }

              .profileImageContainer{
                width: 100%;
                box-sizing: border-box;
              }
              .profileImageContainer img{
                border-radius: 50%;
                width: 150px;
                height: 150px;
                vertical-align: middle;
                max-width: 100%;
                border: 0;
                margin: 25px auto;
                text-align: center;
                display: block;
              }
              .aboutContext{
                  display: block;
                  color: #5E2C99;
                  margin-top: 25px;
                  margin-left: 25px;
                  margin-right: 25px;
                  padding-bottom: 25px;
                  font-family: "Noto Sans", Helvetica, Arial, sans-serif;
                  font-size: 16px;
                  font-weight: 400;
                  letter-spacing: 0px;
                  line-height: 1.75;
                  text-transform: none;
                  color: #626264;
              }
              .featured{
                margin-top:60px;
                border-top: 1px solid #eaeaea;
                border-left: 1px solid #eaeaea;
                border-right: 1px solid #eaeaea;
                border-bottom: 1px solid #eaeaea;
                background: #ffffff;
              }
              .cardHeaderFeatured{
                text-transform: uppercase;
                font-size: 15px;
                text-align: center;
                padding: 10px 0;
                box-sizing: border-box;
                letter-spacing: 2px;
                color: #5E2C99;
              }
              .widget_most_popular ul li {
                display: flex;
                flex-wrap: wrap;
                padding: 13px 0;
                align-items: center;
            }
            .widget_most_popular ul{
              margin: 10px;
              padding: 0;
            }
            .widget_most_popular ul li .media img {
              vertical-align: middle;
              margin-right: 10px;
              border-radius: 50%;
              max-width: 100%;
              width: 64px;
              height: 64px;
            }
          .widget_most_popular ul li .content {
            flex: 1;
            width: auto;
        }
          .content a{
            font-family: "Noto Serif", Georgia, serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0px;
    text-transform: none;
            padding-right: 10px;
            text-decoration: none;
            cursor: pointer;
            color:#3a3a3a;
          }
          .content h5 a:hover{

            color:#FF5D40;
          }
          .widget_most_popular ul li .content .data .author{
            color:#3a3a3a;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 1.75;
            text-transform: none;
          }
          .cardHeaderNewsletter{
              text-transform: uppercase;
            font-size: 15px;
            text-align: center;
            padding: 10px 0;
            box-sizing: border-box;
            letter-spacing: 2px;
            color: #5E2C99;

          }
          .mc4wp-form-fields input[type="email"] {
            width: 100%;
        }
        input:not([type="submit"]), select, textarea {
          background-color: #fbfbfb;
      }
      input, textarea, select {
        box-shadow: none;
        border: none;
        font-size: 14px;
        max-width: 100%;
        appearance: none;
    }
    .mc4wp-form-fields{
      margin-top: 60px;
      border-top: 1px solid #eaeaea;
      border-left: 1px solid #eaeaea;
      border-right: 1px solid #eaeaea;
      border-bottom: 1px solid #eaeae;
      background: #ffffff;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .newsbutton{
      color: #ffffff;
      background-color: #5E2C99;
    }
    .coffee{
      margin-top: 60px;

    }
    .coffeebutton{
      color: #492378;
      font-size: 20px;
      border-top: 1px solid #eaeaea;
      border-left: 1px solid #eaeaea;
      border-right: 1px solid #eaeaea;
      border-bottom: 1px solid #eaeaea;
      background: #ffffff;
      width: 100%;
    }
    .coffeebutton:hover{
      color: #8C43E6;
    }

            `}</style>
    </div>
    )
  }
}
export default SideBar
