const button = document.querySelector('.talk')
const content = document.querySelector('.content')

// const badGreetings = [
//   'Bitch, dont you talk to me like that',
//   'Go fuck yourself',
//   'I will kick you in the nuts',
//   'Ha ha ha ha',
//   `Ima school you, you piece of shit!`
// ]

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()

button.addEventListener('click', () => {
  recognition.start()
})

recognition.onstart = () => {
  console.log('Voice Recognition Activated')
}

recognition.onresult = (e) => {
  content.textContent = e.results[0][0].transcript
  readOutLoud(content.textContent)
}

const readOutLoud = (message) => {
  const speech = new SpeechSynthesisUtterance()

  //   const funnyReply =
  //     badGreetings[Math.floor(Math.random() * badGreetings.length)]
  speech.text = `${message}`
  console.clear()
  console.log(`The Computer Replied: "${speech.text}"`)

  speech.volume = 1
  speech.rate = 1.1
  speech.pitch = 1
  speech.lang = 'en-GB'

  window.speechSynthesis.speak(speech)
}
