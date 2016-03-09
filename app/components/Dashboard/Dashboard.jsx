import React from 'react'
import { Link } from 'react-router'

import SalesSummary from './SalesSummary.jsx'
import Summary from './Summary.jsx'
//import { DateTimeField } from 'react-bootstrap-datetimepicker'
import DateTimeField from 'react-bootstrap-datetimepicker'
import Tranasction from '../Transaction/index.jsx'

export default class Dashboard extends React.Component {
  constructor(){
    super()
  }
  render() {

    return(
			<div >
				<SalesSummary/>
				<Summary/>
      </div>
  	)
  }
}
