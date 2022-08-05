/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'antd/lib/tooltip'
import Button from 'antd/lib/button'
import CloseIcon from 'react-icons/lib/md/close'
import SeatIcon from 'react-icons/lib/md/event-seat'

import Buttons from '../../../../components/buttons'

class SeatMapBody extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedSeatName: props.message.payload.selectedSeatName
    }
  }

  handleSeatSelection = seat => {
    const { disabled } = this.props
    if (seat.isAllowed && !disabled) {
      this.setState({
        selectedSeatName:
          seat.name === this.state.selectedSeatName ? '' : seat.name
      })
    }
  };

  handleSubmit = () => {
    const { message, onSubmit } = this.props
    if (this.state.selectedSeatName) {
      let selectedSeat = null
      message.payload.seatArrangement.forEach(row => {
        if (row.seats && row.seats.length > 0) {
          row.seats.forEach(seat => {
            if (seat.name === this.state.selectedSeatName) selectedSeat = seat
          })
        }
      })
      if (selectedSeat) {
        const data = {
          text: this.state.selectedSeatName,
          relayData: message.payload.relayData,
          selectedSeat
        }
        onSubmit(data, message)
      }
    }
  };

  render() {
    const {
      btn_disabled,
      message,
      handleMsgBtnClick,
      btn_hidden,
      default_btn_display_count,
      payload,
      disabled
    } = this.props

    return (
      <div className='ori-word-break ori-mt-SeatMapContainer'>
        {payload.title && (
          <div
            className='ori-font-bold ori-no-b-mrgn ori-font-sm ori-word-break-all'
            dangerouslySetInnerHTML={{ __html: payload.title }}
          />
        )}
        {payload.subtitle && (
          <div
            className='ori-font-13 ori-no-b-mrgn ori-word-break-all'
            dangerouslySetInnerHTML={{ __html: payload.subtitle }}
          />
        )}
        {payload.seatArrangement && payload.seatArrangement.length > 0 && (
          <React.Fragment>
            <p className='ori-text-center ori-font-xxs ori-b-mrgn-5 ori-t-mrgn-3'>
              <span className='ori-bg-default ori-font-bold ori-lr-pad-10 ori-border-radius-10 ori-tb-pad-3'>
                FRONT
              </span>
            </p>
            {payload.seatArrangement.map((row, index) => (
              <div key={index} className='ori-b-pad-5 ori-flex-row'>
                <div
                  className='ori-flex ori-flex-center'
                  style={{
                    height: 25,
                    width: 25
                  }}>
                  {row.rowName}
                </div>
                {row.seats.map((seat, index) => {
                  return (
                    <>
                      <Tooltip
                        key={index}
                        placement='top'
                        mouseEnterDelay={1}
                        title={
                          <React.Fragment>
                            <span>Type: {seat.type}</span> <br />
                            <span>Seat Number: {seat.name} </span>
                            <br />
                            <span>Status: {seat.status}</span> <br />
                            {seat.isAllowed && <span>Cost: {seat.cost}</span>}
                          </React.Fragment>
                        }
                        destroyTooltipOnHide
                      >
                        <div
                          style={{
                            backgroundColor: seat.color,
                            opacity: seat.isAllowed && !disabled ? '' : '0.5',
                            marginRight: 3,
                            height: 25,
                            width: 25
                          }}
                          className={`ori-flex ori-flex-center ori-border-radius-3 ori-font-white ${
                            seat.isAllowed && !disabled
                              ? 'ori-cursor-ptr'
                              : 'ori-cursor-not-allowed'
                          } ${
                            this.state.selectedSeatName === seat.name
                              ? 'ori-selected-seat'
                              : ''
                          }`}
                          onClick={() => this.handleSeatSelection(seat)}
                        >
                          {seat.isAllowed ? (
                            <SeatIcon size={18} />
                          ) : (
                            <CloseIcon size={18} />
                          )}
                        </div>
                      </Tooltip>
                      {seat.isNextGap && (
                        <div
                          className='ori-full-flex'
                          style={{
                            height: 25,
                            width: 30
                          }}
                        />
                      )}
                    </>
                  )
                })}
              </div>
            ))}
            <Button
              size='small'
              className='ori-t-mrgn-5 ori-btn-submit'
              disabled={disabled || !this.state.selectedSeatName}
              onClick={this.handleSubmit}
              block
            >
              {`Book Seat ${
                this.state.selectedSeatName
                  ? 'for ' + this.state.selectedSeatName
                  : ''
              }`}
            </Button>
          </React.Fragment>
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
          />
        )}
      </div>
    )
  }
}

SeatMapBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  onSubmit: PropTypes.func
}

SeatMapBody.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  disabled: false,
  checkbox_disabled: false,
  default_btn_display_count: 4
}

export default SeatMapBody
