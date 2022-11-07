export const textMessage = {
  type: "text",
  sender: "chatbot",
  inputLock: false,
  quickReplies: [],
  skipLS: false,
  send_variable_to_apiai: false,
  sendVariableToLS: false,
  variable_name: "",
  delay: 0,
  containsHTML: true,
  payload: [
    {
      text:
        "<p class='ori-font-bold'>Information about Ashoka comes from his own inscriptions </p><p>other inscriptions that mention him or are possibly from his reign; and ancient literature, especially Buddhist texts.[14] These sources often contradict each other, although various historians have attempted to correlate their testimony.[15] Plenty is known or not known, and so, for example, while Ashoka is often attributed with building many hospitals during his time, there is no clear evidence any hospitals existed in ancient India during the 3rd century BC or that Ashoka was responsible for commissioning the construction of any</p>"
    },
    {
      lang: "hindi",
      text: "Information about Ashoka comes from his own inscriptions; "
    }
  ],
  timestamp: new Date()
};

export const seatMapMessage = {
  type: "form",
  sender: "chatbot",
  inputLock: false,
  quickReplies: [],
  skipLS: false,
  send_variable_to_apiai: false,
  sendVariableToLS: false,
  variable_name: "",
  delay: 0,
  payload: [
    {
      title: "seat Map title",
      subtitle: "<p class='ori-font-light'>hello i am html title</p>",
      randomSelection: true,
      clearSelection: true,
      submitButtonText: "Continue with recommendation for all",
      selectedSeats: [
        {
          name: "Swati Bhatia",
          seatNo: "1A",
          cost : 123
        },
        {
          name: "Vanshika Bhatia",
          seatNo: "2B",
          cost: 123
        },
        {
          name: "Harsh Bhagtani",
          seatNo: "1C",
          cost : 123
        },
        {
          name:"Shweta Bhatia",
          seatNo:"1D",
          cost: 123
        }
      ],
      passengerSelect: {
        name: "Passenger Select",
        placeholder: "Passenger Name",
        required: false,
        options: [
          { label: "Swati Bhatia", value: "Swati Bhatia" },
          { label: "Vanshika Bhatia", value: "Vanshika Bhatia" },
          { label: "Harsh Bhagtani", value: "Harsh Bhagtani" },
          { label: "Shweta Bhatia", value: "Shweta Bhatia" }
        ]
      },
      seatArrangement: [
        {
          rowName: "A",
          seats: [
            {
              name: "1A",
              isAllowed: true,
              cost: 123,
              type: "Super Practical",
              color: "##EB3F55"
            },
            {
              name: "2A",
              isAllowed: false,
              cost: 123,
              type: "super Practical",
              color: "##EB3F55",
              status: "Reserved"
            },
            {
              name: "3A",
              isAllowed: true,
              isNextGap: true,
              cost: 123,
              type: "super Practical",
              color: "##EB3F55"
            },
            {
              name: "4A",
              isAllowed: false,
              cost: 123,
              type: "super Practical",
              color: "##EB3F55",
              status: "Reserved"
            },
            {
              name: "5A",
              isAllowed: true,
              cost: 123,
              type: "super Practical",
              color: "##EB3F55"
            },
            {
              name: "6A",
              isAllowed: true,
              cost: 123,
              type: "super Practical",
              color: "##EB3F55"
            }
          ]
        },
        {
          rowName: "B",
          seats: [
            {
              name: "1B",
              isAllowed: true,
              cost: 123,
              type: "super Practical",
              color: "#2b589d"
            },
            {
              name: "2B",
              isAllowed: true,
              cost: 123,
              type: "super Practical",
              color: "##EB3F55"
            },
            {
              name: "3B",
              isAllowed: false,
              cost: 123,
              type: "super Practical",
              color: "##EB3F55",
              isNextGap: true,
              status: "Reserved"
            },
            {
              name: "4B",
              isAllowed: false,
              cost: 123,
              type: "super Practical",
              color: "##EB3F55",
              status: "Reserved"
            },
            {
              name: "5B",
              isAllowed: false,
              cost: 123,
              type: "super Practical",
              color: "#EB3F55",
              status: "Reserved"
            },
            {
              name: "6B",
              isAllowed: false,
              cost: 123,
              type: "super Practical",
              color: "#2b589d",
              status: "Reserved"
            }
          ]
        },
        {
          rowName: "C",
          seats: [
            {
              name: "1C",
              isAllowed: true,
              cost: 123,
              type: "super Practical",
              color: "#EB3F55"
            },
            {
              name: "2C",
              isAllowed: false,
              cost: 123,
              type: "super Practical",
              color: "#EB3F55",
              status: "Reserved"
            },
            {
              name: "3C",
              isAllowed: false,
              cost: 123,
              type: "super Practical",
              color: "#EB3F55",
              isNextGap: true,
              status: "Reserved"
            },
            {
              name: "4C",
              isAllowed: false,
              cost: 123,
              type: "super Practical",
              color: "#EB3F55",
              status: "Reserved"
            },
            {
              name: "5C",
              isAllowed: false,
              cost: 123,
              type: "super Practical",
              color: "#EB3F55",
              status: "Reserved"
            },
            {
              name: "6C",
              isAllowed: false,
              cost: 123,
              type: "super Practical",
              color: "#EB3F55",
              status: "Reserved"
            }
          ]
        },
        {
          rowName: "D",
          seats: [
            {
              name: "1D",
              isAllowed: true,
              cost: 123,
              type: "Super Practical",
              color: "#EB3F55"
            },
            {
              name: "2D",
              isAllowed: false,
              cost: 123,
              type: "Super Practical",
              isAllow: true,
              color: "#EB3F55",
              status: "Reserved"
            },
            {
              name: "3D",
              cost: 123,
              type: "Super Practical",
              color: "#EB3F55",
              isAllowed: false,
              isNextGap: true,
              status: "Lady Only"
            },
            {
              name: "4D",
              cost: 123,
              type: "Super Practical",
              isAllowed: true,
              color: "#EB3F55",
              status: "Reserved"
            },
            {
              name: "5D",
              cost: 123,
              type: "super Practical",
              isAllowed: true,
              color: "#EB3F55",
              status: "Reserved"
            },
            {
              name: "6D",
              isAllowed: false,
              cost: 123,
              type: "super Practical",
              color: "#EB3F55",
              status: "Reserved"
            }
          ]
        }
      ]
    }
    // {
    //   lang: "hindi",
    //   title: "seat Map title in Hindi",
    //   selectedSeatName: "1A",
    //   recommendedSeats: [
    //     {
    //       name: "SB",
    //       seatNo: "1A",
    //     },
    //     {
    //       name: "VB",
    //       seatNo: "2B",
    //     },
    //     {
    //       name: "",
    //       seatNo: "2A",
    //     },
    //     {
    //       name:"",
    //       seatNo:"3A",
    //     }
    //   ],
    //   seatArrangement: [
    //     {
    //       rowName: "A",
    //       seats: [
    //         {
    //           name: "1A",
    //           isAllowed: false,
    //           cost: 123,
    //           type: "Super Practical",
    //           color: "##EB3F55",
    //           status: "Reserved"
    //         },
    //         {
    //           name: "2A",
    //           isAllowed: false,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "##EB3F55",
    //           status: "Reserved"
    //         },
    //         {
    //           name: "3A",
    //           isAllowed: true,
    //           isNextGap: true,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "#000"
    //         },
    //         {
    //           name: "4A",
    //           isAllowed: false,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "##EB3F55",
    //           status: "Reserved"
    //         },
    //         {
    //           name: "5A",
    //           isAllowed: true,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "#000"
    //         },
    //         {
    //           name: "6A",
    //           isAllowed: true,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "#000"
    //         }
    //       ]
    //     },
    //     {
    //       rowName: "B",
    //       seats: [
    //         {
    //           name: "1B",
    //           isAllowed: true,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "#2b589d"
    //         },
    //         {
    //           name: "2B",
    //           isAllowed: false,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "##EB3F55",
    //           status: "Reserved"
    //         },
    //         {
    //           name: "3B",
    //           isAllowed: false,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "##EB3F55",
    //           isNextGap: true,
    //           status: "Reserved"
    //         },
    //         {
    //           name: "4B",
    //           isAllowed: false,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "##EB3F55",
    //           status: "Reserved"
    //         },
    //         {
    //           name: "5B",
    //           isAllowed: false,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "#EB3F55",
    //           status: "Reserved"
    //         },
    //         {
    //           name: "6B",
    //           isAllowed: false,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "#2b589d",
    //           status: "Reserved"
    //         }
    //       ]
    //     },
    //     {
    //       rowName: "C",
    //       seats: [
    //         {
    //           name: "1C",
    //           isAllowed: false,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "#EB3F55",
    //           status: "Reserved"
    //         },
    //         {
    //           name: "2C",
    //           isAllowed: false,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "#EB3F55",
    //           status: "Reserved"
    //         },
    //         {
    //           name: "3C",
    //           isAllowed: false,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "#EB3F55",
    //           isNextGap: true,
    //           status: "Reserved"
    //         },
    //         {
    //           name: "4C",
    //           isAllowed: false,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "#EB3F55",
    //           status: "Reserved"
    //         },
    //         {
    //           name: "5C",
    //           isAllowed: false,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "#EB3F55",
    //           status: "Reserved"
    //         },
    //         {
    //           name: "6C",
    //           isAllowed: false,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "#EB3F55",
    //           status: "Reserved"
    //         }
    //       ]
    //     },
    //     {
    //       rowName: "D",
    //       seats: [
    //         {
    //           name: "1D",
    //           isAllowed: true,
    //           cost: 123,
    //           type: "Super Practical",
    //           color: "#EB3F55"
    //         },
    //         {
    //           name: "2D",
    //           isAllowed: false,
    //           cost: 123,
    //           type: "Super Practical",
    //           isAllow: true,
    //           color: "#EB3F55",
    //           status: "Reserved"
    //         },
    //         {
    //           name: "3D",
    //           cost: 123,
    //           type: "Super Practical",
    //           color: "#EB3F55",
    //           isAllowed: false,
    //           isNextGap: true,
    //           status: "Lady Only"
    //         },
    //         {
    //           name: "4D",
    //           cost: 123,
    //           type: "Super Practical",
    //           isAllowed: true,
    //           color: "#EB3F55",
    //           status: "Reserved"
    //         },
    //         {
    //           name: "5D",
    //           cost: 123,
    //           type: "super Practical",
    //           isAllowed: true,
    //           color: "#EB3F55",
    //           status: "Reserved"
    //         },
    //         {
    //           name: "6D",
    //           isAllowed: false,
    //           cost: 123,
    //           type: "super Practical",
    //           color: "#EB3F55",
    //           status: "Reserved"
    //         }
    //       ]
    //     }
    //   ]
    // }
  ],
  timestamp: new Date()
};

export const formMessage = {
  type: "form",
  sender: "chatbot",
  inputLock: false,
  quickReplies: [],
  skipLS: false,
  send_variable_to_apiai: false,
  sendVariableToLS: false,
  variable_name: "",
  delay: 0,
  payload: [
    {
      title: "form title",
      selectedValue: { rate: 4, rangeDates: [] },
      formData: [
        {
          type: "input",
          title: "Email id",
          displayLabel: "Email",
          props: {
            type: "email",
            placeholder: "Enter your EmailID",
            name: "email",
            required: true
          }
        },
        {
          type: "datePicker",
          title: "select your departure date",
          disabledTimestamp: "1629455793767",
          displayLabel: "Departure date",
          props: {
            placeholder: "departure date",
            name: "departDate",
            format: "DD-MM-YYYY",
            required: false
          }
        },
        {
          type: "dateRangePicker",
          title: "Select Start and End date",
          disabledDateRange: [],
          displayLabel: "Vacation Duration",
          props: {
            placeholder: ["Start Date", "End Date"],
            format: "YYYY-MM-DD HH-mm A",
            name: "rangeDates",
            disabled: [true, false],
            showTime: true,
            required: false
          }
        },
        {
          type: "radioGroup",
          title: "Passanger1",
          displayLabel: "Passanger 1",
          props: {
            name: "bag1",
            required: true,
            size: "small",
            buttonStyle: "solid",
            optionType: "button",
            options: [
              { label: "80kg", value: "80kgId" },
              { label: "12kg", value: "12kgId" },
              { label: "15kg", value: "15kgId" }
            ]
          }
        },
        {
          type: "radioGroup",
          title: "Passanger2",
          vertical: true,
          displayLabel: "Passanger 2",
          props: {
            name: "bag2",
            required: true,
            options: [
              { label: "10kg", value: "10kgId" },
              { label: "12kg", value: "12kgId" },
              { label: "15kg", value: "15kgId" },
              { label: "20kg", value: "20kgId" },
              { label: "25kg", value: "25kgId" }
            ]
          }
        },
        {
          type: "rating",
          title: "rate this feature",
          displayLabel: "rating",
          props: {
            name: "rate",
            required: true
          }
        }
      ]
    },
    {
      lang: "hindi",
      title: "form title",
      selectedValue: { rate: 4 },
      formData: [
        {
          type: "datePicker",
          title: "select your departure date",
          disabledTimestamp: "1629455793767",
          displayLabel: "Departure date",
          props: {
            placeholder: "departure date",
            name: "departDate",
            format: "DD-MM-YYYY",
            required: false
          }
        },
        {
          type: "radioGroup",
          title: "Passanger1",
          displayLabel: "Passanger 1",
          props: {
            name: "bag1",
            required: true,
            size: "small",
            buttonStyle: "solid",
            optionType: "button",
            options: [
              { label: "80kg", value: "80kgId" },
              { label: "12kg", value: "12kgId" },
              { label: "15kg", value: "15kgId" }
            ]
          }
        },
        {
          type: "radioGroup",
          title: "Passanger2",
          vertical: true,
          displayLabel: "Passanger 2",
          props: {
            name: "bag2",
            required: false,
            options: [
              { label: "10kg", value: "10kgId" },
              { label: "12kg", value: "12kgId" },
              { label: "15kg", value: "15kgId" },
              { label: "20kg", value: "20kgId" },
              { label: "25kg", value: "25kgId" }
            ]
          }
        },
        {
          type: "select",
          title: "Pagganger3",
          displayLabel: "Passanger 3",
          props: {
            name: "bag3",
            placeholder: "Select Baggage",
            required: false,
            options: [
              { label: "10kg", value: "10kgId" },
              { label: "12kg", value: "12kgId" },
              { label: "15kg", value: "15kgId" },
              { label: "20kg", value: "20kgId" },
              { label: "25kg", value: "25kgId" }
            ]
          }
        },
        {
          type: "rating",
          title: "rate this feature",
          displayLabel: "rating",
          props: {
            name: "rate",
            required: false
          }
        }
      ]
    }
  ],
  timestamp: new Date()
};

export const checkboxMessage = {
  sender: "chatbot",
  type: "checkbox",
  inputLock: false,
  inputLockMessage: "",
  quickReplies: [],
  skipLS: false,
  send_variable_to_apiai: false,
  sendVariableToLS: false,
  variable_name: "",
  delay: 0,
  payload: [
    {
      subtype: "dishRechargeDetails",
      title: "Checkbox type message",
      subtitle: "Your Dish Recharge Details are mentioned below",
      imageUrl:
        "https://maruti-oriserve-images.s3.ap-south-1.amazonaws.com/Spyder_WhatsApp_700x415.jpg",
      data: {},
      maxSelectionLimit: 3,
      options: [
        {
          label: "1 Ka haal ba",
          value: "1 ka haal ba"
        },
        {
          label: "2 Thik ba",
          value: "2 thik ba"
        },
        {
          label: "3 Tu aapna bata, kha bare",
          value: "3 tu aapna bata, kha bare"
        },
        {
          label: "4 Hume thike bani",
          value: "4 hume thike bani"
        },
        {
          label: "5 Chaal chal rahal bade, chalak bana tare na",
          value: "5 chaal chal rahal bade, chalak bana tare na"
        },
        {
          label: "6 Offer details",
          value: "6 offer details"
        },
        {
          label: "7 Recharge now",
          value: "7 recharge now"
        },
        {
          label: "8 Tu aapna bata, kha bare",
          value: "8 tu aapna bata, kha bare"
        },
        {
          label: "9 Hume thike bani",
          value: "9 hume thike bani"
        },
        {
          label: "10 Chaal chal rahal bade, chalak bana tare na",
          value: "10 chaal chal rahal bade, chalak bana tare na"
        },
        {
          label: "11 Ka haal ba",
          value: "11 ka haal ba"
        },
        {
          label: "12 Thik ba",
          value: "12 thik ba"
        },
        {
          label: "13 Tu aapna bata, kha bare",
          value: "13 tu aapna bata, kha bare"
        },
        {
          label: "14 Hume thike bani",
          value: "14 hume thike bani"
        },
        {
          label: "15 Chaal chal rahal bade, chalak bana tare na",
          value: "15 chaal chal rahal bade, chalak bana tare na"
        }
      ],
      buttons: [
        {
          text: "Google",
          url: "http://www.google.com",
          postbackRes: ""
        },
        {
          text: "select option 3.1",
          url: "",
          postbackRes: "opt3.1"
        },
        {
          text: "select option 3.2",
          url: "",
          postbackRes: "opt3.2"
        },
        {
          text: "select option 3.3",
          url: "",
          postbackRes: "hi"
        },
        {
          text: "Google",
          url: "http://www.google.com",
          postbackRes: ""
        },
        {
          text: "select option 4.1",
          url: "",
          postbackRes: "opt4.1"
        },
        {
          text: "select option 4.2",
          url: "",
          postbackRes: "opt4.2"
        },
        {
          text: "select option 4.3",
          url: "",
          postbackRes: "hi"
        }
      ]
    },
    {
      lang: "hindi",
      subtype: "dishRechargeDetails",
      title: "Checkbox type message",
      subtitle: "Your Dish Recharge Details are mentioned below",
      imageUrl:
        "https://maruti-oriserve-images.s3.ap-south-1.amazonaws.com/Spyder_WhatsApp_700x415.jpg",
      data: {},
      options: [
        {
          label: "1 Ka haal ba",
          value: "1 ka haal ba"
        },
        {
          label: "2 Thik ba",
          value: "2 thik ba"
        },
        {
          label: "3 Tu aapna bata, kha bare",
          value: "3 tu aapna bata, kha bare"
        },
        {
          label: "4 Hume thike bani",
          value: "4 hume thike bani"
        },
        {
          label: "5 Chaal chal rahal bade, chalak bana tare na",
          value: "5 chaal chal rahal bade, chalak bana tare na"
        },
        {
          label: "6 Offer details",
          value: "6 offer details"
        },
        {
          label: "7 Recharge now",
          value: "7 recharge now"
        },
        {
          label: "8 Tu aapna bata, kha bare",
          value: "8 tu aapna bata, kha bare"
        },
        {
          label: "9 Hume thike bani",
          value: "9 hume thike bani"
        },
        {
          label: "10 Chaal chal rahal bade, chalak bana tare na",
          value: "10 chaal chal rahal bade, chalak bana tare na"
        },
        {
          label: "11 Ka haal ba",
          value: "11 ka haal ba"
        },
        {
          label: "12 Thik ba",
          value: "12 thik ba"
        },
        {
          label: "13 Tu aapna bata, kha bare",
          value: "13 tu aapna bata, kha bare"
        },
        {
          label: "14 Hume thike bani",
          value: "14 hume thike bani"
        },
        {
          label: "15 Chaal chal rahal bade, chalak bana tare na",
          value: "15 chaal chal rahal bade, chalak bana tare na"
        }
      ],
      buttons: [
        {
          text: "Google",
          url: "http://www.google.com",
          postbackRes: ""
        },
        {
          text: "select option 3.1",
          url: "",
          postbackRes: "opt3.1"
        },
        {
          text: "select option 3.2",
          url: "",
          postbackRes: "opt3.2"
        },
        {
          text: "select option 3.3",
          url: "",
          postbackRes: "hi"
        },
        {
          text: "Google",
          url: "http://www.google.com",
          postbackRes: ""
        },
        {
          text: "select option 4.1",
          url: "",
          postbackRes: "opt4.1"
        },
        {
          text: "select option 4.2",
          url: "",
          postbackRes: "opt4.2"
        },
        {
          text: "select option 4.3",
          url: "",
          postbackRes: "hi"
        }
      ]
    }
  ]
};

export const textWithMediaMessage = {
  sender: "chatbot",
  type: "checkbox",
  inputLock: false,
  inputLockMessage: "",
  quickReplies: [],
  skipLS: false,
  send_variable_to_apiai: false,
  sendVariableToLS: false,
  variable_name: "",
  delay: 0,
  payload: [
    {
      subtype: "dishRechargeDetails",
      title: "Checkbox type message",
      subtitle: "Your Dish Recharge Details are mentioned below",
      containsHtmlSubtitle: false,
      imageRedirectUrl: "https://oriserve.com/",
      imageUrl:
        "https://maruti-oriserve-images.s3.ap-south-1.amazonaws.com/Spyder_WhatsApp_700x415.jpg",
      accordian: [
        {
          title: "first title",
          description: "first collapse description"
        },
        {
          title: "second title",
          description: "second collapse description"
        },
        {
          title: "third title",
          description: "third collapse description"
        },
        {
          title: "fourth title",
          description: "fourth collapse description"
        }
      ],
      buttons: [
        {
          text: "Google",
          url: "http://www.google.com",
          postbackRes: ""
        },
        {
          text: "select option 3.1",
          url: "",
          postbackRes: "opt3.1"
        },
        {
          text: "select option 3.2",
          url: "",
          postbackRes: "opt3.2"
        },
        {
          text: "select option 3.3",
          url: "",
          postbackRes: "hi"
        },
        {
          text: "Google",
          url: "http://www.google.com",
          postbackRes: ""
        },
        {
          text: "select option 4.1",
          url: "",
          postbackRes: "opt4.1"
        },
        {
          text: "select option 4.2",
          url: "",
          postbackRes: "opt4.2"
        },
        {
          text: "select option 4.3",
          url: "",
          postbackRes: "hi"
        }
      ]
    },
    {
      lang: "hindi",
      title: "Translated title",
      subtitle: "Your Dish Recharge Details are mentioned below",
      imageUrl:
        "https://maruti-oriserve-images.s3.ap-south-1.amazonaws.com/Spyder_WhatsApp_700x415.jpg",
      buttons: [
        {
          text: "Google",
          url: "http://www.google.com",
          postbackRes: ""
        },
        {
          text: "select option 4.2",
          url: "",
          postbackRes: "opt4.2"
        },
        {
          text: "select option 4.3",
          url: "",
          postbackRes: "hi"
        }
      ]
    }
  ]
};

export const carouselWithButtonsMessage = {
  sender: "chatbot",
  type: "checkbox",
  inputLock: false,
  inputLockMessage: "",
  quickReplies: [],
  skipLS: false,
  send_variable_to_apiai: false,
  sendVariableToLS: false,
  variable_name: "",
  delay: 0,
  payload: [
    {
      text:
        "my vc_number is 13124214212. i want to recharge with 100rs. how will i get my recharge_details",
      title: "carousel title",
      subtitle: "carousel subtitle",
      options: [
        {
          optionInfo: { key: "option1" },
          title: "option1 carousel title",
          subtitle: "option1 carousel subtitle",
          mediaType: "image",
          imageRedirectUrl: "https://oriserve.com/",
          mediaUrl: "http://via.placeholder.com/150x450",
          buttons: [
            {
              text: "Google",
              url: "http://www.google.com",
              postbackRes: ""
            },
            {
              text: "select option 1.1",
              url: "",
              postbackRes: "opt1.1"
            },
            {
              text: "select option 1.2",
              url: "",
              postbackRes: "opt1.2"
            },
            {
              text: "select option 1.3",
              url: "",
              postbackRes: "opt1.3"
            }
          ]
        },
        {
          optionInfo: { key: "option2" },
          title: "option2 carousel title",
          subtitle: "option2 carousel subtitle",
          mediaType: "image",
          imageRedirectUrl: "https://oriserve.com/",
          mediaUrl: "http://via.placeholder.com/200x100",
          buttons: [
            {
              text: "Google",
              url: "http://www.google.com",
              postbackRes: ""
            },
            {
              text: "select option 2.1",
              url: "",
              postbackRes: "opt2.1"
            },
            {
              text: "select option 2.2",
              url: "",
              postbackRes: "opt2.2"
            },
            {
              text: "select option 2.3",
              url: "",
              postbackRes: "hi"
            }
          ]
        },
        {
          optionInfo: { key: "option3" },
          title: "option3 carousel title",
          subtitle: "option3 carousel subtitle",
          mediaType: "image",
          imageRedirectUrl: "https://oriserve.com/",
          mediaUrl: "http://via.placeholder.com/200x100",
          buttons: [
            {
              text: "Google",
              url: "http://www.google.com",
              postbackRes: ""
            },
            {
              text: "select option 3.1",
              url: "",
              postbackRes: "opt3.1"
            },
            {
              text: "select option 3.2",
              url: "",
              postbackRes: "opt3.2"
            },
            {
              text: "select option 3.3",
              url: "",
              postbackRes: "hi"
            }
          ]
        }
      ],
      buttons: [
        {
          text: "main button 1",
          url: "http://www.google.com",
          b_id: "",
          postbackRes: ""
        },
        {
          text: "main button 2",
          b_id: "",
          postbackRes: "hi"
        },
        {
          text: "main button 3",
          url: "",
          b_id: "",
          postbackRes: ""
        }
      ]
    },
    {
      lang: "hindi",
      text:
        "my vc_number is 13124214212. i want to recharge with 100rs. how will i get my recharge_details",
      title: "carousel title",
      subtitle: "carousel subtitle",
      options: [
        {
          optionInfo: { key: "option1" },
          title: "option1 carousel title",
          subtitle: "option1 carousel subtitle",
          mediaType: "image",
          imageRedirectUrl: "https://oriserve.com/",
          mediaUrl: "http://via.placeholder.com/150x450",
          buttons: [
            {
              text: "Google",
              url: "http://www.google.com",
              postbackRes: ""
            },
            {
              text: "select option 1.1",
              url: "",
              postbackRes: "opt1.1"
            },
            {
              text: "select option 1.2",
              url: "",
              postbackRes: "opt1.2"
            },
            {
              text: "select option 1.3",
              url: "",
              postbackRes: "opt1.3"
            }
          ]
        },
        {
          optionInfo: { key: "option2" },
          title: "option2 carousel title",
          subtitle: "option2 carousel subtitle",
          mediaType: "image",
          imageRedirectUrl: "https://oriserve.com/",
          mediaUrl: "http://via.placeholder.com/200x100",
          buttons: [
            {
              text: "Google",
              url: "http://www.google.com",
              postbackRes: ""
            },
            {
              text: "select option 2.1",
              url: "",
              postbackRes: "opt2.1"
            },
            {
              text: "select option 2.2",
              url: "",
              postbackRes: "opt2.2"
            },
            {
              text: "select option 2.3",
              url: "",
              postbackRes: "hi"
            }
          ]
        },
        {
          optionInfo: { key: "option3" },
          title: "option3 carousel title",
          subtitle: "option3 carousel subtitle",
          mediaType: "image",
          imageRedirectUrl: "https://oriserve.com/",
          mediaUrl: "http://via.placeholder.com/200x100",
          buttons: [
            {
              text: "Google",
              url: "http://www.google.com",
              postbackRes: ""
            },
            {
              text: "select option 3.1",
              url: "",
              postbackRes: "opt3.1"
            },
            {
              text: "select option 3.2",
              url: "",
              postbackRes: "opt3.2"
            },
            {
              text: "select option 3.3",
              url: "",
              postbackRes: "hi"
            }
          ]
        }
      ],
      buttons: [
        {
          text: "main button 1",
          url: "http://www.google.com",
          b_id: "",
          postbackRes: ""
        },
        {
          text: "main button 2",
          b_id: "",
          postbackRes: "hi"
        },
        {
          text: "main button 3",
          url: "",
          b_id: "",
          postbackRes: ""
        }
      ]
    }
  ]
};

export const carouselMenu = {
  sender: "chatbot",
  type: "checkbox",
  inputLock: false,
  inputLockMessage: "",
  quickReplies: [],
  skipLS: false,
  send_variable_to_apiai: false,
  sendVariableToLS: false,
  variable_name: "",
  delay: 0,
  payload: [
    {
      title: "carousel title",
      subtitle: "carousel subtitle",
      selectable: true,
      options: [
        {
          title: "option1 carousel title",
          subtitle: "option1 carousel subtitle",
          mediaType: "image",
          imageRedirectUrl: "https://oriserve.com/",
          mediaUrl: "http://via.placeholder.com/150x450",
          selected: true,
          buttons: [
            {
              text: "Google",
              url: "http://www.google.com",
              postbackRes: ""
            },
            {
              text: "select option 1.1",
              url: "",
              postbackRes: "opt1.1"
            }
          ]
        },
        {
          title: "option2 carousel title",
          subtitle: "option2 carousel subtitle",
          mediaType: "image",
          imageRedirectUrl: "https://oriserve.com/",
          mediaUrl: "http://via.placeholder.com/200x100",
          buttons: [
            {
              text: "Google",
              url: "http://www.google.com",
              postbackRes: ""
            },
            {
              text: "select option 2.1",
              url: "",
              postbackRes: "opt2.1"
            },
            {
              text: "select option 2.2",
              url: "",
              postbackRes: "opt2.2"
            },
            {
              text: "select option 2.3",
              url: "",
              postbackRes: "hi"
            }
          ]
        },
        {
          title: "option3 carousel title",
          subtitle: "option3 carousel subtitle",
          mediaType: "image",
          imageRedirectUrl: "https://oriserve.com/",
          mediaUrl: "http://via.placeholder.com/200x100",
          buttons: [
            {
              text: "Google",
              url: "http://www.google.com",
              postbackRes: ""
            },
            {
              text: "select option 3.1",
              url: "",
              postbackRes: "opt3.1"
            },
            {
              text: "select option 3.2",
              url: "",
              postbackRes: "opt3.2"
            },
            {
              text: "select option 3.3",
              url: "",
              postbackRes: "hi"
            }
          ]
        }
      ],
      buttons: [
        {
          text: "main button 1",
          url: "http://www.google.com",
          b_id: "",
          postbackRes: ""
        },
        {
          text: "main button 3",
          url: "",
          b_id: "",
          postbackRes: ""
        }
      ]
    }
  ]
};

export const uploadMessage = {
  sender: "chatbot",
  type: "upload",
  inputLock: false,
  inputLockMessage: "",
  quickReplies: [],
  skipLS: false,
  send_variable_to_apiai: false,
  sendVariableToLS: false,
  variable_name: "",
  delay: 0,
  payload: [
    {
      title: "carousel title",
      subtitle: "carousel subtitle",
      accept: "",
      buttons: [
        {
          text: "Google",
          url: "http://www.google.com",
          postbackRes: ""
        },
        {
          text: "select option 3.1",
          url: "",
          postbackRes: "opt3.1"
        },
        {
          text: "select option 3.2",
          url: "",
          postbackRes: "opt3.2"
        }
      ]
    }
  ]
};

export const message = {
  NLPSnapshot: {
    entitySnapshot: [
      {
        score: 0.971124,
        endIndex: 17,
        startIndex: 10,
        type: "action_variable::recharge",
        entity: "recharge"
      },
      {
        score: 0.6106828,
        endIndex: 27,
        startIndex: 24,
        type: "troubleshoot_error::101",
        entity: "101"
      }
    ],
    intentSnapshot: {
      score: 0.8424482,
      name: "utilities_modify"
    }
  },
  payload: {
    list: [
      { value: "1", label: "hello world" },
      { value: "2", label: "hii i am vivek" },
      {
        value: "5",
        label:
          "playing cricket in ahmedabad india. do you want to play cricket please tell me"
      },
      { value: "3", label: "how are you ?" },
      { value: "4", label: "working hour" }
    ]
  }
  //-----------carousel payload start -----------
  // payload: {
  //     text: "my vc_number is 13124214212. i want to recharge with 100rs. how will i get my recharge_details",
  //     title: "carousel title",
  //     subtitle: "carousel subtitle",
  //     options: [
  //         {
  //             optionInfo: { key: "option1" },
  //             title: "option1 carousel title",
  //             subtitle: "option1 carousel subtitle",
  //             mediaType: "image",
  //             mediaUrl: "http://via.placeholder.com/150x450",
  //             buttons: [
  //                 {
  //                     text: "Google",
  //                     url: "http://www.google.com",
  //                     postbackRes: ""
  //                 },
  //                 {
  //                     text: "select option 1.1",
  //                     url: "",
  //                     postbackRes: "opt1.1"
  //                 },
  //                 {
  //                     text: "select option 1.2",
  //                     url: "",
  //                     postbackRes: "opt1.2"
  //                 },
  //                 {
  //                     text: "select option 1.3",
  //                     url: "",
  //                     postbackRes: "opt1.3"
  //                 }
  //             ]
  //         },
  //         {
  //             optionInfo: { "key": "option2" },
  //             title: "option2 carousel title",
  //             subtitle: "option2 carousel subtitle",
  //             mediaType: "image",
  //             mediaUrl: "http://via.placeholder.com/200x100", buttons: [
  //                 {
  //                     text: "Google",
  //                     url: "http://www.google.com",
  //                     postbackRes: ""
  //                 },
  //                 {
  //                     text: "select option 2.1",
  //                     url: "",
  //                     postbackRes: "opt2.1"
  //                 },
  //                 {
  //                     text: "select option 2.2",
  //                     url: "",
  //                     postbackRes: "opt2.2"
  //                 },
  //                 {
  //                     text: "select option 2.3",
  //                     url: "",
  //                     postbackRes: "hi"
  //                 }
  //             ]
  //         },
  //         {
  //             optionInfo: { "key": "option3" },
  //             title: "option3 carousel title",
  //             subtitle: "option3 carousel subtitle",
  //             mediaType: "image",
  //             mediaUrl: "http://via.placeholder.com/200x100",
  //             buttons: [
  //                 {
  //                     text: "Google",
  //                     url: "http://www.google.com",
  //                     postbackRes: ""
  //                 },
  //                 {
  //                     text: "select option 3.1",
  //                     url: "",
  //                     postbackRes: "opt3.1"
  //                 },
  //                 {
  //                     text: "select option 3.2",
  //                     url: "",
  //                     postbackRes: "opt3.2"
  //                 },
  //                 {
  //                     text: "select option 3.3",
  //                     url: "",
  //                     postbackRes: "hi"
  //                 }
  //             ]
  //         }
  //     ],
  //     buttons: [
  //         {
  //             text: "main button 1",
  //             url: "http://www.google.com",
  //             b_id: "",
  //             postbackRes: ""
  //         },
  //         {
  //             text: "main button 2",
  //             b_id: "",
  //             postbackRes: "hi"
  //         },
  //         {
  //             text: "main button 3",
  //             url: "", b_id: "",
  //             postbackRes: ""
  //         }
  //     ]
  // },
  //-----------carousel payload end ------------
  // containsHTML: true,
  // payload: {
  //   text: `<!DOCTYPE html>
  //     <html lang="en">
  //     <head>
  //       <meta charset="utf-8">
  //       <meta name="viewport" content="width=device-width, initial-scale=1">
  //       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  //       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  //       <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  //     </head>
  //     <body>
  //     <div class="ori-full-width" style="width:200px">
  //     <p style="font-size:13px;"><b>{planName}</b></p>
  //       <div class="progress">
  //         <div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width:{percentLeft}">
  //         </div>
  //         <div class="progress" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width:{percentUsed}">
  //               <p style="text-align:center;font-size:1vw;margin-top: 0.2vh;color: grey;font-weight:600">{usedData} used</p>
  //         </div>
  //       </div>
  //       <p style="font-size:13px;text-align: center">Total Data : {totalData}</p>
  //       <!-- <p style="font-size:13px">Used Data=>{usedData},&nbsp;&nbsp;Total Data=>{totalData},&nbsp;&nbsp;&nbsp;&nbsp;Left Data=>{leftData}</p> --/>
  //     </div>
  //     </body>
  //     </html>`,
  //   title: "dish tv",
  //   imageUrl: "https://dummyimage.com/250x450/fff/000",
  //   // url: "https://www.youtube.com/embed/PC_S3UFUMvI",
  //   subtitle: "Please select one option from the following in order to proceed",
  //   // checkbox with media options
  //   options: [
  //     { value: "1", label: 'hello world' },
  //     { value: '2', label: 'hii i am vivek' },
  //     { value: '5', label: 'playing cricket in ahmedabad india. do you want to play cricket please tell me' },
  //     { value: '3', label: 'how are you ?' },
  //     { value: '4', label: 'working hour' },
  //   ],
  //   list: [
  //     { value: '1', label: 'hello world' },
  //     { value: '2', label: 'hii i am vivek' },
  //     { value: '5', label: 'playing cricket in ahmedabad india. do you want to play cricket please tell me' },
  //     { value: '3', label: 'how are you ?' },
  //     { value: '4', label: 'working hour' },
  //   ],

  // data: {
  //   vc_number: 12345675,
  //   recharge_offers: [
  //     {
  //       offerId: 104,
  //       offerAmount: "1025.00",
  //       offerName: "HD entertainment at the price of SD. Enjoy 265+ chnls and 33 HD chnls. Recharge with GOLD CLUB HD at Rs.3060 + GST= Rs.3611 for 12months. Recharge Now! TnC",
  //       offerMessage: "HD entertainment at the price of SD. Enjoy 265+ chnls and 33 HD chnls. Recharge with GOLD CLUB HD at Rs.3060 + GST= Rs.3611 for 12months. Recharge Now! TnC"
  //     },
  //     null,
  //     {
  //       offerId: 105,
  //       offerAmount: "1032.00",
  //       offerName: "HD entertainment at the price of SD. Recharge Now! TnC",
  //       offerMessage: "Recharge with GOLD CLUB HD at Rs.3060 + GST= Rs.3611 for 12months."
  //     },
  //     {
  //       offerId: 106,
  //       offerAmount: "1235.00",
  //       offerName: " Recharge with GOLD CLUB HD at Rs.3060 + GST= Rs.3611 for 12months.",
  //       offerMessage: "HD entertainment at the price of SD"
  //     },
  //     {
  //       offerId: null
  //     }
  //   ]
  // },

  // recharge history

  // data: {
  //     vc_number: "12345645",
  //     transactions_array: [
  //         {
  //             Amount: 500,
  //             PaymentMode: "offline",
  //             TransactionDate: "20 jan 2017"
  //         },
  //         {
  //             Amount: 100,
  //             PaymentMode: "offline",
  //             TransactionDate: "15 jan 2017"
  //         },
  // {
  //     Amount: 3100,
  //     PaymentMode: "offline",
  //     TransactionDate: "10 jun 2017"
  // },
  // {
  //     Amount: 500,
  //     PaymentMode: "offline",
  //     TransactionDate: "20 jan 2017"
  // },
  // {
  //     Amount: 100,
  //     PaymentMode: "offline",
  //     TransactionDate: "15 jan 2017"
  // },
  // {
  //     Amount: 3100,
  //     PaymentMode: "offline",
  //     TransactionDate: "10 jun 2017"
  // },
  // {
  //     Amount: 3004,
  //     PaymentMode: "offline",
  //     TransactionDate: "14 jan 2017"
  // },
  // {
  //     Amount: 200,
  //     PaymentMode: "offline",
  //     TransactionDate: "12 jan 2017"
  // },
  // {
  //     Amount: 500,
  //     PaymentMode: "offline",
  //     TransactionDate: "20 jan 2017"
  // },
  // {
  //     Amount: 100,
  //     PaymentMode: "offline",
  //     TransactionDate: "15 jan 2017"
  // },
  // {
  //     Amount: 3100,
  //     PaymentMode: "offline",
  //     TransactionDate: "10 jun 2017"
  // },
  // {
  //     Amount: 3004,
  //     PaymentMode: "offline",
  //     TransactionDate: "14 jan 2017"
  // },
  // {
  //     Amount: 200,
  //     PaymentMode: "offline",
  //     TransactionDate: "12 jan 2017"
  // },
  // ]
  // },

  // //     //---------- carousel data --------

  // buttons: [
  //   {
  //     text: "Recharge My Dish TV",
  //     url: ""
  //   },
  //   {
  //     text: "Other Queries",
  //     url: ""
  //   },
  //   {
  //     text: "Recharge Offers",
  //     url: ""
  //   },
  //   {
  //     text: "Current Balance",
  //     url: ""
  //   },
  //   {
  //     text: "Other Queries",
  //     url: ""
  //   },
  //   {
  //     text: "Recharge Offers",
  //     url: ""
  //   },
  //   {
  //     text: "Current Balance",
  //     url: ""
  //   }
  // ],
  // }
};
