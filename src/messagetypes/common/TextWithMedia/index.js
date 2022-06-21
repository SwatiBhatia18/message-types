/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import MessageWrapper from '../../../components/MessageWrapper'
import TextWithMediaBody from './TextWithMediaBody'

const TextWithMedia = ({
  preferLang,
  message,
  handleMsgBtnClick,
  img_popup_disable,
  btn_disabled,
  btn_hidden,
  default_btn_display_count,
  onImageRedirect
}) => (
  <MessageWrapper
    message={message}
    preferLang={preferLang}
    component={TextWithMediaBody}
    handleMsgBtnClick={handleMsgBtnClick}
    img_popup_disable={img_popup_disable}
    btn_disabled={btn_disabled}
    btn_hidden={btn_hidden}
    default_btn_display_count={default_btn_display_count}
    onImageRedirect={onImageRedirect}
  />
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
