$(function(){
  $('.button').on({
    'mousedown':function(){
      $(this).css('border-style','inset');
    },'mouseup':function(){
      $(this).css('border-style','outset');
    },'click':function(){
      $($(this).data('target')).addClass('show');
    }
  });
  $('.popup .close').on('click',function(){
    $(this).closest('.popup').removeClass('show');
  });
});