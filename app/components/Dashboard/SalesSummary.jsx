import React from 'react'

export default class SalesSummary extends React.Component {
  constructor(){
    super()
  }

  componentDidMount(){
    if (Morris.EventEmitter) {
            // Use Morris.Area instead of Morris.Line

      Morris.Area({
        element: 'graph-area',
        padding: 10,
        behaveLikeLine: true,
        gridEnabled: false,
        gridLineColor: '#dddddd',
        axes: true,
        fillOpacity: .8,
        data: [{
          period: '2014-09',
          type1: 100,
          type2: 100,
          type3: 100,
          etc: 100
        }, {
          period: '2014-10',
          type1: 17780,
          type2: 72940,
          type3: 184410,
          etc: 9000
        }, {
          period: '2014-11',
          type1: 49120,
          type2: 129690,
          type3: 35010,
          etc: 12000
        }, {
          period: '2014-12',
          type1: 37670,
          type2: 35970,
          type3: 56890,
          etc: 9000
        }, {
            period: '2015-01',
            type1: 68100,
            type2: 19140,
            type3: 22930,
            etc: 7000
        }, {
            period: '2015-02',
            type1: 56700,
            type2: 42930,
            type3: 18810,
            etc: 12000
        }, {
            period: '2015-03',
            type1: 48200,
            type2: 37950,
            type3: 15880,
            etc: 4000
        }, {
            period: '2015-04',
            type1: 250730,
            type2: 59670,
            type3: 51750,
            etc: 14600
        }, {
            period: '2015-05',
            type1: 106870,
            type2: 344600,
            type3: 220280,
            etc: 28300
        }, {
            period: '2015-06',
            type1: 10000,
            type2: 57130,
            type3: 17910,
            etc: 5000
        }


        ],
        lineColors: ['#ff9900', '#70B806', '#00bce4','#999'],
        xkey: 'period',
        ykeys: ['type1', 'type2', 'type3', 'etc'],
        labels: ['บัตรเครดิต', 'เคาน์เตอร์เซอร์วิส', 'บัตรเงินสด','ช่องทางอื่นๆ'],
        pointSize: 0,
        lineWidth: 0,
        hideHover: 'auto'

      });

    }
  }

    render() {

    	return(

    		<div className="row">
            <div className="col-md-12">
              <section className="panel">
                <header className="panel-heading">ยอดขาย<span className="tools pull-right">
                  <a href="javascript:;" className="fa fa-chevron-up"></a></span>
                </header>
                <div className="panel-body">
                  <div id="graph-area" className="main-chart"></div>
                </div>
              </section>
            </div>
           </div>
    	)

    }
}
