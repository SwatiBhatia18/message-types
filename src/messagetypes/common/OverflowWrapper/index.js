import React from 'react'
import PropTypes from 'prop-types'

class OverflowWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.containerRef = React.createRef(null)
    this.state = {
      childrenContentHeight: 0,
      expanded: false
    }
  }

  componentDidMount() {
    const { enabled } = this.props
    if (enabled && this.containerRef.current) {
      this.setState({
        childrenContentHeight: this.containerRef.current.clientHeight
      })
    }
  }

  handleShowMoreAndLessClick = () => {
    this.setState({
      expanded: true
    })
  };

  render() {
    const {
      enabled,
      containerHeight,
      children,
      showMoreChild,
      showMoreText
    } = this.props
    const { childrenContentHeight, expanded } = this.state
    if (enabled) {
      const isChildrenHeightGreater = childrenContentHeight > containerHeight
      return (
        <React.Fragment>
          <div
            style={{
              overflow: 'hidden',
              height: expanded
                ? `${childrenContentHeight}px`
                : isChildrenHeightGreater
                  ? `${containerHeight}px`
                  : 'auto'
            }}
          >
            <div ref={this.containerRef}>{children}</div>
          </div>
          {isChildrenHeightGreater && !expanded && (
            <span onClick={this.handleShowMoreAndLessClick}>
              {showMoreText ? <span className='ori-cursor-ptr ori-font-light ori-font-xs'>{showMoreText}</span> : showMoreChild }
            </span>
          )}
        </React.Fragment>
      )
    }
    return children
  }
}

OverflowWrapper.propTypes = {
  enabled: PropTypes.bool,
  containerHeight: PropTypes.number,
  children: PropTypes.node,
  showMoreChild: PropTypes.node,
  showMoreText: PropTypes.string
}

OverflowWrapper.defaultProps = {
  enabled: false,
  containerHeight: 250,
  children: null,
  showMoreText: '',
  showMoreChild: (
    <span
      className='ori-cursor-ptr ori-font-light ori-font-xs'
      style={{
        textDecoration: 'underline',
        userSelect: 'none'
      }}
    >
      show more
    </span>
  )
}

export { OverflowWrapper }
