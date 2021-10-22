/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'antd/lib/checkbox'
import Button from 'antd/lib/button'

import styles from './CheckboxWithMedia.module.scss'

import Buttons from '../../../components/buttons'
import CustomPagination from '../../../components/CustomPagination'

const LIMIT = 8;

class CheckboxWithMedia extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      checked: [],
      indeterminate: false,
      check_all: false,
      has_more: props.message.payload.options && props.message.payload.options.length > LIMIT,
      current: 1,
      filter_options: props.message.payload.options && props.message.payload.options.length > LIMIT ? props.message.payload.options.slice(0, LIMIT) : props.message.payload.options
    }
  }

  check_all_value = []

  componentDidMount() {
    const { payload } = this.props.message
    if (payload.options && payload.options.length > 0) {
      payload.options.forEach(item => {
        this.check_all_value.push(item.value)
      });
    }
  }

  onCheckAllChange = e => {
    this.setState({
      checked: e.target.checked ? this.check_all_value : [],
      indeterminate: false,
      check_all: e.target.checked
    })
  }

  onChange = checked => {
    const { payload } = this.props.message
    this.setState({
      checked,
      indeterminate: !!checked.length && checked.length < payload.options.length,
      check_all: checked.length === payload.options.length
    })
  }

  onClickSubmit = () => {
    const { payload } = this.props.message
    const { checked } = this.state
    const selected_list = payload.options.filter(item => {
      return checked.findIndex(value => value === item.value) !== -1;
    })
    const data = {
      list: selected_list,
      relayData: payload.relayData
    }
    this.props.onSubmitCheckbox(data)
  }

  onChangePagination = current => {
    const { payload } = this.props.message
    const filterOptions = payload.options.slice((current - 1) * LIMIT, current * LIMIT)
    this.setState({
      current,
      has_more: filterOptions.length === LIMIT,
      filter_options: filterOptions
    })
  }

  render() {
    const { checked, indeterminate, check_all, filter_options, current, has_more } = this.state
    const { payload } = this.props.message
    const {
      btn_disabled,
      message,
      handleMsgBtnClick,
      btn_hidden,
      checkbox_disabled,
      default_btn_display_count
    } = this.props

    return (
      <div className='ori-word-break ori-mt-checkboxWithMediaContainer'>
        {
          payload.imageUrl &&
          <div className={styles.imageContainer}>
            <img src={payload.imageUrl} alt='' className='ori-img-contain' />
          </div>
        }
        {
          payload.title &&
          <p className='ori-no-t-mrgn ori-no-b-mrgn ori-font-bold ori-capitalize-first title'>{payload.title}
          </p>
        }
        {
          payload.subtitle &&
          <p className='ori-no-b-mrgn ori-no-t-mrgn subtitle'>
            {payload.subtitle}
          </p>
        }
        {
          payload.options && payload.options.length > 0 &&
          <div className={styles.checkboxGroupContainer}>
            <div className="ori-b-pad-5 ori-b-mrgn-10 ori-b-border-light">
              <Checkbox
                indeterminate={indeterminate}
                checked={check_all}
                disabled={checkbox_disabled}
                onChange={this.onCheckAllChange}
              >
                Select All
            </Checkbox>
            </div>
            <Checkbox.Group
              style={{ width: '100%' }}
              className="ori-mt-checkboxGroup"
              value={checked}
              options={filter_options}
              disabled={checkbox_disabled}
              onChange={this.onChange}
            />
            <div className={styles.checkboxFooterContainer}>
              <Button
                size="small"
                className="ori-btn-bubble-inner"
                disabled={checkbox_disabled}
                onClick={this.onClickSubmit}
              >
                {payload.submitBtnText ? payload.submitBtnText : 'Submit'}
              </Button>
              {
                payload.options.length > LIMIT &&
                <CustomPagination
                  next_disabled={!has_more}
                  current={current}
                  onChange={this.onChangePagination}
                />
              }
            </div>
          </div>
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

CheckboxWithMedia.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  checkbox_disabled: PropTypes.bool,
  onSubmitCheckbox: PropTypes.func,
  default_btn_display_count: PropTypes.number
}

CheckboxWithMedia.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  checkbox_disabled: false,
  default_btn_display_count: 4
}

export { CheckboxWithMedia }
