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
import Eight from './../eight'
import Nine from './../nine'
import Ten from './../ten'

@inject('store') @observer class Box extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        boxIndex:0,
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
      this.state.boxIndex!=0?this.setState({boxIndex:this.state.boxIndex-1}):""
      this.state.boxIndex!=0?sto.autoTop(Math.ceil(sto.swiperTop-1+this.state.swiperOut)):sto.autoTop(0)
    }else if(this.state.startY>e.changedTouches[0].clientY){
    //   console.log("向上滑")
      let sto= this.props.store
      this.state.boxIndex!=sto.domNode-1?sto.autoTop(Math.ceil(sto.swiperTop+1-this.state.swiperOut)):sto.autoTop(sto.domNode-1)
      this.state.boxIndex!=sto.domNode-1?this.setState({boxIndex:this.state.boxIndex+1}):""
    }
  }
  tMove(e){
    let sto= this.props.store
    let swiperNow = this.state.boxIndex
    let clientHeight = document.getElementById('main').clientHeight
    this.setState({swiperOut:(this.state.startY-e.changedTouches[0].clientY)/clientHeight})
    if(this.state.startY>e.changedTouches[0].clientY && this.state.boxIndex!=sto.domNode-1){
      let height = (this.state.startY-e.changedTouches[0].clientY)/clientHeight+swiperNow
      sto.autoTop(height)
    }else if(this.state.startY<e.changedTouches[0].clientY && this.state.boxIndex!=0){
      let height = swiperNow-(e.changedTouches[0].clientY-this.state.startY)/clientHeight
      sto.autoTop(height)
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
        <View getRef={this.swiperBox} className={style.main} id={this.state.boxIndex} style={{height:this.state.swiperHeight+"00%",bottom:this.props.store.swiperTop*100+"%"}}>
            <One touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}} touchMove={(e)=>{this.tMove(e)}}/>
            <Two touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}} touchMove={(e)=>{this.tMove(e)}}/>
            <Three touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}} touchMove={(e)=>{this.tMove(e)}}/>
            <Four touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}} touchMove={(e)=>{this.tMove(e)}}/>
            <Five touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}} touchMove={(e)=>{this.tMove(e)}}/>
            <Six touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}} touchMove={(e)=>{this.tMove(e)}}/>
            <Seven touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}} touchMove={(e)=>{this.tMove(e)}}/>
            <Eight touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}} touchMove={(e)=>{this.tMove(e)}}/>
            <Nine touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}} touchMove={(e)=>{this.tMove(e)}}/>
            <Ten touchStart={(e)=>{this.tStart(e)}} touchEnd={(e)=>{this.tEnd(e)}} touchMove={(e)=>{this.tMove(e)}}/>
        </View>
    )
  }
}

export default Box
