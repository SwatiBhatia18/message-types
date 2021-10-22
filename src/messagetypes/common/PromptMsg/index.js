/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import Buttons from '../../../components/buttons'

class PromptMsg extends React.PureComponent {
  render() {
    const { btn_disabled, message, handleMsgBtnClick, btn_hidden, default_btn_display_count } = this.props
    const { payload } = this.props.message

    return (
      <div className='ori-word-break ori-mt-promptMsgContainer'>
        {
          payload.title && payload.title.trim().length > 0 &&
          <p className='ori-no-t-mrgn ori-font-bold ori-no-b-mrgn ori-capitalize-first ori-mt-title'>{payload.title}</p>
        }
        {
          payload.subtitle && payload.subtitle.trim().length > 0 &&
          <p className='ori-no-b-mrgn ori-no-t-mrgn ori-mt-subtitle'>
            {payload.subtitle}
          </p>
        }
        {
          !btn_hidden && (payload.buttons) && (payload.buttons.length > 0) &&
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

PromptMsg.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number
}

PromptMsg.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  default_btn_display_count: 4
}

export { PromptMsg }
