/* eslint-disable react/no-did-update-set-state */
/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import Upload from 'antd/lib/upload'
import Button from 'antd/lib/button'
import UploadIcon from 'react-icons/lib/md/cloud-upload'
import FileIcon from 'react-icons/lib/fa/file-o'
import CloseIcon from 'react-icons/lib/md/close'

import styles from './UploadFileBody.module.scss'

import Buttons from '../../../../components/buttons'
import {
  fileToBase64,
  checkMultipleExtension
} from '../../../../data/config/utils'
class UploadFileBody extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      file: props.payload.file ? props.payload.file : null,
      fileUrl: props.payload.fileUrl ? props.payload.fileUrl : '',
      error: ''
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.payload.file !== this.props.payload.file) {
      this.setState({ file: this.props.payload.file })
    }
    if (prevProps.payload.fileUrl !== this.props.payload.fileUrl) {
      this.setState({ fileUrl: this.props.payload.fileUrl })
    }
  }

  beforeUpload = file => {
    const { accept, maxAllowedSize } = this.props.payload //  accept format eg. "image/png,image/jpg,image/jpeg"
    if (this.state.error) { this.setState({error: ''}) }

    if (file.name) {
      let isAllowed = checkMultipleExtension(file.name)
      if (!isAllowed) {
        this.setState({ error: 'multiextension not allowed' })
      }
      const allowedSize = maxAllowedSize || 300000
      if (file.size > allowedSize) {
        this.setState({ error: `file size must be less than ${allowedSize}byte` })
        isAllowed = false
      }

      if (accept) {
        const typeError = accept.toLowerCase().includes(file.type)
        if (!typeError) {
          this.setState({ error: `${file.type} is not allowed` })
        }
        isAllowed = isAllowed && typeError
      }

      if (isAllowed) {
        fileToBase64(file).then(fileUrl => {
          this.setState({
            file,
            fileUrl
          })
        })
      }
    }

    return false
  }

  onRemove = file => {
    this.setState({
      file: null,
      fileUrl: '',
      error: ''
    })
  };

  onClickFileUpload = () => {
    const { handleFileUpload, message } = this.props
    const { file, fileUrl } = this.state
    const payload = {
      file: {
        name: file.name,
        size: file.size,
        type: file.type,
        uid: file.uid
      },
      fileUrl
    }
    handleFileUpload(payload, message)
  }

  renderImage = () => {
    const { file, fileUrl } = this.state
    if (file && file.type && file.type.indexOf('image/') !== -1) {
      return (
        <div
          className={styles.imageBg}
          style={{ backgroundImage: `url(${fileUrl})` }}
        />
      )
    } else {
      return (
        <div className='ori-r-mrgn-10 ori-flex'>
          <FileIcon size={40} />
        </div>
      )
    }
  }

  renderFileList = () => {
    const { file, fileUrl } = this.state
    const { disabled } = this.props
    if (file === null && fileUrl === '') {
      return (
        <div className='ori-bg-card ori-cursor-ptr ori-pad-10 ori-flex-column ori-flex-jc ori-flex-ac ori-border-radius-3 ori-border-dashed-default uploaderWrapper'>
          <UploadIcon size={40} />
          <div className='ori-t-pad-5'>Select file to upload</div>
        </div>
      )
    } else if (file && file.name) {
      return (
        <div className='ori-relative ori-flex-row ori-tb-mrgn-5 ori-pad-10 ori-border-light ori-border-radius-3'>
          {!disabled && (
            <div
              className='ori-absolute ori-cursor-ptr'
              style={{ right: 10 }}
              onClick={this.onRemove}
            >
              <CloseIcon size={14} />
            </div>
          )}
          {this.renderImage()}
          {file && (
            <div className='ori-flex-column ori-flex-jc ori-full-flex ori-overflow-hidden'>
              <a
                className='ori-text-overflow-dotted ori-font-xs'
                href={fileUrl}
                target='_blank'
              >
                {file.name}
              </a>
            </div>
          )}
        </div>
      )
    }
  }

  render() {
    const {
      btn_disabled,
      message,
      payload,
      handleMsgBtnClick,
      btn_hidden,
      disabled,
      uploading,
      default_btn_display_count,
      showless,
      showmore
    } = this.props
    const { file, fileUrl, error } = this.state
    return (
      <div className='ori-word-break ori-uploadFileContainer'>
        {payload.title && payload.title.trim().length > 0 && (
          <p className='ori-no-t-mrgn ori-no-b-mrgn ori-font-bold ori-capitalize-first ori-word-break title'>
            {payload.title}
          </p>
        )}
        {payload.subtitle && payload.subtitle.trim().length > 0 && (
          <p className='ori-no-b-mrgn ori-no-t-mrgn ori-word-break subtitle'>
            {payload.subtitle}
          </p>
        )}
        <div className='ori-tb-pad-10 ori-flex-row ori-flex-jc'>
          <Upload
            className='ori-full-width ori-mt-fileUploaderContainer'
            listType='picture'
            showUploadList={false}
            beforeUpload={this.beforeUpload}
            onRemove={this.onRemove}
            disabled={disabled || file !== null}
            accept={payload.accept}
          >
            {this.renderFileList()}
          </Upload>
        </div>
        {error && (
          <p className='ori-word-break ori-font-xxs ori-font-danger'>
            {error}
          </p>
        )}
        {file && fileUrl !== '' && !disabled && (
          <Button
            className='ori-full-width uploadButton'
            disabled={disabled}
            onClick={this.onClickFileUpload}
          >
            {uploading ? 'Uploading' : 'Upload'}
          </Button>
        )}
        {!btn_hidden && payload.buttons && payload.buttons.length > 0 && (
          <Buttons
            buttons={payload.buttons}
            display_count={
              payload.btnDisplayCount
                ? payload.btnDisplayCount
                : default_btn_display_count
            }
            message={message}
            btn_disabled={btn_disabled}
            handleMsgBtnClick={handleMsgBtnClick}
            showless={showless}
            showmore={showmore}
          />
        )}
      </div>
    )
  }
}

UploadFileBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  uploading: PropTypes.bool,
  handleFileUpload: PropTypes.func,
  default_btn_display_count: PropTypes.number,
  showmore: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  showless: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

UploadFileBody.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  disabled: false,
  uploading: false,
  default_btn_display_count: 4,
  handleFileUpload: () => {}
}

export default UploadFileBody
