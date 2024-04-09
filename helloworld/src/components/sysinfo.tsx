import Taro from '@tarojs/taro';
const windowWidth = Taro.getSystemInfoSync().windowWidth
const windowHeight = Taro.getSystemInfoSync().windowHeight


export {windowHeight,windowWidth}