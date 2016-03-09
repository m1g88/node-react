
import React from 'react'
import SideMenu from './SideMenu.jsx'
import Header from './Header.jsx'

import AppStore from '../stores/AppStores'
import { getUserProfiles } from '../actions/AppActions'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      userProfiles: ``
    }
  //getUserProfiles()
    this._onChange = this._onChange.bind(this)
  }
    /**
    * @listens {AppStore} change event
    */
  componentDidMount() {
    getUserProfiles()
    AppStore.addChangeListener(this._onChange)
  }

  /**
  * clean up event listener
  */
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    console.log(`app _onChange`)
    this.setState({ userProfiles: AppStore.getAll() })
  }

  render() {
    // let userProfiles = AppStore.getAll()
    // console.log( this.state.userProfiles )

    if (this.state.userProfiles.email === '') {
      const loading = <p>loading . . . . </p>
      return loading
    }

      // console.log(`username is ${this.state.username}`)
    return (
      <section id="container">
      <Header email={this.state.userProfiles.email} />
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
