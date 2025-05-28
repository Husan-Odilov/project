const places = [
  {
    id: 1,
    city: "Дубай",
    category: "популярное жилье",
    type: "Отель",
    location: "Al-Quez",
    price: 82,
    duration: "2 ночи",
    rating: 5.0,
    img: "./products/1.png"
  },
  {
    id: 2,
    city: "Дубай",
    category: "популярное жилье",
    type: "Отель",
    location: "Downtown",
    price: 120,
    duration: "3 ночи",
    rating: 4.8,
    img: "./products/2.png"
  },
  {
    id: 3,
    city: "Дубай",
    category: "уникальное жилье",
    type: "Отель",
    location: "Palm Jumeirah",
    price: 350,
    duration: "1 ночь",
    rating: 4.9,
    img: "./products/3.png"
  },
  {
    id: 4,
    city: "Дубай",
    category: "популярное жилье",
    type: "Отель",
    location: "Deira",
    price: 65,
    duration: "4 ночи",
    rating: 4.5,
    img: "./products/4.png"
  },
  {
    id: 5,
    city: "Дубай",
    category: "уникальное жилье",
    type: "Отель",
    location: "Marina",
    price: 280,
    duration: "2 ночи",
    rating: 5.0,
    img: "./products/5.png"
  },
  {
    id: 6,
    city: "Москва",
    category: "популярное жилье",
    type: "Отель",
    location: "Центр",
    price: 45,
    duration: "3 ночи",
    rating: 4.7,
    img: "./products/6.png"
  },
  {
    id: 7,
    city: "Москва",
    category: "уникальное жилье",
    type: "Отель",
    location: "Красный Октябрь",
    price: 90,
    duration: "2 ночи",
    rating: 4.9,
    img: "./products/7.png"
  },
  {
    id: 8,
    city: "Москва",
    category: "популярное жилье",
    type: "Отель",
    location: "Арбат",
    price: 60,
    duration: "5 ночей",
    rating: 4.6,
    img: "./products/8.png"
  },
  {
    id: 9,
    city: "Москва",
    category: "популярное жилье",
    type: "Отель",
    location: "Тверская",
    price: 75,
    duration: "1 ночь",
    rating: 4.4,
    img: "./products/9.png"
  },
  {
    id: 10,
    city: "Москва",
    category: "уникальное жилье",
    type: "Отель",
    location: "Остоженка",
    price: 200,
    duration: "3 ночи",
    rating: 5.0,
    img: "./products/10.png"
  },
  {
    id: 11,
    city: "Париж",
    category: "популярное жилье",
    type: "Отель",
    location: "Монмартр",
    price: 95,
    duration: "2 ночи",
    rating: 4.8,
    img: "./products/11.png"
  },
  {
    id: 12,
    city: "Париж",
    category: "уникальное жилье",
    type: "Отель",
    location: "Латинский квартал",
    price: 70,
    duration: "4 ночи",
    rating: 4.7,
    img: "./products/12.png"
  },
  {
    id: 13,
    city: "Париж",
    category: "популярное жилье",
    type: "Отель",
    location: "Шанз-Элизе",
    price: 180,
    duration: "1 ночь",
    rating: 4.9,
    img: "./products/13.png"
  },
  {
    id: 14,
    city: "Париж",
    category: "популярное жилье",
    type: "Отель",
    location: "Ле Марэ",
    price: 110,
    duration: "3 ночи",
    rating: 4.6,
    img: "./products/14.png"
  },
  {
    id: 15,
    city: "Париж",
    category: "уникальное жилье",
    type: "Отель",
    location: "Версаль",
    price: 400,
    duration: "2 ночи",
    rating: 5.0,
    img: "./products/15.png"
  },
  {
    id: 16,
    city: "Токио",
    category: "популярное жилье",
    type: "Отель",
    location: "Синдзюку",
    price: 85,
    duration: "4 ночи",
    rating: 4.7,
    img: "./products/16.png"
  },
  {
    id: 17,
    city: "Токио",
    category: "уникальное жилье",
    type: "Отель",
    location: "Асакуса",
    price: 150,
    duration: "2 ночи",
    rating: 4.9,
    img: "./products/17.png"
  },
  {
    id: 18,
    city: "Токио",
    category: "популярное жилье",
    type: "Отель",
    location: "Сибуя",
    price: 100,
    duration: "3 ночи",
    rating: 4.5,
    img: "./products/18.png"
  },
  {
    id: 19,
    city: "Токио",
    category: "популярное жилье",
    type: "Отель",
    location: "Гион",
    price: 75,
    duration: "5 ночей",
    rating: 4.6,
    img: "./products/19.png"
  },
  {
    id: 20,
    city: "Токио",
    category: "уникальное жилье",
    type: "Отель",
    location: "Акихабара",
    price: 40,
    duration: "1 ночь",
    rating: 4.2,
    img: "./products/20.png"
  },
  
 







 
  {
    title: "Стильная фотосессия с <br> винтажным автомобилем",
    id: 21,
    city: "Дубай",
    category: "photo",
    type: "usluga",
    location: "Al-Quez",
    price: 82,
    duration: "2 ночи",
    rating: 5.0,
    img: "./products/22.png"
  },
  {
    title: "Настоящая фотосессия <br> от Эшли",
    id: 22,
    city: "Дубай",
    category: "photo",
    type: "usluga",
    location: "Downtown",
    price: 120,
    duration: "3 ночи",
    rating: 4.8,
    img: "./products/23.png"
  },
  {
    title: "Фотосессия на Palm Jumeirah",
    id: 23,
    city: "Дубай",
    category: "photo",
    type: "usluga",
    location: "Palm Jumeirah",
    price: 350,
    duration: "1 ночь",
    rating: 4.9,
    img: "./products/24.png"
  },
  {
    title: "Воздушная и наземная <br> фотосъемка Даниэля",
    id: 24,
    city: "Дубай",
    category: "photo",
    type: "usluga",
    location: "Deira",
    price: 65,
    duration: "4 ночи",
    rating: 4.5,
    img: "./products/27.png"
  },
  {
    title:"Фотосессия для пары <br> от Джеффа",
    id: 25,
    city: "Дубай",
    category: "photo",
    type: "usluga",
    location: "Marina",
    price: 280,
    duration: "2 ночи",
    rating: 5.0,
    img: "./products/35.png"
  },
  {
    title: "Тренировка всего тела <br> с Питером",
    id: 26,
    city: "Москва",
    category: "training",
    type: "usluga",
    location: "Центр",
    price: 45,
    duration: "3 ночи",
    rating: 4.7,
    img: "./products/21.png"
  },
  {
    title: "Восстановительный фитнес <br> с Тейлором",
    id: 27,
    city: "Москва",
    category: "training",
    type: "usluga",
    location: "Красный Октябрь",
    price: 90,
    duration: "2 ночи",
    rating: 4.9,
    img: "./products/29.png"
  },
  {
    title: "Персональные тренировки <br> и групповой фитнес",
    id: 28,
    city: "Москва",
    category: "training",
    type: "usluga",
    location: "Арбат",
    price: 60,
    duration: "5 ночей",
    rating: 4.6,
    img: "./products/33.png"
  },
  {
    id: 29,
    city: "Москва",
    category: "training",
    title: "Йога и звуковая ванна от <br> Дженнифер",
    type: "usluga",
    location: "Тверская",
    price: 75,
    duration: "1 ночь",
    rating: 4.4,
    img: "./products/31.png"
  },
  {
    title: "Ритуальная йога с Аной",
    id: 30,
    city: "Москва",
    category: "training",
    type: "usluga",
    location: "Остоженка",
    price: 200,
    duration: "3 ночи",
    rating: 5.0,
    img: "./products/32.png"
  },
  {
    title: "Аюрведическая терапия с <br> маслами Тани",
    id: 31,
    city: "Париж",
    category: "masaj",
    type: "usluga",
    location: "Монмартр",
    price: 95,
    duration: "2 ночи",
    rating: 4.8,
    img: "./products/25.png"
  },
  {
    title: "Массаж в Латинском квартале <br> от Софи",
    id: 32,
    city: "Париж",
    category: "masaj",
    type: "usluga",
    location: "Латинский квартал",
    price: 70,
    duration: "4 ночи",
    rating: 4.7,
    img: "./products/26.png"
  },
  {
    title: "Расслабляющий массаж <br> в Шанз-Элизе",
    id: 33,
    city: "Париж",
    category: "masaj",
    type: "usluga",
    location: "Шанз-Элизе",
    price: 180,
    duration: "1 ночь",
    rating: 4.9,
    img: "./products/36.png"
  },
  {
    title: "Массаж в Ле Марэ <br> от Клэр",
    id: 34,
    city: "Париж",
    category: "masaj",
    type: "usluga",
    location: "Ле Марэ",
    price: 110,
    duration: "3 ночи",
    rating: 4.6,
    img: "./products/37.png"
  },
  {
    title: "Массаж в Версале <br> от Жюльетты",
    id: 35,
    city: "Париж",
    category: "masaj",
    type: "usluga",
    location: "Версаль",
    price: 400,
    duration: "2 ночи",
    rating: 5.0,
    img: "./products/38.png"
  },
   
 



 
  {
    title: "Научитесь печь <br> французские круассаны",
    id: 41,
    city: "Дубай",
    category: "photo",
    type: "experience",
    location: "Al-Quez",
    price: 82,
    duration: "2 ночи",
    rating: 5.0,
    img: "./products/39.png"
  },
  {
    title: "Найдите укромные <br> подпольные бары",
    id: 42,
    city: "Дубай",
    category: "photo",
    type: "experience",
    location: "Downtown",
    price: 120,
    duration: "3 ночи",
    rating: 4.8,
    img: "./products/40.png"
  },
  {
    title: "Кровавый Париж:<br>преступления и призраки",
    id: 43,
    city: "Дубай",
    category: "photo",
    type: "experience",
    location: "Palm Jumeirah",
    price: 350,
    duration: "1 ночь",
    rating: 4.9,
    img: "./products/41.png"
  },
  {
    title: "Лучшие <br> 10 достопримечательностей <br> Парижа с веселым гидом",
    id: 44,
    city: "Дубай",
    category: "photo",
    type: "experience",
    location: "Deira",
    price: 65,
    duration: "4 ночи",
    rating: 4.5,
    img: "./products/42.png"
  },
  {
    title:"Призраки Парижа: <br> привидения, легенды и <br> загадочные преступлениях",
    id: 45,
    city: "Дубай",
    category: "photo",
    type: "experience",
    location: "Marina",
    price: 280,
    duration: "2 ночи",
    rating: 5.0,
    img: "./products/43.png"
  },
  {
    title: "Секреты Лондонского <br> Тауэра с ученым",
  
    id: 46,
    city: "Москва",
    category: "training",
    type: "experience",
    location: "Центр",
    price: 45,
    duration: "3 ночи",
    rating: 4.7,
    img: "./products/44.png"
  },
  {
    title: "Королевский Лондон и <br> смена караула",
    id: 47,
    city: "Москва",
    category: "training",
    type: "experience",
    location: "Красный Октябрь",
    price: 90,
    duration: "2 ночи",
    rating: 4.9,
    img: "./products/46.png"
  },
  {
    title: "Прогулка по квадратной <br>  миле города",
    id: 48,
    city: "Москва",
    category: "training",
    type: "experience",
    location: "Арбат",
    price: 60,
    duration: "5 ночей",
    rating: 4.6,
    img: "./products/47.png"
  },
  {
    id: 49,
    city: "Москва",
    category: "training",
    title: "Королевские секреты <br> Виндзора с историком",

    type: "experience",
    location: "Тверская",
    price: 75,
    duration: "1 ночь",
    rating: 4.4,
    img: "./products/48.png"
  },
  {
    title: "Декодируйте секреты <br> Британского музея",
    id: 50,
    city: "Москва",
    category: "training",
    type: "experience",
    location: "Остоженка",
    price: 200,
    duration: "3 ночи",
    rating: 5.0,
    img: "./products/45.png"
  },
  {
    title: "Descubra o centro histórico<br>de São Paulo",
    id: 51,
    city: "Париж",
    category: "masaj",
    type: "experience",
    location: "Монмартр",
    price: 95,
    duration: "2 ночи",
    rating: 4.8,
    img: "./products/49.png"
  },
  {
    title: "Uncover São Paulo’s boteco <br>spirit with an insider",
    id: 52,
    city: "Париж",
    category: "masaj",
    type: "experience",
    location: "Латинский квартал",
    price: 70,
    duration: "4 ночи",
    rating: 4.7,
    img: "./products/50.png"
  },
  {
    title: "Witness traditional capoeira <br>with a capoeirista",
    id: 53,
    city: "Париж",
    category: "masaj",
    type: "experience",
    location: "Шанз-Элизе",
    price: 180,
    duration: "1 ночь",
    rating: 4.9,
    img: "./products/51.png"
  },
  {
    title: "Uncover a modern furniture <br>archive in Jardins",
    id: 54,
    city: "Париж",
    category: "masaj",
    type: "experience",
    location: "Ле Марэ",
    price: 110,
    duration: "3 ночи",
    rating: 4.6,
    img: "./products/52.png"
  },
  {
    title: "Visit São Paulo's iconic spots<br>with an architect",
    id: 55,
    city: "Париж",
    category: "masaj",
    type: "experience",
    location: "Версаль",
    price: 400,
    duration: "2 ночи",
    rating: 5.0,
    img: "./products/53.png"
  },
   
];
