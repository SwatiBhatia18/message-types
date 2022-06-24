import React from 'react'
import PropTypes from 'prop-types'

const MessageWrapper = ({
  message,
  preferLang,
  component: ChildComponent,
  primaryMessageProps,
  ...rest
}) => {
  if (
    message.payload &&
    Array.isArray(message.payload) &&
    message.payload.length > 0
  ) {
    return message.payload.map((item, index) => {
      if (item.lang === preferLang || index === 0) {
        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <div
                className='ori-relative ori-tb-mrgn-5 ori-flex ori-flex-jc'
                style={{
                  height: '20px'
                }}
              >
                <span
                  className='ori-absolute ori-bg-default'
                  style={{
                    left: 0,
                    right: 0,
                    top: '50%',
                    height: '1px',
                    backgroundColor: '#e6e6e6'
                  }}
                />
                <span className='ori-absolute ori-bg-default ori-lr-pad-5 ori-border-default ori-capitalize ori-border-radius-base ori-font-xs'>
                  {item.lang}
                </span>
              </div>
            )}
            <ChildComponent
              payload={item}
              message={message}
              {...(index === 0 && primaryMessageProps
                ? primaryMessageProps
                : {})}
              {...rest}
            />
          </React.Fragment>
        )
      }
    })
  }

  return (
    <ChildComponent
      payload={message.payload}
      message={message}
      {...(primaryMessageProps || {})}
      {...rest}
    />
  )
}

MessageWrapper.propTypes = {
  message: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired,
  preferLang: PropTypes.string,
  primaryMessageProps: PropTypes.object
}

MessageWrapper.defaultProps = {
  component: null,
  preferLang: ''
}

export default MessageWrapper
