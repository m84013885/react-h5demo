'use strict'
import {
  observable,
  action,
  computed
} from 'mobx'

// 请求
class Store {
  @observable scrollViewDOM

  @observable showHideBox = false
  @observable showHideWrap =false
  @action showBox () {
    setTimeout(() => {
      this.showHideBox = true
    }, 50)
    this.showHideWrap = true
  }
  @action hideBox () {
    setTimeout(() => {
      this.showHideWrap = false
    }, 200)
    this.showHideBox = false
  }

  @observable tips
  @action showTips (obj) {
    this.tips = obj
  }
  @action hideTips () {
    this.tips = null
  }

  @observable load
  @action showLoad (bool) {
    this.load = bool
  }
}
const store = new Store()

export default {
  store
}