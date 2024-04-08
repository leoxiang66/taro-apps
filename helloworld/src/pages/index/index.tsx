import { View } from '@tarojs/components'
import { Component } from 'react'
import MessageComponent from '@/components/MessageComponent'

class Index extends Component {
  state = {
    msg: 'Hello World!',
  }

  onReady() {
    console.log('onReady')
  }

  render() {
    return <MessageComponent message='hello'></MessageComponent>
  }
}

export default Index