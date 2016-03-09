import React from 'react'

class Summary extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      newData : ''
    }
  }

  componentDidMount(){

    // $.get('/api/test', function(result) {
    //   var lastGist = result[0];
    //   if (this.isMounted()) {
    //     this.setState({
    //       newData: lastGist.msg
    //     });
    //   }
    // }.bind(this));

    $.ajax({
      url: '/api/test',
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
      }.bind(this),
      statusCode: {
        500: function(res) {
          //console.log(res.responseJSON.url)
          let url = res.responseJSON.url
          window.location.replace(url)
        }
      }
    })

    let opts = {
      lines: 12, // The number of lines to draw
      angle: 0, // The length of each line
      lineWidth: 0.48, // The line thickness
      pointer: {
        length: 0.6, // The radius of the inner circle
        strokeWidth: 0.03, // The rotation offset
        color: '#59bee3' // Fill color
      },
      limitMax: 'true', // If true, the pointer will not go past the end of the gauge
      percentColors: [[0.0, '#ee3827' ], [0.50, '#ff9900'], [0.8, '#70B806']],
      strokeColor: '#eee', // to see which ones work best for you
      generateGradient: true
    }


    let target = document.getElementById('gauge')// canvas element
    let gauge = new Gauge(target).setOptions(opts) // create sexy gauge!
    gauge.maxValue = 1200 // set max gauge value
    gauge.animationSpeed = 32 // set animation speed (32 is default value)
    gauge.set(1100) // set actual value
    gauge.setTextField(document.getElementById('gauge-textfield')) // set Text value to element
  }


  render() {

    return(

      <div className="row">
          <div className="col-lg-3 col-md-6">
            <section className="panel">
              <div className="panel-body">
                <div className="top-stats-panel">
                  <div className="gauge-canvas">
                    <h4 className="widget-h">รายการที่ชำระเงินเรียบร้อย</h4>
                    <canvas id="gauge" width="160" height="100"></canvas>
                  </div>
                  <ul className="gauge-meta clearfix">
                    <li id="gauge-textfield" className="pull-left gauge-value"></li>
                    <li className="pull-right gauge-title">จาก 1,200 รายการ</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-3 col-md-6">
            <section className="panel">
              <div className="panel-body">
                <div className="top-stats-panel">
                  <h4 className="widget-h">เปอร์เซ็นต์สำเร็จของแต่ละช่องทาง</h4>
                  <div className="bar-stats">
                    <ul className="progress-stat-bar clearfix">
                      <li data-percent="50%"><span className="progress-stat-percent darkblue"></span></li>
                      <li data-percent="80%"><span className="progress-stat-percent orange"></span></li>
                      <li data-percent="96%"><span className="progress-stat-percent blue"></span></li>
                    </ul>
                    <ul className="bar-legend">
                      <li><span className="bar-legend-pointer darkblue"></span> เคาเตอร์เซอร์วิส</li>
                      <li><span className="bar-legend-pointer orange"></span> บัตรเครดิต</li>
                      <li><span className="bar-legend-pointer blue"></span> บัตรเพย์สบาย</li>
                    </ul>
                    <div className="daily-sales-info text-right"><span className="sales-label">ชำระเงินเรียบร้อยรวม &nbsp;</span><span className="sales-count">92%</span></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-3 col-md-6">
            <section className="panel">
              <div className="panel-body">
                <div className="top-stats-panel text-center">
                  <h4 className="widget-h">ยอดคงเหลือทั้งหมด</h4>
                  <h1>82,979.77</h1><a href="transaction.html" className="btn alt grey">ดูรายการเดินบัญชี</a>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-3 col-md-6">
            <section className="panel">
              <div className="panel-body">
                <div className="top-stats-panel text-center">
                  <h4 className="widget-h">ยอดที่ถอนได้</h4>
                  <h1 className="text-blue">42,979.77</h1><a href="#" className="btn alt blue">ถอนเงิน  {this.state.newData} </a>
                </div>
              </div>
            </section>
          </div>

      </div>
    )

  }
}


export default Summary
