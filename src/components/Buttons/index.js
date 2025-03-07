/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
/* eslint-disable jsx-quotes */
import React from 'react'
import PropTypes from 'prop-types'
import Button from 'antd/lib/button'

import styles from './Buttons.module.scss'

class Buttons extends React.PureComponent {
  handleBtnClick = button => {
    const { handleMsgBtnClick, message } = this.props
    handleMsgBtnClick({ button, message })
  }

  render() {
    const { buttons, btn_disabled } = this.props
    return (
      <div className={`${styles.buttonsContainer} buttonsContainer`}>
        {
          buttons.map((btn, index) => {
            return (
              <Button
                key={index}
                size="small"
                className={
                  `ori-b-mrgn-5 ori-lr-mrgn-5 ori-btn-fill-primary ${styles.button}`
                }
                disabled={btn_disabled}
                onClick={this.handleBtnClick.bind(this, btn)}
              >
                {btn.text}
              </Button>
            )
          })
        }
      </div>
    )
  }
}

Buttons.propTypes = {
  buttons: PropTypes.array,
  message: PropTypes.object,
  btn_disabled: PropTypes.bool,
  handleMsgBtnClick: PropTypes.func
}

Buttons.defaultProps = {
  btn_disabled: false
}

export default Buttons
