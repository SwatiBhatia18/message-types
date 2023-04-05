/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import PdfIcon from 'react-icons/lib/md/picture-as-pdf'
import ExcelIcon from 'react-icons/lib/fa/file-excel-o'
import TextIcon from 'react-icons/lib/fa/file-text-o'
import FileIcon from 'react-icons/lib/fa/file'
import ImageIcon from 'react-icons/lib/fa/image'
import LoadingIcon from 'react-icons/lib/md/rotate-right'
import DownloadIcon from 'react-icons/lib/md/file-download'
import Button from 'antd/lib/button'

import { formatSizeUnits } from '../../../../data/config/utils'

import styles from '../../CarouselWithButtons/CarouselWithButtonsBody/CarouselWithButtonsBody.module.scss'

class DownloadFileBody extends React.PureComponent {
  state = {
    showPreview: false
  }

  renderIcon = () => {
    const { message } = this.props
    const fileSplit = message.payload.fileName.split('.')
    const fileType = fileSplit[fileSplit.length - 1].toLowerCase()
    if (fileType === 'pdf') return <PdfIcon size={25} />
    else if (fileType === 'xlsx') return <ExcelIcon size={25} />
    else if (fileType === 'docx') return <TextIcon size={25} />
    else if (message.payload.fileType.indexOf('image/') !== -1) return <ImageIcon size={25} />
    else return <FileIcon size={25} />
  }

  handlePreviewFile = () => {
    this.setState({ showPreview: true })
  }

  closePreview = e => {
    this.setState({ showPreview: false })
  }

  renderFile = () => {
    const { message } = this.props
    if (message.payload.fileType.indexOf('image/') !== -1) {
      return (
        <div className='ori-bg-white ori-border-radius-3 ori-upload-preview'>
          <img
            src={message.payload.fileUrl}
            alt='No Preview found'
            style={{ width: '100%', maxHeight: '70vh' }}
          />
          <div className='ori-flex-row ori-flex-jsb ori-pad-10 ori-flex-ac'>
            <div>
              <p className='ori-font-bold ori-line-height-1 ori-font-default'>
                {message.payload.fileName}
              </p>
              {message.payload.size && (
                <span className='ori-font-xs ori-font-light'>
                  {formatSizeUnits(message.payload.size)}
                </span>
              )}
            </div>
            <Button size='small' onClick={this.closePreview}>
              Close
            </Button>
          </div>
        </div>
      )
    }
  }

  render() {
    const { message, handleDocxFileUpload, downloadFile } = this.props
    return (
      <React.Fragment>
        {message.payload.fileType.indexOf('image/') !== -1 &&
          message.payload.fileUrl &&
          message.status === 'success' && (
          <img
            className='ori-cursor-ptr ori-b-mrgn-5 ori-thumnail'
            src={message.payload.fileUrl}
            style={{ width: '100%', maxHeight: '70vh' }}
            alt='No preview found'
            onClick={this.handlePreviewFile}
          />
        )}
        <div className='ori-flex ori-downloadfileContainer'>
          <div className='ori-t-mrgn-3'>{this.renderIcon()}</div>
          <div className='ori-lr-mrgn-10'>
            <p>{message.payload.fileName}</p>
            {message.payload.page > 0 && (
              <span className='ori-r-mrgn-5 ori-font-xs ori-font-header-light'>
                {message.payload.page} pages
              </span>
            )}
            <span className='ori-font-xs ori-font-header-light'>
              {formatSizeUnits(message.payload.size)}
            </span>
          </div>
          <div className='ori-text-center ori-t-mrgn-3'>
            {message.status === 'loading' && (
              <LoadingIcon className='ori-rotate ori-infinite' size={25} />
            )}
            {message.payload.fileType.indexOf('image/') === -1 &&
              message.payload.fileUrl &&
              message.status === 'success' && (
              <DownloadIcon
                className='ori-cursor-ptr ori-file-loader'
                size={25}
                onClick={() => downloadFile(message.payload)}
              />
            )}
            {message.status === 'failed' && (
              <React.Fragment>
                <LoadingIcon
                  className='ori-cursor-ptr ori-file-loader'
                  size={25}
                  onClick={() =>
                    handleDocxFileUpload(
                      {
                        fileUrl: message.payload.fileUrl,
                        file: { name: message.payload.fileName },
                        cmid: message.cmid
                      },
                      'retry'
                    )
                  }
                />
                <p className='ori-font-xs'>retry</p>
              </React.Fragment>
            )}
          </div>
        </div>
        {this.state.showPreview && (
          <div
            className={`ori-flex-row ori-flex-center ori-align-full ori-pad-15 ori-fixed ${styles.previewOverlayContainer}`}
          >
            {this.renderFile()}
          </div>
        )}
      </React.Fragment>
    )
  }
}

DownloadFileBody.propTypes = {
  message: PropTypes.object.isRequired,
  handleDocxFileUpload: PropTypes.func,
  downloadFile: PropTypes.func
}

DownloadFileBody.defaultProps = {
  handleDocxFileUpload: () => {},
  downloadFile: () => {}
}

export default DownloadFileBody
