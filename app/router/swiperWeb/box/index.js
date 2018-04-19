'use strict'
import React from 'react'
import style from './css.css'
import { Text, App, View, Button, ScrollView } from '../../../component/index'
import { observer, inject } from 'mobx-react'

import One from './../one'
import Two from './../two'
import Three from './../three'
import Four from './../four'
import Five from './../five'
import Six from './../six'
import Seven from './../seven'

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
      let sto= this.props.store
      sto.swiperTop!=0?sto.autoTop(sto.swiperTop-1):""
    }else{
    //   console.log("向上滑")
      let sto= this.props.store
      sto.swiperTop!=sto.domNode-1?sto.autoTop(sto.swiperTop+1):""
    }
  }
  swiperBox(dom){
    if(dom){
      this.setState({swiperHeight:dom.childElementCount})
      this.props.store.resetDom(dom.childElementCount)
    }
  }
  render () {
    return (
        <View getRef={this.swiperBox} className={style.main} style={{height:this.state.swiperHeight+"00%",bottom:this.props.store.swiperTop+"00%"}}>
            <One touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}}/>
            <Two touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}}/>
            <Three touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}}/>
            <Four touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}}/>
            <Five touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}}/>
            <Six touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}}/>
            <Seven touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}}/>
        </View>
    )
  }
}

export default Box
