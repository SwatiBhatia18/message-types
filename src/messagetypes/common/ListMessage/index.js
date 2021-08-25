import React from 'react'
import PropTypes from 'prop-types'

const ListMessage = ({ message }) => {
  return (
    <div className='ori-b-pad-5 ori-lr-pad-10'>
      <ul className='ori-no-b-mrgn ori-no-pad'>
        {
          message.payload.list.map((item, index) => {
            if (item.value !== undefined) {
              return (
                <li key={index}>
                  {
                    item.label &&
                    <span className='ori-font-bold'>{item.label}: </span>
                  }
                  {item.value}
                </li>
              )
            }
            return (<li key={index}>{item.label}</li>)
          })
        }
      </ul>
    </div>
  )
}

ListMessage.propTypes = {
  message: PropTypes.object.isRequired
}

export { ListMessage }
