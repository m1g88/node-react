import React from 'react'; 
import serialize from 'form-serialize';

export default class Login extends React.Component {

	constructor() {
		super();
	}
	

	handleSubmit(e) {
	  e.preventDefault();

	  let form =  e.target; // this.refs['submitForm'];
	  let formStr = serialize(form);
	  // console.log(formObj)
	  //let message = this.state.message;
	  //alert(message +' '+ this.state.msg2);
	  //let data = { message : message }
	  $.ajax({
	    url: '/login',
	    dataType: 'json',
	    data: formStr,
	    type: 'POST',
	    success: function(data) {
	        //console.log(data.msg);
	        this.setState({postback : data.msg});
	    }.bind(this)
	  }).done(window.reload);
	}

    render() {
        return (
            <div className="login-body">
            	<div className="container">
			        <div className="brand"><a href="index.html" className="logo"><img src="images/logo.png" /></a>
			          	<div className="btn-group pull-right"><a href="#" className="btn active">TH</a><a href="#" className="btn">EN</a></div>
			        </div>
		        </div>
		        <form action="/login" method="post" className="form-signin" onSubmit={this.handleSubmit.bind(this)}>
		          <h2 className="form-signin-heading">ระบบจัดการธุรการสำหรับร้านค้า</h2>
		          <div className="login-wrap">
		            <div className="user-login-info">
		              <input type="text" placeholder="ชื่อผู้ใช้" autofocus="" name="username" className="form-control" value="mic@paysbuy.com" />
		              <input type="password" placeholder="รหัสผ่าน" name="password" className="form-control" value="1234" />
		              <div className="text-right"><a data-toggle="modal" href="#myModal"><small>ลืมรหัสผ่าน?</small></a></div>
		            </div>
		            <button type="submit" className="btn btn-lg btn-login btn-block">เข้าสู่ระบบ</button>
		            <div className="action clearfix"></div>
		          </div>
		        </form>
		        <div className="register">สำหรับร้านค้าที่ยังไม่มีบัญชีเพย์สบาย:<a href="#"> สมัครสมาชิก</a>
					<div id="myModal" aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" className="modal fade">
						<div className="modal-dialog">
						  <div className="modal-content">
						    <div className="modal-header">
						      <button type="button" data-dismiss="modal" aria-hidden="true" className="close">×</button>
						      <h4 className="modal-title">Forgot Password ?</h4>
						    </div>
						    <div className="modal-body">
						      <p>Enter your e-mail address below to reset your password.</p>
						      <input type="text" name="email" placeholder="Email" autocomplete="off" className="form-control placeholder-no-fix" />
						    </div>
						    <div className="modal-footer">
						      <button data-dismiss="modal" type="button" className="btn btn-default">Cancel</button>
						      <button type="button" className="btn btn-success">Submit</button>
						    </div>
						  </div>
						</div>
					</div> 
				</div>
            </div>
        )
    }
}