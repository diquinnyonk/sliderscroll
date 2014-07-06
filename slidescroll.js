/// slidescroll ///////////////////////////
(function( $ ){
$.fn.slidescroll = function (options){
    var $this    = this;

    // default
    var so = $.extend({
                    idname      : '.timeline',
                    navname     : 'nav',
                    speed       : 500,
                    plusScroll  : 0,
                    plusMinus   : 'plus'
                }, 
                options);
    var scrollAmount = so.plusScroll;

    $(so.idname).each(function(){ 
                thisoffset = $(this).offset().top; 
                if(so.plusMinus == 'plus'){
                    thisoffset = thisoffset + scrollAmount;
                }else{   
                    thisoffset = thisoffset - scrollAmount;
                }
                $(this).attr('data-off-top', thisoffset);

        });
        
        $(window).resize(function(){
           $(so.idname).each(function(){ 
                thisoffset = $(this).offset().top; 
                if(so.plusMinus == 'plus'){
                    thisoffset = thisoffset + scrollAmount;
                }else{   
                    thisoffset = thisoffset - scrollAmount;
                }
                $(this).attr('data-off-top', thisoffset); 
            });
       });

    ////////////////////////////
    blink = $(so.navname+' a');
    blink.click(function(e){
        
        var $anchor = $(this);
        e.preventDefault();
        

        scrollingTo = $($anchor.attr('href')).offset().top;
        

        if(so.plusMinus == 'plus'){
            scrollingTo = scrollingTo + (scrollAmount + 5);
        }else{   
            scrollingTo = scrollingTo - (scrollAmount - 5);
        }
        
        //$('html').stop().animate({
        //    scrollTop: scrollingTo
        //}, 1500,'easeInOutExpo');
        //console.log('click happened',navigator.sayswho,' yes ', navigator.userAgent,navigator.appCodeName, e.currentTarget.hash);
        var browserName = navigator.sayswho;
        var bName = browserName.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))/i);

        if(bName[0] == 'Chrome' || bName[0] == 'Safari'){
            $("body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
                $('body').stop();
            });

            $('body').animate({ scrollTop: scrollingTo }, 1500, 'easeInOutExpo', function(){
                $("body").unbind("scroll mousedown DOMMouseScroll mousewheel keyup");
            });
        }else{
            $("html").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
                $('html').stop();
            });

            $('html').animate({ scrollTop: scrollingTo }, 1500, 'easeInOutExpo', function(){
                $("html").unbind("scroll mousedown DOMMouseScroll mousewheel keyup");
            });
        }

        return false; 
        
    });

    


    if($('.timeline-nav').length > 0){
        //$timeNav = $('.timeline-nav');
        $timeObj = $('.timeline-nav').offset();
        $timeNavPos = $timeObj.top;

    }else {
        $timeNavPos = 0;
    }

    ////////////////////////////
    alink = $(so.navname).find('a');
 
    $(window).scroll(function(){
       

       scrollv = $(document).scrollTop();
       //console.info(scrollv);
       $(so.idname).each(function(){ 
                thisAttr = $(this).attr('data-off-top');
            if(scrollv < $(so.idname+':first').attr('data-off-top')){
                        $('a.current').removeClass('current');
                    }else if(scrollv >= thisAttr && scrollv < $(this).next(so.idname).attr('data-off-top') && scrollv > $(this).prev(so.idname).attr('data-off-top')){ // the inbetweeners!
                            //console.info('matched '+$(this).attr('id'));
                            $('a.current').removeClass('current');
                            $(so.navname).find('a[href="#'+$(this).attr("id")+'"]').addClass('current');
                    } else if(scrollv >= thisAttr && scrollv > $(this).prev(so.idname).attr('data-off-top')){ // last item
                            //console.info('last matched '+$(this).attr('id'));
                            //console.log($('a').attr('href','#'+$(this).attr("id")));
                            $('a.current').removeClass('current');
                            $(so.navname).find('a[href="#'+$(this).attr("id")+'"]').addClass('current');
                    } else if (scrollv >= thisAttr && scrollv < $(this).next(so.idname).attr('data-off-top')) { // then must be first
                            //console.info('first matched '+$(this).attr('id'));
                            $('a.current').removeClass('current');
                            $(so.navname).find('a[href="#'+$(this).attr("id")+'"]').addClass('current');

                    }
            });
            //custom for this version/////
            if ($('ul li a').hasClass('current')) {
                $('.updown').addClass('active');
            }else{
                $('.updown').removeClass('active');
            }

            if(scrollv > 465 /*$timeNavPos*/){
                $('.timeline-nav').addClass('hover-with');
            }else{
                $('.timeline-nav').removeClass('hover-with');
            }   

        });

};
})( jQuery );
navigator.sayswho = (function(){
    var ua = navigator.userAgent, tem, 
    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
    if(/trident/i.test(M[1])){
        tem =  /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    M= M[2]? [M[1], M[2]]:[navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    return M.join(' ');
})();