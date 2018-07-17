'use strict'
import React from 'react'
import { Text, App, View, Button, ScrollView } from '../../component/index'
import style from './css.css'
import stores from '../stores'
import { Provider } from 'mobx-react' // 供应stores

import Box from './box'
class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state={

    }

  }
  
  render () {
    return (
      <Provider {...stores}>
        <App noSysScroll={true}>
          <Box/>
        </App></Provider>
    )

  }
}
export default Index

