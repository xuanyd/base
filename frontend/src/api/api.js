import axios from 'axios'
let base = 'http://localhost:8081'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

export const requestLogin = params => { return axios.post(`${base}/admin/login`, params).then(res => res.data) }

export const getUserList = params => { return axios.post(`${base}/admin/userlist`, { params: params }) }

export const getUserListPage = params => { return axios.get(`${base}/admin/userlistpage`, { params: params }) }

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }) }

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }) }

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }) }

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }) }
