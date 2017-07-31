/**
 * Created by zhengxiuming on 2017/6/21.
 */
import request from '../utils/request';

export function login(values) {
  console.log("111111111",JSON.stringify(values));
  return request(`/Mobile/Login/user_login`,{
    method:'POST',
    headers: {
      'Accept': 'application/json'
    },
    body:JSON.stringify(values)
  });
}
