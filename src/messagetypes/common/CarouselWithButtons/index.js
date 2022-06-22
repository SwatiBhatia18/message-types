/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import MessageWrapper from '../../../components/MessageWrapper'
import CarouselWithButtonsBody from './CarouselWithButtonsBody'

const CarouselWithButtons = ({
  preferLang,
  message,
  handleMsgBtnClick,
  btn_disabled,
  btn_hidden,
  display_type,
  img_popup_disable,
  default_btn_display_count,
  onImageRedirect
}) => (
  <MessageWrapper
    message={message}
    preferLang={preferLang}
    component={CarouselWithButtonsBody}
    handleMsgBtnClick={handleMsgBtnClick}
    btn_disabled={btn_disabled}
    btn_hidden={btn_hidden}
    display_type={display_type}
    img_popup_disable={img_popup_disable}
    default_btn_display_count={default_btn_display_count}
    onImageRedirect={onImageRedirect}
  />
)

CarouselWithButtons.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  display_type: PropTypes.string,
  img_popup_disable: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  onImageRedirect: PropTypes.func,
  preferLang: PropTypes.string
}

CarouselWithButtons.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  img_popup_disable: false,
  default_btn_display_count: 4
}

export { CarouselWithButtons }
