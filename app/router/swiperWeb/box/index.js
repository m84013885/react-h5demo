'use strict'
import React from 'react'
import style from './css.css'
import { Text, App, View, Button, ScrollView } from '../../../component/index'
import { observer, inject } from 'mobx-react'

import One from './../one'
import Two from './../two'
import Three from './../three'
@inject('store') @observer class Box extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        startY:"",
        swiperHeight:""
    }
    this.swiperBox = this.swiperBox.bind(this)
  }
  tStart(e){
    this.setState({startY:e.changedTouches[0].clientY})
  }
  tEnd(e){
    if(this.state.startY<e.changedTouches[0].clientY){
    //   console.log("向下滑")
      
      this.props.store.swiperTop!=0?this.props.store.autoTop(this.props.store.swiperTop-1):""
    }else{
    //   console.log("向上滑")
      this.props.store.swiperTop!=this.props.store.domNode-1?this.props.store.autoTop(this.props.store.swiperTop+1):""
    }
  }
  swiperBox(dom){
    if(dom){
      this.setState({swiperHeight:dom.childNodes.length})
      this.props.store.resetDom(dom.childNodes.length)
    }
  }
  render () {
    return (
        <View getRef={this.swiperBox} className={style.main} style={{height:this.state.swiperHeight+"00%",bottom:this.props.store.swiperTop+"00%"}}>
            <One touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}}/>
            <Two touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}}/>
            <Three touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}}/>
        </View>
    )
  }
}

export default Box
