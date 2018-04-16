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
          <One touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}}/>
          <Two />
          <Three/>
        </App></Provider>
    )
  }
}
export default Index

