- 实现思路
![coresel.png](http://upload-images.jianshu.io/upload_images/4952363-10a0dd7c93cb2509.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
黑色边框指的是轮播窗口，即我们的可见区域
所有要展示的图片水平排列，形成一个轨道
当需要展示某张图片时，即移动轨道，将该图片移到可见区域
当图片滑动到轨道边界时，例如3到1，为了能保证滑动效果的展现，一般会在3后面放置一张图片1的拷贝，当3滑动至1的拷贝时，再将真正的1移到可见区域
- 实现过程
*carousel_display*的完成思路是：展示图片的`display:block`,其余图片的`display:none`。因此无法实现滑动效果。
*carousel_horizanral*利用轨道的相对定位完成，但是由于是用原生写的，所以没有实现动画效果。




展示可以有参数
向前向后
展示几张
滑动几张
