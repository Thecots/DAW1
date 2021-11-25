$(window).scroll(function(){

    $(".seccio").each(function () {

        var seccio =$(this).offset().top -400;
        console.log(seccio);

        var check =$(window).scrollTop();
        
        if(check > seccio){
            $("body").addClass("seccio" + $(this).data("id"));
        }else{
            $("body").removeClass("seccio" + $(this).data("id"));

        }
    });

});