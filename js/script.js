$('#datepicker').datepicker();

$('.toTop').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');         
  });


 

  $(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  });

  $(document).ready(function() {
    $(window).on("scroll", function() {
      if ($(window).scrollTop() >= 20) {
        $(".navbar").addClass("compressed");
      } else {
        $(".navbar").removeClass("compressed");
      }
    });
  });
  
 $('#navbarResponsive a').click(function(){
    $('#logo').click();
 })


//  $(function(){
//    $("form[name='registration']".validate({
//      rules: {
//        inputName : "required"
//      },
//      messages : {
//        inputName : "Vui lòng nhập họ tên "
//      }, 
//      submitHandler : function (form) {
//        form.submit();
//      }
//    }))
//  })
$(document).ready(function (){
  $("#registration").validate({
    rules : {
      inputName : "required",

    },
    messages : {
      inputName : {
        required : "Vui lòng nhập tên",
      },  
    },
  });
});