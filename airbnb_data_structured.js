const places = [
  {
    
      type: "Жилье",
      subtype: "Hostel",
    
    joy: "Dubay",
    narx: 99000,
    skidka: "20%",
    rating: 4.77,
    about:
      "Dubay shahridagi foydalanuvchilar uchun qulay hostel xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Dubay markazidagi hostel",
    author: "Booking.com",
    qulayliklar: [
      "Televizor",
      "Shaxsiy hammom",
      "Avtoturargoh",
      "Hovuz",
      "Wi-Fi",
    ],
    imgs: [
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1025775067818659597/original/b3b95513-afa5-493b-8960-d455fc33702c.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1025775067818659597/original/0da58a34-77d9-43b9-9faa-d18048e6256e.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1025775067818659597/original/db99a4be-a280-4d69-a809-ae8ce156bf02.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1025775067818659597/original/4a4e0794-fc9c-463f-bd7f-11cbfda72c56.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1025775067818659597/original/96d33f63-a691-4c51-8755-3bfcaa0ffaf0.jpeg?im_w=720",
    ],
    komment: [
      {
        matn: "Narxiga yarasha zo‘r joy!",
        muallif: "Kamola",
        sana: "2025-04-07",
      },
      {
        matn: "Mehmonxona xodimlari juda do‘stona.",
        muallif: "Ali",
        sana: "2025-05-12",
      },
      {
        matn: "Manzili yaxshi, lekin xona kichkina.",
        muallif: "Bekzod",
        sana: "2025-05-20",
      },
    ],
  },
  {
    
      type: "Услуги",
      subtype: "Shaxsiy gid",
    
    joy: "Fatik",
    narx: 117000,
    skidka: "10%",
    rating: 4.54,
    about:
      "Fatik shahridagi foydalanuvchilar uchun qulay shaxsiy gid xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Fatik markazidagi shaxsiy gid",
    author: "Host",
    imgs: [
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6143698/original/aa0df9b5-127b-4d48-8bf6-8cdf93590c2f.jpeg?im_w=960",
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6143698/original/0f57ebd0-5e6a-4297-bc75-3d856e96692c.jpeg?im_w=960",
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6143698/original/62d56a65-4d3a-434a-b72f-658c1bb06046.jpeg?im_w=960",
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6143698/original/9544f56b-e9eb-4582-bbb6-3524af997bf9.jpeg?im_w=960",
    ],
    qulayliklar: [
      "Shaxsiy hammom",
      "Kir yuvish mashinasi",
      "Qulay joylashuv",
      "Wi-Fi",
      "Oshxona",
    ],
    komment: [
      {
        matn: "Mehmonxona xodimlari juda do‘stona.",
        muallif: "Aygul",
        sana: "2025-04-12",
      },
      {
        matn: "Xizmatdan mamnun qoldik, yana kelamiz.",
        muallif: "Kamola",
        sana: "2025-05-18",
      },
      {
        matn: "Mehmonxona xodimlari juda do‘stona.",
        muallif: "John",
        sana: "2025-04-24",
      },
    ],
  },
  {
    
      type: "Услуги",
      subtype: "Avtomobil ijarasi",
    
    joy: "Fatik",
    narx: 66000,
    skidka: "5%",
    rating: 4.32,
    about:
      "Fatik shahridagi foydalanuvchilar uchun qulay avtomobil ijarasi xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Fatik markazidagi avtomobil ijarasi",
    author: "Booking.com",
    qulayliklar: [
      "Avtoturargoh",
      "Qulay joylashuv",
      "Oshxona",
      "Balkon",
      "Kir yuvish mashinasi",
    ],
    imgs: [
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg",
    ],
    komment: [
      {
        matn: "Narxiga yarasha zo‘r joy!",
        muallif: "Aygul",
        sana: "2025-03-27",
      },
      {
        matn: "Mehmonxona xodimlari juda do‘stona.",
        muallif: "Ali",
        sana: "2025-05-08",
      },
      {
        matn: "Joy juda qulay va toza edi!",
        muallif: "Aygul",
        sana: "2025-04-14",
      },
    ],
  },
  {
    
      type: "Услуги",
      subtype: "Transfer",
    
    joy: "Bangkok",
    narx: 46000,
    skidka: "20%",
    rating: 4.39,
    about:
      "Bangkok shahridagi foydalanuvchilar uchun qulay transfer xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Bangkok markazidagi transfer",
    author: "Airbnb foydalanuvchisi",
    qulayliklar: [
      "Televizor",
      "Oshxona",
      "Balkon",
      "Qulay joylashuv",
      "Kir yuvish mashinasi",
    ],
    imgs: [
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6079700/original/36c49f3e-820b-4e02-8e3e-d5aa7f0ad76a.jpeg",
    ],
    komment: [
      {
        matn: "Xizmatdan mamnun qoldik, yana kelamiz.",
        muallif: "Zarina",
        sana: "2025-04-11",
      },
      {
        matn: "Xizmatdan mamnun qoldik, yana kelamiz.",
        muallif: "Bekzod",
        sana: "2025-03-28",
      },
      {
        matn: "Manzili yaxshi, lekin xona kichkina.",
        muallif: "Aygul",
        sana: "2025-05-05",
      },
    ],
  },
  {
    
      type: "Жилье",
      subtype: "Kvartira",
    
    joy: "Malaysia",
    narx: 143000,
    skidka: "10%",
    rating: 4.87,
    about:
      "Fatik shahridagi foydalanuvchilar uchun qulay kvartira xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "The Infinitum KLCC Z1 with Twin Tower View",
    author: "Host",
    qulayliklar: ["Wi-Fi", "Shaxsiy hammom", "Hovuz", "Televizor", "Balkon"],
    imgs: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1058462401045613898/original/a0d7f1b7-b160-4406-8e72-7affc499c4f6.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1058462401045613898/original/abe95ef7-a5de-4b54-a49c-2baa553be124.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1058462401045613898/original/8ddc23f2-dd4a-47df-846f-004463584131.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1058462401045613898/original/9fb72f68-9b5e-4b81-9503-fa0225371385.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1058462401045613898/original/c00060a7-6e21-463f-a0e1-de6c3be73687.jpeg?im_w=720",
    ],
    komment: [
      {
        matn: "Joy juda qulay va toza edi!",
        muallif: "Ali",
        sana: "2025-04-18",
      },
      {
        matn: "Manzili yaxshi, lekin xona kichkina.",
        muallif: "Kamola",
        sana: "2025-03-24",
      },
      {
        matn: "Mehmonxona xodimlari juda do‘stona.",
        muallif: "Ali",
        sana: "2025-05-14",
      },
    ],
  },
  {
    
      type: "Услуги",
      subtype: "Transfer",
    
    joy: "Fatik",
    narx: 132000,
    skidka: "5%",
    rating: 4.79,
    about:
      "Fatik shahridagi foydalanuvchilar uchun qulay transfer xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Fatik markazidagi transfer",
    author: "Booking.com",
    imgs: [
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/74934154-e590-4b60-9079-84d2e24599af.jpeg",
    ],
    qulayliklar: [
      "Qulay joylashuv",
      "Televizor",
      "Avtoturargoh",
      "Balkon",
      "Shaxsiy hammom",
    ],
    komment: [
      {
        matn: "Narxiga yarasha zo‘r joy!",
        muallif: "John",
        sana: "2025-04-13",
      },
      {
        matn: "Xizmatdan mamnun qoldik, yana kelamiz.",
        muallif: "Bekzod",
        sana: "2025-04-03",
      },
      {
        matn: "Joy juda qulay va toza edi!",
        muallif: "Kamola",
        sana: "2025-05-19",
      },
    ],
  },
  {
    
      type: "Впечатления",
      subtype: "Ekskursiya",
    
    joy: "Bangkok",
    narx: 145000,
    skidka: "15%",
    rating: 4.94,
    about:
      "Bangkok shahridagi foydalanuvchilar uchun qulay ekskursiya xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Bangkok markazidagi ekskursiya",
    author: "Booking.com",
    qulayliklar: ["Oshxona", "Televizor", "Balkon", "Avtoturargoh", "Hovuz"],
    imgs: [
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-109865-active_media/original/65d489f4-e1c4-4a44-a8b1-353696d3161c.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-109865-active_media/original/c391fea3-df2d-4050-849e-4982d334b20d.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-109865/original/10062281-9bf3-44bf-84d9-1a72363f4a8f.jpeg?im_w=960",
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-109865/original/2e24c917-c333-498f-a597-6c95cafbd282.jpeg?im_w=960",
    ],
    komment: [
      {
        matn: "Xizmatdan mamnun qoldik, yana kelamiz.",
        muallif: "Aygul",
        sana: "2025-05-10",
      },
      {
        matn: "Joy juda qulay va toza edi!",
        muallif: "Kamola",
        sana: "2025-05-18",
      },
      {
        matn: "Joy juda qulay va toza edi!",
        muallif: "Kamola",
        sana: "2025-05-05",
      },
    ],
  },
  {
    
      type: "Жилье",
      subtype: "Xona",
    
    joy: "Almati",
    narx: 115000,
    skidka: "20%",
    rating: 4.73,
    about:
      "Almati shahridagi foydalanuvchilar uchun qulay xona xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Almati markazidagi xona",
    author: "Host",
    imgs: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-1398623642378779800/original/2868d7be-9aa2-4351-a461-2d2575981d30.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1398623642378779800/original/cf55aba1-a8e5-42be-aafa-4494735133a6.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1398623642378779800/original/cbc61470-2a52-4740-b776-aa07a50ca7a8.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1398623642378779800/original/7e0d965e-da52-4215-99f1-4d8655786f35.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1398623642378779800/original/d6ef6337-5a7f-4308-a297-1fed9cc35926.jpeg?im_w=720",
    ],
    qulayliklar: [
      "Televizor",
      "Qulay joylashuv",
      "Konditsioner",
      "Hovuz",
      "Avtoturargoh",
    ],
    komment: [
      {
        matn: "Manzili yaxshi, lekin xona kichkina.",
        muallif: "John",
        sana: "2025-04-30",
      },
      {
        matn: "Xizmatdan mamnun qoldik, yana kelamiz.",
        muallif: "Aygul",
        sana: "2025-04-07",
      },
      {
        matn: "Manzili yaxshi, lekin xona kichkina.",
        muallif: "Zarina",
        sana: "2025-04-02",
      },
    ],
  },
  {
    
      type: "Услуги",
      subtype: "Shaxsiy gid",
    
    joy: "Fatik",
    narx: 48000,
    skidka: "10%",
    rating: 4.77,
    about:
      "Fatik shahridagi foydalanuvchilar uchun qulay shaxsiy gid xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Fatik markazidagi shaxsiy gid",
    author: "Booking.com",

    qulayliklar: [
      "Televizor",
      "Oshxona",
      "Balkon",
      "Kir yuvish mashinasi",
      "Shaxsiy hammom",
    ],
    imgs:[
   'https://a0.muscache.com/im/pictures/lombard/MtTemplate-705668-active_media/original/7dfb3b7e-b567-4f35-9498-90740a83bb63.jpg?im_w=480',
   'https://a0.muscache.com/im/pictures/lombard/MtTemplate-705668-active_media/original/a5514b97-cc3b-4250-aaad-6e99cffe3c70.jpg?im_w=480',
   'https://a0.muscache.com/im/pictures/lombard/MtTemplate-705668-active_media/original/0ec91f81-e9e0-43f8-ab2b-e3ed91011f29.jpg?im_w=480',
   'https://a0.muscache.com/im/pictures/lombard/MtTemplate-705668-active_media/original/161b531c-21e6-4b82-8c07-b6162d609b01.jpg?im_w=480'
    ],
    komment: [
      {
        matn: "Mehmonxona xodimlari juda do‘stona.",
        muallif: "Aygul",
        sana: "2025-04-07",
      },
      {
        matn: "Narxiga yarasha zo‘r joy!",
        muallif: "Bekzod",
        sana: "2025-04-12",
      },
      {
        matn: "Narxiga yarasha zo‘r joy!",
        muallif: "John",
        sana: "2025-04-09",
      },
    ],
  },
  {
    
      type: "Услуги",
      subtype: "Shaxsiy gid",
    
    joy: "Almati",
    narx: 58000,
    skidka: "5%",
    rating: 4.77,
    about:
      "Almati shahridagi foydalanuvchilar uchun qulay shaxsiy gid xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Almati markazidagi shaxsiy gid",
    author: "Host",
    qulayliklar: [
      "Konditsioner",
      "Televizor",
      "Wi-Fi",
      "Avtoturargoh",
      "Oshxona",
    ],
    imgs: [
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2800924-active_media/original/67735e39-826c-479b-a59f-97f37e512132.jpg?im_w=480',
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2800924-active_media/original/82052532-2b3d-41cf-9404-d8d10decf506.jpg?im_w=480',
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2800924-active_media/original/7e6c4b0d-bdd4-47b7-a858-525bf7f49886.jpg?im_w=480',
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2800924-active_media/original/8cac8223-96ab-4e01-9618-3df41ddb24d0.jpg?im_w=480'
    ],
    komment: [
      {
        matn: "Xizmatdan mamnun qoldik, yana kelamiz.",
        muallif: "John",
        sana: "2025-04-26",
      },
      {
        matn: "Manzili yaxshi, lekin xona kichkina.",
        muallif: "Aygul",
        sana: "2025-04-01",
      },
      {
        matn: "Manzili yaxshi, lekin xona kichkina.",
        muallif: "Aygul",
        sana: "2025-05-01",
      },
    ],
  },
  {
    
      type: "Услуги",
      subtype: "Tozalash xizmati",
    
    joy: "Fatik",
    narx: 113000,
    skidka: "10%",
    rating: 4.79,
    about:
      "Fatik shahridagi foydalanuvchilar uchun qulay tozalash xizmati xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Fatik markazidagi tozalash xizmati",
    author: "Airbnb foydalanuvchisi",
    qulayliklar: [
      "Avtoturargoh",
      "Televizor",
      "Balkon",
      "Oshxona",
      "Kir yuvish mashinasi",
    ],
    imgs: [],
    komment: [
      {
        matn: "Xizmatdan mamnun qoldik, yana kelamiz.",
        muallif: "Kamola",
        sana: "2025-05-11",
      },
      {
        matn: "Narxiga yarasha zo‘r joy!",
        muallif: "Aygul",
        sana: "2025-04-25",
      },
      {
        matn: "Narxiga yarasha zo‘r joy!",
        muallif: "Bekzod",
        sana: "2025-05-05",
      },
    ],
  },
  {
    
      type: "Жилье",
      subtype: "Uy",
    
    joy: "Almati",
    narx: 51000,
    skidka: "20%",
    rating: 4.78,
    about:
      "Almati shahridagi foydalanuvchilar uchun qulay uy xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Almati markazidagi uy",
    author: "Booking.com",
    qulayliklar: [
      "Balkon",
      "Kir yuvish mashinasi",
      "Konditsioner",
      "Wi-Fi",
      "Shaxsiy hammom",
    ],
    imgs: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-993461757898869862/original/356e7f2e-d6b2-453b-811c-bce34d422084.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/miso/Hosting-993461757898869862/original/6e44cb49-eb7d-48b2-94b4-448269d726fe.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-993461757898869862/original/1cd2a4b6-6ec8-4a37-a345-044a1bf187fa.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-993461757898869862/original/a88b5cf4-113a-46a0-9adf-59da765884aa.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-993461757898869862/original/7035e0e9-8cf3-4d9b-9c29-fd78b20708dd.jpeg?im_w=720'
    ],
    komment: [
      {
        matn: "Joy juda qulay va toza edi!",
        muallif: "Zarina",
        sana: "2025-05-10",
      },
      {
        matn: "Joy juda qulay va toza edi!",
        muallif: "Kamola",
        sana: "2025-04-24",
      },
      {
        matn: "Narxiga yarasha zo‘r joy!",
        muallif: "John",
        sana: "2025-04-14",
      },
    ],
  },
  {
    
      type: "Впечатления",
      subtype: "Maishiy masterklass",
    
    joy: "Fatik",
    narx: 61000,
    skidka: "5%",
    rating: 4.64,
    about:
      "Fatik shahridagi foydalanuvchilar uchun qulay maishiy masterklass xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Fatik markazidagi maishiy masterklass",
    author: "Airbnb foydalanuvchisi",
    qulayliklar: [
      "Konditsioner",
      "Hovuz",
      "Shaxsiy hammom",
      "Kir yuvish mashinasi",
      "Qulay joylashuv",
    ],
    imgs: [
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-4349369-active_media/original/63a0234e-0822-4b9c-94bf-8dfbb55d69e2.jpg?im_w=480',
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-4349369-active_media/original/01c5827a-5c57-42ed-a692-b22db0c52faf.jpg?im_w=480',
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-4349369-active_media/original/6f42c012-ff0d-40d1-a5cd-a6653dad46a3.jpg?im_w=480',
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-4349369-active_media/original/2e750178-f9ac-440b-9c9f-1bde89dfb376.jpg?im_w=480'
    ],
    komment: [
      {
        matn: "Narxiga yarasha zo‘r joy!",
        muallif: "Bekzod",
        sana: "2025-05-13",
      },
      {
        matn: "Joy juda qulay va toza edi!",
        muallif: "John",
        sana: "2025-05-13",
      },
      {
        matn: "Manzili yaxshi, lekin xona kichkina.",
        muallif: "Ali",
        sana: "2025-04-04",
      },
    ],
  },
  {
    
      type: "Впечатления",
      subtype: "Ekskursiya",
    
    joy: "Fatik",
    narx: 91000,
    skidka: "10%",
    rating: 4.42,
    about:
      "Fatik shahridagi foydalanuvchilar uchun qulay ekskursiya xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Fatik markazidagi ekskursiya",
    author: "Host",
    qulayliklar: [
      "Shaxsiy hammom",
      "Wi-Fi",
      "Balkon",
      "Qulay joylashuv",
      "Televizor",
    ],
    imgs: [
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-1105412/original/87b7c318-11ea-4fab-b31c-ec1ad22c9765.jpeg?im_w=960',
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-1105412/original/887e3d59-114e-4027-b3a1-8359a029d705.jpeg?im_w=480',
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-1105412/original/fe29787b-6e77-4f9c-892e-e69a75ce5d98.jpeg?im_w=480',
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-1105412/original/c3a86f51-4428-4f17-ac03-20e4bc3c7dd7.jpeg?im_w=480'
    ],
    komment: [
      {
        matn: "Xizmatdan mamnun qoldik, yana kelamiz.",
        muallif: "John",
        sana: "2025-04-07",
      },
      {
        matn: "Mehmonxona xodimlari juda do‘stona.",
        muallif: "Kamola",
        sana: "2025-04-16",
      },
      {
        matn: "Xizmatdan mamnun qoldik, yana kelamiz.",
        muallif: "Zarina",
        sana: "2025-04-05",
      },
    ],
  },
  {
    
      type: "Впечатления",
      subtype: "Ekotur",
    
    joy: "Bangkok",
    narx: 46000,
    skidka: "20%",
    rating: 4.66,
    about:
      "Bangkok shahridagi foydalanuvchilar uchun qulay ekotur xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Bangkok markazidagi ekotur",
    author: "Booking.com",
    qulayliklar: [
      "Balkon",
      "Konditsioner",
      "Qulay joylashuv",
      "Hovuz",
      "Shaxsiy hammom",
    ],
    imgs: [
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6095474/original/2c89569f-81e3-42c3-9d93-3a982e4b3a2a.jpeg?im_w=480',
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6095474/original/a585c24d-ce71-46de-880b-3ca18f15d290.jpeg?im_w=480',
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6095474/original/863fe653-8526-46af-8afd-f09c8ba9ca74.jpeg?im_w=480',
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6095474/original/b1870b59-fbf8-418f-ad53-5331b9ec54ba.jpeg?im_w=480'
    ],
    komment: [
      {
        matn: "Mehmonxona xodimlari juda do‘stona.",
        muallif: "Ali",
        sana: "2025-04-19",
      },
      {
        matn: "Xizmatdan mamnun qoldik, yana kelamiz.",
        muallif: "Bekzod",
        sana: "2025-04-01",
      },
      {
        matn: "Joy juda qulay va toza edi!",
        muallif: "Kamola",
        sana: "2025-04-06",
      },
    ],
  },
  {
    
      type: "Услуги",
      subtype: "Nonushta yetkazish",
    
    joy: "Tbilisi",
    narx: 67000,
    skidka: "15%",
    rating: 4.38,
    about:
      "Tbilisi shahridagi foydalanuvchilar uchun qulay nonushta yetkazish xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Tbilisi markazidagi nonushta yetkazish",
    author: "Host",
    qulayliklar: [
      "Balkon",
      "Avtoturargoh",
      "Kir yuvish mashinasi",
      "Wi-Fi",
      "Shaxsiy hammom",
    ],
    imgs: [
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-5982667/original/867db190-670b-43df-92aa-7ff1725c7880.jpeg'
    ],
    komment: [
      {
        matn: "Narxiga yarasha zo‘r joy!",
        muallif: "Aygul",
        sana: "2025-05-04",
      },
      {
        matn: "Joy juda qulay va toza edi!",
        muallif: "Zarina",
        sana: "2025-04-28",
      },
      {
        matn: "Joy juda qulay va toza edi!",
        muallif: "John",
        sana: "2025-04-27",
      },
    ],
  },
  {
    
      type: "Впечатления",
      subtype: "Ekskursiya",
    
    joy: "Bangkok",
    narx: 65000,
    skidka: "15%",
    rating: 4.65,
    about:
      "Bangkok shahridagi foydalanuvchilar uchun qulay ekskursiya xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Bangkok markazidagi ekskursiya",
    author: "Host",
    qulayliklar: [
      "Kir yuvish mashinasi",
      "Avtoturargoh",
      "Shaxsiy hammom",
      "Televizor",
      "Wi-Fi",
    ],
    imgs: [
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-1214681/original/babd0d07-c4f9-4a23-8136-10c99eeb108b.jpeg?im_w=480',
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-1214681/original/8c858b7d-83f7-48a1-b529-b87eda8bd75b.jpeg?im_w=480',
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-1214681/original/a2fbb203-1390-4e5f-8e7b-51486b775753.jpeg?im_w=480',
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-1214681/original/5317c623-8d66-475c-9550-dd1b15aadb4c.jpeg?im_w=480'
    ],
    komment: [
      {
        matn: "Mehmonxona xodimlari juda do‘stona.",
        muallif: "Kamola",
        sana: "2025-04-13",
      },
      {
        matn: "Joy juda qulay va toza edi!",
        muallif: "Kamola",
        sana: "2025-05-07",
      },
      {
        matn: "Joy juda qulay va toza edi!",
        muallif: "Kamola",
        sana: "2025-05-12",
      },
    ],
  },
  {
    
      type: "Впечатления",
      subtype: "Ekskursiya",
    
    joy: "Dubay",
    narx: 109000,
    skidka: "15%",
    rating: 4.71,
    about:
      "Dubay shahridagi foydalanuvchilar uchun qulay ekskursiya xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Dubay markazidagi ekskursiya",
    author: "Airbnb foydalanuvchisi",
    qulayliklar: [
      "Oshxona",
      "Kir yuvish mashinasi",
      "Avtoturargoh",
      "Balkon",
      "Wi-Fi",
    ],
    imgs: [
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-1590116/original/2ca6544d-9bf5-41e5-8765-82dcfde4b974.jpeg?im_w=480',
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-1590116/original/330c085f-ef8b-464e-83db-46bed3912724.jpeg?im_w=480',
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-1590116/original/3bb8a9f7-c981-4050-ba71-8663ecb1ea3f.jpeg?im_w=480',
      'https://a0.muscache.com/im/pictures/Mt/MtTemplate-1590116/original/95ec1bcd-ba3e-4897-9b16-f8f93bfe8de4.jpeg?im_w=480'
    ],
    komment: [
      {
        matn: "Joy juda qulay va toza edi!",
        muallif: "Kamola",
        sana: "2025-04-22",
      },
      {
        matn: "Narxiga yarasha zo‘r joy!",
        muallif: "John",
        sana: "2025-05-08",
      },
      {
        matn: "Joy juda qulay va toza edi!",
        muallif: "John",
        sana: "2025-04-04",
      },
    ],
  },
  {
    
      type: "Жилье",
      subtype: "Xona",
    
    joy: "Dubay",
    narx: 53000,
    skidka: "15%",
    rating: 4.41,
    about:
      "Dubay shahridagi foydalanuvchilar uchun qulay xona xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Dubay markazidagi xona",
    author: "Booking.com",
    qulayliklar: [
      "Shaxsiy hammom",
      "Balkon",
      "Hovuz",
      "Oshxona",
      "Kir yuvish mashinasi",
    ],
    imgs: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIwMTM1NzYyNzEwMTkyNzAwNQ==/original/2ae1776f-f7fa-402a-be91-99358594ac36.png?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIwMTM1NzYyNzEwMTkyNzAwNQ==/original/d86b8d67-86f9-43d3-be08-edbc78227a98.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIwMTM1NzYyNzEwMTkyNzAwNQ==/original/69dcb326-354d-4fad-92ac-f1022fa6ad24.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-1201357627101927005/original/32e2f225-f554-4098-9eef-864cfc37bf89.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-1201357627101927005/original/568ffc3c-60cb-406a-a5e2-bb072c077824.jpeg?im_w=720'
    ],
    komment: [
      {
        matn: "Mehmonxona xodimlari juda do‘stona.",
        muallif: "Zarina",
        sana: "2025-04-18",
      },
      {
        matn: "Manzili yaxshi, lekin xona kichkina.",
        muallif: "John",
        sana: "2025-04-10",
      },
      {
        matn: "Narxiga yarasha zo‘r joy!",
        muallif: "Ali",
        sana: "2025-04-27",
      },
    ],
  },
  {
    
      type: "Услуги",
      subtype: "Transfer",
    
    joy: "Dubay",
    narx: 132000,
    skidka: "5%",
    rating: 4.6,
    about:
      "Dubay shahridagi foydalanuvchilar uchun qulay transfer xizmati yoki joylashuvi. Zamonaviy imkoniyatlar bilan ta’minlangan.",
    title: "Dubay markazidagi transfer",
    author: "Booking.com",
    qulayliklar: ["Wi-Fi", "Televizor", "Oshxona", "Hovuz", "Avtoturargoh"],
    imgs: [],
    komment: [
      {
        matn: "Narxiga yarasha zo‘r joy!",
        muallif: "Ali",
        sana: "2025-03-23",
      },
      {
        matn: "Xizmatdan mamnun qoldik, yana kelamiz.",
        muallif: "Zarina",
        sana: "2025-04-05",
      },
      {
        matn: "Manzili yaxshi, lekin xona kichkina.",
        muallif: "Aygul",
        sana: "2025-03-30",
      },
    ],
  },
];
