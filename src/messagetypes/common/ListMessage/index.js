import React from 'react'
import PropTypes from 'prop-types'

const ListMessage = ({ message }) => {
  return (
    <React.Fragment>
      {
        message.payload.list.map((item, index) => {
          if (item.value !== undefined) {
            return (
              <p key={index}>
                {
                  item.label &&
                  <span>{item.label} </span>
                }
                {item.value}
              </p>
            )
          }
          return (<p key={index}>{item.label}</p>)
        })
      }
    </React.Fragment>
  )
}

ListMessage.propTypes = {
  message: PropTypes.object.isRequired
}

export { ListMessage }
