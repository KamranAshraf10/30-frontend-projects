$(document).ready(function () {
    $('.faq-item').each(function () { 
         var $item = $(this);
         var $question = $item.find('.faq-question');
        
         $question.click(function (e) { 
           var isActive = $item.hasClass('active');
           $('.faq-item').removeClass('active');
            
           if(!isActive)
           {
            $item.addClass('active');
           }
         });

    });
});