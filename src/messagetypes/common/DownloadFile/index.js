/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import MessageWrapper from '../../../components/MessageWrapper'
import DownloadFileBody from './DownloadFileBody'

const DownloadFile = props => (
  <MessageWrapper component={DownloadFileBody} {...props} />
)

DownloadFile.propTypes = {
  message: PropTypes.object.isRequired
}

export { DownloadFile }
