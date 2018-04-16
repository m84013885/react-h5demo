'use strict'
// import App from './router/scroll'
// import App from './router/index'
// import App from './router/main/index'
import App from './router/swiperWeb/index'

const main = function () {
  ReactDom.render(<App />, document.getElementById('main'))
}
window.onload = function () {
  main()
}
