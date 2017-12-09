import Refast, {LogicRender} from 'refast';
import {Message, Dialog, EmptyData} from 'uxcore';
import {assign} from 'lodash';
import {isDev} from 'variables';
import DB from 'db';
import './app.less';

import {hashHistory, Router, Route, IndexRedirect, Redirect} from "react-router";
import PageHome from "../pages/home/PageHome";
import PageArticle from "../pages/article/PageArticle";
import NotFound from "../pages/NotFound/NotFound";

// This is a Chrome only hack
if (isDev && window.chrome && window.chrome.webstore) {
  // see https://github.com/livereload/livereload-extensions/issues/26
  setInterval(() => {
    document.body.focus();
  }, 200);
}

// Refast 文档请看 https://recore.github.io/refast-docs/
Refast.use('fn', {
  message: Message,
  dialog: Dialog,
  DB,
});

const Loading = () => <div className="kuma-loading"/>;
const Empty = EmptyData || (() => <div>暂无数据</div>);

// 修改 LogicRender 增加默认配置
// 用来自定义Loading和Empty的样式
assign(LogicRender.defaultProps, {Empty, Loading});

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRedirect to="home"/>
      <Route path="home" component={PageHome}/>
      <Route path="article" component={PageArticle}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
), document.getElementById('App'))
