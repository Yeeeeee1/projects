import { getResponse } from '../getResponse';
import { getDate } from '../../utils';
import { finalPut } from './finalPut';
import { getThisUserUrl } from './getThisUserUrl';

/**
 *
 * @param {object} obj - объект, который кладете
 * @param {string} name - имя вашей игры
 * на выходе ничего, мы ж кладем туда. ХЕХ
 */

export const putGameStatistics = async (name, obj) => {
  const thisStatistics = await getResponse(getThisUserUrl(), { method: 'GET' });
  const dateNow = getDate(null);
  const count = 1;

  const { optional: { games } } = thisStatistics;
  const innerGames = games[name];

  const comp = innerGames.find((el) => el.date === dateNow) || false;

  if (comp) {
    const arr = Object.keys(comp);

    arr.forEach((el) => {
      switch (el) {
        case 'counter':
          comp[el] += 1;
          break;
        case 'correctSeries':
          if (comp[el] < obj[el]) {
            comp[el] = obj[el];
          }
          break;
        case 'today':
          if (comp[el]) {
            comp[el] = obj[el];
          }
          break;
        case 'date':
          break;
        default:
          comp[el] += obj[el];
          break;
      }
    });

    await finalPut(thisStatistics);
  } else {
    const readyObj = {
      date: dateNow,
      ...obj,
      counter: count,
    };
    innerGames.push(readyObj);
    await finalPut(thisStatistics);
  }
};
