import React from 'react';
import { Link } from 'react-router';
 

 
class Header extends React.Component {

	
    render() {
        return (
        <header className="header fixed-top clearfix">
	        <div className="brand"><Link to="/home" className="logo"><img src="images/logo.png"/></Link><small>ADMINISTRATOR</small></div>
	        <div className="top-nav clearfix">
	          <ul className="nav pull-right top-menu">
	            <li className="dropdown">
	            	<a data-toggle="dropdown" href="#" className="dropdown-toggle">
	            		<span className="username">{this.props.username}</span><b className="caret"></b>
	            	</a>
	              <ul className="dropdown-menu extended logout">
	                <li><a href="#"><i className="fa fa-suitcase"></i>Profile</a></li>
	                <li><a href="#"><i className="fa fa-cog"></i> Settings</a></li>
	                <li><a href="login.html"><i className="fa fa-key"></i> Log Out</a></li>
	              </ul>
	            </li>
	          </ul>
	        </div>
	    </header>
        );
    }
}
 
export default Header;