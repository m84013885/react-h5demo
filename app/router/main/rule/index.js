'use strict'
import React from 'react'
import style from './css.css'
import {scrollAnimate} from './animate'
import { Text, App, View, Button, ScrollView } from '../../../component/index'
import { observer, inject } from 'mobx-react'
@inject('store') @observer class Rule extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      that: props.that
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({ that: nextProps.that })
}
  goDown (index) {
    // let box = document.getElementById('main').getElementsByTagName("div")[0].getElementsByTagName("div")[0]
    // let box=this.state.box
    // scrollAnimate(
    //   {
    //     el:box,
    //     targetPosition:POS[index],
    //     duringTime:1000,
    //     onComplete:function(){}
    //   },
    // )
    this.state.that.setScrollControl(700, 500, 1)
  }
  render () {
    return (
      <View className={style.rule_btn} tap={() => { this.goDown() }}></View>
    )
  }
}

export default Rule
