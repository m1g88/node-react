import React from 'react';
import { Link } from 'react-router';
 
export default class SideMenu extends React.Component {

	constructor() {
		super();
	}
	
    render() {
        return (
        <aside>
            <div id="sidebar" className="nav-collapse">
              {/* sidebar menu start */}
              <div className="leftside-navigation">
                <ul id="nav-accordion" className="sidebar-menu">
                  <li><Link to="/dashboard" activeClassName="active" ><i className="psb-overview"></i><span>ภาพรวม</span></Link></li>
                  <li><Link to="/about" activeClassName="active"><i className="psb-cart"></i><span>ประวัติการขาย</span></Link></li>
                  <li><Link to="/about" activeClassName="active"><i className="psb-transaction"></i><span>รายการเดินบัญชี</span></Link></li>
                  <li><Link to="/about" activeClassName="active"><i className="psb-store"></i><span>ข้อมูลร้านค้า</span></Link></li>
                  <li><Link to="/abouts" activeClassName="active"><i className="psb-psb"></i><span>ติดต่อเพย์สบาย</span></Link></li>
                </ul>
              </div>
            </div>
        </aside>
            
        )
    }

}
