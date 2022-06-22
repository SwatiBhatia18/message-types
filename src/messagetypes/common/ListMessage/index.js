import React from 'react'
import PropTypes from 'prop-types'

import MessageWrapper from '../../../components/MessageWrapper'
import ListMessageBody from './ListMessageBody'

const ListMessage = props => (
  <MessageWrapper component={ListMessageBody} {...props} />
)

ListMessage.propTypes = {
  message: PropTypes.object.isRequired
}

export { ListMessage }
