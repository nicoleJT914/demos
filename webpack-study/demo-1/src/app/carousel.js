define(['jquery'], function($) {
  function Carousel(container, srcList, play) {
    this.$container = container
    this.srcList = srcList
    this.play = play
    // 首屏渲染
    this.init()
    // play automaticly
    this.autoPlay()
    // 监听事件
    this.bindEvent()
  }
  // init page structure
  Carousel.prototype.init = function() {
    // 生成html结构
    this.getHtml()
    // 设置参数
    this.setdefault()
    // 对应dot高亮
    this.dotHighlight()
  }

  Carousel.prototype.getHtml = function() {
    var imgLen = this.srcList.length,
        $panel = $('<div class="carousel-panel"></div>')
    // 生成首尾副本
    this.srcList.unshift(this.srcList[imgLen-1])
    this.srcList.push(this.srcList[1])
    // generate panel
    var imgStr = this.srcList.map(function(src, index) {
      return '<li class="slide fade"><img src="'+
              src+'"></li>'
    }).join('')
    $panel.html(
      '<ul class="carousel-track clearfix">'+
      imgStr + '</ul><a class="prev arrow">&#10094;</a><a class="next arrow">&#10095;</a>'
    )      
    // generate dots
    var $dots = $('<div class="carousel-dots"></div>')
    var dotStr = ''
    for (var i=0; i<imgLen; i++) {
      dotStr += '<span class="dot"></span>'
    }
    $dots.html(dotStr)

    this.$container.append($panel)
    this.$container.append($dots)
  }

  Carousel.prototype.setdefault = function() {
    this.$track = this.$container.find('.carousel-track')
    this.$dots = this.$container.find('.dot')
    // the index of showed slide
    this.pageIndex = 1
    this.isAnimate = false
    this.pre = -1
    this.pos = 1
    this.imgWidth = this.$track.find('img').width()
    this.$track.css({left: -this.imgWidth})
  }

  Carousel.prototype.dotHighlight = function() {
    this.$dots.removeClass('active')
              .eq(this.pageIndex-1)
              .addClass('active')
  }

  Carousel.prototype.bindEvent = function() {
    var _this = this
    this.$container.find('.prev').on('click',_this.plusSlide.bind(_this, _this.pre))
    this.$container.find('.next').on('click', _this.plusSlide.bind(_this, _this.pos))
    this.$dots.on('click', function(e) {
      var index = $(e.target).index()
      _this.plusSlide.call(_this, index+1-_this.pageIndex)
    })
  }

  Carousel.prototype.autoPlay = function() {
    if (this.play === true) {
      var _this = this
      setInterval(_this.plusSlide.bind(_this, _this.pos), 5000)
    }
  }

  Carousel.prototype.plusSlide = function(dir) {
    if (this.isAnimate) return
    this.isAnimate = true
    var slideLen =  this.$track.find('.slide').length
    var _this = this
    this.$track.animate({
      left: '-='+dir*_this.imgWidth
    }, function() {
      _this.pageIndex = _this.pageIndex + dir
      if (_this.pageIndex === slideLen -1 && dir === _this.pos) {
        _this.pageIndex = 1
        _this.$track.css({left: -_this.imgWidth})
      }
      if (_this.pageIndex === 0 && dir === _this.pre) {
        _this.pageIndex = slideLen-2
        _this.$track.css({left: -(slideLen-2)*_this.imgWidth})
      }
    _this.dotHighlight()
    _this.isAnimate = false
    })
  }

  return Carousel
});
