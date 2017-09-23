export const Projects =  [
  {
    info:{
      id:1,
      name: 'BuildUP1',
      place: 'Warszawa',
      startDate: '',
      endDate: '',
    },
    procedures:[
      {
        name:'Procedura budowy fundamentów',
        done: true,
        tasks:[
          {
            name:'Wykop wykonany na głębokość minimum 1m',
            done: false,
          },
          {
            name:'Wykop wykonany na szerokość od 50 cm do 100 cm',
            done: true,
          },
          {
            name:'Brak wód gruntowych',
            done: false,
          },
          {
            name:'Wykop wykonany na głębokość minimum 1m',
            done: false,
          },
        ],
      },
    ],
    issues:[
      {
        name: 'Dziki atakują',
        solved: false,
      }
    ],
  },
  {
    info:{
      id:2,
      name: 'BuildUP2',
      place: 'Poznan',
      startDate: '',
      endDate: '',
    },
    procedures:[
      {
        name:'Procedura budowy dachu',
        done: false,
        tasks:[
          {
            name:'Konstrukcja zgodna z projektem',
            done: false,
          },
          {
            name:'Belki zabezpieczone przed wilgocią',
            done: false,
          },
          {
            name:'Nachylenie dachu przynajmniej 10%',
            done: false,
          },
        ],
      },
    ],
    issues: [
      {
        name: 'Brak rąk do pracy',
        solved: false,
      },
      {
        name: 'Brak łopat',
        solved: false,
      }
    ],
  },
];
