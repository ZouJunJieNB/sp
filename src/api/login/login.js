import request from '@/api/http'

// 登录方法
export function login(username,password) {
    return request({
      url: '/user/loginUser',
      method: 'post',
      params: {username,password}
    })
}

// 退出登录
export function logout() {
  return request({
    url: '/logout',
    method: 'get',
  })
}