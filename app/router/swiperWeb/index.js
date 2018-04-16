'use strict'
import React from 'react'
import { Text, App, View, Button, ScrollView } from '../../component/index'
import style from './css.css'
import stores from '../stores'
import { Provider } from 'mobx-react' // 供应stores

import One from './one'
import Two from './two'
import Three from './three'
class Index extends React.Component {
  constructor (props) {
    super(props)
  }
  tStart(e){
    console.log(e.changedTouches[0].clientY)
  }
  tEnd(e){
    console.log(e.changedTouches[0].clientY)
  }
  render () {
    
    return (
      <Provider {...stores}>
        <App noSysScroll={true}>
          {/* <ScrollView className={style.box} direction={'column'}getScrollControl={(res) => { this.setScrollControl = res }} scrollbars={false} bounce={false} mouseWheel={false}>
            <View className={style.box} tap={() => { this.test() }}></View>
            <View tap={() => { this.test() }}>123</View>
          </ScrollView> */}
          {/* <View className={style.test} touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}}>123</View>
          <View className={style.test}>123</View> */}
          <One touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}}/>
          <Two />
          <Three/>
        </App></Provider>
    )
  }
}
export default Index

