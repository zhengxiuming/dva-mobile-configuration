import request from '../utils/request';

export function fetch() {
  return request(`/Mobile/Index/product_category`,{
    method: 'POST'
  })
}
