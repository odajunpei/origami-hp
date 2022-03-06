$(function() {
  $('#vegas').vegas({
      slides: [
          { src: './images/image01.png' },
          { src: './images/image02.png' },
          { src: './images/image03.png' },
          { src: './images/image04.png' },
          { src: './images/image05.png' },
          { src: './images/image06.png' },
          { src: './images/image07.png' },
          { src: './images/image08.png' },
          { src: './images/image09.png' },
          { src: './images/image10.png' },
          { src: './images/image11.png' },
          { src: './images/image12.png' }
      ],
			overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
			transition: 'fade',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
			transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
			delay: 10000,//スライド間の遅延をミリ秒単位で。
			animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
			animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
				//timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
  });
});

// const scrollEvent = function() {
//   window.addEventListener("scroll", function () {
//     //↓処理
//     let scrollValue = window.pageYOffset;
//     //↓要素
//     let scrollEle = document.querySelector(".introduction");
//     //↓取得した要素のtop値の取得 + スクロール量
//     let scrollTop = scrollEle.getBoundingClientRect().top + scrollValue;
//     //↓画面の高さを取得
//     let windowHeight = window.innerHeight;
//     // はみ出させる値
//     let value = 100;
//     // 条件設定
//     if (scrollValue > scrollTop - windowHeight + value) {
//       scrollEle.classList.add("js-fade");
//     };
//   });
// };

// scrollEvent();

$(function(){
    $(window).scroll(function (){
      $(".introduction").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/4){
          $(this).addClass("fade_on");
        } else {
          $(this).removeClass("fade_on");
        }
      });
    });
  });