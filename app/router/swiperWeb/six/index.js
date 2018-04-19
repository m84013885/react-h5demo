'use strict'
import React from 'react'
import style from './css.css'
import { Text, App, View, Button, ScrollView } from '../../../component/index'
import { observer, inject } from 'mobx-react'
@inject('store') @observer class Six extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      that: props.that
    }
  }
  render () {
    return (
      <View className={style.box} style={{top:100/this.props.store.domNode*5+"%"}} touchStart={(e)=>{this.props.touchStart(e)}} touchEnd={(e)=>{this.props.touchEnd(e)}}>6</View>
    )
  }
}

export default Six
