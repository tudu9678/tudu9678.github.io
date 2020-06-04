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

$('#navbarResponsive a').click(function(){
  $('.navbar-toggler').click();
})



$(document).ready(function(){


    $("#registration").validate({  
      onsubmit: true,
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
        inputGroupSelect1 : {
          required : true,
        },
        inputGroupSelect2 : {
          required : true,
        }
  
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
        inputGroupSelect1 : {
          required : "Vui lòng chọn sản phẩm vay",
        },
        inputGroupSelect2 : {
          required : "Vui lòng chọn mức thu nhập",
        }
      },
    });

  
})

$('#btnSubmit').click(function() {
  if ($('#registration').valid()){
    $('#registration').submit();
    var d = new Date(); 
  var result  = d.toLocaleString(); 
  var name = $('#inputName').val();
  var number = $('#inputNumberPhone').val();
  var birthday = $('#datetimepicker1').val();
  var cmnd = $('#inputID').val();
  var dropdown1 = $('#inputGroupSelect1 option:selected').html();
  var dropdown2 = $('#inputGroupSelect2 option:selected').html();
          Email.send({
        SecureToken : "42952ebf-0573-4475-ba6f-2271d61a97cc",
        To : 'nhatde1201.goweb@gmail.com',
        From : "xalmon1405@gmail.com",
        Subject : "Thông tin người cần vay",
        Body : "Thời gian : " + result   + "<br>"
              +"Họ tên : " + name + "<br>"
              +"Số điện thoại : " + number + "<br>"
              +"Ngày sinh : " + birthday + "<br>"
              +"Số CMND : " + cmnd + "<br>"
              +"Sản phẩm vay : " + dropdown1  + "<br>"
              +"Thu nhập : " + dropdown2 +"<br>",

      }).then(
      message => alert(message),
      );
      alert("Thông tin của bạn đã được gửi , chúng tôi sẽ liên hệ với bạn sớm nhất . Xin cảm ơn !");
      
      var url = 'https://script.google.com/macros/s/AKfycbxzQ9AXJpXLGqqB_8Usk3wSPgZD-KPR59d3XWQaz63o9pU8IQ4/exec';

      var data = {
          inputName: name,
          inputNumberPhone: number,
          datetimepicker1:birthday,
          inputID:cmnd,
          inputGroupSelect1:dropdown1,
          inputGroupSelect2:dropdown2,
          result:result
        };
        $.ajax({
          type: "GET",
          url: url,
          header: "Access-Control-Allow-Origin: *",
          data: data,
          crossDomain: true
        });
      }
 
})

