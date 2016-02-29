import React from 'react'
import HomeStore from '../stores/HomeStores'
import { getDataSource } from '../actions/HomeActions'


class TebleTest extends React.Component {

  componentDidMount() {
    const { datateble } = this.refs
    $(datateble).DataTable({
      data: this.props.dataSource
    })
  }

  render() {
    //let username = this.props.dataSource || `loading . . . `

    return (
      <div>
        <table ref="datateble">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Extn.</th>
                  <th>Start date</th>
                  <th>Salary</th>
              </tr>
          </thead>
          <tfoot>
              <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Extn.</th>
                  <th>Start date</th>
                  <th>Salary</th>
              </tr>
          </tfoot>
        </table>
      </div>
    )
  }

}


class Home extends React.Component {

  constructor(){
    super()
    this.state = {
      dataSource: []
    }
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    getDataSource()
    HomeStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    HomeStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    
    this.setState(
      {
        dataSource: HomeStore.getAll()
      })
  }


  render() {
    let TableTest = ``
    let dateSource = this.state.dataSource
    if (dateSource.length <= 0) {
      TableTest = `loading ..`
    }else{
      TableTest = <TebleTest dataSource={this.state.dataSource} />
    }


    return (
        <div className="row">
          { TableTest }
          <h1> Paynow ! </h1>
        </div>
    )
  }

}

export default Home;
