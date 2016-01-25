
import React from 'react'
import { Link } from 'react-router'
//import { Button } from 'react-bootstrap'
import Navbar from './Navbar.jsx'
import SideMenu from './SideMenu.jsx'
import Header from './Header.jsx'
import Login from './Login/Login.jsx'
//import fetch from 'node-fetch'
//import MainAdmin from './Admin/MainAdmin.jsx'
 
export default class App extends React.Component {
    
    constructor() {
        super();
        // this.handleChange = this.handleChange.bind(this);
        //this.state = { user : props.defaultUser, message: 'Hello!'};
      
        this.state = { 
            username : '',
            msg2 : ''
        }

    }

    componentDidMount(){
        
        $.ajax({
            url: 'api/user',
            contentType: 'application/json',
            dataType: 'json',
            type: 'GET',
            // beforeSend: function(xhr) {
            //     // Set the CSRF Token in the header for security
            //     var token = $('meta[name="csrf-token"]').attr('content');
            //     if (token) xhr.setRequestHeader('X-CSRF-Token', token);
            // },
            //data:  JSON.stringify( _.omit(opts, 'method') ),
            success: function(res, status, xhr){
                this.setState({ username : res.username })
                //console.log(xhr.getResponseHeader())
            }.bind(this)
        });

        // $.get('/user', function(data) {
        //     //console.log(data.username)
        //     this.setState({ username : data.username })
        // }.bind(this));

    }

    render() {

       
        if (this.state.username == '') {
            return(
                <p> loading . . . . </p>
            )
        } 
        
        return (
        <section id="container">
        <Header username={this.state.username}/>
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

 

 /*<div id="page-wrapper">
                <div className="container-fluid">
                {this.props.children}
                </div>
            </div>*/