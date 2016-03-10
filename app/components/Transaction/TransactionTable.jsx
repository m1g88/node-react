import React from 'react'
import is from 'is_js'

function PanelBody (){
  return (
    <div className="panel-body">
      <div className="tab-content">
        <div id="all" className="tab-pane active">
          <table className="table table-hover general-table pui-table transaction">
              <thead>
                <tr>
                  <th className="date">วันที่</th>
                  <th className="time">เวลา</th>
                  <th className="title">รายการ</th>
                  <th className="type">ช่องทาง</th>
                  <th className="text-right">ยอดเรียกเก็บ</th>
                  <th className="text-right">ค่าธรรมเนียม</th>
                  <th className="text-right">รายรับ</th>
                  <th className="text-center">สถานะ</th>
                </tr>
              </thead>
          </table>
        </div>
      </div>
    </div>
  )
}

export default class Transaction extends React.Component {
  constructor(){
    super()
    this.state = {
      transaction: { }
    }
    //console.log(moment().format('YYY-MM-DD')
  }

  renderTable() {
    let panelBody
    if (is.not.empty(this.state.transaction)) {
      panelBody = <PanelBody/>
    }

    return ( panelBody )
  }

  render() {

    let table = this.renderTable()

    return (
      <section className="panel">
        <header className="panel-heading tab-bg-blue">
          <ul className="nav nav-tabs nav-justified">
            <li className="active"><a data-toggle="tab" href="#all" aria-expanded="true">ประวัติการทำรายการ</a></li>
          </ul>
        </header>
        { panelBody }
      </section>
    )
  }
}
