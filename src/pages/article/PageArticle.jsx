import {render} from 'react-dom';
import {Component} from 'refast';
import logic from './logic';
import './PageArticle.less';
import ArticleList from "../../components/article-list/ArticleList";
import Topnavbar from "../../components/topnavbar/Topnavbar";
import Footer from "../../components/footer/Footer";

export default class PageArticle extends Component {

  constructor(props) {
    super(props, logic);
  }

  render() {
    return (
      <div>
        <Topnavbar/>
        <div className="page-home">
          <div className="page-article">
            <ArticleList/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}


