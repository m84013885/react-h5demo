'use strict'
import React from 'react'
import style from './css.css'
import { observer,inject } from 'mobx-react'

// import Mustparameter from "../../config/mustParameter"
// import sigFunc from "../../config/sig"

@inject('store') @observer class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showHidePlace: 0,
      value: ''
    }
    this.inviteChange = this.inviteChange.bind(this)
  }
  inviteGo (event){
    let code = this.state.value // 输入的邀请码
    if(code!=""){
      let did = serverData.did
      let {source,user_id} = serverData.user_data
      let param = Mustparameter()
      param.code = code
      param.source = source
      param.user_id = user_id
      param.did = did
      let obj = {source,user_id,code,did}
      let SigObj = sigFunc(obj,param)
      let URL="/v1/activity/happyguess/invite?sig="+ SigObj.sig + "&" + SigObj.str;
      let credentials = "same-origin"
      let fetchConf = {
        method: 'post',
        credentials: credentials,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
      }
      this.props.store.showLoad(true);
      fetch(URL,fetchConf)
        .then(res => res.json())
        .then((res)=>{
          if(res.err == 0){
            this.props.store.showTips({
              title:"成功",
              content:"邀请码输入成功"
            })
            this.setState({cardcount:this.state.cardcount+1});
          }
          else {
            this.props.store.showTips({
              title:"错误",
              content:res.err_msg
            })
          }
          this.props.store.showLoad(false);
        })
        // 网络错误
        .catch((err) => {
          this.props.store.showTips({
            title:"错误",
            content:"网络错误，请重试！"
          })
          this.props.store.showLoad(false);
        })
    }
    else {
      this.props.store.showTips({
        title:"错误",
        content:"请输入邀请码"
      })
    }
  }
  inviteChange(event){
    let value = event.target.value
    this.setState({value:value})
  }
  showPlaceHolder(){
    this.setState({showHidePlace:1})
  }
  hidePlaceHolder(){
    this.setState({showHidePlace:0})
  }
  render() {
    return (
      <div className={style.inputBox}>
        <input type="number" className={style.inviteInput} value={this.state.value} onChange={this.inviteChange} onFocus={()=>{this.showPlaceHolder()}} onBlur={()=>{this.hidePlaceHolder()}} placeholder={this.state.showHidePlace==0?"输入邀请码":""}/>
        <button className={style.inviteButton} onClick={()=>{this.inviteGo()}}>确定</button>
      </div>
    )
  }
}

export default Input
