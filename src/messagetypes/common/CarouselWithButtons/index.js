/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import MessageWrapper from '../../../components/MessageWrapper'
import CarouselWithButtonsBody from './CarouselWithButtonsBody'

const CarouselWithButtons = props => (
  <MessageWrapper component={CarouselWithButtonsBody} {...props} />
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
