'use strict'
import React from 'react'
import style from './css.css'
import { Text, App, View, Button, ScrollView } from '../../../component/index'
import { observer, inject } from 'mobx-react'
@inject('store') @observer class Two extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      that: props.that
    }
  }
  render () {
    return (
      <View className={style.box}>2</View>
    )
  }
}

export default Two