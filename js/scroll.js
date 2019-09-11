$(function(){
  let course = document.querySelector('.header-main-content'),
      forWho = document.querySelector('.answers'),
      features = document.querySelector('.start'),
      author = document.querySelector('.about');

  $('.header-main-header-item-nav .header-main-header-item-nav-item span').on('click',scroll);
  $('.footer-menu-nav .footer-menu-nav-item span').on('click',scroll);
  function scroll(e){
    let elementToScroll;
    if($(e.target).text() == 'О курсе'){
      elementToScroll = course;
    }
    if($(e.target).text() == 'Кому подойдёт курс?' || 'Для кого курс'){
      elementToScroll = forWho;
    }
    if($(e.target).text() == 'Преимущества'){
      elementToScroll = features;
    }
    if($(e.target).text() == 'Об авторе'){
      elementToScroll = author;
    }
    elementToScroll.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
    });
  }
})
