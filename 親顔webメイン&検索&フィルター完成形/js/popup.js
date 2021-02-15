$(function(){
    $('.button').on({
      'mousedown':function(){
        $(this).css('border-style','inset');
      },'mouseup':function(){
        $(this).css('border-style','outset');
      },'click':function(){
        $($(this).data('target')).css('display','block');
      }
    });
    $('.popup .close').on('click',function(){
      $(this).closest('.popup').css('display','none');
    });
});