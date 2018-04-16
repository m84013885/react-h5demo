'use strict'
import React from 'react'
import { Text, App, View, Button, ScrollView } from '../../component/index'
import style from './css.css'
import stores from '../stores'
import { Provider } from 'mobx-react' // 供应stores

import Rule from './rule'
import Content from './content'
import ShareBox from './shareBox'
import Input from './input'
import TextContent from './TextContent'

class Index extends React.Component {

  constructor (props) {
    super(props)
    this.refCb = this.refCb.bind(this)
  }
  refCb (instance) {
    this.setState({ box: instance })
  }
  render () {
    return (
      <Provider {...stores}>
        <App noSysScroll={true}>
          <ScrollView className={style.box} direction={'column'} getRef={this.refCb} getScrollControl={(res) => { this.setScrollControl = res }} scrollbars={false} bounce={false}>
            <Rule that={this}/>
            <View className={style.banner}>
              <View className={style.goLive}></View>
            </View>
            <Content/>
            <Input/>
            <TextContent/>
          </ScrollView>
          <ShareBox/>
        </App>      
      </Provider>

    )
  }
}
export default Index

