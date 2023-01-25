/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'antd/lib/checkbox'
import Button from 'antd/lib/button'

import styles from './CheckboxWithMediaBody.module.scss'

import Buttons from '../../../../components/buttons'
import CustomPagination from '../../../../components/CustomPagination'
import HtmlText from '../../../../components/HtmlText'

const LIMIT = 8

class CheckboxWithMediaBody extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      checked: [],
      indeterminate: false,
      check_all: false,
      has_more: props.payload.options && props.payload.options.length > LIMIT,
      current: 1,
      filter_options:
        props.payload.options && props.payload.options.length > LIMIT
          ? props.payload.options.slice(0, LIMIT)
          : props.payload.options
    }
  }

  check_all_value = [];

  componentDidMount() {
    const { payload } = this.props
    if (payload.options && payload.options.length > 0) {
      payload.options.forEach(item => {
        this.check_all_value.push(item.value)
      })
    }
  }

  onCheckAllChange = e => {
    this.setState({
      checked: e.target.checked ? this.check_all_value : [],
      indeterminate: false,
      check_all: e.target.checked
    })
  };

  onChange = checked => {
    const { payload } = this.props
    if (
      payload.maxSelectionLimit &&
      payload.maxSelectionLimit > 0 &&
      payload.maxSelectionLimit < payload.options.length
    ) {
      if (checked.length === payload.maxSelectionLimit) {
        this.setState(prev => ({
          filter_options: prev.filter_options.map(item => {
            if (!checked.includes(item.value)) item.disabled = true
            return item
          })
        }))
      } else {
        this.setState(prev => ({
          filter_options: prev.filter_options.map(item => {
            if (item.disabled) item.disabled = false
            return item
          })
        }))
      }
    }
    this.setState({
      checked,
      indeterminate:
        !!checked.length && checked.length < payload.options.length,
      check_all: checked.length === payload.options.length
    })
  };

  onClickSubmit = () => {
    const { payload } = this.props
    const { checked } = this.state
    const selected_list = payload.options.filter(item => {
      return checked.findIndex(value => value === item.value) !== -1
    })

    const data = {
      list: selected_list,
      showLabelOnly: true,
      relayData: payload.relayData
    }
    this.props.onSubmitCheckbox(data)
  };

  onChangePagination = current => {
    const { payload } = this.props
    const { checked } = this.state
    let filterOptions = payload.options.slice(
      (current - 1) * LIMIT,
      current * LIMIT
    )
    if (
      payload.maxSelectionLimit &&
      payload.maxSelectionLimit > 0 &&
      payload.maxSelectionLimit < payload.options.length &&
      checked.length > 0
    ) {
      if (checked.length === payload.maxSelectionLimit) {
        this.setState({
          filter_options: filterOptions.map(item => {
            if (!checked.includes(item.value)) item.disabled = true
            return item
          })
        })
      } else {
        this.setState({
          filter_options: filterOptions.map(item => {
            if (item.disabled) item.disabled = false
            return item
          })
        })
      }
    }

    this.setState({
      current,
      has_more: filterOptions.length === LIMIT,
      filter_options: filterOptions
    })
  };

  render() {
    const {
      checked,
      indeterminate,
      check_all,
      filter_options,
      current,
      has_more
    } = this.state
    const {
      btn_disabled,
      message,
      handleMsgBtnClick,
      btn_hidden,
      checkbox_disabled,
      default_btn_display_count,
      payload,
      showless,
      showmore
    } = this.props

    return (
      <div className='ori-word-break ori-mt-checkboxWithMediaContainer'>
        {payload.imageUrl && (
          <div className={styles.imageContainer}>
            <img src={payload.imageUrl} alt='' className='ori-img-contain' />
          </div>
        )}
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
        {payload.options && payload.options.length > 0 && (
          <div className={styles.checkboxGroupContainer}>
            {!payload.maxSelectionLimit && (
              <div className='ori-b-pad-5 ori-b-mrgn-10 ori-b-border-light'>
                <Checkbox
                  indeterminate={indeterminate}
                  checked={check_all}
                  disabled={checkbox_disabled}
                  onChange={this.onCheckAllChange}
                >
                  Select All
                </Checkbox>
              </div>
            )}
            <Checkbox.Group
              style={{ width: '100%' }}
              className={`ori-mt-checkboxGroup ${
                payload.vertical ? 'ori-flex-column' : ''
              }`}
              value={checked}
              options={filter_options}
              disabled={checkbox_disabled}
              onChange={this.onChange}
            />
            <div className={styles.checkboxFooterContainer}>
              <Button
                size='small'
                className='ori-btn-bubble-inner'
                disabled={checkbox_disabled}
                onClick={this.onClickSubmit}
              >
                {payload.submitBtnText ? payload.submitBtnText : 'Submit'}
              </Button>
              {payload.options.length > LIMIT && (
                <CustomPagination
                  next_disabled={!has_more}
                  current={current}
                  onChange={this.onChangePagination}
                />
              )}
            </div>
          </div>
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

CheckboxWithMediaBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  checkbox_disabled: PropTypes.bool,
  onSubmitCheckbox: PropTypes.func,
  default_btn_display_count: PropTypes.number,
  showmore: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  showless: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

CheckboxWithMediaBody.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  checkbox_disabled: false,
  default_btn_display_count: 4
}

export default CheckboxWithMediaBody
