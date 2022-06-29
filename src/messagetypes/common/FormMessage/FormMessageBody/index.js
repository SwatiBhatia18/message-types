/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'antd/lib/date-picker'
import Radio from 'antd/lib/radio'
import Button from 'antd/lib/button'
import Rate from 'antd/lib/rate'

import Buttons from '../../../../components/buttons'
import HtmlText from '../../../../components/HtmlText'

class FormMessageBody extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedValues: props.payload.selectedValues || {},
      error: false
    }
  }

  handleDatePickerChange = (name, value) => {
    this.setState(prevState => ({
      error: false,
      selectedValues: {
        ...prevState.selectedValues,
        [name]: value || undefined
      }
    }))
  }

  handleChange = e => {
    if (e.target.name) {
      this.setState(prevState => ({
        error: false,
        selectedValues: {
          ...prevState.selectedValues,
          [e.target.name]: e.target.value
        }
      }))
    }
  }

  handleFormChange = changedValue => {
    this.setState(prevState => ({
      error: false,
      selectedValues: {
        ...prevState.selectedValues,
        ...changedValue
      }
    }))
  }

  handleSubmit = () => {
    const { payload } = this.props
    const { selectedValues, error } = this.state
    let list = []
    let hasError = error
    payload.formData.forEach(item => {
      if (selectedValues[item.props.name] !== undefined) {
        const obj = { label: item.displayLabel }
        if (item.type === 'datePicker') {
          obj.value = selectedValues[item.props.name].format(item.props.format || 'DD-MMM-YYYY')
        } else if (item.type === 'radioGroup') {
          const option = item.props.options.find(opt => opt.value === selectedValues[item.props.name])
          obj.value = option.label
        } else {
          obj.value = selectedValues[item.props.name]
        }
        list.push(obj)
      } else if (item.props.required && !error) {
        hasError = true
        this.setState({ error: true })
      }
    })
    if (!hasError) {
      const data = {
        list,
        selectedData: this.state.selectedValues,
        relayData: payload.relayData
      }
      this.props.onSubmit(data)
    }
  }

  render() {
    const {
      btn_disabled,
      message,
      handleMsgBtnClick,
      btn_hidden,
      default_btn_display_count,
      disabled,
      payload
    } = this.props

    return (
      <div className='ori-word-break ori-mt-FormMessageContainer'>
        {payload.title && (
          <HtmlText
            textClass='ori-no-t-mrgn ori-no-b-mrgn ori-font-bold ori-capitalize-first title'
            text={payload.title}
            isHtml={payload.containsHtmlTitle}
          />
        )}
        {payload.subtitle && (
          <HtmlText
            textClass='ori-no-b-mrgn ori-no-t-mrgn subtitle'
            text={payload.subtitle}
            isHtml={payload.containsHtmlSubtitle}
          />
        )}
        {
          payload.formData && payload.formData.length > 0 &&
          <React.Fragment>
            {
              payload.formData.map((item, index) => {
                switch (item.type) {
                  case 'datePicker':
                    return (
                      <div className='ori-b-pad-5' key={index}>
                        {
                          item.title &&
                          <p>
                            {
                              item.props.required &&
                              <span>*</span>
                            }
                            {item.title}
                          </p>
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
                          inputReadOnly
                        />
                      </div>
                    )
                  case 'radioGroup':
                    return (
                      <div className='ori-b-pad-5' key={index}>
                        {
                          item.title &&
                          <p>
                            {
                              item.props.required &&
                              <span>*</span>
                            }
                            {item.title}
                          </p>
                        }
                        <Radio.Group
                          size='small'
                          className={`ori-full-width ${item.vertical ? 'ori-flex-column' : ''}`}
                          {...item.props}
                          disabled={disabled}
                          value={this.state.selectedValues[item.props.name]}
                          onChange={this.handleChange}
                        />
                      </div>
                    )
                  case 'rating':
                    return (
                      <div className='ori-b-pad-5' key={index}>
                        {
                          item.title &&
                          <p>
                            {
                              item.props.required &&
                              <span>*</span>
                            }
                            {item.title}
                          </p>
                        }
                        <Rate
                          {...item.props}
                          disabled={disabled}
                          value={this.state.selectedValues[item.props.name]}
                          onChange={value => this.handleFormChange({[item.props.name]: value})}
                        />
                      </div>
                    )
                  default:
                    return null
                }
              })
            }
            {
              this.state.error &&
              <p className='ori-font-xs ori-font-danger'>Required field are missing</p>
            }
            <Button
              size='small'
              className='ori-btn-submit'
              disabled={disabled}
              onClick={this.handleSubmit}
            >
              {payload.submitBtnText ? payload.submitBtnText : 'Submit'}
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

FormMessageBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  onSubmit: PropTypes.func
}

FormMessageBody.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  disabled: false,
  checkbox_disabled: false,
  default_btn_display_count: 4
}

export default FormMessageBody
