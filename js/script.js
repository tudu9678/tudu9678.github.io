$('#datetimepicker1').datepicker();

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

$('.dropdown-menu a').click(function(){
    $(this).parent().parent().find('button span').html($(this).text());
    $(this).parent().parent().find('button span').data('value',$(this).data('value'))
})

$(document).ready(function(){

    $("#registration").validate({  
      rules : {
        inputName : {
          required : true,
        },
        inputNumberPhone : {
          required : true,
          minlength : 10,
        },
        datetimepicker1 : "required",
        inputID : "required",

  
      },
      messages : {
        inputName : {
          required : "Vui lòng nhập tên",
        },  
        inputNumberPhone : {
          required  : "Vui lòng số điện thoại",
          minlength : "Số điện thoại phải có 10 số",
        },
        datetimepicker1 : {
          required : "Vui lòng nhập ngày sinh",
        },
        inputID : {
          required : "Vui lòng nhập CMND",
        },
      },
    });
})
$(document).ready(function(){
  $('#btnSubmit').click(function(e){
    if ($('#dropdown1 span').data('value') == 0)
        alert("Vui lòng " + $('#dropdown1 span').text());
        e.preventDefault();
  })
  
})
$(document).ready(function(){
  $('#btnSubmit').click(function(e){
    if ($('#dropdown2 span').data('value') == 0)
        alert("Vui lòng " + $('#dropdown2 span').text());
        e.preventDefault();
  })
  
})