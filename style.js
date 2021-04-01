$(function(){
  $('.question').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
      
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
  });

  (window).on('load', function(){
    $('.accordion-area li:first-of-type .faq-item').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
    $(".open").each(function(index, element){ //openクラスを取得
      var Title =$(element).children('.question'); //openクラスの子要素のtitleクラスを取得
      $(Title).addClass('close');       //タイトルにクラス名closeを付与し
      var Box =$(element).children('.box'); //openクラスの子要素boxクラスを取得
      $(Box).slideDown(500);          //アコーディオンを開く
    });
  });
  
});


$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: "10%",
  arrows: false, 
  responsive: [
    {
      breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "20%",
    }
    }
  ]
});

$(function(){
  $(window).scroll(function (){
      $('.effect-fade').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight){
              $(this).addClass('effect-scroll');
          }
      });
  });
  });


  
  
  $('.menu-list a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top-95;  //idの上部の距離を取得
    $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
  });



  $(document).ready(function () {

    const $submitBtn = $('#send-btn')
    $('#form input,#form textarea').on('change', function () {
      if (
        $('#form input[type="text"]').val() !== "" &&
        $('#form input[type="email"]').val() !== "" &&
        $('#form input[type="checkbox"]').val() !== "" &&
        $('#form #privacyCheck').prop('checked') === true
      ) {
        $submitBtn.prop('disabled', false);
        $('.send-btn').css('opacity','1');
      } else {
        $submitBtn.prop('disabled', true);
        $('.send-btn').css('opacity','0.2');
      }
    });
  });
  
  $(function(){
    $(window).scroll(function (){
        $('.effect-rotate').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
              jQuery(".effect-rotate").css({transform: 'rotate(0deg)'});
            }
        });
    });
    });
  
    $('.burger-btn').click(function(){
      $('.bar').toggleClass('cross');
      $('.hb-wrapper').toggleClass('open');
      $('.black-bg').toggleClass('bg');
    });

    $('.hb-menu').click(function(){
      $('.hb-wrapper').toggleClass('open');
      $('.bar').toggleClass('cross');


    });


    $(document).ready(function () {

      $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
          url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSebsciIC0ff-xLP50gTCrSSwrxYYqNUOmuNYjIaBCY3KhDa9g/formResponse",
          data: formData,
          type: "POST",
          dataType: "xml",
          statusCode: {
            0: function () {
              $(".end-message").slideDown();
              $(".send-btn").fadeOut();
              window.location.href = "thanks.html";
            },
            200: function () {
              $(".false-message").slideDown();
            }
          }
        });
        event.preventDefault();
      });

      


    });

    