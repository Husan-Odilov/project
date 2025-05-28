let dubay_usluga_wrapper=document.querySelector('.usluga__dubay');
let moskva_usluga_wrapper=document.querySelector('.usluga__moskva');
let paris_usluga_wrapper=document.querySelector('.usluga__paris');
// let tokyo_usluga_wrapper=document.querySelector('.usluga__tokyo');

let inp=document.querySelector('.search__input');
let input=document.querySelector('.header__inp');




let moskva_usluga=places.filter(function(item){
    return item.city=='Москва'  && item.type=="usluga"
})

let paris_usluga=places.filter(function(item){
    return item.city=='Париж'  && item.type=="usluga"
})

let dubay_usluga=places.filter(function(item){
    return item.city=='Дубай' && item.type=="usluga"
})

// let tokyo_usluga=job.filter(function(item){
//     return item.city=='Токио' && item.type=="usluga"
// })




inp.addEventListener('input',function(e){
    let value=inp.value.toLowerCase();
    let all_places=places.filter(function(item){
        return item.category.toLowerCase().includes(value) && item.type=="usluga";
    })
    console.log(all_places);

dubay_usluga_wrapper.innerHTML='';
moskva_usluga_wrapper.innerHTML='';
paris_usluga_wrapper.innerHTML='';
// tokyo_usluga_wrapper.innerHTML='';

    all_places.forEach(function(item){

      if(item.city=='Дубай'){
        dubay_usluga_wrapper.insertAdjacentHTML('beforeend',`
 <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${item.img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">${item.title}</p>
              <div class="hero__text_box">
                <p class="hero__text">${item.price}</p>
                <p class="hero__text hero__text--star">${item.rating}</p>
              </div>
            </div>
            </a>
        `)
      }
      if(item.city=='Москва'){
        moskva_usluga_wrapper.insertAdjacentHTML('beforeend',`
 <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${item.img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">${item.title}</p>
              <div class="hero__text_box">
                <p class="hero__text">${item.price}</p>
                <p class="hero__text hero__text--star">${item.rating}</p>
              </div>
            </div>
            </a>
        `)
      }
      if(item.city=='Париж'){
        paris_usluga_wrapper.insertAdjacentHTML('beforeend',`
 <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${item.img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">${item.title}</p>
              <div class="hero__text_box">
                <p class="hero__text">${item.price}</p>
                <p class="hero__text hero__text--star">${item.rating}</p>
              </div>
            </div>
            </a>
        `)
      }
      if(item.city=='Токио'){
        tokyo_usluga_wrapper.insertAdjacentHTML('beforeend',`
 <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${item.img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">${item.title}</p>
              <div class="hero__text_box">
                <p class="hero__text">${item.price}</p>
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
        return item.category.toLowerCase().includes(value) && item.type=="usluga";
    })
    console.log(all_placess);

dubay_usluga_wrapper.innerHTML='';
moskva_usluga_wrapper.innerHTML='';
paris_usluga_wrapper.innerHTML='';
// tokyo_usluga_wrapper.innerHTML='';

    all_placess.forEach(function(item){

      if(item.city=='Дубай'){
        dubay_usluga_wrapper.insertAdjacentHTML('beforeend',`
 <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${item.img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">${item.title}</p>
              <div class="hero__text_box">
                <p class="hero__text">${item.price}</p>
                <p class="hero__text hero__text--star">${item.rating}</p>
              </div>
            </div>
            </a>
        `)
      }
      if(item.city=='Москва'){
        moskva_usluga_wrapper.insertAdjacentHTML('beforeend',`
 <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${item.img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">${item.title}</p>
              <div class="hero__text_box">
                <p class="hero__text">${item.price}</p>
                <p class="hero__text hero__text--star">${item.rating}</p>
              </div>
            </div>
            </a>
        `)
      }
      if(item.city=='Париж'){
        paris_usluga_wrapper.insertAdjacentHTML('beforeend',`
 <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${item.img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">${item.title}</p>
              <div class="hero__text_box">
                <p class="hero__text">${item.price}</p>
                <p class="hero__text hero__text--star">${item.rating}</p>
              </div>
            </div>
            </a>
        `)
      }
      if(item.city=='Токио'){
        tokyo_usluga_wrapper.insertAdjacentHTML('beforeend',`
 <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${item.img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">${item.title}</p>
              <div class="hero__text_box">
                <p class="hero__text">${item.price}</p>
                <p class="hero__text hero__text--star">${item.rating}</p>
              </div>
            </div>
            </a>
        `)
      } 
    })
})





for(let i=0;i<dubay_usluga.length;i++){
    dubay_usluga_wrapper.insertAdjacentHTML('beforeend',`
         <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${dubay_usluga[i].img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">${dubay_usluga[i].title}</p>
              <div class="hero__text_box">
                <p class="hero__text">${dubay_usluga[i].price}$</p>
                <p class="hero__text hero__text--star">${dubay_usluga[i].rating}</p>
              </div>
            </div>
          </a>
    `)
}

for(let i=0;i<moskva_usluga.length;i++){
    moskva_usluga_wrapper.insertAdjacentHTML('beforeend',`
         <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${moskva_usluga[i].img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">${moskva_usluga[i].title}</p>
              <div class="hero__text_box">
                <p class="hero__text">${moskva_usluga[i].price}$</p>
                <p class="hero__text hero__text--star">${moskva_usluga[i].rating}</p>
              </div>
            </div>
          </a>
    `)
}

for(let i=0;i<paris_usluga.length;i++){
    paris_usluga_wrapper.insertAdjacentHTML('beforeend',`
         <a href="detail.html" style="text-decoration: none; color: black;">
                <div class="hero__card">
              <img class="hero__img" src="${paris_usluga[i].img}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">${paris_usluga[i].title}</p>
              <div class="hero__text_box">
                <p class="hero__text">${paris_usluga[i].price}$d</p>
                <p class="hero__text hero__text--star">${paris_usluga[i].rating}</p>
              </div>
            </div>
            </a>
    `)
}

// for(let i=0;i<tokyo_usluga.length;i++){
//     tokyo_usluga_wrapper.insertAdjacentHTML('beforeend',`
//          <a href="detail.html" style="text-decoration: none; color: black;">
//                 <div class="hero__card">
//               <img class="hero__img" src="${tokyo_usluga[i].img}" alt="" />
//               <i class="bi bi-heart"></i>
//               <div class="hero__position">Выбор гостей</div>
//               <p class="hero__card_title">${tokyo_usluga[i].title}</p>
//               <div class="hero__text_box">
//                 <p class="hero__text">${tokyo_usluga[i].price}$ за 1 ночь </p>
//                 <p class="hero__text hero__text--star">${tokyo_usluga[i].rating}</p>
//               </div>
//             </div>
//             </a>
//     `)
// }