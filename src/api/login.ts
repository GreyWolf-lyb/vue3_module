import request from "@/utils/request";
// 登录
export function login(data: any) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

// 登出
export function loginOut(params:any) {
    return request({
        url: '/loginOut',
        method: 'get',
        params
    })
}