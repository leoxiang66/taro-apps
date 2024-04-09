import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
// app.js
// 请根据需要选择导入的 scss，这里全部导入
import 'taro-icons/scss/MaterialCommunityIcons.scss' // 495KB
import 'taro-icons/scss/MaterialIcons.scss' // 112KB
import 'taro-icons/scss/Ionicons.scss' // 134KB
import 'taro-icons/scss/FontAwesome.scss' // 322KB
import './app.css'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return children
}

export default App
