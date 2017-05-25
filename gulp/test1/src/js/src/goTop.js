define(['jquery'], function($) {
  function goTop(container) {
    this.$container = container
    this.init()
    this.listen()
  }
  
  goTop.prototype  = {
    init: function() {
      var html = '<span class="goTop"><img src="img/goTop.png" title="回到顶部"></span>'
      this.$container.prepend($(html))
      this.$goTop = $('.goTop')
    },

    listen: function() {
      var _this = this
      $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
          _this.$goTop.fadeIn()
        } else {
          _this.$goTop.fadeOut()
        }
      })
      _this.$goTop.on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
      })
    }
  }
  
  return goTop
});