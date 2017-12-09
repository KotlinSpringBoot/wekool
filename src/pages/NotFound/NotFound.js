import React from 'react'

export default class NotFound extends React.Component {

  render() {
    return <div className="NotFound">
      <p>{`页面地址无效：${this.props.location.pathname}`}</p>
      <p>
        <a href="./">回到首页</a>
      </p>
    </div>
  }
}

