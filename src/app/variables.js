// 这里放置全局的变量
const isDev = __LOCAL__;
const urlPrefix = isDev ? '/mock/' : '/';
const fetchCurrentUserUrl = '/mock/user/currentUser.json';

export default {
  urlPrefix,
  isDev,
  fetchCurrentUserUrl,
    // 这里放置全局的调用的URL
  URLS: {
    query: `${urlPrefix}query/query.json`,
  },
};
