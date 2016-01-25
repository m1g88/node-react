import React from 'react';
import PageHeading from './subComponents/PageHeading.jsx';
import serialize from 'form-serialize';
import { Button } from 'react-bootstrap';
 
class Dashboard extends React.Component {


	constructor() {
	   super();
       // this.handleChange = this.handleChange.bind(this);
       //this.state = { user : props.defaultUser, message: 'Hello!'};
        this.state = { 
            message : '',
            msg2 : '',
            pagename : 'Dashboard',
            postback : ''
        };
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
        url: '/api/test',
        dataType: 'json',
        data: formStr,
        type: 'POST',
        success: function(data) {
            console.log(data);
            this.setState({postback : data.msg});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(url, status, err.toString());
        }.bind(this)

      })
  }


  handleChange(event) {
          // console.log(event.target.value)
          // console.log(this.refs['message'].value);
          this.setState
          (
              { 
                message:  this.refs['message'].value.trim(),
                msg2:  this.refs['msg2'].value.trim()
              }
          );
          //this.refs['inStockOnlyInput'].checked
     
  }

  rawMarkup(){
    return { __html: marked(this.state.value, {sanitize: true}) };
  }
    
    
  render() {
     let postback = [];
     postback.push(<label>{this.state.postback}</label>);

      return (
        <div>
          <PageHeading pagename={this.state.pagename} />

          <form className="form" onSubmit={this.handleSubmit.bind(this)} >
              <div className="form-group">
                <input type="text" className="form-control" name="message" value={this.state.m}/>
                  
                <input type="text" className="form-control" name="message" value={this.state.ml}/>
                
              </div>
              <Button bsStyle="success" bsSize="small" type="submit">Submit</Button>
              
          </form>
          {postback}
        </div>
      )
  }

}

export default Dashboard;


/* <div className="">
                <form className="" onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group">
                    <input type="text" className="form-control" ref="message"
                        value={this.state.message} onChange={this.handleChange.bind(this)} />
                    <input type="text" className="form-control" ref="msg2"
                        value={this.state.msg2} onChange={this.handleChange.bind(this)} />
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
          */