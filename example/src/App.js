import React, { Component } from 'react'
import { 
  // TextMessage, 
  // TextWithMedia, 
  // CarouselWithButtons, 
  // Offers, 
  // RechargeHistory, 
  CheckboxWithMedia 
} from 'message-types'

import {
  // textWithMediaMessage,
  checkboxMessage
} from './constants'

export default class App extends Component {
  render() {
    return (
      <div className="ori-appContainer">
        {/* <TextMessage message={message} show_nlp_snapshot={false} /> */}
        {/* <ListMessage message={message} /> */}
        {/* <TextWithMedia message={textWithMediaMessage} /> */}
        <CheckboxWithMedia message={checkboxMessage} />
        {/* <DishtvRecharge message={message} /> */}
        {/* <DishtvRechargeDetails message={message} /> */}
        {/* <UploadFile message={message} /> */}
        {/* <Offers message={message} handleOfferSelection={()=>{}} btn_disabled /> */}
        {/* <RechargeHistory message={message} /> */}
        {/* <CarouselWithButtons message={message} /> */}
      </div>
    )
  }
}
