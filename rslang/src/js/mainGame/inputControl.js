import { playAudio } from './utils/playAudio';
import { setTranscription } from './utils/setTranscription';
import { getSettings } from './utils/getSettings';
import { buttonsChange } from './interval/buttonsChange';
import { buttonAnswer } from './buttons/buttonAnswer';
import { answerCheck } from './utils';

export const inputControl = (event, intervals = false) => {
  const targetWord = sessionStorage.getItem('word').toLowerCase();
  const userInput = event.target.innerText.toLowerCase();
  const settings = getSettings();
  const targetWordLen = targetWord.length;
  const userInputLen = userInput.length;
  const wordBlock = document.querySelector('.sentence--target-word');

  if (intervals && targetWordLen <= userInputLen) {
    const answer = answerCheck('intervals');
    wordBlock.classList.add('target-word--incorrect');
    buttonAnswer();
    if (!answer) {
      return;
    }
  }

  if (targetWord === userInput) {
    const url = sessionStorage.getItem('audio');
    const urlMeaning = sessionStorage.getItem('audioMeaning');
    if (intervals) {
      buttonsChange('hide');
    }

    const audioArr = [url];
    if (settings.meaning) audioArr.push(urlMeaning);
    if (!intervals) {
      const urlExample = sessionStorage.getItem('audioExample');
      if (settings.example) audioArr.push(urlExample);
    }
    if (settings.soundAutoPlay) playAudio(false, audioArr);
    if (settings.transcription) setTranscription();
  }
};
