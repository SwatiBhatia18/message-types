import React from 'react'
import PropTypes from 'prop-types'

const ListMessageBody = ({ payload }) => {
  return (
    <React.Fragment>
      {payload.list.map((item, index) => {
        if (payload.showLabelOnly) {
          return (
            <p key={index}>{item.label}</p>
          )
        }
        if (item.value !== undefined) {
          return (
            <p key={index}>
              {item.label && <span>{item.label} </span>}
              {item.value}
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
