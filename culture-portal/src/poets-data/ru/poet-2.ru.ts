import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  id: 'Anatoly_Melugin',
  name: 'Анатолий Степанович Велюгин',
  liveTime: '27 декабря 1923 - 24 октября 1994 (70 лет)',
  photo: './assets/img/poets-img/Velugin.jpg',
  biography:
    'белорусский советский поэт, прозаик и переводчик, киносценарист. Лауреат Литературной премии имени Янки Купалы (1964)',
  timeline: [
    {
      date: '1939-1940',
      description:
        'Будучи студентом литературного факультета Минского педагогического института, работал в редакции газеты «Звезда»',
    },
    {
      date: '1941',
      description: 'Учился в Свердловским педагогическом институте',
    },
    {
      date: '1942',
      description:
        'Был призван в РККА, учился в Лугинской авиашколе, участвовал в боях на Сталинградском фронте',
    },
    {
      date: '1943',
      description: 'Был ранен, долгое время находился на лечении',
    },
    {
      date: '1945-1946',
      description: 'Работал в газете «Літаратура і мастацтва»',
    },
    {
      date: '1948',
      description:
        'Окончил заочно Минский педагогический институт имени Максима Горького',
    },
    {
      date: '1946-1984',
      description:
        'С небольшими перерывами работал редактором отдела поэзии журнала «Полымя»',
    },
  ],
  works: [
    {
      date: '1947',
      work: 'Салют в Минске',
    },
    {
      date: '1949',
      work: 'Негорельская арка',
    },
    {
      date: '1952',
      work: 'На подступах',
    },
    {
      date: '1958',
      work: 'На зори занимает',
    },
    {
      date: '1960',
      work: 'Настежь',
    },
    {
      date: '1964',
      work: 'Адрес любви',
    },
    {
      date: '1969',
      work: 'Стихи и баллады',
    },
  ],
  galery: [
    {
      photo: './assets/img/poets-img/img1_orig.jpg',
    },
    {
      photo: './assets/img/poets-img/v.jpg',
    },
    {
      photo: './assets/img/poets-img/av.jpg',
    },
    {
      photo: './assets/img/poets-img/avv.jpg',
    },
  ],
  youtube: 'https://www.youtube.com/watch?v=0pZZW0LocrA',
  activity: [
    {
      lat: '54.83',
      lon: '29.9295',
    },
  ],
};
