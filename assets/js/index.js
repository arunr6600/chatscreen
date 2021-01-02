function sort() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("list-wrapper");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h2")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}




$( document ).ready(function() {
   $('#list-wrapper').on('click', 'li', function() {
    $('#list-wrapper li.active').removeClass('active');
    $(this).addClass('active');
});

    $('.burger-icon').click(function(){
        $('.menu-panel').toggleClass("active");
        
    });

    $('#list-wrapper').on ('click', function(){
        $('.chat-panel , .chat-screen').removeClass('nav-chat');
        $('.chat-panel, .chat-screen').addClass('nav-chat');
    });

     $('.back-mob-view').on ('click', function(e){
         e.stopPropagation();
        $('.chat-panel , .chat-screen').removeClass('nav-chat');
        // $('.chat-panel, .chat-screen').addClass('nav-chat');
    });
});


