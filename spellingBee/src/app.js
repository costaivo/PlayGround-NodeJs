import Speech from "speak-tts";

const _addVoicesList = voices => {
  const list = window.document.createElement("div");
  let html =
    '<h2>Available Voices</h2><select id="languages"><option value="">autodetect language</option>';
  voices.forEach(voice => {
    html += `<option value="${voice.lang}" data-name="${voice.name}">${
      voice.name
    } (${voice.lang})</option>`;
  });
  list.innerHTML = html;
  window.document.getElementById('mainHeader').appendChild(list);
};

const _wordsToSpell = [
    'rat',
    'bat',
    'tap',
    'noticeable',
    'population',
    'imagination',
    'gentleman',
    'invitation',
    'abundant',
    'permission',
    'scratch',
    'curriculum',
    'synthetic',
    'catalogue',
    'surrender',
    'physician',
    'whistling',
    'doubtful',
    'laughter',
    'ascending',
    'foreign',
    'earthquake',
    'government',
    'scholarship',
    'mysterious',
    'announcement',
    'environment',
    'appreciation',
    'expenditure',
    'interrogation',
    'catastrophe',
    'perseverance',
    'received'
];

let scoreCount =0;
let wordIndex=0;
let totalIncorrectAttempts=0;
let currentIncorrectAttempts=0;

function _init() {
  const speech = new Speech();
  speech
    .init({
      volume: 0.5,
      lang: "en-GB",
      rate: 1,
      pitch: 1,
      //'voice':'Google UK English Male',
      //'splitSentences': false,
      listeners: {
        onvoiceschanged: voices => {
          console.log("Voices changed", voices);
        }
      }
    })
    .then(data => {
      console.log("Speech is ready", data);
      _addVoicesList(data.voices);
      _prepareSpeakButton(speech);
    })
    .catch(e => {
      console.error("An error occured while initializing : ", e);
    });
  const text = speech.hasBrowserSupport()
    ? "Hurray, your browser supports speech synthesis"
    : "Your browser does NOT support speech synthesis. Try using Chrome of Safari instead !";
  document.getElementById("support").innerHTML = text;
}

function _prepareSpeakButton(speech) {
  const speakButton = document.getElementById("play");
  const pauseButton = document.getElementById("pause");
  const resumeButton = document.getElementById("resume");
  const startTrainingButton = document.getElementById("startMyTraining");
  const submitAnswerButton=document.getElementById("submitAnswer");
  const inputAnswer=document.getElementById("inputAnswer");
const mainHeader=document.getElementById("mainHeader");
const trainingArena=document.getElementById("trainingArena");
  const textarea = document.getElementById("text");
  const languages = document.getElementById("languages");

  const scoreLabel = document.getElementById("scoreCounter");

  const incorrectAttempts = document.getElementById("wrongAttempts");
  const currentWrongAttempts = document.getElementById("currentWrongAttempts");
  
  let currentWordToSpell = "cat";

  speakButton.addEventListener("click", () => {
    const language = languages.value;
    const voice = languages.options[languages.selectedIndex].dataset.name;
    if (language) speech.setLanguage(languages.value);
    if (voice) speech.setVoice(voice);
    speech
      .speak({
        text: textarea.innerText,
        queue: false,
        listeners: {
          onstart: () => {
            console.log("Start utterance");
          },
          onend: () => {
            console.log("End utterance");
          },
          onresume: () => {
            console.log("Resume utterance");
          },
          onboundary: event => {
            console.log(
              event.name +
                " boundary reached after " +
                event.elapsedTime +
                " milliseconds."
            );
          }
        }
      })
      .then(data => {
        console.log("Success !", data);
        mainHeader.hidden=true;
        trainingArena.classList.remove("d-none")
      })
      .catch(e => {
        console.error("An error occurred :", e);
      });
  });

  pauseButton.addEventListener("click", () => {
    speech.pause();
  });

  resumeButton.addEventListener("click", () => {
    speech.resume();
  });

  submitAnswerButton.addEventListener("click",()=>{
    if(inputAnswer.value.toLowerCase()===currentWordToSpell.toLocaleLowerCase())
    {
        if(scoreCount % 2 === 0){
            console.log('odd score');
        speech
      .speak({
        text: "Very Good my Friend. Now for the next word",
        queue:false});

        setTimeout({},2000);
      }
      else{
        console.log('even score');
        speech
        .speak({
          text: "Great Going buddy. Your current score is :"+scoreCount+"points. Next word coming up",
          queue:false})
      }
      var currentMarks = (currentIncorrectAttempts*-1)+10;

      if(currentMarks>0)
        scoreCount += currentMarks;
      else
        scoreCount +=1;

        scoreLabel.innerText=scoreCount;
        setNextWord();
    }
    else{
      currentIncorrectAttempts++;
      currentWrongAttempts.innerText = currentIncorrectAttempts;
        speech
        .speak({
          text: "Sorry That was an Incorrect Answer. Try Again!",
          queue:false})

          inputAnswer.style.backgroundColor = "red";
    }

  });

  function setNextWord(){

    if(currentIncorrectAttempts>0)
    {
      totalIncorrectAttempts++;
      incorrectAttempts= totalIncorrectAttempts;
    }
    currentIncorrectAttempts=0;
    inputAnswer.value = "";
    inputAnswer.style.backgroundColor = "white";

    if(totalIncorrectAttempts>3)
    {
      speech
      .speak({
        text: `Sorry! You have Exceeded all the lifelines. Your Final Score is ${scoreCount}. Please restart to try again.`,
        queue:false})
    }
      if(wordIndex>=_wordsToSpell.length)
      {
        speech
        .speak({
          text: "You have completed Training for all the words today. Your Final score is "+scoreCount+" points",
          queue:false})
      }
      else
      {
        currentWordToSpell=_wordsToSpell[wordIndex];
        speech
        .speak({
          text: "Ready for Next Word..., spell "+currentWordToSpell,
          queue:false})
      }
    wordIndex++;
  };
  startTrainingButton.addEventListener("click",()=>{

    submitAnswer.disabled=false;
    speech
      .speak({
        text: "Spell "+currentWordToSpell,
        queue: false,
        listeners: {
          onstart: () => {
          
            startTrainingButton.value ="Play Word";
            console.log("Start utterance");
          },
          onend: () => {
            console.log("End utterance");
          },
          onresume: () => {
            console.log("Resume utterance");
          },
          onboundary: event => {
            console.log(
              event.name +
                " boundary reached after " +
                event.elapsedTime +
                " milliseconds."
            );
          }
        }
      })
      .then(data => {
        console.log("Success !", data);
      })
      .catch(e => {
        console.error("An error occurred :", e);
      });
   
  })
}

_init();
