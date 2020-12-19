import { IAuthor } from '../../app/core/models/authors-model';

export const poet: IAuthor = {
  id: 'Marina_Veselukha',
  name: 'Марына Міхайлаўна Весялуха',
  liveTime: '15 ліпеня 1987, Мёры, Віцебская вобласць-xxxx',
  photo: './assets/img/poets-img/Vesjalucha.jpg',
  biography:
    'Беларускі літаратурны крытык, літаратуразнаўца, паэт, перакладчык',
  timeline: [
    {
      date: '2004',
      description:
        'Скончыла Міжавіцкую сярэднюю школу (Гродзенская вобласць, Слонімскі раён) з залатым медалём',
    },
    {
      date: '2011',
      description: 'Магістр філалагічных навук у галіне літаратуразнаўства',
    },
    {
      date: '2010-2016',
      description:
        'Рэдактар, загадчык аддзела «Кніжны свет» газеты «Літаратура і мастацтва»',
    },
    {
      date: '2016',
      description:
        'Рэдактар аддзела культуры ў Цэнтральнай беларускай газеце «Звязда»',
    },
  ],
  works: [
    {
      date: '2008',
      work:
        'Дэбютавала вершамі ў часопісе «Дзеяслоў». Выступае з матэрыяламі аб тэорыі сучаснага літаратурнага працэсу, піша крытычныя артыкулы, рэцэнзіі на кнігі, займаецца літаратурна-мастацкай творчасцю',
    },
    {
      date: '2013',
      work: 'Адна з пераможцаў конкурсу маладых крытыкаў імя Адама Бабареко.',
    },
    {
      date: '2015',
      work:
        'Дыплом лаўрэата ў намінацыі «Лепшы аглядальнік» па выніках ХІ Нацыянальнага конкурсу друкаваных выданняў «Залатая Літара»',
    },
  ],
  galery: [
    {
      photo: './assets/img/poets-img/img2_orig.jpg',
    },
    {
      photo: './assets/img/poets-img/VesjaluchaMaryna.jpg',
    },
    {
      photo: './assets/img/poets-img/mv.jpg',
    },
    {
      photo: './assets/img/poets-img/v.png',
    },
  ],
  youtube: 'https://www.youtube.com/watch?v=hgVelC8z94s',
  activity: [
    {
      lat: '55.6222000',
      lon: '27.6281000',
    },
  ],
};
