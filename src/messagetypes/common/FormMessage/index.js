/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'antd/lib/date-picker'
import Button from 'antd/lib/button'

import Buttons from '../../../components/buttons'

class FormMessage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedValues: {}
    }
  }

  handleDatePickerChange = (name, value) => {
    this.setState(prevState => ({
      selectedValues: {
        ...prevState.selectedValues,
        [name]: value || undefined
      }
    }))
  }

  handleSubmit = () => {
    const { payload } = this.props.message
    const data = {
      selectedValues: this.state.selectedValues,
      relayData: payload.relayData
    }
    this.props.onSubmit(data)
  }

  render() {
    const { payload } = this.props.message
    const {
      btn_disabled,
      message,
      handleMsgBtnClick,
      btn_hidden,
      default_btn_display_count,
      disabled
    } = this.props

    return (
      <div className='ori-word-break ori-mt-FormMessageContainer'>
        {
          payload.title &&
          <p className='ori-no-t-mrgn ori-b-mrgn-5 ori-font-bold ori-capitalize-first title'>{payload.title}
          </p>
        }
        {
          payload.formData && payload.formData.length > 0 &&
          <React.Fragment>
            {
              payload.formData.map((item, index) => {
                switch (item.type) {
                  case 'datePicker':
                    return (
                      <div className='ori-b-pad-10' key={index}>
                        {
                          item.title &&
                          <p>{item.title}</p>
                        }
                        <DatePicker
                          size='small'
                          className='ori-full-width'
                          style={{ maxWidth: '150px' }}
                          disabledDate={c => c && item.disabledTimestamp && (c.valueOf() < item.disabledTimestamp)}
                          {...item.props}
                          disabled={disabled}
                          value={this.state.selectedValues[item.props.name]}
                          onChange={(...arg) => this.handleDatePickerChange(item.props.name, ...arg)}
                        />
                      </div>
                    )
                  case 'radio':
                    return 'radio group'
                  default:
                    return null
                }
              })
            }
            <Button
              size='small'
              className='ori-btn-submit'
              disabled={disabled}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </React.Fragment>
        }
        {
          !btn_hidden && payload.buttons && payload.buttons.length > 0 &&
          <Buttons
            buttons={payload.buttons}
            display_count={payload.btnDisplayCount ? payload.btnDisplayCount : default_btn_display_count}
            message={message}
            btn_disabled={btn_disabled}
            handleMsgBtnClick={handleMsgBtnClick}
          />
        }
      </div>
    )
  }
}

FormMessage.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  onSubmit: PropTypes.func
}

FormMessage.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  disabled: false,
  checkbox_disabled: false,
  default_btn_display_count: 4
}

export { FormMessage }
