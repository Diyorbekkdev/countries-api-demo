const searchInput = document.querySelector(".searchInput");
const searchResult = document.querySelector(".search_result");
// const searchCount = document.querySelector(".count");





var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = "#JSGF V1.0;";
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = "en-US";
recognition.interimResults = false;

recognition.onresult = function (event) {
  var last = event.results.length - 1;
  var command = event.results[last][0].transcript;
  if (command == "dark") {
    document.body.classList.toggle("dark");
  } else {
    search = command;
    searchInput.value = command;
    if(search){
      getCountries(`https://restcountries.com/v3.1/name/${search}`);
    }
  }

  if (command == "go home page") {
    window.location.href = 'https://www.youtube.com/';    
  } else {
    search = command;
    searchInput.value = command;
  }
  
};

recognition.onspeechend = function () {
  recognition.stop();
};

searchInput.addEventListener("click", function () {
  console.log("working");
});
// document.querySelector('#btnGiveCommand').addEventListener('click', function() {
//   recognition.start();
// });

const btnGiveCommand = document.querySelector("#btnGiveCommand");
let isListening = false;

btnGiveCommand.addEventListener("click", function () {
  if (isListening) {
    stopListening();
  } else {
    startListening();
  }
});

function startListening() {
  recognition.start();
  isListening = true;
  btnGiveCommand.classList.add("button-active");
}

function stopListening() {
  recognition.stop();
  isListening = false;
  btnGiveCommand.classList.remove("button-active");
}

recognition.onstart = function () {
  console.log("Speech recognition started");
};

recognition.onend = function () {
  console.log("Speech recognition ended");
  stopListening();
};



