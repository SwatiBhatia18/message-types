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

export const checkDeviceIsMobile = () => {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return true
  }

  if (/android/i.test(userAgent)) {
    return true
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return true
  }

  return false
}
