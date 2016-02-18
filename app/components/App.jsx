
import React from 'react'
//  import { Link } from 'react-router'
//  import { Button } from 'react-bootstrap'
//  import Navbar from './Navbar.jsx'
import SideMenu from './SideMenu.jsx'
import Header from './Header.jsx'
//  import Login from './Login/Login.jsx'
import AppStore from '../stores/AppStores'
import { getUserProfiles } from '../actions/AppActions'
//  import fetch from 'node-fetch'
//  import MainAdmin from './Admin/MainAdmin.jsx'

export default class App extends React.Component {

    constructor() {
      super();
      this.state = {
        userProfiles: ``,
      };
      //getUserProfiles()
      this._onChange = this._onChange.bind(this)
    }
    /**
    * @listens {AppStore} change event
    */
    componentDidMount() {
      getUserProfiles()
      AppStore.addChangeListener(this._onChange);
    }

    /**
    * clean up event listener
    */
    componentWillUnmount() {
      AppStore.removeChangeListener(this._onChange);
    }

    _onChange() {
      this.setState({ userProfiles: AppStore.getAll() });
    }

    render() {
      // let userProfiles = AppStore.getAll()
      // console.log( this.state.userProfiles )

      if (this.state.userProfiles.username === '') {
        const loading = <p>loading . . . . </p>;
        return loading;
      }

        // console.log(`username is ${this.state.username}`)
      return (
        <section id="container">
        <Header username={this.state.userProfiles.username} />
        <SideMenu/>
            <section id="main-content">
                <section className="wrapper">
                    {this.props.children}
                </section>
            </section>
        </section>

      );
    }

}
