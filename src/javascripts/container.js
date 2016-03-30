import React from 'react'

import Header from 'javascripts/header'
import Lirik from 'javascripts/lirik'
import Footer from 'javascripts/footer'

import 'stylesheets/modules/container'

const Container = React.createClass({
  render () {
    return (
      <div className='container'>
        <Header />
        <Lirik />
        <Footer />
      </div>
    )
  }
})

export default Container
