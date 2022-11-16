/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */
export const handleAndroidBtnClick = (button, data) => {
  let android = localStorage.getItem('android')
    ? JSON.parse(localStorage.getItem('android'))
    : false
  if (android) {
    let payload = { button, data }
    window.androidObj.textToAndroid(JSON.stringify(payload))
  }
}

export const formattedPrice = price => {
  return Intl.NumberFormat('en-In', {
    style: 'currency',
    currency: 'INR'
  }).format(price)
}

export const fileToBase64 = file => {
  return new Promise(resolve => {
    var reader = new FileReader()
    // Read file content on file loaded event
    reader.onload = event => {
      resolve(event.target.result)
    }
    // Convert data to base64
    reader.readAsDataURL(file)
  })
}

export const checkMultipleExtension = filename => {
  let numberOfExtensions = filename.split('.')
  return !(numberOfExtensions.length > 2)
}

export const linkify = inputText => {
  let linkifiedText = inputText

  // URLs starting with http://, https://, or ftp://
  let urlPattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim
  linkifiedText = inputText.replace(
    urlPattern,
    '<a href="$1" target="_blank">$1</a>'
  )

  // URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  let pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim
  linkifiedText = linkifiedText.replace(
    pseudoUrlPattern,
    '$1<a href="http://$2" target="_blank">$2</a>'
  )

  // Change email addresses to mailto:: links.
  let emailPattern = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim
  linkifiedText = linkifiedText.replace(
    emailPattern,
    '<a href="mailto:$1">$1</a>'
  )
  return linkifiedText
}

export const isEmptyObject = obj => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false
    }
  }
  return true
}

export const isEmail = address => {
  let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  return regex.test(address)
}

export const getFileMimeType = file => {
  return new Promise((resolve) => {
    const filereader = new FileReader()
    filereader.onloadend = function(evt) {
      if (evt.target.readyState === FileReader.DONE) {
        const uint = new Uint8Array(evt.target.result)
        let bytes = []
        uint.forEach((byte) => {
          bytes.push(byte.toString(16))
        })
        const hex = bytes.join('').toUpperCase()
        resolve(getMimetype(hex))
      }
    }
    const blob = file.slice(0, 4)
    filereader.readAsArrayBuffer(blob)
  })
}

const getMimetype = (signature) => {
  switch (signature) {
    case '89504E47':
      return 'image/png'
    case '47494638':
      return 'image/gif'
    case '25504446':
      return 'application/pdf'
    case 'FFD8FFDB':
    case 'FFD8FFE0':
    case 'FFD8FFE1':
      return 'image/jpeg'
    case '504B0304':
      return 'application/zip'
    default:
      return 'Unknown filetype'
  }
}
