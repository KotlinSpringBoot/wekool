import {Component} from 'react';
import './ArticleList.less';

const Table = require('uxcore-table')

export default class ArticleList extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
  }

  render() {
    const me = this;
    // 通过 rowSelection 对象表明需要行选择
    const rowSelection = {
      onSelect(record, selected, selectedRows) {
        console.log(record, selected, selectedRows);
      },
      onSelectAll(selected, selectedRows) {
        console.log(selected, selectedRows);
      },
    };

    const columns = [
      {dataKey: 'id', title: '序号', width: '10%', ordered: true},
      {dataKey: 'title', title: '标题', width: '40%', ordered: true},
      {dataKey: 'author', title: '作者'},
      {
        dataKey: 'field1',
        title: '操作',
        width: '20%',
        type: 'action',
        actions: {
          编辑(rowData, actions) {
            console.log(actions.addEmptyRow);
            me.refs.grid.toggleSubComp(rowData);
          },
          删除(rowData) {
            me.refs.grid.delRow(rowData);
          },
        },
      },
      {
        dataKey: 'field2',
        title: '详情',
        width: '10%',
        render(rowData) {
          return <div><a href="#">查看</a></div>;
        },
      },
    ];

    const fetchUrl = '/mock/article/query.json';

    const renderProps = {
      height: 600,
      actionColumn: {
        edit() {
        },
        del() {
        },
      },
      className: 'kuma-uxtable-split-line',
      fetchParams: {name: 'Jack'},
      showColumnPicker: false,
      showSearch: true,
      emptyText: '暂无数据',
      searchBarPlaceholder: '搜索',
      loadingText: '数据加载中',
      currentPage: 1,
      pageSize: 10,
      pagerSizeOptions: [10, 20, 30, 40],
      queryKeys: [],
      fetchUrl: fetchUrl,
      jsxcolumns: columns,
      processData: function (data) {
        console.log(data)
        return data;
      }
    };

    return (
      <div className="mod-article-list">
        <Table {...renderProps} ref="grid"/>
      </div>
    );
  }
}
