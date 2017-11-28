//Sorting function for project page
// https://bootsnipp.com/snippets/featured/portfolio-gallery-with-filtering-category

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");
});



// //show and hide text when rolled over for projects
// //for some reason, adding this messes up the sorting
// function showText {
// 	x.style.font-size = "400%";
// }

// function hideText {
// 	x.style.font-size = "200%";
// }