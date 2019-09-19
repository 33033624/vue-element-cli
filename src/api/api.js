import * as Api from "../utils/ajaxManage";

// 登录接口
export const login = params => Api.postAction("/kssfyz/sys/login", params);
