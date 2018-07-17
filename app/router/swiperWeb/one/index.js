'use strict'
import React from 'react'
import style from './css.css'
import { Text, App, View, Button, ScrollView } from '../../../component/index'
import { observer, inject } from 'mobx-react'
@inject('store') @observer class One extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <View className={style.box} style={{top:0}} touchStart={(e)=>{this.props.touchStart(e)}} touchEnd={(e)=>{this.props.touchEnd(e)}} touchMove={(e)=>{this.props.touchMove(e)}}>1</View>
    )
  }
}

export default One
