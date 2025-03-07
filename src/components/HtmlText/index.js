import React from 'react'
import PropTypes from 'prop-types'

const HtmlText = ({
  text,
  isHtml,
  textClass
}) => {
  if (isHtml)
    return (<div dangerouslySetInnerHTML={{ __html: text }} />)
  return (<p className={`ori-word-wrap ori-word-break ${textClass}`}>{text}</p>)
}

HtmlText.propTypes = {
  text: PropTypes.string.isRequired,
  isHtml: PropTypes.bool,
  textClass: PropTypes.string
}

HtmlText.defaultProps = {
  isHtml: false,
  textClass: "ori-no-b-mrgn"
}

export default HtmlText
