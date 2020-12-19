import { getSettings } from './utils';
import { getMixWords, getNewWords } from '../api';
import { randomArr, getDayOfYear } from '../utils';

export const getGameWords = async (intervals) => {
  const { newWordsPerDay, wordsPerDay, onlyNewWords } = getSettings();

  if (onlyNewWords) {
    const newW = await getNewWords(wordsPerDay);
    return newW[0].paginatedResults;
  }
  const lernedWords = (+wordsPerDay) - (+newWordsPerDay);
  const userWordsArr = await getMixWords();

  const wordsCouner = (arrN) => (userWordsArr[arrN][0].totalCount.length === 0
    ? 0 : userWordsArr[2][0].totalCount[0].count);
  const repeatCount = wordsCouner(0);
  const repeat = userWordsArr[0][0].paginatedResults;
  const hardCount = wordsCouner(1);
  const hard = userWordsArr[1][0].paginatedResults;
  const goodCount = wordsCouner(2);
  const good = userWordsArr[2][0].paginatedResults;
  const weekCount = wordsCouner(3);
  const week = userWordsArr[3][0].paginatedResults;

  if (!intervals) {
    const allWordsCount = (+repeatCount) + (+hardCount) + (+goodCount) + (+weekCount);
    const isEnoughUserWords = allWordsCount >= lernedWords;
    const newWordsCount = isEnoughUserWords ? +newWordsPerDay : (+wordsPerDay) - (+allWordsCount);
    const getNewW = await getNewWords(newWordsCount);
    const newWords = getNewW[0].paginatedResults;

    const allWords = [];
    if (repeatCount !== 0) allWords.push(...repeat);
    if (hardCount !== 0) allWords.push(...hard);
    if (goodCount !== 0) allWords.push(...good);
    if (weekCount !== 0) allWords.push(...week);
    const day = getDayOfYear();
    const filtred = allWords.filter((obj) => obj.userWord.optional.day !== day);

    const wordsLen = filtred.length;
    const spliced = () => {
      filtred.splice(+lernedWords, wordsLen - (+lernedWords - 1), ...newWords);
      return filtred;
    };
    wordsLen > (+lernedWords) ? spliced() : filtred.push(...newWords);

    const randomNums = randomArr(filtred.length);
    const res = randomNums.map((el) => filtred[el]);

    return res;
  }

  if (intervals) {
    const intervalsWords = [];

    const filterWordsByInterval = (arr, day, interval) => arr.filter((word) => (
      +word.userWord.optional.day + interval) === day);

    const pushWords = (arr, day, interval) => {
      const filtred = filterWordsByInterval(arr, day, interval);
      if (filtred.length !== 0) intervalsWords.push(...filtred);
    };

    if (repeatCount !== 0) intervalsWords.push(...repeat);
    const dayNow = getDayOfYear();
    const hardInterval = 1;
    const goodInterval = 3;
    const weekInterval = 5;

    pushWords(hard, dayNow, hardInterval);
    pushWords(good, dayNow, goodInterval);
    pushWords(week, dayNow, weekInterval);

    const wordsCount = intervalsWords.length;
    const isEnoughIntervalsWords = wordsCount >= lernedWords;
    const newWordsCoun = isEnoughIntervalsWords ? +newWordsPerDay : (+wordsPerDay) - (+wordsCount);
    const getNew = await getNewWords(newWordsCoun);
    const newWord = getNew[0].paginatedResults;

    const wordsLen = () => intervalsWords.length;

    const spliced = () => {
      intervalsWords.splice(+lernedWords, wordsLen() - (+lernedWords - 1), ...newWord);
      return intervalsWords;
    };
    wordsLen() > (+lernedWords) ? spliced() : intervalsWords.push(...newWord);

    const randomNums = randomArr(intervalsWords.length);
    const res = randomNums.map((el) => intervalsWords[el]);

    return res;
  }
};
