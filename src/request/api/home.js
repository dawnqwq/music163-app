import { service } from '..'

// 获取轮播图数据
export function getBanners() {
  return service({
    method: 'GET',
    url: '/banner?type=2'
  })
}