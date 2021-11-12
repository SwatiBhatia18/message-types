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
    const { btn_disabled, buttons, className } = this.props
    const { display_buttons_count, show_all_buttons } = this.state
    return (
      <div className={`${styles.buttonsContainer} ${className} buttonsContainer`}>
        {
          buttons.map((btn, index) => {
            if (index < display_buttons_count)
              return (
                <Button
                  key={index}
                  size="small"
                  className={`ori-b-mrgn-5 ${btn.displayType === "paragraph" ?
                      "ori-btn-paragraph" :
                      (btn.displayType === "secondary" ? "ori-r-mrgn-5 ori-btn-secondary" : "ori-r-mrgn-5 ori-btn-bubble-inner")
                    } ${styles.button}`}
                  block={btn.displayType === "paragraph"}
                  disabled={btn_disabled}
                  onClick={this.handleBtnClick.bind(this, btn)}
                >
                  {btn.text}
                </Button>
              )
          })
        }
        {
          !show_all_buttons && buttons.length > display_buttons_count &&
          <Button
            size="small"
            className={`ori-b-mrgn-5 ori-lr-mrgn-5 ori-btn-bubble-inner ${styles.button}`}
            onClick={this.showAllButtons}
          >
            Show more
          </Button>
        }
        {
          show_all_buttons &&
          <Button
            size="small"
            className={`ori-b-mrgn-5 ori-lr-mrgn-5 ori-btn-bubble-inner ${styles.button}`}
            onClick={this.showLessButtons}
          >
            Show less
          </Button>
        }
      </div>
    )
  }
}

Buttons.propTypes = {
  className: PropTypes.string,
  buttons: PropTypes.array,
  message: PropTypes.object,
  btn_disabled: PropTypes.bool,
  display_count: PropTypes.number,
  handleMsgBtnClick: PropTypes.func
}

Buttons.defaultProps = {
  className: "",
  btn_disabled: false,
  display_count: 4
}

export default Buttons
