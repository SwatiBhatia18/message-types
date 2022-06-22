/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import MessageWrapper from '../../../components/MessageWrapper'
import PromptMsgBody from './PromtMsgBody'

const PromptMsg = props => (
  <MessageWrapper component={PromptMsgBody} {...props} />
)

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
