/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'antd/lib/carousel'
import Button from 'antd/lib/button'

import styles from './CarouselWithButtons.module.scss'

import Buttons from '../../../components/buttons'
import HtmlText from '../../../components/HtmlText'

class CarouselWithButtons extends React.PureComponent {
  state = {
    show_overlay: false,
    selected_carousel_item: null
  }

  closeOverlay = () => {
    this.setState({
      show_overlay: false,
      selected_carousel_item: null
    })
  }

  showCarouselItem = selected_carousel_item => {
    this.setState({
      show_overlay: true,
      selected_carousel_item
    })
  }

  renderPreviewOverlay = () => {
    const { show_overlay, selected_carousel_item } = this.state
    const { img_popup_disable } = this.props
    if (!img_popup_disable && show_overlay && selected_carousel_item) {
      return (
        <div className={`ori-flex-row ori-flex-jc ori-flex-ac ori-align-full ori-pad-15 ${styles.previewOverlayContainer}`}>
          <div className='ori-bg-white'>
            <img
              src={selected_carousel_item.mediaUrl}
              alt=''
              style={{ width: '100%', maxHeight: '70vh' }}
            />
            {
              selected_carousel_item.title && selected_carousel_item.title.trim().length > 0 &&
              <p className='ori-t-mrgn-3 ori-no-b-mrgn ori-font-bold ori-lr-pad-10 ori-capitalize ori-word-wrap ori-word-break '>{selected_carousel_item.title}</p>
            }
            {
              selected_carousel_item.subtitle && selected_carousel_item.subtitle.trim().length > 0 &&
              <p className='ori-t-mrgn-3 ori-no-b-mrgn ori-lr-pad-10 ori-capitalize ori-word-wrap ori-word-break '>{selected_carousel_item.subtitle}</p>
            }
            <div className='ori-flex-row ori-flex-jc ori-pad-10'>
              <Button type='danger' size='small' onClick={this.closeOverlay}>Close</Button>
            </div>
          </div>
        </div>
      )
    }
  }

  renderCarouselImage = carousel_item => {
    const { display_type, img_popup_disable } = this.props
    if (display_type === 'fixed') {
      return (
        <div
          className={styles.imageContainer}
          style={{
            backgroundImage: `url(${carousel_item.mediaUrl})`
          }}
          onClick={() => !img_popup_disable && this.showCarouselItem(carousel_item)}
        />
      )
    }
    if (display_type === 'actual') {
      return (
        <img
          src={carousel_item.mediaUrl}
          alt=''
          className='ori-cursor-ptr ori-full-width'
          onClick={() => !img_popup_disable && this.showCarouselItem(carousel_item)}
        />
      )
    }
    return (
      <img
        src={carousel_item.mediaUrl}
        alt=''
        className='ori-cursor-ptr ori-full-width'
        style={{ height: '200px' }}
        onClick={() => !img_popup_disable && this.showCarouselItem(carousel_item)}
      />
    )
  }

  render() {
    const { btn_disabled, handleMsgBtnClick, message, btn_hidden, default_btn_display_count } = this.props
    const { payload } = this.props.message

    return (
      <div className='ori-relative ori-word-break ori-mt-carouselWithButtonsContainer'>
        {this.renderPreviewOverlay()}
        {
          payload && payload.title &&
          <HtmlText
            textClass='ori-no-t-mrgn ori-no-b-mrgn ori-font-bold ori-capitalize-first title'
            text={payload.title}
            isHtml={payload.containsHtmlTitle}
          />
        }
        {
          payload && payload.subtitle &&
          <HtmlText
            textClass='ori-no-b-mrgn ori-no-t-mrgn subtitle'
            text={payload.subtitle}
            isHtml={payload.containsHtmlSubtitle}
          />
        }
        {
          payload && payload.options && payload.options.length > 0 &&
          <Carousel className={`ori-mt-CarouselContainer ${styles.carouselContainer}`} arrows={true}>
            {
              payload.options.map((carousel_item, index) => {
                return (
                  <div className={`carouselItem ${styles.carouselItem}`} key={index}>
                    {
                      carousel_item.mediaType && carousel_item.mediaUrl && carousel_item.mediaType === 'video' && carousel_item.mediaUrl.trim().length > 0 &&
                      <div className='videoContainer'>
                        <iframe title='video-message' className='ori-full-width' src={carousel_item.mediaUrl} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
                      </div>
                    }
                    {
                      carousel_item.mediaType && carousel_item.mediaUrl && carousel_item.mediaType === 'image' && carousel_item.mediaUrl.trim().length > 0 &&
                      this.renderCarouselImage(carousel_item)
                    }
                    {
                      carousel_item.title &&
                      <HtmlText
                        text={carousel_item.title}
                        isHtml={carousel_item.containsHtmlTitle}
                        textClass="ori-t-mrgn-3 ori-no-b-mrgn ori-font-bold ori-lr-pad-10 ori-word-wrap ori-word-break ori-mt-title"
                      />
                    }
                    {
                      carousel_item.subtitle &&
                      <HtmlText
                        text={carousel_item.subtitle}
                        isHtml={carousel_item.containsHtmlSubtitle}
                        textClass="ori-no-b-mrgn ori-lr-pad-10"
                      />
                    }
                    {
                      carousel_item.buttons && carousel_item.buttons.length > 0 &&
                      <Buttons
                        className="ori-lr-pad-10"
                        buttons={carousel_item.buttons}
                        display_count={carousel_item.btnDisplayCount ? carousel_item.btnDisplayCount : default_btn_display_count}
                        message={message}
                        handleMsgBtnClick={handleMsgBtnClick}
                        btn_disabled={btn_disabled}
                      />
                    }
                  </div>
                )
              })
            }
          </Carousel>
        }
        {
          !btn_hidden && payload.buttons && payload.buttons.length > 0 &&
          <div className='ori-t-pad-5'>
            <Buttons
              buttons={payload.buttons}
              display_count={payload.btnDisplayCount ? payload.btnDisplayCount : default_btn_display_count}
              message={message}
              btn_disabled={btn_disabled}
              handleMsgBtnClick={handleMsgBtnClick}
            />
          </div>
        }
      </div>
    )
  }
}

CarouselWithButtons.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  display_type: PropTypes.string,
  img_popup_disable: PropTypes.bool,
  default_btn_display_count: PropTypes.number
}

CarouselWithButtons.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  img_popup_disable: false,
  default_btn_display_count: 4
}

export { CarouselWithButtons }
