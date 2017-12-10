import React from 'react'
import Topnavbar from "../../components/topnavbar/Topnavbar";
import Footer from "../../components/footer/Footer";
import './NotFound.less'

const Button = require('uxcore-button');

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Topnavbar/>
        <div className="NotFound">
          <div className='notfound-home'>
            <p>{`页面地址无效：${this.props.location.pathname}`}</p>
            <p>
              <a href="./"><Button type="outline" size="large">回到首页</Button></a>
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

