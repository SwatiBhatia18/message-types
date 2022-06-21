/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import MessageWrapper from '../../../components/MessageWrapper'
import TextMessageBody from './TextMessageBody'

const TextMessage = ({
  preferLang,
  message,
  show_nlp_snapshot,
  disable_html_parser,
  editMessageNLPSnapshot
}) => (
  <MessageWrapper
    message={message}
    preferLang={preferLang}
    component={TextMessageBody}
    primaryMessageProps={{
      show_nlp_snapshot,
      disable_html_parser,
      editMessageNLPSnapshot
    }}
  />
)

TextMessage.propTypes = {
  message: PropTypes.object.isRequired,
  show_nlp_snapshot: PropTypes.bool,
  editMessageNLPSnapshot: PropTypes.func,
  disable_html_parser: PropTypes.bool,
  preferLang: PropTypes.string
}

TextMessage.defaultProps = {
  show_nlp_snapshot: false,
  disable_html_parser: false
}

export { TextMessage }
