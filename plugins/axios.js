import axios from 'axios';

function csrfSafeMethod(method) {
  // these HTTP methods do not require CSRF protection
  return (/^(get|head|options|trace)$/.test(method));
}

function getToken() {
  //temporarily!need to be modified.
  return document.cookie.split('=')[1];
}

axios.defaults.baseURL = 'http://api.gun.yefun.top';
axios.defaults.withCredentials = true;

for (let method in axios.defaults.headers) {
  if (process.browser && !csrfSafeMethod(method) && method !== 'common') {
    axios.defaults.headers[method]['x-csrf-token'] = getToken();
  }
}

//get方法 => 支持服务端渲染
axios.$get = (url, opts, serverRenderCookie) => {
  if (!process.browser) axios.defaults.headers.get['Cookie'] = serverRenderCookie;
  console.log(process.browser, axios.defaults);
  return axios.get(url, opts);    
};

axios.$post = axios.post;


export default axios;
