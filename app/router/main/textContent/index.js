'use strict'
import React from 'react'
import style from './css.css'
// import {scrollAnimate} from './animate'
import { Text, App, View, Button, ScrollView } from '../../../component/index'
import { observer, inject } from 'mobx-react'
@inject('store') @observer class Rule extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <View>
        <div className={style.activeText}>
            <div className={style.activeTitle}>活动规则</div>
            <div className={style.activeLine}></div>
              {str.map((content, idx) => <div key={idx}>{content}</div>)}
        </div>
        <div className={style.state}>本活动最终解释权归本平台所有</div>
      </View>
    )
  }
}

export default Rule
