let wrapper=document.querySelector('.hero__wrapper');





for(let i=0;i<places.length;i++){
    wrapper.insertAdjacentHTML('beforeend',`
                <div class="hero__card">
              <img class="hero__img" src="${places[i].imgs[i]}" alt="" />
              <i class="bi bi-heart"></i>
              <div class="hero__position">Выбор гостей</div>
              <p class="hero__card_title">Квартира, Даунтаун Дубай</p>
              <div class="hero__text_box">
                <p class="hero__text">$230 за 2 ночи </p>
                <p class="hero__text hero__text--star">4,83</p>
              </div>
            </div> 
    `)
}