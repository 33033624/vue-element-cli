import axios from "axios";
import Vue from "vue";
import qs from "qs";
import { Notification } from "element-ui";
// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    let token = Vue.ls.get("token");
    if (token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers["X-Access-Token"] = `${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

const err = error => {
  if (error.response) {
    let data = error.response.data;
    switch (error.response.status) {
      case 500:
        Vue.ls.remove("token");
        window.location.reload();
        break;
      case 404:
        Notification({
          title: "系统提示",
          message: "很抱歉，资源未找到!",
          type: "error"
        });
        break;
      case 504:
        Notification({
          title: "系统提示",
          message: "网络超时",
          type: "error"
        });
        break;
      default:
        Notification({
          title: "系统提示",
          message: data.message,
          type: "error"
        });
        break;
    }
  }
  return Promise.reject(error);
};

axios.interceptors.response.use(response => {
  return response;
}, err);

// post
export function postAction(url, parameter) {
  return axios({
    url: url,
    method: "post",
    data: parameter
  });
}

// post method= {post | put}
export function httpAction(url, parameter, method) {
  return axios({
    url: url,
    method: method,
    data: parameter
  });
}

// put
export function putAction(url, parameter) {
  return axios({
    url: url,
    method: "put",
    data: parameter
  });
}

// get
export function getAction(url, parameter) {
  let params = qs.stringify(parameter);
  return axios({
    url: url + `?${params}`,
    method: "get"
  });
  // return axios({
  //   url: url,
  //   method: "get",
  //   params: parameter
  // });
}

// deleteAction
export function deleteAction(url, parameter) {
  return axios({
    url: url,
    method: "delete",
    params: parameter
  });
}

/**
 * 下载文件 用于excel导出
 * @param url
 * @param parameter
 * @returns {*}
 */
export function downFile(url, parameter, name) {
  axios({
    url: url,
    params: parameter,
    method: "get",
    responseType: "blob"
  }).then(res => {
    var oa = document.createElement("a");
    oa.href = URL.createObjectURL(new Blob([res["data"]]));
    oa.download = name;
    document.body.appendChild(oa);
    oa.click();
  });
}
