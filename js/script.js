int_bank = document.querySelector(".int_bank");
logo = document.querySelector(".logo");
slide_person = document.querySelector(".slide_person");
content_left = document.querySelector(".content_left");
right_content = document.querySelector(".right_content");
slide_person = document.querySelector(".slide_person");
slide_life = document.querySelector(".slide_life");
int_bank = document.querySelector(".int_bank");
cart = document.querySelector(".cart");
right = document.querySelector(".right");



var Chart = new Chart(document.getElementById("line-chart"), {
  gridLines: {
    display: false,
    color: "red"
  },
  type: 'line',
  data: {

    display: false,



    labels: [1212, 1600, 1700, 1200, 1212],

    datasets: [{

      radius: 0,
      // label: "Day",
      // backgroundColor: "rgba(0,204,255,0.5)",
      borderColor: "rgba(255,255,255,1)",
      borderWidth: "2px",
      // pointBackgroundColor: "rgba(255,99,132,1)",
      // pointBorderColor: "#fff",
      // pointHoverBackgroundColor: "#fff",
      // pointHoverBorderColor: "rgba(255,99,132,1)",
      data: ["120", "145", "50", "205", "120"],


    },

    ]
  },
  options: {
    scales: {
      yAxes: [{
                display: true,
                ticks: {
                  display: false
                },
                gridLines: {
                  color: '#9EA5AC',
                  drawBorder: false
                }
            }],
      xAxes: [{
                display: false
            }]
    },
    legend: {
      display: false,


    },
    title: {
      display: true,

    }
  }
});
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    nav:true,
    navText:["<img src='photo/left-btn.png'>","<img src='photo/right-btn.png'>"],
    navClass:['owl-prev','owl-next'],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})
})
$(document).ready(function () {
  

})
$(document).ready(function () {

  function gomez() {
    $(".mezenne").css('display', 'none');
    $(".mezenne").prop("disabled", false);

  }
  function gomezl() {
    $(".mezenne").css('left', '100%');

    $(".mezenne").prop("disabled", false);

  }
  $(".exit_right").on("click", function () {
    setTimeout(gomez, 200);
    setTimeout(gomezl, 10);

    $(".mezenne").prop("disabled", true);
  });

  ////////////////////////////////////////////////////////////
  function comemez() {
    $(".mezenne").css('display', 'block');
    $(".mezenne").prop("disabled", false);

  }
  function comemezl() {
    $(".mezenne").css('left', '-2.7%');

    $(".mezenne").prop("disabled", false);

  }
  $(".currency-btn").on("click", function () {
    setTimeout(comemez, 10);
    setTimeout(comemezl, 200);

    $(".mezenne").prop("disabled", true);
  });
})

$(document).ready(function () {

  // $(".head_line").click(function () {
  //   $(".content_work").css('display', 'block');
  //   $(".content_work").css('paddingLeft', '2%');
  //   $(".small_view_work").css('display', 'none');

  //   $(".left_center").css('display', 'block');
  //   $(".left_center").css('paddingLeft', '2%');
  //   $(".small_view_life").css('display', 'none');


  // })
})



$(document).ready(function () {



  $(".fire").mouseover(function () {
    $(".pg").slideDown("slow", function () {
      $(".pf").css('height', '129px');
      $(".pf").css('padding', '7');
      $(".sas").css('display', 'block');
    });

    $(".fire").mouseout(function () {
      $(".pg").slideDown("slow", function () {
        $(".pf").css('height', '0');
        $(".pf").css('padding', '0');

        $(".sas").css('display', 'none');

      });

    })

    $(".pg").mouseout(function () {
      $(".pf").css('height', '0');
      $(".sas").css('display', 'none');
      $(".pf").css('padding', '0');


    })

    $(".pg").mouseover(function () {
      $(".pf").css('height', 'auto');
      $(".sas").css('display', 'block');
      $(".pf").css('padding', '7');

    })

  })
  $(document).ready(function(){
    
  $(window).resize(function() {
    var windowWidth = $(window).width();

    


    if($(window).width() > 990){
      
    }
  })

  $(document).ready(function () {
    var date_input = $('input[name="date"]');
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
      format: 'mm/dd/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
    })

  })
  $(document).ready(function () {
    $(".home").click(function () {
      $('#all_bank').css('opacity', '0');
      $('#all_bank').css('z-index', '-1');
      $('#all_bank').css('position', 'fixed');

    })
    $(".exit").click(function () {
      $('#all_bank').css('opacity', '0');
      $('#all_bank').css('z-index', '-1');
      $('#all_bank').css('position', 'fixed');

    })
    ///   
     $(".exit_ser").click(function () {
      $('#search').css('opacity', '0');
      $('#search').css('z-index', '-1');
      $('#search').css('position', 'fixed');

    })
    $(".img_last").click(function () {
      $('#search').css('opacity', '1');
      $('#search').css('z-index', '1');
      $('#search').css('position', 'absolute');

    })

    ///
    $(".bars_menu").click(function () {
      $('#all_bank').css('opacity', '0.96');
      $('#all_bank').css('z-index', '10000');
      $('#all_bank').css('position', 'absolute');

    })
    $('.life_life').on('click',function(){
      $(".for_life").css('left','0%');      
      
    })
     $('.bar').on('click',function(){
      $(".for_life").css('left','110%');      
      
    })
    $('.work_work').on('click',function(){
      $(".for_work").css('left','0%');      
      
    })
     $('.bar_work').on('click',function(){
      $(".for_work").css('left','110%');      
      
    })
    $('.about_about').on('click',function(){
      $(".for_about").css('left','0%');      
      
    })
     $('.bar_about').on('click',function(){
      $(".for_about").css('left','110%');      
      
    })
      var i=0;
  $('.menu').on('click', function(e){
    i++;
    if(i%2==0){
      $(".right_last_con").css('right','-110%');
      $(".fotter_mob").css('right','-110%');
      $(".call_number").css('opacity','0');
      $(".last_top_mobile").css('opacity','1');
    }else{
      $(".right_last_con").css('right','0');
      $(".fotter_mob").css('right','0');
      $(".call_number").css('opacity','1');
      $(".last_top_mobile").css('opacity','0');
    }
     $(this).toggleClass('active');
  });

    $(".money").click(function () {
      $('.money').css('border', '1px solid #D9424C')
    })
  })
})
})
$(document).ready(function(){
  
if ($(window).width() < 960) {
    
    $(".cv").click(function(){
      $(".slide_person").css('height','75%');
      $(".left_center").css('display','block');
      $(".left_center").css('paddingLeft','0');
      $(".cv").css('display','none');
       $(".slide_life").css('height','33%');
      $(".content_work").css('display','none');
      $(".content_work").css('paddingLeft','57%');
      $(".vc").css('display','block');
    })
     $(".bir_head").click(function(){
      $(".slide_person").css('height','33%');
      $(".left_center").css('display','none');
      $(".left_center").css('paddingLeft','57%');
      $(".cv").css('display','block');
    })
    /////

    $(".vc").click(function(){
      $(".slide_life").css('height','75%');
      $(".content_work").css('display','block');
      $(".content_work").css('paddingLeft','0');
      $(".vc").css('display','none');
       $(".slide_person").css('height','33%');
      $(".left_center").css('display','none');
      $(".left_center").css('paddingLeft','57%');
      $(".cv").css('display','block');
    })
     $(".iki_heyat").click(function(){
      $(".slide_life").css('height','33%');
      $(".content_work").css('display','none');
      $(".content_work").css('paddingLeft','57%');
      $(".vc").css('display','block');
    })
}
else {
  $(".slide_person").mouseover(function () {
    $(".int_bank").css('display', 'none');
    $(".cart").css('display', 'none');
    $(".p_c").css('display', 'block');
    $(".first_con").css('height', '17%');
    $(".right").css("marginLeft", "27%");
    $(".cart_img").css("width", "80px");
    $(".cart_img").css("height", "80px");
    $(".alis").css("display", "none");
    $(".satis").css("display", "none");
    $(".tab").css("display", "block");
    $('.input').css("width", "61%");
    $('.input').css("height", "5.7%");
    $('.input input').css("height", "40%");
    $('.sec').css("width", "27%");
    $('.sec').css("height", "5.7%");
    $('.sec select').css("height", "58%");
    $(".line").css("display", "none");

    $(".left_center").css('display', 'block');
    $(".left_center").css('paddingLeft', '2%');
    $(".small_view_life").css('display', 'none');




    /////////////


    $('.content_left').addClass("col-md-3");
    $('.right_content').addClass("col-md-8");
    $('.right_content').removeClass("col-md-5");
    $('.slide_person').addClass("col-md-8");
    $('.slide_life').addClass("col-md-4");
    $('.slide_person').removeClass("col-md-6");
    $('.slide_life').removeClass("col-md-6");
    ///////////////////////////////
  })
  $(".slide_person").mouseout(function () {
    $(".int_bank").css('display', 'block');
    $(".cart").css('display', 'block');
    $(".p_c").css('display', 'none');
    $(".first_con").css('height', '15%');
    $(".line").css("display", "inline-block");
    $(".right").css("marginLeft", "0%");
    $(".cart_img").css("width", "100px");
    $(".cart_img").css("height", "100px");
    $(".alis").css("display", "inline-block");
    $(".satis").css("display", "inline-block");
    $(".tab").css("display", "none");
    $('.input').css("width", "24%");
    $('.input').css("height", "7%");
    $('.input input').css("height", "66%");
    $('.sec').css("width", "13%");
    $('.sec').css("height", "7%");
    $('.sec select').css("height", "46%");


    $(".left_center").css('display', 'none');
    $(".left_center").css('paddingLeft', '57%');
    $(".small_view_life").css('display', 'block');



    //////////////////////////////////
    $('.content_left').removeClass("col-md-3");
    $('.right_content').removeClass("col-md-8");
    $('.right_content').addClass("col-md-5");
    $('.slide_person').removeClass("col-md-8");
    $('.slide_life').removeClass("col-md-4");
    $('.slide_person').addClass("col-md-6");
    $('.slide_life').addClass("col-md-6");
    //////////////////////////
  })
  /////////////////////////////
  
  $(".slide_life").mouseover(function () {
    $(".int_bank").css('display', 'none');
    $(".cart").css('display', 'none');
    $(".p_c").css('display', 'block');
    $(".first_con").css('height', '17%');
    $(".right").css("marginLeft", "27%");
    $(".cart_img").css("width", "80px");
    $(".cart_img").css("height", "80px");
    $(".alis").css("display", "none");
    $(".satis").css("display", "none");
    $(".tab").css("display", "block");
    $('.input').css("width", "61%");
    $('.input').css("height", "5.7%");
    $('.input input').css("height", "40%");
    $('.sec').css("width", "27%");
    $('.sec').css("height", "5.7%");
    $('.sec select').css("height", "58%");
    $(".line").css("display", "none");


    $(".content_work").css('display', 'block');
    $(".content_work").css('paddingLeft', '2%');
    $(".small_view_work").css('display', 'none');


    ///////////////////////

    $('.content_left').addClass("col-md-3");
    $('.right_content').addClass("col-md-8");
    $('.right_content').removeClass("col-md-5");
    $('.slide_person').addClass("col-md-4");
    $('.slide_life').addClass("col-md-8");
    $('.slide_person').removeClass("col-md-6");
    $('.slide_life').removeClass("col-md-6");

    //////////////////////////
  })
  $(".slide_life").mouseout(function () {

    $(".int_bank").css('display', 'block');
    $(".cart").css('display', 'block');
    $(".p_c").css('display', 'none');
    $(".first_con").css('height', '15%');
    $(".line").css("display", "inline-block");
    $(".right").css("marginLeft", "0%");
    $(".cart_img").css("width", "100px");
    $(".cart_img").css("height", "100px");
    $(".alis").css("display", "inline-block");
    $(".satis").css("display", "inline-block");
    $(".tab").css("display", "none");
    $('.input').css("width", "24%");
    $('.input').css("height", "7%");
    $('.input input').css("height", "66%");
    $('.sec').css("width", "13%");
    $('.sec').css("height", "7%");
    $('.sec select').css("height", "46%");


    $(".content_work").css('display', 'none');
    $(".content_work").css('paddingLeft', '57%');
    $(".small_view_work").css('display', 'block');


    ////////////////////////////////////
    $('.content_left').removeClass("col-md-3");
    $('.right_content').removeClass("col-md-8");
    $('.right_content').addClass("col-md-5");
    $('.slide_person').removeClass("col-md-4");
    $('.slide_life').removeClass("col-md-8");
    $('.slide_person').addClass("col-md-6");
    $('.slide_life').addClass("col-md-6");
    //////////////////////////
  })
  
}
})