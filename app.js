let dubay_wrapper=document.querySelector('.hero__dubay');
let wrapper=document.querySelector('.hero__wrapper');
let moskva_wrapper=document.querySelector('.hero__moskva');
let paris_wrapper=document.querySelector('.hero__paris');
let tokyo_wrapper=document.querySelector('.hero__tokyo');


let moskva_places=places.filter(function(item){
    return item.city=='Москва'  && item.type=="Отель"
})

let paris_places=places.filter(function(item){
    return item.city=='Париж'  && item.type=="Отель"
})

let dubay_places=places.filter(function(item){
    return item.city=='Дубай' && item.type=="Отель"
})

let tokyo_places=places.filter(function(item){
    return item.city=='Токио' && item.type=="Отель"
})



for(let i=0;i<dubay_places.length;i++){
    dubay_wrapper.insertAdjacentHTML('beforeend',`
                <div class="hero__card">
              <img class="hero__img" src="${dubay_places[i].img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">${dubay_places[i].title}</p>
              <div class="hero__text_box">
                <p class="hero__text">${dubay_places[i].price}$ за 1 ночь </p>
                <p class="hero__text hero__text--star">${dubay_places[i].rating}</p>
              </div>
            </div> 
    `)
}
for(let i=0;i<moskva_places.length;i++){
    moskva_wrapper.insertAdjacentHTML('beforeend',`
                <div class="hero__card">
              <img class="hero__img" src="${moskva_places[i].img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">${moskva_places[i].title}</p>
              <div class="hero__text_box">
                <p class="hero__text">${moskva_places[i].price}$ за 1 ночь </p>
                <p class="hero__text hero__text--star">${moskva_places[i].rating}</p>
              </div>
            </div> 
    `)
}

for(let i=0;i<paris_places.length;i++){
    paris_wrapper.insertAdjacentHTML('beforeend',`
                <div class="hero__card">
              <img class="hero__img" src="${paris_places[i].img}" alt="" />
                <i class="bi bi-heart"></i>
                <div class="hero__position">Выбор гостей</div>
                <p class="hero__card_title">${paris_places[i].title}</p>
                <div class="hero__text_box">
                  <p class="hero__text">${paris_places[i].price}$ за 1 ночь </p>
                  <p class="hero__text hero__text--star">${paris_places[i].rating}</p>
                </div>
            </div>
    `)
}

for(let i=0;i<tokyo_places.length;i++){
    tokyo_wrapper.insertAdjacentHTML('beforeend',`


            <a href="detail.html">
                            <div class="hero__card">
              <img class="hero__img" src="${tokyo_places[i].img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">${tokyo_places[i].title}</p>
              <div class="hero__text_box">
                <p class="hero__text">${tokyo_places[i].price}$ за 1 ночь </p>
                <p class="hero__text hero__text--star">${tokyo_places[i].rating}</p>
              </div>
            </div></a>
    `)
}

