import React, { Component } from "react";
import {
  OverflowWrapper,
  TextMessage,
  TextWithMedia,
  CarouselWithButtons,
  // Offers,
  // RechargeHistory,
  CheckboxWithMedia,
  FormMessage,
  ListMessage,
} from "message-types";

import {
  textMessage,
  formMessage,
  textWithMediaMessage,
  checkboxMessage,
  carouselWithButtonsMessage,
  message
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
        <ListMessage message={message} />
        <TextWithMedia message={textWithMediaMessage} preferLang="hindi" />
        <CheckboxWithMedia message={checkboxMessage} preferLang="hindi"/>
        {/* <DishtvRecharge message={message} /> */}
        {/* <DishtvRechargeDetails message={message} /> */}
        {/* <UploadFile message={message} /> */}
        {/* <Offers message={message} handleOfferSelection={()=>{}} btn_disabled /> */}
        {/* <RechargeHistory message={message} /> */}
        <CarouselWithButtons
          message={carouselWithButtonsMessage}
          img_popup_disable={false}
          preferLang="hindi"
        />
        <FormMessage message={formMessage} preferLang="hindi" />
      </div>
    );
  }
}
