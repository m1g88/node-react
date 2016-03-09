import React from 'react'
import moment from 'moment'

import {
  PageHeader,
  Col,
  Row,
  Panel,
  Button
} from 'react-bootstrap'
import DatePicker from '../DatePicker.jsx'
import TransactionStore from '../stores/TransactionStores'

export default class Transaction extends React.Component {

  constructor(){
    super()
    //console.log(moment().format('YYY-MM-DD'))
    this.state = {
      dateFrom: moment().format('YYYY-MM-DD'),
      dateTo: moment().format('YYYY-MM-DD')
    }
    this.dateFromHandleChange = this.dateFromHandleChange.bind(this)
    this.dateToHandleChange = this.dateToHandleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // this.setState({
    //   dateTo : moment(new Date(), 'DD/MM/YYYY')
    // })
    // if (!this.props.date) {
    //   this.state.date = new moment()
    // }
  }

  dateFromHandleChange(newDate) {
    return this.setState({dateFrom: newDate})
  }

  dateToHandleChange(newDate) {
    return this.setState({dateTo: newDate})
  }

  handleSubmit(e){
    e.preventDefault()
    let { dateFrom , dateTo } = this.state

    let form =  e.target // this.refs['submitForm'];
    let formStr ={ dateFrom ,  dateTo}
    console.log('im serach',formStr )
  }

  render() {
    const panelHeader = 'Sreach'
    return (
      <section className="panel">
        <header className="panel-heading">
          {panelHeader}
          <span className="tools pull-right"><a href="javascript:;" className="fa fa-chevron-up"></a></span>
        </header>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit} >
            <div className="row">
              <div className="col-md-3">
                  <span className="help-block">From:</span>
              </div>
              <div className="col-md-3">
                <span className="help-block">To:</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                    <DatePicker
                      date={this.state.dateFrom}
                      onchange={this.dateFromHandleChange}/>
                </div>
              </div>
              <div className="col-md-3">
                <div>
                    <DatePicker
                      date={this.state.dateTo}
                      onchange={this.dateToHandleChange}/>
                </div>
              </div>
              <div className="col-md-3">
                <button className="btn btn-default btn-sm" type="submit">Search</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }

  // render() {
  //   const panelHeader = 'Sreach'
  //
  //   return(
  //     <Col xs={12}>
  //       <Panel header={panelHeader}>
  //         <Row>
  //           <Col xs={3}>
  //             <
  //           </Col>
  //           <Col xs={3}>
  //             <DatePicker
  //               date={this.state.dateTo}
  //               onchange={this.dateToHandleChange}/>
  //           </Col>
  //         </Row>
  //         <Row>
  //           <Col xs={3}>
  //             <DatePicker
  //               date={this.state.dateFrom}
  //               onchange={this.dateFromHandleChange}/>
  //           </Col>
  //           <Col xs={3}>
  //             <DatePicker
  //               date={this.state.dateTo}
  //               onchange={this.dateToHandleChange}/>
  //           </Col>
  //         </Row>
  //       </Panel>
  //
  //     </Col>
  //   )
  // }
}
