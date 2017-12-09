import {Component} from 'react';
import './Topnavbar.less';
import {Icon} from "uxcore";

import {Link} from 'react-router'
import WekoolIcon from '../../images/wekool.svg'

const Menu = require('uxcore-menu');
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
window.Menu = Menu;

export default class Topnavbar extends Component {

  static defaultProps = {}

  static propTypes = {}


  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
    }
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div>
        <a href="/" className="logo">
          <WekoolIcon></WekoolIcon>
        </a>
        <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="mail">
            <a href="/#/home">
              <Icon name="shouye">首页</Icon>
            </a>
          </Menu.Item>

          <Menu.Item key="app">
            <a href="/#/article">
              <Icon name="wendang1">文章</Icon>
            </a>
          </Menu.Item>

          <SubMenu title={<span><Icon name="renwufull">分类</Icon></span>}>
            <Menu.Item key="setting:1"><Icon name="right">Kotlin</Icon></Menu.Item>
            <Menu.Item key="setting:2"><Icon name="right">Spring Boot</Icon></Menu.Item>
            <Menu.Item key="setting:3"><Icon name="right">React</Icon></Menu.Item>
            <Menu.Item key="setting:4"><Icon name="right">Node</Icon></Menu.Item>
          </SubMenu>

          <Menu.Item>
            <Icon name="shezhi">设置</Icon>
          </Menu.Item>

          <Menu.Item key="about">
            <a href="#" target=""><Icon name="ren">关于我们</Icon></a>
          </Menu.Item>

        </Menu>
      </div>

    );
  }
}
