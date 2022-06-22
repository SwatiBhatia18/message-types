/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import MessageWrapper from '../../../components/MessageWrapper'
import UploadFileBody from './UploadFileBody'

const UploadFile = props => (
  <MessageWrapper component={UploadFileBody} {...props} />
)

UploadFile.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  uploading: PropTypes.bool,
  handleFileUpload: PropTypes.func,
  accept: PropTypes.string,
  default_btn_display_count: PropTypes.number
}

UploadFile.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  disabled: false,
  uploading: false,
  default_btn_display_count: 4,
  handleFileUpload: () => {}
}

export { UploadFile }
