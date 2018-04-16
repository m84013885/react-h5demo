'use strict'
import React from 'react'
import style from './css.css'
import { observer,inject } from 'mobx-react'
import { Text, App, View, Button, ScrollView } from '../../../component/index'

@inject('store') @observer class Content extends React.Component {
  constructor (props) {
    super(props)
  }
  // 显示分享框
  showBox () {
    this.props.store.showBox()
  }
  // 提取现金按钮
  extract () {
    if ( serverData.app !=2 ) {
      window.location.href = serverData.download;
    } else {
      prompt('__native_call=>' + JSON.stringify({
        method: 'reqNative', // 与app协定的method，必填
        modul: 'jump', // 与app协定的module，必填，你没看错，这个字符是mudul
        action: 'toWithdraw' // 与app协定的action，必填
    }));
    }
  }
  render () {
    return (
      <div className={style.content}>
          
        <div className={style.flexRow}>

          <div className={`${style.block} ${style.flexColumn}`}>
            <div className={`${style.grayFont} ${style.contentFont}`}>奖金</div>
            <div className={`${style.blackFont} ${style.contentFont}`}>1万</div>
          </div>
          <div className={`${style.block} ${style.flexColumn}`}>
            <div className={`${style.grayFont} ${style.contentFont}`}>今天</div>
            <div className={`${style.blackFont} ${style.contentFont}`}>21:00</div>
          </div>

        </div>

        <View className={style.invite} tap={() => { this.showBox() }}>邀请好友，得复活卡</View>

        <div className={style.flexRow}>
        
          <div className={`${style.block} ${style.flexColumn}`}>
            <div className={`${style.grayFont} ${style.contentFont}`}>我的奖金</div>
            <div className={`${style.blackFont} ${style.contentFont}`}>14.5</div>
            {/* <div className={`${style.blackFont} ${style.contentFont}`}>{balance}</div> */}
            <div className={`${style.blueFont} ${style.contentFont}`} onClick={()=>{this.extract()}}>提取现金</div>
          </div>

          <div className={`${style.block} ${style.flexColumn}`}>
            <div className={`${style.grayFont} ${style.contentFont}`}>复活卡</div>
            <div className={`${style.blackFont} ${style.contentFont}`}>3</div>
            {/* <div className={`${style.blackFont} ${style.contentFont}`}>{cardcount}</div> */}
            <div className={`${style.blueFont} ${style.contentFont}`}>&nbsp;</div>
          </div>

        </div>

    </div>
    )
  }
}

export default Content
