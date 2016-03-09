import React from 'react'
import moment from 'moment'
import DateTimeField from 'react-bootstrap-datetimepicker'

export default class DatePicker extends React.Component {

  constructor(){
    super()
    this.state = {
      //date: '1990-06-05',
      format: 'YYYY-MM-DD',
      inputFormat: 'DD/MM/YYYY',
      mode: 'date'
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  render() {
    const { format, mode, inputFormat} = this.state
    const { date , handleChange } = this.props
    return(
      <DateTimeField
        dateTime={date}
        format={format}
        viewMode={mode}
        inputFormat={inputFormat}
        onChange={handleChange}
        size={'sm'}
      />
    )
  }
}
