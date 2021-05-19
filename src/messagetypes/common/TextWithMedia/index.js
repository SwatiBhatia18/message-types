/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import Button from 'antd/lib/button'

import styles from './TextWithMedia.module.scss'

import Buttons from '../../../components/buttons'
import HtmlText from '../../../components/HtmlText'

class TextWithMedia extends React.PureComponent {
  state = { show_overlay: false, selectedIndex: -1 }

  showOverlay = () => {
    const { img_popup_disable } = this.props
    if (!img_popup_disable)
      this.setState({ show_overlay: true })
  };

  closeOverlay = () => { this.setState({ show_overlay: false }) };

  renderPreviewOverlay = () => {
    const { img_popup_disable } = this.props
    const { show_overlay } = this.state
    const { payload } = this.props.message
    if (!img_popup_disable && show_overlay) {
      return (
        <div className={`ori-flex-row ori-flex-jc ori-flex-ac ori-align-full ori-pad-15 ${styles.previewOverlayContainer}`}>
          <div className='ori-bg-white'>
            <img src={payload.imageUrl} alt='' style={{ maxWidth: '100%', maxHeight: '70vh' }} />
            <div className='ori-lr-pad-10 ori-tb-pad-10'>
              {
                payload.title && payload.title.trim().length > 0 &&
                <p className={`${styles.title} ori-font-default title`}>{payload.title}</p>
              }
              <div className='ori-flex-row ori-flex-jc'>
                <Button type='danger' size='small' onClick={this.closeOverlay}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    const { btn_disabled, message, handleMsgBtnClick, btn_hidden, default_btn_display_count } = this.props
    const { selectedIndex } = this.state
    const { payload } = this.props.message

    return (
      <div className={`${styles.textWithMediaContainer} ${styles.ie10upTextWithMediaContainer}`}>
        {this.renderPreviewOverlay()}
        {
          payload.url && payload.url.trim().length > 0 &&
          <div className='videoContainer'>
            <iframe title='video-message' className='ori-full-width' src={payload.url} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
          </div>
        }
        {
          payload.imageUrl && payload.imageUrl.trim().length > 0 &&
          <img
            src={payload.imageUrl}
            alt=''
            className='ori-b-mrgn-5 ori-cursor-ptr ori-full-width'
            onClick={this.showOverlay}
          />
        }
        {
          payload.title &&
          <HtmlText
            textClass={`${styles.title} title`}
            text={payload.title}
            isHtml={payload.containsHtmlTitle}
          />
        }
        {
          payload.subtitle &&
          <HtmlText
            text={payload.subtitle}
            isHtml={payload.containsHtmlSubtitle}
          />
        }
        {
          payload.accordian && payload.accordian.map((item, index) => {
            return (
              <div className="ori-border-light ori-border-radius-3 ori-b-mrgn-5" key={index}>
                <div
                  className="ori-tb-pad-5 ori-lr-pad-10 ori-bg-card ori-cursor-ptr ori-font-bold"
                  onClick={() => this.setState({ selectedIndex: selectedIndex === index ? -1 : index })}
                >
                  <HtmlText
                    text={item.title}
                    isHtml={item.containsHtmlTitle}
                  />
                </div>
                {
                  index === selectedIndex &&
                  <div className="ori-animated ori-fade-in ori-lr-pad-10 ori-tb-pad-5">
                    <HtmlText
                      text={item.description}
                      isHtml={item.containsHtmlDescription}
                    />
                  </div>
                }
              </div>
            )
          })
        }
        {
          !btn_hidden && payload.buttons && payload.buttons.length > 0 &&
          <Buttons
            buttons={payload.buttons}
            display_count={payload.btnDisplayCount ? payload.btnDisplayCount : default_btn_display_count}
            message={message}
            btn_disabled={btn_disabled}
            handleMsgBtnClick={handleMsgBtnClick}
          />
        }
      </div>
    )
  }
}

TextWithMedia.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  img_popup_disable: PropTypes.bool,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number
}

TextWithMedia.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  img_popup_disable: false,
  default_btn_display_count: 4
}

export { TextWithMedia }
