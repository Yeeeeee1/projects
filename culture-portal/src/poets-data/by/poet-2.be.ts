import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  id: 'Anatoly_Melugin',
  name: 'Анатоль Сцяпанавіч Велюгін',
  liveTime: '27 сьнежня 1923 - 24 кастрычніка 1994 г. (70 гадоў)',
  photo: './assets/img/poets-img/Velugin.jpg',
  biography:
    'Беларускі савецкі паэт, празаік і перакладчык, кінасцэнарыст. Лаўрэат Літаратурнай прэміі імя Янкі Купалы (1964)',
  timeline: [
    {
      date: '1939-1940',
      description:
        'Будучы студэнтам літаратурнага факультэта Менскага педагагічнага інстытута, працаваў у рэдакцыі газеты «Зорка»',
    },
    {
      date: '1941',
      description: 'Вучыўся ў Свярдлоўскім педагагічным інстытуце',
    },
    {
      date: '1942',
      description:
        'Быў прызваны ў РККА, вучыўся ў Лугінскай авіяшколе, удзельнічаў у баях на Сталінградскім фронце',
    },
    {
      date: '1943',
      description: 'Быў паранены, доўгі час знаходзіўся на лячэнні',
    },
    {
      date: '1945-1946',
      description: 'Працаваў у газеце «Літаратура і мастацтва»',
    },
    {
      date: '1948',
      description:
        'Скончыў завочна Менскі педагагічны інстытут імя Максіма Горкага',
    },
    {
      date: '1946-1984',
      description:
        'З невялікімі перапынкамі працаваў рэдактарам аддзела паэзіі часопіса «Полымя»',
    },
  ],
  works: [
    {
      date: '1947',
      work: 'Салют у Мінску',
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
      work: 'На зоры займае',
    },
    {
      date: '1960',
      work: 'насцеж',
    },
    {
      date: '1964',
      work: 'Адрас любові',
    },
    {
      date: '1969',
      work: 'Вершы і балады',
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
