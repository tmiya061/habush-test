var $ = jQuery;
var s;
var w = $(window).width();

$(window).on('load scroll', function () {
  s = $(this).scrollTop();
});
jQuery(function($) {
  // スクロール
  $('a[href^="#"]').click(function () {
    var speed = 1500;
    var href = $(this).attr("href");

    var target = $(href == "#" || href == "" ? 'html' : href);


    if (w < 769) {
      if (href == "#story-main") {
        var position = target.offset().top - 180;
      } else {
        var position = target.offset().top - 58;
      }

    } else {
      if (href == "#product") {
        var ph = $('#product').height();
        var position = target.offset().top + (ph / 2 - 100);
      } else if (href == "#story-main") {
        var position = target.offset().top - 300;
      } else {
        var position = target.offset().top;
      }
    }
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  $(window).on("load", function () { //ページが読み込まれた時に実行
    setTimeout(function () {
      var a = location.hash; //URLからハッシュタグを取得：a
      if (a) { //aが存在する場合
        var b = $(a).offset().top; //aで取得したhref属性の値と同じ要素について、ページトップからの距離を取得する：b
      }
      console.log(b);
      $("html,body").animate({
        scrollTop: b
      }, 0); //スムーススクロールの設定
      return false
    }, 400);
  });

  // ハンバーガーメニュー
  $('#nav_toggle').on('click', function () {
    $('.menu, #nav_toggle, .g-nav, .nav-open-mask').toggleClass('show');
  });
  $('.g-nav ul li a, .nav-open-mask').on('click', function () {
    $('.menu, #nav_toggle, .g-nav, .nav-open-mask').toggleClass('show');
  });

  $('header nav ul li').on('click', function () {
    $(this).toggleClass('active');
  });

  // 画面の高さを取得・設定
  function setHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  $(window).on('load', function () {
    setHeight();
  });

  // モーダルウィンドウ
  $('.modal_btn').each(function () {
    $(this).on('click', function () {
      var scroll = $(window).scrollTop(),
        target = $(this).data('target');
      var modal = document.getElementById(target);
      if (w > 769) {
        $(modal).css('top', scroll - 100);
      }
      $('body').addClass('no-scroll');
      document.addEventListener('touchmove', scrollControll, {
        passive: false
      });
      document.addEventListener('wheel', scrollControll, {
        passive: false
      });

      $(modal).fadeIn(300);
      return false;
    });
  });

  // ウィンドウを閉じる
  $('.c-close-active .js-modal-close, .c-close-active .crossーclose').on('click', function () {
    $('.js-modal').fadeOut(300);
    $('body').removeClass('no-scroll');
    document.removeEventListener('touchmove', scrollControll);
    document.removeEventListener('wheel', scrollControll);
    return false;
  });
  var scrollControll = function (event) {
    if ($(event.target).closest('.js-can-scroll').length > 0) {
      event.stopPropagation();
    } else {
      event.preventDefault();
    }
  };

  // 追従ボタンの設定
  $(window).on('scroll', function () {
    var s = $(window).scrollTop() + $(window).innerHeight();
    var fp = $('footer').offset().top;
    if ( s < fp) {
      $('.follow_btn').fadeIn();
    } else {
      $('.follow_btn').fadeOut();
    }
  });

});
// バナースライド
new Swiper('.kv-list', {
  speed: 1000,
  autoplay: {
    delay: 5000
  },
  loop: true,
  allowTouchMove: true,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      //中に数字を表示
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  },
});


document.addEventListener('DOMContentLoaded', function () {
  $(".loop-normal").slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 5000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    swipe: false, // 操作による切り替えはさせない
    centerMode: true,
    variableWidth: true,
    arrows: false, // 矢印非表示
    pauseOnFocus: true, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: true, // スライダーにマウスホバーした時にスライドを停止させるか
    useTransform: false,
    // lazyLoad: 'progressive',
  });
  
  
  $(".loop-reverse").slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 5000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    swipe: false, // 操作による切り替えはさせない
    centerMode: true,
    variableWidth: true,
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    useTransform: false,
    rtl: true,
    // lazyLoad: 'progressive',
  });
});


// オープニング
// if ( window.document.body.id === 'top' ) {
  // $(window).on('load', function () {
  //   setTimeout(function () {
  //     $('#luxy').css('max-height', 'none');
  //     $('#opening-wrapper').fadeOut(600);
  //   }, 400);
  // });
// }
jQuery(function($) {
    var webStorage = function () {
        if (sessionStorage.getItem('access')) {
            /*
                2回目以降アクセス時の処理
            */
                $('#opening-wrapper').hide();
        } else {
            /*
                初回アクセス時の処理
            */
            $(window).on('load', function () {
              setTimeout(function () {
                $('#luxy').css('max-height', 'none');
                $('#opening-wrapper').fadeOut(600);
              }, 400);
            });
        }
    }
    webStorage();

    $(window).on('load', function () {
      $('.preload-main').addClass('js-none');
    });
});



// $(function () {
//   var webStorage = function () {
//     if (sessionStorage.getItem('access')) {
//       /*
//         2回目以降アクセス時の処理
//       */
        
//     } else {
//       /*
//         初回アクセス時の処理
//       */

//     }
//   }
//   webStorage();



// });





// 視差アニメーション
var rellax = new Rellax('.rellax', {
  center: true,
});


// スクロールエフェクト
var wow = new WOW({
  boxClass: 'wow', // animated element css class (default is wow)
  animateClass: 'animated', // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();

// 慣性スクロール
var _ua = (function (u) {
  return {
    Tablet: (u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) ||
      u.indexOf("ipad") != -1 ||
      (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) ||
      (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) ||
      u.indexOf("kindle") != -1 ||
      u.indexOf("silk") != -1 ||
      u.indexOf("playbook") != -1,
    Mobile: (u.indexOf("windows") != -1 && u.indexOf("phone") != -1) ||
      u.indexOf("iphone") != -1 ||
      u.indexOf("ipod") != -1 ||
      (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) ||
      (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) ||
      u.indexOf("blackberry") != -1
  }
})(window.navigator.userAgent.toLowerCase());
if (!_ua.Mobile && !_ua.Tablet) {
  luxy.init({
    wrapperSpeed: 0.05 //スクロールスピード
  });
}


//========================
// top recipe スライダー
//========================

if ( window.document.body.id === 'top' ) {
const recipeSwiper = new Swiper('.recipe__container', { //名前を変える
  loop: true, //最後→最初に戻るループ再生を有効に
  autoplay: { 
    delay: 0, //何秒ごとにスライドを動かすか
    //disableOnInteraction: true, //ユーザーの操作時に止める
  },
  freeMode: {
    enabled: true,
    momentumRatio: 0.3,
    momentumVelocityRatio: 0.35,
  },
  //effect: "slide", //切り替えのmotion (※1)
  //centeredSlides: true, //中央寄せ
  allowTouchMove: true, 
  breakpoints: {
    320: {
        slidesPerView: 1.3448,
        speed: 4000, //表示切り替えのスピード
    },
    600: {
      slidesPerView: 1.6,
      speed: 5000, //表示切り替えのスピード
    },
    768: {
      slidesPerView: 2,
      speed: 6000, //表示切り替えのスピード
    },
    1000: {
      slidesPerView: 2.2,
      speed: 6000, //表示切り替えのスピード
    },
    1200: {
      slidesPerView: 2.5,
      speed: 6000, //表示切り替えのスピード
    },
    1300: {
      slidesPerView: 4.3,
      speed: 6000, //表示切り替えのスピード
    },
    1600: {
      slidesPerView: 5,
      speed: 6000, //表示切り替えのスピード
    }
  }
});

  
  const swiperContainer = document.querySelector('.recipe__container');
  
  swiperContainer.addEventListener('mouseenter', () => {
    recipeSwiper.autoplay.stop();
  });
  
  swiperContainer.addEventListener('mouseleave', () => {
    recipeSwiper.autoplay.start();
  });
  
}




if ( window.document.body.id === 'underProcess' ) {
  const mySwiper = new Swiper('.underProcess__swiper.reverse', { //名前を変える
    loop: true, //最後→最初に戻るループ再生を有効に
    autoplay: { 
      delay: 0, //何秒ごとにスライドを動かすか
      disableOnInteraction: false, //ユーザーの操作時に止める
    },
    // freeMode: {
    //   enabled: true,
    //   momentumRatio: 0.3,
    //   momentumVelocityRatio: 0.35,
    // },
    effect: "slide", //切り替えのmotion (※1)
    centeredSlides: true, //中央寄せ
    allowTouchMove: false, // スワイプで表示の切り替えを無効に
    breakpoints: {
      320: {
        slidesPerView: 1.95,
        speed: 5000, //表示切り替えのスピード
      },
      500: {
          slidesPerView: 2.2,
          speed: 5000, //表示切り替えのスピード
      },
      768: {
          slidesPerView: 3,
          speed: 6000, //表示切り替えのスピード
      },
      1200: {
          slidesPerView: 3.2,
          speed: 6000, //表示切り替えのスピード
      },
      1400: {
          slidesPerView: 3.41,
          speed: 6000, //表示切り替えのスピード
      }
    }
  });



  // const swiperContainer = document.querySelector('.underProcess__swiper.reverse');

  // swiperContainer.addEventListener('mouseover', () => {
  //   mySwiper.autoplay.stop();
  // });

  // swiperContainer.addEventListener('mouseleave', () => {
  //   mySwiper.autoplay.start();
  // });


  const mySwiper2 = new Swiper('.underProcess__swiper.normal', { //名前を変える
    loop: true, //最後→最初に戻るループ再生を有効に
    autoplay: { 
      delay: 0, //何秒ごとにスライドを動かすか
      disableOnInteraction: false, //ユーザーの操作時に止める
      reverseDirection: true, //逆向き
    },
    // freeMode: {
    //   enabled: true,
    //   momentumRatio: 0.3,
    //   momentumVelocityRatio: 0.35,
    // },
    speed: 6000, //表示切り替えのスピード
    effect: "slide", //切り替えのmotion (※1)
    centeredSlides: true, //中央寄せ
    allowTouchMove: false, // スワイプで表示の切り替えを無効に
    breakpoints: {
      320: {
          slidesPerView: 1.95,
          speed: 5000, //表示切り替えのスピード
      },
      500: {
          slidesPerView: 2.2,
          speed: 5000, //表示切り替えのスピード
      },
      768: {
        slidesPerView: 3,
        speed: 6000, //表示切り替えのスピード
      },
      1200: {
          slidesPerView: 3.2,
          speed: 6000, //表示切り替えのスピード
      },
      1400: {
          slidesPerView: 3.41,
          speed: 6000, //表示切り替えのスピード
      }
    }
  });

}

function saveSlideAttribute(link) {
  // クリックしたリンクのslide属性を取得
  const slideValue = link.getAttribute('slide');
  
  // localStorageにslide属性を保存
  localStorage.setItem('slideAttribute', slideValue);
}

if ( window.document.body.id === 'underRecipe' ) {
  document.addEventListener("DOMContentLoaded", function () {
    var parallaxElements = document.querySelectorAll('.parallax');

    function updateParallax() {
      parallaxElements.forEach(function (element) {
        var scrollPosition = window.scrollY;
        var translateY = scrollPosition * .05 + 'px'; // 調整可能な係数

        element.style.transform = 'translate(-50%, calc(-50% + ' + translateY + ' ))';
      });
    }
    // 初回実行
    updateParallax();
    // スクロール時に実行
    window.addEventListener('scroll', function () {
      updateParallax();
    });
  });



    const mySwiper3 = new Swiper('.underRecipe__swiper', { //名前を変える
      loop: true, //最後→最初に戻るループ再生を有効に
      // autoplay: { 
      //   delay: 5000, //何秒ごとにスライドを動かすか
      //   stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
      //   disableOnInteraction: true, //ユーザーの操作時に止める
      //   reverseDirection: false, //自動再生を逆向きにする
      // },
      fadeEffect: {
        crossFade: true
      },
      speed: 1000, //表示切り替えのスピード
      effect: "fade", //切り替えのmotion (※1)
      centeredSlides: true, //中央寄せ
      navigation: {
        prevEl: ".swiper-button-prev", //戻るボタンのclass
        nextEl: ".swiper-button-next" //進むボタンのclass
      },
      allowTouchMove: false, // スワイプで表示の切り替えを無効に
      slidesPerView: 1, // 一度に表示する枚数
      // initialSlide: slideValue,
      on: {
        slideChange: function () {
          var activeSlide = this.slides[this.activeIndex];
          var itemKey = activeSlide.getAttribute('data-slide');
          
          // 既存の is-active クラスをすべて削除
          $('.underRecipe__swiper-bg').removeClass('is-active');
          $('.underRecipe__swiper-thumb').removeClass('is-active');
          $('.underRecipe__swiper-text').removeClass('is-active');
          $('.underRecipe__swiper-prev').removeClass('is-active');
          $('.underRecipe__swiper-next').removeClass('is-active');
          // 対応する .underRecipe__swiper-bg 要素に is-active クラスを付与
          $('[data-slide="' + itemKey + '"]').addClass('is-active');
        }
      }
    });

    // 遷移先のページでlocalStorageからslide属性を取得
    const str = localStorage.getItem('slideAttribute');
    var slideValue = parseInt(str, 10) + 1;
  
  if (isNaN(slideValue)) {
    // もしslideValueが数字でない場合、またはnull、undefinedの場合はデフォルトで0を設定
    slideValue = 1;
  }

    $(window).on('load', function() {
      mySwiper3.slideTo(slideValue);
    });

    $('.underRecipe__swiper-thumb').on('click', function () {
        const slideIndex = $(this).data('slide') + 1;
        mySwiper3.slideTo(slideIndex);
      // Swiperのスライドを切り替え

      // クリックされたタグにactiveクラスを付与し、他のタグからは削除
      $('.underRecipe__swiper-thumb').removeClass('is-active');
      $(this).addClass('is-active');
    });



  jQuery(function($) {
    $(document).ready(function(){
      var list = $('.underRecipe__swiper-thumb-wrap');
      var containerA = $('.underRecipe__swiper-container');
      var containerB = $('.underRecipe__swiper-text-wrap');
  
      $(window).scroll(function(){
        var windowTop = $(window).scrollTop();
        var containerATop = containerA.offset().top - 100;
        var containerBTop = containerB.offset().top;
        var containerBHeight = containerB.innerHeight() + 200;
  
        if(windowTop >= containerATop){
          list.addClass('js-open');
        } 
        else {
          list.removeClass('js-open');
        }
  
        if((windowTop + $(window).innerHeight()) >= (containerBTop + containerBHeight)){
          list.removeClass('js-open');
        }
      });
    });
  });
}



jQuery(function($) {

  const mouse = $("#js-mouse__topProcess");
  $(document).on("mousemove",function(e){
      const x=e.clientX;
      const y=e.clientY;
      mouse.css({
        "transform": "translate(" + x + "px," + y + "px)",
      });
  });

  $(".process__img-wrap, .process__img-wrap2").on({
    "mouseenter": function() {
      mouse.addClass("js-hover");
    },
    "mouseleave": function() {
      mouse.removeClass("js-hover");
    }
  });

  const mouse2 = $("#js-mouse__topRecipe");
  $(document).on("mousemove",function(e){
      const x=e.clientX;
      const y=e.clientY;
      mouse2.css({
          //"opacity": "1",
          "transform": "translate(" + x + "px," + y + "px)",
      });

  });
  $(".recipe__container").on({
    "mouseenter": function() {
        mouse2.addClass("js-hover");
    },
    "mouseleave": function() {
        mouse2.removeClass("js-hover");
    }
  });

  const mouse3 = $("#js-mouse__collectionProducts");
  $(document).on("mousemove",function(e){
      const x=e.clientX;
      const y=e.clientY;
      mouse3.css({
          //"opacity": "1",
          "transform": "translate(" + x + "px," + y + "px)",
      });

  });
  $(".grid__item").on({
    "mouseenter": function() {
        mouse3.addClass("js-hover");
    },
    "mouseleave": function() {
        mouse3.removeClass("js-hover");
    }
  });

});




//========================
// top process 画像切り替わり
//========================


document.addEventListener('DOMContentLoaded', function () {
if ( window.document.body.id === 'top' ) {
  
  // 13枚の画像のファイル名を配列で用意
  const imageFiles = [
    'process_img1.png', 'process_img2.png', 'process_img3.png', 'process_img4.png',
    'process_img5.png', 'process_img6.png', 'process_img7.png', 'process_img8.png',
    'process_img9.png', 'process_img10.png', 'process_img11.png', 'process_img12.png', 'process_img13.png'
  ];

  function getRandomUniqueImages(numImages) {
    const uniqueImages = new Set();
    
    while (uniqueImages.size < numImages) {
      const randomIndex = Math.floor(Math.random() * imageFiles.length);
      uniqueImages.add(imageFiles[randomIndex]);
    }
  
    return Array.from(uniqueImages);
  }
  
  
  
  var windowWidth = window.innerWidth;
  var windowSm = 768;
  if (windowWidth <= windowSm) {
    // 画像を切り替える関数
    function changeImage() {
      const imageContainer = document.getElementById('imageContainer');
      // 4枚のランダムな画像を取得
      // const randomImages = Array.from({ length: 4 }, () => getRandomImage());
      const randomImages = getRandomUniqueImages(4);

      // 画像を表示するHTMLを生成
      const html = randomImages.map(image => `
        <div class="img">
          <img src='//a6a0eb.myshopify.com/cdn/shop/files/${image}' alt='材料の画像' width='343' height='243' loading='lazy'>
        </div>
        <div class="img">
          <img src='//a6a0eb.myshopify.com/cdn/shop/files/${image}' alt='材料の画像' width='343' height='243' loading='lazy'>
        </div>
      `).join('');
  
      // HTMLを画像コンテナに設定
      imageContainer.innerHTML = html;
      document.querySelector('.process__img-wrap').classList.add('js-show');
    }

    function changeImage2() {
      const imageContainer = document.getElementById('imageContainer2');
      // 4枚のランダムな画像を取得
      // const randomImages = Array.from({ length: 4 }, () => getRandomImage());
      const randomImages = getRandomUniqueImages(4);

      // 画像を表示するHTMLを生成
      const html = randomImages.map(image => `
        <div class="img">
          <img src='//a6a0eb.myshopify.com/cdn/shop/files/${image}' alt='材料の画像' width='343' height='243' loading='lazy'>
        </div>
        <div class="img">
          <img src='//a6a0eb.myshopify.com/cdn/shop/files/${image}' alt='材料の画像' width='343' height='243' loading='lazy'>
        </div>
      `).join('');
      // HTMLを画像コンテナに設定
      imageContainer.innerHTML = html;
      document.querySelector('.process__img-wrap2').classList.add('js-show');
    }

  } 
  
  else {
    // 画像を切り替える関数
    function changeImage() {
      const imageContainer = document.getElementById('imageContainer');
      // 4枚のランダムな画像を取得
      // const randomImages = Array.from({ length: 4 }, () => getRandomImage());
      const randomImages = getRandomUniqueImages(4);

      // 画像を表示するHTMLを生成
      const html = randomImages.map(image => `
      <div class="process__img">
        <div class="img">
          <img src='//a6a0eb.myshopify.com/cdn/shop/files/${image}' alt='材料の画像' width='343' height='243' loading='lazy'>
        </div>
        <div class="img">
          <img src='//a6a0eb.myshopify.com/cdn/shop/files/${image}' alt='材料の画像' width='343' height='243' loading='lazy'>
        </div>
        <div class="img">
          <img src='//a6a0eb.myshopify.com/cdn/shop/files/${image}' alt='材料の画像' width='343' height='243' loading='lazy'>
        </div>
        <div class="img">
          <img src='//a6a0eb.myshopify.com/cdn/shop/files/${image}' alt='材料の画像' width='343' height='243' loading='lazy'>
        </div>
      </div>
      `).join('');
      // HTMLを画像コンテナに設定
      imageContainer.innerHTML = html;
      document.querySelector('.process__img-wrap').classList.add('js-show');
    }

    function changeImage2() {
      const imageContainer = document.getElementById('imageContainer2');
      // 4枚のランダムな画像を取得
      // const randomImages = Array.from({ length: 4 }, () => getRandomImage());
      const randomImages = getRandomUniqueImages(4);

      // 画像を表示するHTMLを生成
      const html = randomImages.map(image => `
      <div class="process__img">
        <div class="img">
          <img src='//a6a0eb.myshopify.com/cdn/shop/files/${image}' alt='材料の画像' width='343' height='243' loading='lazy'>
        </div>
        <div class="img">
          <img src='//a6a0eb.myshopify.com/cdn/shop/files/${image}' alt='材料の画像' width='343' height='243' loading='lazy'>
        </div>
        <div class="img">
          <img src='//a6a0eb.myshopify.com/cdn/shop/files/${image}' alt='材料の画像' width='343' height='243' loading='lazy'>
        </div>
        <div class="img">
          <img src='//a6a0eb.myshopify.com/cdn/shop/files/${image}' alt='材料の画像' width='343' height='243' loading='lazy'>
        </div>
      </div>
      `).join('');
      // HTMLを画像コンテナに設定
      imageContainer.innerHTML = html;
      document.querySelector('.process__img-wrap2').classList.add('js-show');
    }
  }

  // 初回の画像表示
  changeImage();

  // 5秒ごとに画像を切り替える
  setInterval(changeImage, 10000);

  // 5秒後にchangeImage2を実行
  setTimeout(function() {
    changeImage2();

    // その後、10秒ごとに繰り返し実行
    setInterval(changeImage2, 10000);
  }, 5000);

}
});

document.addEventListener('DOMContentLoaded', function () {
  // product swiper 
  const mySwiperProduct = new Swiper('.product-fv-text', { 
      loop: true, //最後→最初に戻るループ再生を有効に
      autoplay: { 
        delay: 0, //何秒ごとにスライドを動かすか
        stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
        disableOnInteraction: true, //ユーザーの操作時に止める
        reverseDirection: false, //自動再生を逆向きにする
      },
      speed: 6000, //表示切り替えのスピード
      effect: "slide", //切り替えのmotion (※1)
      centeredSlides: true, //中央寄せ
      allowTouchMove: false, // スワイプで表示の切り替えを無効に
      slidesPerView: 4.2, // 一度に表示する枚数
      breakpoints: { //画面幅による表示枚数と余白の指定
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        375: {
            slidesPerView: 2.6,
            spaceBetween: 15,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1025: {
            slidesPerView: 4.2,
            spaceBetween: 20,
        },
        1500: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
      }
  });
});

//top topic
if ( window.document.body.id === 'top' ) {
jQuery(function($) {
  $('.c_topTopic__tag-wrap p').on('click', function () {
      $('.c_topTopic__tag-wrap p').removeClass('current');
      $(this).addClass('current');
      $('.c_topTopic__wrap').fadeOut(0);
      $($(this).attr('href')).fadeIn(500);
      return false;
  });


});

}