
//  

window.addEventListener('load',function(){
 var jdeffects= new JdEffects()
// 顶部背景渐变函数调用
    
jdeffects.topGradual() 
//   倒计时 函数调用
jdeffects.downTime();

// 轮播图函数调用

jdeffects.slide()
  

})













// 函数封装

// 顶部背景渐变功能封装
// function topGradual(){
//     window.addEventListener('scroll',function(){
//         //获取滚动到到顶部的距离
//              var scrollTop =document.documentElement.scrollTop;
//           //    获取图片的高度
//              var imgHeight =document.querySelector('#aside img').offsetHeight;
//           //  求透明明度  根据滚动距离和图片高度的比例来渐变
//              var opacity= scrollTop/imgHeight;
      
//              if(opacity>=1){
//               document.querySelector('#header').style.backgroundColor="rgba(222, 24, 27, 1)";
//              }else{
//               document.querySelector('#header').style.backgroundColor="rgba(222, 24, 27, "+opacity+")"
//              }
//          })
           
// } 

// //  倒计时函数封装
// function downTime(){
//    // 获取未来时间
//    var futureTime= new Date(2018,8,22,18,00,00);

//    var nowTime= new Date();
 
//    var time=(futureTime-nowTime)/1000
 
//  //   console.log(time);
 
  
//     var spans=document.querySelectorAll('.down-time span');
//  //     定时器
//      setInterval(function(){
 
//          if(nowTime>futureTime){
//              time=7200
//          }
        
//          time--
//          var hour=Math.floor(time/3600);
//          var min=Math.floor(time%3600/60);
//          var sec=Math.floor(time%60);
//   // 根据需求 格式  个位数和十位数显示要求 
//      //  用对应的数值除10 或模10 可以获取到对应的值 赋值给对应的span
   
//      spans[0].innerHTML=Math.floor(hour/10);
//      spans[1].innerHTML=Math.floor(hour%10);
//      spans[3].innerHTML=Math.floor(min/10);
//      spans[4].innerHTML=Math.floor(min%10);
//      spans[6].innerHTML=Math.floor(sec/10);
//      spans[7].innerHTML=Math.floor(sec%10);
//      },1000)
 
// }

// //  轮播图功能函数封装
// function slide(){
//     var mySwiper = new Swiper('.swiper-container', {
//     direction: 'horizontal', // 垂直切换选项
//     loop: true, // 循环模式选项

//     // 如果需要分页器
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // 如果需要前进后退按钮
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     autoplay: {
//         delay: 2000,
//         disableOnInteraction: false
//     },

//     // 如果需要滚动条
//       scrollbar: {
//         el: '.swiper-scrollbar',
//       },
// }) 
// }


//  面向对象封装 
function JdEffects(){

}
 JdEffects.prototype={
    topGradual:function topGradual(){
        window.addEventListener('scroll',function(){
            //获取滚动到到顶部的距离
                 var scrollTop =document.documentElement.scrollTop;
              //    获取图片的高度
                 var imgHeight =document.querySelector('#aside img').offsetHeight;
              //  求透明明度  根据滚动距离和图片高度的比例来渐变
                 var opacity= scrollTop/imgHeight;
          
                 if(opacity>=1){
                  document.querySelector('#header').style.backgroundColor="rgba(222, 24, 27, 1)";
                 }else{
                  document.querySelector('#header').style.backgroundColor="rgba(222, 24, 27, "+opacity+")"
                 }
             })
               
    },
    downTime: function downTime(){
        // 获取未来时间
        var futureTime= new Date(2018,8,22,18,00,00);
     
        var nowTime= new Date();
      
        var time=(futureTime-nowTime)/1000
      
      //   console.log(time);
      if(nowTime>futureTime){
                  time=7200
              }
             
       
         var spans=document.querySelectorAll('.down-time span');
      //     定时器
          setInterval(function(){
      
              
              time--
              var hour=Math.floor(time/3600);
              var min=Math.floor(time%3600/60);
              var sec=Math.floor(time%60);
       // 根据需求 格式  个位数和十位数显示要求 
          //  用对应的数值除10 或模10 可以获取到对应的值 赋值给对应的span
        
          spans[0].innerHTML=Math.floor(hour/10);
          spans[1].innerHTML=Math.floor(hour%10);
          spans[3].innerHTML=Math.floor(min/10);
          spans[4].innerHTML=Math.floor(min%10);
          spans[6].innerHTML=Math.floor(sec/10);
          spans[7].innerHTML=Math.floor(sec%10);
          },1000)
      
     },
     slide:function slide(){

    var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },

    // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
})
}
}