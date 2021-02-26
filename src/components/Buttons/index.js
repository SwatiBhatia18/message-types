/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
/* eslint-disable jsx-quotes */
import React from 'react'
import PropTypes from 'prop-types'
import Button from 'antd/lib/button'

import styles from './Buttons.module.scss'

class Buttons extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      show_all_buttons: false,
      display_buttons_count: props.display_count
    }
  }

  handleBtnClick = button => {
    const { handleMsgBtnClick, message } = this.props
    if (handleMsgBtnClick)
      handleMsgBtnClick({ button, message })
  }

  showAllButtons = () => {
    const { buttons } = this.props
    this.setState({
      show_all_buttons: true,
      display_buttons_count: buttons.length
    })
  }

  showLessButtons = () => {
    const { display_count } = this.props
    this.setState({
      show_all_buttons: false,
      display_buttons_count: display_count
    })
  }

  render() {
    const { btn_disabled, buttons } = this.props
    const { display_buttons_count, show_all_buttons } = this.state
    return (
      <React.Fragment>
        <div className={`${styles.buttonsContainer} buttonsContainer`}>
          {
            buttons.map((btn, index) => {
              if (index < display_buttons_count)
                return (
                  <Button
                    key={index}
                    size="small"
                    className={`ori-b-mrgn-5 ori-lr-mrgn-5 ori-btn-fill-primary ${styles.button}`}
                    disabled={btn_disabled}
                    onClick={this.handleBtnClick.bind(this, btn)}
                  >
                    {btn.text}
                  </Button>
                )
            })
          }
        </div>
        {
          !show_all_buttons && buttons.length > display_buttons_count &&
          <p
            className="ori-font-primary ori-cursor-ptr ori-t-mrgn-5 ori-font-xs"
            onClick={this.showAllButtons}
          >
            {`show ${buttons.length - display_buttons_count} more `}
          </p>
        }
        {
          show_all_buttons &&
          <p
            className="ori-font-primary ori-cursor-ptr ori-t-mrgn-5 ori-font-xs"
            onClick={this.showLessButtons}
          >
            show less
          </p>
        }
      </React.Fragment>
    )
  }
}

Buttons.propTypes = {
  buttons: PropTypes.array,
  message: PropTypes.object,
  btn_disabled: PropTypes.bool,
  display_count: PropTypes.number,
  handleMsgBtnClick: PropTypes.func
}

Buttons.defaultProps = {
  btn_disabled: false,
  display_count: 4
}

export default Buttons
