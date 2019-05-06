var APP ={};

APP.$html = $('html')
APP.$document = $(document);
APP.$dropdownMenu = $('.js-menu-button');
APP.$select = $('.wrap-drop');
APP.$dropdownTabs = $('.tabs-list__item');
APP.$headerMenuClose = $('.menu-content__close');
APP.$hamburger = $('.hamburger');
APP.$headerNav = $('.nav-list');
APP.$modalBtn = $('.js-modal-btn');
APP.$closeModal = $('.close-modal');
APP.$modal = $('.modal');
APP.$showPass = $('.show-pass');
APP.$i = 0;

APP.$modalBtn.on('click', function(){
  var target = $(this).data('target');

  APP.$modal.removeClass('active');
  $('.modal[data-target="' + target + '"]').addClass('active');
  APP.$html.addClass('overflow');
});
APP.$closeModal.on('click', function () {
  APP.$modal.removeClass('active');
  APP.$html.removeClass('overflow');
});

APP.$showPass.on('click', function(){
  var inputPass = $('.modal.active .form-label__pass input');
  (APP.$i++ >= 1)? APP.$i = 0 : APP.$i++;

  if(APP.$i == 0){
    inputPass.attr('type', 'password');
  }else{
    inputPass.attr('type', 'text');
  }
  
});

APP.$document.ready(function (){

APP.$dropdownMenu.on('click', function(){
  var parent = $('.nav-list__dropdown');

  parent.not($(this).parent()).removeClass('active');
  $(this).parent().toggleClass('active');
});

// custom select 
APP.$select.each(function(key,item){
  var selectedText = $(item).find('.selected').html();

  $(item).find('.selected-el span').html(selectedText);
});


$(document).on('click','.wrap-drop',function(){
  $('.wrap-drop').not(this).removeClass('active');
  $(this).toggleClass('active');
});

$(document).on('click','.drop>li',function(){
  var attribute = $(this).data('value'),
      parentData = $(this).parents('.wrap-drop').data('ajax'),
      thisText = $(this).html();;

  $(this).addClass('selected').siblings().removeClass('selected');
  $(this).parents('.wrap-drop').find('.selected-el span').html(thisText);

  window["ajax"+parentData](attribute);
});
//

$(document).on('click', function(event){
  var if_thisbutton = $(event.target).hasClass('wrap-drop.active')? true: $(event.target).parents('.wrap-drop.active').length > 0? true: false;

  if( !if_thisbutton ){
    APP.$select.removeClass('active');
  };
});
//

APP.$dropdownTabs.on('click', function(){
  var attribute = $(this).data('target');

  if(!$(this).hasClass('active')){
    APP.$dropdownTabs.removeClass('active');
    $(this).addClass('active');
    $('.dropdown-menu__target').removeClass('active');
    $('.dropdown-menu__target[data-target=' + attribute + ']').addClass('active');
  }
});

APP.$hamburger.on('click', function(){
  APP.$html.addClass('overflow');
  APP.$headerNav.addClass('active');
});

APP.$headerMenuClose.on('click', function(){
  APP.$headerNav.removeClass('active');
  APP.$html.removeClass('overflow')
});

});//document ready

function ajaxLang(data){
  console.log(data);
};

function ajaxCurrency(data){
  console.log(data);
};