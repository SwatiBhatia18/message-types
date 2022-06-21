import React, { Component } from "react";
import {
  OverflowWrapper,
  TextMessage,
  // TextWithMedia,
  CarouselWithButtons
  // Offers,
  // RechargeHistory,
  // CheckboxWithMedia
  // FormMessage
} from "message-types";

import {
  textMessage,
  // formMessage,
  // textWithMediaMessage,
  // checkboxMessage,
  carouselWithButtonsMessage
} from "./constants";

export default class App extends Component {
  render() {
    return (
      <div className="ori-appContainer">
        <OverflowWrapper enabled>
          <TextMessage
            message={textMessage}
            show_nlp_snapshot={false}
            preferLang="hindi"
          />
        </OverflowWrapper>
        {/* <ListMessage message={message} /> */}
        {/* <TextWithMedia message={textWithMediaMessage} /> */}
        {/* <CheckboxWithMedia message={checkboxMessage} /> */}
        {/* <DishtvRecharge message={message} /> */}
        {/* <DishtvRechargeDetails message={message} /> */}
        {/* <UploadFile message={message} /> */}
        {/* <Offers message={message} handleOfferSelection={()=>{}} btn_disabled /> */}
        {/* <RechargeHistory message={message} /> */}
        {/* <CarouselWithButtons message={carouselWithButtonsMessage} img_popup_disable={false} /> */}
        {/* <FormMessage message={formMessage} /> */}
      </div>
    );
  }
}
