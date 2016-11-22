$(document).ready(function(){

    function autoimg(time){
        var img = $('.banner a');
        var len = img.length;
        var intN = 0;
        auto();
        setInterval(auto,time);
        function auto(){
            if(intN < len){
                if(intN == 0){
                    img.eq(intN).addClass('animated zoomInLeft').show().siblings().hide();
                }
                if(intN == 1){
                    img.eq(intN).addClass('animated zoomInDown').show().siblings().hide();
                }
                if(intN == 2){
                    img.eq(intN).addClass('animated shake').show().siblings().hide();
                }
                intN += 1;
            }else {
                intN = 0;
                img.eq(intN).addClass('animated zoomInLeft').show().siblings().hide();
                intN += 1;
            }
        }
    }
    autoimg(5000);











});