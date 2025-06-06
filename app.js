let wrapper=document.querySelector('.hero');

let dubay_wrapper=document.querySelector('.hero__dubay');
let moskva_wrapper=document.querySelector('.hero__moskva');
let paris_wrapper=document.querySelector('.hero__paris');
let tokyo_wrapper=document.querySelector('.hero__tokyo');


let inp=document.querySelector('.search__input');
let input=document.querySelector('.header__inp');




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




inp.addEventListener('input',function(e){
    let value=inp.value.toLowerCase();
    let all_places=places.filter(function(item){
        return item.city.toLowerCase().includes(value) && item.type=="Отель";
    })
    console.log(all_places);

dubay_wrapper.innerHTML='';
moskva_wrapper.innerHTML='';
paris_wrapper.innerHTML='';
tokyo_wrapper.innerHTML='';

    all_places.forEach(function(item){

      if(item.city=='Дубай'){
        dubay_wrapper.insertAdjacentHTML('beforeend',`
            <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${item.img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">Отель ${item.location}</p>
              <div class="hero__text_box">
                <p class="hero__text">${item.price}$ за 1 ночь </p>
                <p class="hero__text hero__text--star">${item.rating}</p>
              </div>
            </div>
            </a>
        `)
      }
      if(item.city=='Москва'){
        moskva_wrapper.insertAdjacentHTML('beforeend',`
            <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${item.img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">Отель ${item.location}</p>
              <div class="hero__text_box">
                <p class="hero__text">${item.price}$ за 1 ночь </p>
                <p class="hero__text hero__text--star">${item.rating}</p>
              </div>  
            </div>
            </a>
        `)
      }
      if(item.city=='Париж'){
        paris_wrapper.insertAdjacentHTML('beforeend',`
            <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${item.img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">Отель ${item.location}</p>
              <div class="hero__text_box">
                <p class="hero__text">${item.price}$ за 1 ночь </p>
                <p class="hero__text hero__text--star">${item.rating}</p>
              </div>  
            </div>
            </a>
        `)
      }
      if(item.city=='Токио'){
        tokyo_wrapper.insertAdjacentHTML('beforeend',`
            <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${item.img}" alt="" />
              <i class="bi bi-heart"></i> 
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">Отель ${item.location}</p>
              <div class="hero__text_box">
                <p class="hero__text">${item.price}$ за 1 ночь </p>
                <p class="hero__text hero__text--star">${item.rating}</p>
              </div>
            </div>
            </a>
        `)
      } 
    })
})



input.addEventListener('input',function(e){
    let value=input.value.toLowerCase();
    let all_placess=places.filter(function(item){
        return item.city.toLowerCase().includes(value) && item.type=="Отель";
    })
    console.log(all_placess);

dubay_wrapper.innerHTML='';
moskva_wrapper.innerHTML='';
paris_wrapper.innerHTML='';
tokyo_wrapper.innerHTML='';

    all_placess.forEach(function(item){

      if(item.city=='Дубай'){
        dubay_wrapper.insertAdjacentHTML('beforeend',`
            <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${item.img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">Отель ${item.location}</p>
              <div class="hero__text_box">
                <p class="hero__text">${item.price}$ за 1 ночь </p>
                <p class="hero__text hero__text--star">${item.rating}</p>
              </div>
            </div>
            </a>
        `)
      }
      if(item.city=='Москва'){
        moskva_wrapper.insertAdjacentHTML('beforeend',`
            <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${item.img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">Отель ${item.location}</p>
              <div class="hero__text_box">
                <p class="hero__text">${item.price}$ за 1 ночь </p>
                <p class="hero__text hero__text--star">${item.rating}</p>
              </div>  
            </div>
            </a>
        `)
      }
      if(item.city=='Париж'){
        paris_wrapper.insertAdjacentHTML('beforeend',`
            <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${item.img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">Отель ${item.location}</p>
              <div class="hero__text_box">
                <p class="hero__text">${item.price}$ за 1 ночь </p>
                <p class="hero__text hero__text--star">${item.rating}</p>
              </div>  
            </div>
            </a>
        `)
      }
      if(item.city=='Токио'){
        tokyo_wrapper.insertAdjacentHTML('beforeend',`
            <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${item.img}" alt="" />
              <i class="bi bi-heart"></i> 
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">Отель ${item.location}</p>
              <div class="hero__text_box">
                <p class="hero__text">${item.price}$ за 1 ночь </p>
                <p class="hero__text hero__text--star">${item.rating}</p>
              </div>
            </div>
            </a>
        `)
      } 
    })
})




for(let i=0;i<dubay_places.length;i++){
    dubay_wrapper.insertAdjacentHTML('beforeend',`
            <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${dubay_places[i].img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">Отель ${dubay_places[i].location}</p>
              <div class="hero__text_box">
                <p class="hero__text">${dubay_places[i].price}$ за 1 ночь </p>
                <p class="hero__text hero__text--star">${dubay_places[i].rating}</p>
              </div>
            </div>
            </a>
    `)
}
for(let i=0;i<moskva_places.length;i++){
    moskva_wrapper.insertAdjacentHTML('beforeend',`

            <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${moskva_places[i].img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">Отель ${moskva_places[i].location}</p>
              <div class="hero__text_box">
                <p class="hero__text">${moskva_places[i].price}$ за 1 ночь </p>
                <p class="hero__text hero__text--star">${moskva_places[i].rating}</p>
              </div>
            </div>
            </a>
    `)
}

for(let i=0;i<paris_places.length;i++){
    paris_wrapper.insertAdjacentHTML('beforeend',`
              <a href="detail.html" style="text-decoration: none; color: black;">
   <div class="hero__card">
              <img class="hero__img" src="${paris_places[i].img}" alt="" />
                <i class="bi bi-heart"></i>
                <div class="hero__position">Выбор гостей</div>
                <p class="hero__card_title">Отель ${paris_places[i].location}</p>
                <div class="hero__text_box">
                  <p class="hero__text">${paris_places[i].price}$ за 1 ночь </p>
                  <p class="hero__text hero__text--star">${paris_places[i].rating}</p>
                </div>
            </div>
              </a>
    `)
}

for(let i=0;i<tokyo_places.length;i++){
    tokyo_wrapper.insertAdjacentHTML('beforeend',`


            <a href="detail.html" style="text-decoration: none; color: black;">
                            <div class="hero__card">
              <img class="hero__img" src="${tokyo_places[i].img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">Отель ${tokyo_places[i].location}</p>
              <div class="hero__text_box">
                <p class="hero__text">${tokyo_places[i].price}$ за 1 ночь </p>
                <p class="hero__text hero__text--star">${tokyo_places[i].rating}</p>
              </div>
            </div></a>
    `)
}



 