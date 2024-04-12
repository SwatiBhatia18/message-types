import React from 'react'
import PropTypes from 'prop-types'

import HtmlText from '../../../../components/HtmlText'

const ListMessageBody = ({ payload }) => {
  if (payload.submitMessage) {
    return (
      <HtmlText
        text={payload.submitMessage.message}
        isHtml={payload.submitMessage.containsHtmlMessage}
      />
    )
  }

  return (
    <React.Fragment>
      {payload.list && payload.list.length > 0 && payload.list.map((item, index) => {
        if (payload.showLabelOnly) {
          return (
            <p key={index}>{item.label}</p>
          )
        }
        if (item.value !== undefined) {
          let renderedValue
          if (Array.isArray(item.value)) {
            renderedValue = item.value
              .filter((_, i) => !item.hiddenIndexes || !item.hiddenIndexes.includes(i))
              .join(', ')
          } else {
            renderedValue = item.value
          }
          return (
            <p key={index}>
              {item.label && <span>{item.label} </span>}
              {renderedValue}
            </p>
          )
        }
        return <p key={index}>{item.label}</p>
      })}
    </React.Fragment>
  )
}

ListMessageBody.propTypes = {
  payload: PropTypes.object.isRequired
}

export default ListMessageBody
