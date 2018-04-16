'use strict'
import React from 'react'
import style from './css.css'
// import shareFun from './../../config/share'

// import Mustparameter from "./../../config/mustParameter"
// import sigFunc from "./../../config/sig"
// import Cookies from "js-cookie"
import { observer,inject } from 'mobx-react'

@inject('store') @observer class ShareBox extends React.Component {

    constructor(props) {
        super(props)
    }
    hideBox(){
        this.props.store.hideBox()
    }
    shareCLick(str,num){
        let {source,user_id} = serverData.user_data
        let {did,sys,app} = serverData//设备号
        let param = Mustparameter()
        param.source = source
        param.user_id = user_id
        param.did = did
        param.sys = sys
        param.app = app
        let SigObj = sigFunc(param)
        let URL="/v1/activity/happyguess/share?sig="+ SigObj.sig + "&" + SigObj.str;
        let credentials = "same-origin"
        let fetchConf = {
          method: 'post',
          credentials: credentials,
          headers: {'Content-Type': 'application/json'},
        }
        fetch(URL,fetchConf)
        .then(res => res.json())
        .then((res)=>{
          if(res.err == 0){
            // this.props.store.showTips({
            //   title:"成功",
            //   content:"分享成功"
            // })
            let json = {
                method: 'reqNative',
                action: str,//share_qzone//qq空间,share_qq//qq，share_weixin//微信
                modul: 'share',
            }
            let args={
                url: serverData.share.url,
                title:serverData.share.title,
                imgurl:res.key,
                description:serverData.share.content,
                type:"img"
            }
            if(num){
                args.scene=num
            }
            let argsJson=JSON.stringify(args)
            json.args=argsJson
            let jsonString = JSON.stringify(json)
            prompt('__native_call=>' + jsonString)

          }
          else {
            this.props.store.showTips({
              title:"错误",
              content:res.err_msg
            })
          }
        })
        // 网络错误
        .catch((err) => {
            this.props.store.showTips({
            title:"错误",
            content:"网络错误，请重试！"
          })
        })
    }
    copy(){
        let json = {
            method: 'reqNative',
            action: "share_copy",//share_qzone//qq空间,share_qq//qq，share_weixin//微信
            modul: 'share',
        }
        let args={
            key:serverData.user_data.nick_id
        }
        let argsJson=JSON.stringify(args)
        json.args=argsJson
        let jsonString = JSON.stringify(json)
        prompt('__native_call=>' + jsonString)
    }

    render() {
        let showHideBox = this.props.store.showHideBox
        let showHideWrap = this.props.store.showHideWrap
        return (
            <div className={style.activeWrap} style={showHideWrap?{display:'block'}:{display:'none'}}>
                <div className={style.shareFixd} onClick={()=>{this.hideBox()}}></div>
                <div className={style.activeShareText} style={showHideBox?{bottom:'0'}:{bottom:'-6rem'}}>
                    <div className={style.shareTitle}>邀请码</div>
                    <div className={`${style.flexRow} ${style.shareMaCo}`}>
                        <textarea id="foo" className={style.shareMa} readOnly="readonly" value="12345678"></textarea>
                        <div className={style.shareCo} id="co" onClick={()=>{this.copy()}}></div>
                    </div>
                    <div className={`${style.flexRow} ${style.shareIcon}`}>
                        <div className={style.sharePyq} onClick={()=>{this.shareCLick('share_weixin',1)}}></div>
                        <div className={style.shareWx} onClick={()=>{this.shareCLick('share_weixin',2)}}></div>
                        <div className={style.shareQq} onClick={()=>{this.shareCLick('share_qq')}}></div>
                        <div className={style.shareKj} onClick={()=>{this.shareCLick('share_qzone')}}></div>
                    </div>
                    <div className={style.shareText}>邀请好友填写邀请码 可与好友各得复活卡</div>
                    <div className={style.shareTextLast}>每场仅可使用1张复活卡（最后一题不可使用复活卡）</div>
                    
                </div>
            </div>
        )
    }
}

export default ShareBox
