//import { Component } from 'react'
import React from 'react'
import Navbar from '../Navbar.jsx'
import SideMenu from '../SideMenu.jsx'
import Header from '../Header.jsx'

export default class MainAdmin extends React.Component {

  render() {

    return (
      <section id="container">
        <Header username={this.props.username}/>
        <SideMenu/>
        <section id="main-content">
          <section className="wrapper">
            {this.props.children}
          </section>
        </section>
      </section>

    )
  }

}
