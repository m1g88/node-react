
import { Link } from 'react-router';
import React from 'react';

class Navbar extends React.Component {
 
    render() {
        return (
          
            <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/home">Paynow Admin</Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">{this.props.username}</a></li>

                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                           role="button" aria-haspopup="true" aria-expanded="false">Setting <span className="caret"></span></a>
                          <ul className="dropdown-menu">
                            <li><a href="#">Setting 1</a></li>
                            <li><a href="#">Setting 2</a></li>
                            <li><a href="#">Setting 3</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">Special setting</a></li>
                          </ul>
                        </li>
                    </ul>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav side-nav">
                            <li className="active">
                                <Link to="/dashboard"><i className="fa fa-fw fa-dashboard"></i> Dashboard</Link>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            
        );
   }
  
}
 
export default Navbar;

/* <form className="navbar-form navbar-left" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search"/>
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>*/


/*
    <nav className="navbar navbar-inverse navbar-fixed-top" >
         <div className="container">
             <div className="navbar-header">
               
                <Link className="navbar-brand" to="/home">Paynow</Link>
               
            </div>
        </div>
         </nav>
*/