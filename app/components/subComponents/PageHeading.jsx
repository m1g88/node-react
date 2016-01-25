import React from 'react';
import { Link } from 'react-router';

export default class PageHeading extends React.Component {

	constructor() {
		super();
	}
	
    render() {
        return (
            <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            {this.props.pagename} <small>{this.props.pagename} test</small>
                        </h1>
                        <ol className="breadcrumb">
                           <li>
                                <i className="fa fa-dashboard"></i>  <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="active">
                                <i className="fa fa-bar-chart-o"></i> {this.props.pagename}
                            </li>
                        </ol>
                    </div>
            </div>
             
        )
    }

}