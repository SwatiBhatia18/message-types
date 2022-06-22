/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import MessageWrapper from '../../../components/MessageWrapper'
import TextWithMediaBody from './TextWithMediaBody'

const TextWithMedia = props => (
  <MessageWrapper component={TextWithMediaBody} {...props} />
)

TextWithMedia.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  img_popup_disable: PropTypes.bool,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  onImageRedirect: PropTypes.func,
  preferLang: PropTypes.string
}

TextWithMedia.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  img_popup_disable: false,
  default_btn_display_count: 4
}

export { TextWithMedia }
