$(document).ready(function(){
    // tab
    $('.tab .btn').on("click", function(){
        console.log($(this));

        var number =$(this).data("option");

        $('.tab .btn').removeClass('active');

        $(this).addClass('active');
        console.log($(this));

        $('.tab_container .nav').hide();
        $('div[data-item="'+number+'"]').show();

    }) ;

});