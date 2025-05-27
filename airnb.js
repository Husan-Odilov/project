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
  
];







const job = [
  {
    id: 1,
    city: "Дубай",
    category: "популярное жилье",
    type: "usluga",
    location: "Al-Quez",
    price: 82,
    duration: "2 ночи",
    rating: 5.0,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 2,
    city: "Дубай",
    category: "популярное жилье",
    type: "usluga",
    location: "Downtown",
    price: 120,
    duration: "3 ночи",
    rating: 4.8,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 3,
    city: "Дубай",
    category: "уникальное жилье",
    type: "usluga",
    location: "Palm Jumeirah",
    price: 350,
    duration: "1 ночь",
    rating: 4.9,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 4,
    city: "Дубай",
    category: "популярное жилье",
    type: "usluga",
    location: "Deira",
    price: 65,
    duration: "4 ночи",
    rating: 4.5,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 5,
    city: "Дубай",
    category: "уникальное жилье",
    type: "usluga",
    location: "Marina",
    price: 280,
    duration: "2 ночи",
    rating: 5.0,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 6,
    city: "Москва",
    category: "популярное жилье",
    type: "usluga",
    location: "Центр",
    price: 45,
    duration: "3 ночи",
    rating: 4.7,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 7,
    city: "Москва",
    category: "уникальное жилье",
    type: "usluga",
    location: "Красный Октябрь",
    price: 90,
    duration: "2 ночи",
    rating: 4.9,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 8,
    city: "Москва",
    category: "популярное жилье",
    type: "usluga",
    location: "Арбат",
    price: 60,
    duration: "5 ночей",
    rating: 4.6,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 9,
    city: "Москва",
    category: "популярное жилье",
    type: "usluga",
    location: "Тверская",
    price: 75,
    duration: "1 ночь",
    rating: 4.4,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 10,
    city: "Москва",
    category: "уникальное жилье",
    type: "usluga",
    location: "Остоженка",
    price: 200,
    duration: "3 ночи",
    rating: 5.0,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 11,
    city: "Париж",
    category: "популярное жилье",
    type: "usluga",
    location: "Монмартр",
    price: 95,
    duration: "2 ночи",
    rating: 4.8,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 12,
    city: "Париж",
    category: "уникальное жилье",
    type: "usluga",
    location: "Латинский квартал",
    price: 70,
    duration: "4 ночи",
    rating: 4.7,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 13,
    city: "Париж",
    category: "популярное жилье",
    type: "usluga",
    location: "Шанз-Элизе",
    price: 180,
    duration: "1 ночь",
    rating: 4.9,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 14,
    city: "Париж",
    category: "популярное жилье",
    type: "usluga",
    location: "Ле Марэ",
    price: 110,
    duration: "3 ночи",
    rating: 4.6,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 15,
    city: "Париж",
    category: "уникальное жилье",
    type: "usluga",
    location: "Версаль",
    price: 400,
    duration: "2 ночи",
    rating: 5.0,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 16,
    city: "Токио",
    category: "популярное жилье",
    type: "usluga",
    location: "Синдзюку",
    price: 85,
    duration: "4 ночи",
    rating: 4.7,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 17,
    city: "Токио",
    category: "уникальное жилье",
    type: "usluga",
    location: "Асакуса",
    price: 150,
    duration: "2 ночи",
    rating: 4.9,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 18,
    city: "Токио",
    category: "популярное жилье",
    type: "usluga",
    location: "Сибуя",
    price: 100,
    duration: "3 ночи",
    rating: 4.5,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 19,
    city: "Токио",
    category: "популярное жилье",
    type: "usluga",
    location: "Гион",
    price: 75,
    duration: "5 ночей",
    rating: 4.6,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 20,
    city: "Токио",
    category: "уникальное жилье",
    type: "usluga",
    location: "Акихабара",
    price: 40,
    duration: "1 ночь",
    rating: 4.2,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 21,
    city: "Нью-Йорк",
    category: "популярное жилье",
    type: "usluga",
    location: "Манхэттен",
    price: 130,
    duration: "3 ночи",
    rating: 4.8,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 22,
    city: "Нью-Йорк",
    category: "уникальное жилье",
    type: "usluga",
    location: "Бруклин",
    price: 160,
    duration: "2 ночи",
    rating: 4.9,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 23,
    city: "Нью-Йорк",
    category: "популярное жилье",
    type: "usluga",
    location: "Таймс-сквер",
    price: 200,
    duration: "1 ночь",
    rating: 4.7,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 24,
    city: "Нью-Йорк",
    category: "популярное жилье",
    type: "usluga",
    location: "Челси",
    price: 110,
    duration: "4 ночи",
    rating: 4.6,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  },
  {
    id: 25,
    city: "Нью-Йорк",
    category: "уникальное жилье",
    type: "usluga",
    location: "Центральный парк",
    price: 350,
    duration: "2 ночи",
    rating: 5.0,
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg"
  }
];
