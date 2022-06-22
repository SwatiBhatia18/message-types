/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import MessageWrapper from '../../../components/MessageWrapper'
import CheckboxWithMediaBody from './CheckboxWithMediaBody'

const CheckboxWithMedia = props => (
  <MessageWrapper component={CheckboxWithMediaBody} {...props} />
)

CheckboxWithMedia.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  checkbox_disabled: PropTypes.bool,
  onSubmitCheckbox: PropTypes.func,
  default_btn_display_count: PropTypes.number,
  preferLang: PropTypes.string
}

CheckboxWithMedia.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  checkbox_disabled: false,
  default_btn_display_count: 4
}

export { CheckboxWithMedia }
