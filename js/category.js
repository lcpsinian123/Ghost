var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar1',
    },
    mousewheel: true,
  });

  var rightswiper = new Swiper('.rightbox .swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar1',
    },
    mousewheel: true,
  });


//   滑动


 var ul=document.querySelector('.box')
 var  lis=ul.children;

//    给每个人li 添加索引
 for(var i =0;i<lis.length ;i++ ){
   lis[i].index=i
 }
//   点击获取 事件源
 ul.addEventListener('click',function(e){
    
    // 获取被触发得事件得父级li 
    var li=e.target.parentNode;
    var liHeight=li.offsetHeight;
   
    //  获取对应li得索引index
    var index=li.index;
    //  获取点击位置  置顶
    var distanceY= -index*liHeight;
    //  获取容器得高度
    var containerHeight=ul.offsetHeight;

    var swiper =document.querySelector('.left');
    //  获取显示元素得高度
    var clientHeight=swiper.offsetHeight;
  //  获取可以滑动得最大距离   当滑动到最后得几个标签 不会置顶
    var maxHeight=clientHeight-containerHeight;
    console.log(maxHeight);
    if(distanceY>maxHeight){
      // 设置位置  位移  
      document.querySelector('.swiper-wrapper').style.transform='translate3d(0px, ' + distanceY + 'px, 0px)'  

    }else{
      //  滑动到最大距离
      document.querySelector('.swiper-wrapper').style.transform='translate3d(0px, ' + maxHeight + 'px, 0px)'
    }    
    document.querySelector('.swiper-wrapper').style.transitionDuration="300ms";

    //  给被点击得li添加active类名
    for(var i=0 ;i<lis.length ;i++){
      lis[i].classList.remove('active');

    }
    li.classList.add('active');
 })


 $('.box').children().on('click',function(){
   
 })
