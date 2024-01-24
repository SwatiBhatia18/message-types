/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DatePicker from 'antd/lib/date-picker'
import Radio from 'antd/lib/radio'
import Button from 'antd/lib/button'
import Rate from 'antd/lib/rate'
import Select from 'antd/lib/select'
import Input from 'antd/lib/input'
import Checkbox from 'antd/lib/checkbox'

import { isEmail, validateField } from '../../../../data/config/utils'

import Buttons from '../../../../components/buttons'
import HtmlText from '../../../../components/HtmlText'

const { RangePicker } = DatePicker

class FormMessageBody extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      currentInput: '',
      selectedValues: props.payload.selectedValues || {},
      detectedErrors: {},
      error: false,
      defaultDisabled: props.payload.defaultDisabled
    }
  }

  deleteDetectedErrors = key => {
    if (this.state.detectedErrors[key]) {
      const {
        [key]: errorKey,
        ...restDetectedErrors
      } = this.state.detectedErrors
      this.setState({ detectedErrors: restDetectedErrors })
    }
  };

  validateSelectedField = item => {
    let hasError = false
    const selectedValue = this.state.selectedValues[item.props.name]
    const isEmpty = (selectedValue.length === 0) && item.props.required
    if (item.type === 'input' && item.props.minLength) {
      if (!Array.isArray(this.state.selectedValues[item.props.name]) && this.state.selectedValues[item.props.name].length < item.props.minLength) {
        hasError = true
        this.setState(prevState => ({
          detectedErrors: {
            ...prevState.detectedErrors,
            [item.props.name]: `Input must be at least ${item.props.minLength} characters`
          }
        }))
      }
    }
    if (isEmpty) {
      hasError = true
      this.setState(prevState => ({
        detectedErrors: {
          ...prevState.detectedErrors,
          [item.props.name]: 'This is a required field'
        }
      }))
    } else if (item.type === 'input' && item.props.type === 'email') {
      if (!isEmail(this.state.selectedValues[item.props.name])) {
        hasError = true
        this.setState(prevState => ({
          detectedErrors: {
            ...prevState.detectedErrors,
            [item.props.name]: 'EmailId is not valid'
          }
        }))
      }
    } else if (item.type === 'input' && item.regexPattern) {
      if (!validateField(this.state.selectedValues[item.props.name], item.regexPattern)) {
        hasError = true
        this.setState(prevState => ({
          detectedErrors: {
            ...prevState.detectedErrors,
            [item.props.name]: 'This field is not valid'
          }
        }))
      }
    }
    return hasError
  };

  handleFormChange = (changedValue, errorKey) => {
    const { payload } = this.props
    this.deleteDetectedErrors(errorKey)
    this.setState(
      prevState => ({
        selectedValues: {
          ...prevState.selectedValues,
          ...changedValue
        }
      }),
      () => {
        if (payload.autoSubmit) this.handleSubmit()
      }
    )
  };

  handleSubmit = () => {
    const { payload } = this.props
    const { selectedValues, detectedErrors } = this.state
    let list = []
    let hasError = Object.keys(detectedErrors).length > 0
    payload.formData.forEach(item => {
      if (selectedValues[item.props.name] !== undefined) {
        const obj = { label: item.displayLabel }
        hasError = this.validateSelectedField(item) || hasError
        if (item.type === 'datePicker') {
          obj.value = moment(selectedValues[item.props.name]).format(
            item.props.format || 'DD-MMM-YYYY'
          )
        } else if (item.type === 'dateRangePicker') {
          obj.value = moment(selectedValues[item.props.name][0])
            .format(item.props.format || 'DD-MMM-YYYY')
            .concat(
              ' : ',
              selectedValues[item.props.name][1].format(
                item.props.format || 'DD-MMM-YYYY'
              )
            )
        } else if (item.type === 'radioGroup' || item.type === 'select') {
          if (Array.isArray(selectedValues[item.props.name])) {
            const selectedLabels = selectedValues[item.props.name].map(selectedValue => {
              const option = item.props.options.find(opt => opt.value === selectedValue)
              return option.label
            })
            obj.value = selectedLabels
          } else {
            const option = item.props.options.find(opt => opt.value === selectedValues[item.props.name])
            obj.value = option.label
          }
        } else if (item.type === 'checkbox') {
          const selectedLabels = []
          const hiddenLabelsIndexes = []
          selectedValues[item.props.name].forEach((selectedValue, index) => {
            const option = item.props.options.find(opt => opt.value === selectedValue)
            if (option) {
              selectedLabels.push(option.label)
              if (option.hideLabel) {
                hiddenLabelsIndexes.push(index)
              }
            }
          })
          obj.value = selectedLabels
          if (hiddenLabelsIndexes.length > 0) { obj.hiddenIndexes = hiddenLabelsIndexes }
        } else {
          obj.value = selectedValues[item.props.name]
        }
        list.push(obj)
      } else if (item.props.required && !detectedErrors[item.props.name]) {
        hasError = true
        this.setState(prevState => ({
          detectedErrors: {
            ...prevState.detectedErrors,
            [item.props.name]: 'This is required field'
          }
        }))
      }
    })

    if (!hasError) {
      const data = {
        list,
        selectedData: this.state.selectedValues,
        relayData: payload.relayData
      }
      // console.log('data', data, detectedErrors)
      this.props.onSubmit(data)
    }
  };

  handleEdit = () => {
    this.setState({
      defaultDisabled: false
    })
  };

  render() {
    const { detectedErrors } = this.state
    const {
      btn_disabled,
      message,
      handleMsgBtnClick,
      btn_hidden,
      default_btn_display_count,
      disabled,
      payload,
      showless,
      showmore
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
        {payload.formData && payload.formData.length > 0 && (
          <React.Fragment>
            {payload.formData.map((item, index) => {
              switch (item.type) {
                case 'datePicker':
                  return (
                    <div className='ori-b-pad-5' key={index}>
                      {item.title && (
                        <p>
                          {item.props.required && <span>*</span>}
                          {item.title}
                        </p>
                      )}
                      <DatePicker
                        size='small'
                        className='ori-full-width'
                        style={{ maxWidth: '150px' }}
                        disabledDate={c =>
                          c &&
                          item.disabledTimestamp && item.beforeDisabledTimestamp
                            ? c.valueOf() > item.disabledTimestamp ||
                              item.beforeDisabledTimestamp > c.valueOf()
                            : c.valueOf() < item.disabledTimestamp
                        }
                        disabled={disabled || this.state.defaultDisabled}
                        {...item.props}
                        value={moment(this.state.selectedValues[item.props.name])}
                        getPopupContainer={() =>
                          document.getElementById('oriAppContainer')
                        }
                        onChange={selectedDate =>
                          this.handleFormChange(
                            { [item.props.name]: selectedDate || undefined },
                            item.props.name
                          )
                        }
                        inputReadOnly
                      />
                      {detectedErrors[item.props.name] && (
                        <p className='ori-font-xs ori-font-danger'>
                          {detectedErrors[item.props.name]}
                        </p>
                      )}
                    </div>
                  )
                case 'dateRangePicker':
                  return (
                    <div className='ori-b-pad-5' key={index}>
                      {item.title && (
                        <p>
                          {item.props.required && <span>*</span>}
                          {item.title}
                        </p>
                      )}
                      <RangePicker
                        size='small'
                        className='ori-full-width'
                        disabled={disabled || this.state.defaultDisabled}
                        {...item.props}
                        disabledDate={c => {
                          if (item.disabledDateRange) {
                            if (
                              item.disabledDateRange[0] &&
                              item.disabledDateRange[1]
                            ) {
                              return !(
                                c &&
                                c < item.disabledDateRange[1] &&
                                c > item.disabledDateRange[0]
                              )
                            }
                            if (item.disabledDateRange[0]) {
                              return c && c < item.disabledDateRange[0]
                            }
                            if (item.disabledDateRange[1]) {
                              return c && c > item.disabledDateRange[1]
                            }
                          }
                          return false
                        }}
                        value={moment(this.state.selectedValues[item.props.name])}
                        getPopupContainer={() =>
                          document.getElementById('oriAppContainer')
                        }
                        onChange={selectedDate =>
                          this.handleFormChange(
                            { [item.props.name]: selectedDate || undefined },
                            item.props.name
                          )
                        }
                        inputReadOnly
                      />
                      {detectedErrors[item.props.name] && (
                        <p className='ori-font-xs ori-font-danger'>
                          {detectedErrors[item.props.name]}
                        </p>
                      )}
                    </div>
                  )
                case 'radioGroup':
                  return (
                    <div className='ori-b-pad-5' key={index}>
                      {item.title && (
                        <p>
                          {item.props.required && <span>*</span>}
                          {item.title}
                        </p>
                      )}
                      <Radio.Group
                        size='small'
                        className={`ori-full-width ${
                          item.vertical ? 'ori-flex-column' : ''
                        }`}
                        disabled={disabled || this.state.defaultDisabled}
                        {...item.props}
                        value={this.state.selectedValues[item.props.name]}
                        onChange={e =>
                          this.handleFormChange(
                            {
                              [item.props.name]: e.target.value
                            },
                            item.props.name
                          )
                        }
                      />
                      {detectedErrors[item.props.name] && (
                        <p className='ori-font-xs ori-font-danger'>
                          {detectedErrors[item.props.name]}
                        </p>
                      )}
                    </div>
                  )
                case 'select':
                  return (
                    <div className='ori-b-pad-5' key={index}>
                      {item.title && (
                        <p>
                          {item.props.required && <span>*</span>}
                          {item.title}
                        </p>
                      )}
                      <Select
                        size='small'
                        className='ori-full-width'
                        getPopupContainer={triggerNode =>
                          triggerNode.parentNode
                        }
                        disabled={disabled || this.state.defaultDisabled}
                        {...item.props}
                        filterOption={(input, option) => (option.label).toLowerCase().includes(input.toLowerCase())}
                        filterSort={(optionA, optionB) => {
                          const currentInput = this.state.currentInput.toLowerCase()
                          const firstOptionInitial = optionA.label.toLowerCase().startsWith(currentInput)
                          const secondOptionInitial = optionB.label.toLowerCase().startsWith(currentInput)
                          return (
                            (firstOptionInitial && !secondOptionInitial) ? -1
                              : (!firstOptionInitial && secondOptionInitial) ? 1
                                : optionA.label.toLowerCase().localeCompare(optionB.label.toLowerCase())
                          )
                        }}
                        onSearch={input => this.setState({ currentInput: input })}
                        value={this.state.selectedValues[item.props.name]}
                        onChange={value =>
                          this.handleFormChange(
                            { [item.props.name]: value },
                            item.props.name
                          )
                        }
                      />
                      {detectedErrors[item.props.name] && (
                        <p className='ori-font-xs ori-font-danger'>
                          {detectedErrors[item.props.name]}
                        </p>
                      )}
                    </div>
                  )
                case 'input':
                  return (
                    <div className='ori-b-pad-5' key={index}>
                      {item.title && (
                        <p>
                          {item.props.required && <span>*</span>}
                          {item.title}
                        </p>
                      )}
                      <Input
                        size='small'
                        className='ori-full-width'
                        disabled={disabled || this.state.defaultDisabled}
                        {...item.props}
                        value={this.state.selectedValues[item.props.name]}
                        onChange={e => {
                          if (item.props.maxLength) {
                            if (e.target.value.length <= item.props.maxLength) {
                              this.handleFormChange(
                                { [item.props.name]: e.target.value },
                                item.props.name
                              )
                            }
                          } else {
                            this.handleFormChange(
                              { [item.props.name]: e.target.value },
                              item.props.name
                            )
                          }
                        }}
                      />
                      {detectedErrors[item.props.name] && (
                        <p className='ori-font-xs ori-font-danger'>
                          {detectedErrors[item.props.name]}
                        </p>
                      )}
                    </div>
                  )
                case 'rating':
                  return (
                    <div className='ori-b-pad-5' key={index}>
                      {item.title && (
                        <p>
                          {item.props.required && <span>*</span>}
                          {item.title}
                        </p>
                      )}
                      <Rate
                        disabled={disabled || this.state.defaultDisabled}
                        {...item.props}
                        value={this.state.selectedValues[item.props.name]}
                        onChange={value =>
                          this.handleFormChange(
                            { [item.props.name]: value },
                            item.props.name
                          )
                        }
                      />
                      {detectedErrors[item.props.name] && (
                        <p className='ori-font-xs ori-font-danger'>
                          {detectedErrors[item.props.name]}
                        </p>
                      )}
                    </div>
                  )
                case 'checkbox':
                  return (
                    <div className='ori-b-pad-5 ori-full-width' key={index}>
                      {item.title && (
                        <p>
                          {item.props.required && <span>*</span>}
                          {item.title}
                        </p>
                      )}
                      {item.props.options && item.props.options.length > 0 && (
                        <div className='ori-mt-checkboxWithMediaContainer'>
                          <Checkbox.Group
                            className='ori-full-width'
                            disabled={disabled || this.state.defaultDisabled}
                            value={this.state.selectedValues[item.props.name]}
                            options={item.props.options.map(option => ({
                              ...option,
                              label: <span dangerouslySetInnerHTML={{ __html: option.label }} />
                            }))}
                            onChange={checked =>
                              this.handleFormChange(
                                {
                                  [item.props.name]: checked
                                },
                                item.props.name
                              )
                            }
                          />
                        </div>
                      )}
                      {detectedErrors[item.props.name] && (
                        <p className='ori-font-xs ori-font-danger'>
                          {detectedErrors[item.props.name]}
                        </p>
                      )}
                    </div>
                  )
                default:
                  return null
              }
            })}
            {this.state.error && (
              <p className='ori-font-xs ori-font-danger'>
                Required field are missing
              </p>
            )}
            {!payload.autoSubmit && (
              <Button
                size='small'
                className='ori-btn-submit'
                disabled={disabled}
                onClick={this.handleSubmit}
              >
                {payload.submitBtnText ? payload.submitBtnText : 'Submit'}
              </Button>
            )}
            {payload.defaultDisabled && (
              <Button
                size='small'
                className='ori-btn-edit'
                disabled={disabled}
                onClick={this.handleEdit}
              >
                {payload.editBtnText ? payload.editBtnText : 'Edit'}
              </Button>
            )}
          </React.Fragment>
        )}
        {!btn_hidden && payload.buttons && payload.buttons.length > 0 && (
          <Buttons
            buttons={payload.buttons}
            display_count={
              payload.btnDisplayCount
                ? payload.btnDisplayCount
                : default_btn_display_count
            }
            message={message}
            btn_disabled={btn_disabled}
            handleMsgBtnClick={handleMsgBtnClick}
            showmore={showmore}
            showless={showless}
          />
        )}
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
  onSubmit: PropTypes.func,
  showmore: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  showless: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

FormMessageBody.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  disabled: false,
  checkbox_disabled: false,
  default_btn_display_count: 4
}

export default FormMessageBody
