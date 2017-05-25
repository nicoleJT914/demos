define(['jquery'], function($) {
  function WaterFall(container) {
    if (typeof container === 'string') {
      this.container = document.querySelector(container)
      // 首屏渲染
      this.init()
      this.listen()
    }
  }

  WaterFall.prototype = {

    init: function() {
      // 请求内容==》每个数据检测load==》load后生成DOM==》布局
      // 分页数
      this.pageIndex = 0
      // add load-more button
      var loadMore = this.loadMore = document.createElement('button')
      loadMore.classList.add('loadMore')
      loadMore.innerHTML = '加载更多'
      this.container.appendChild(loadMore)        
      this.requestContent(this.getDom)
    },

    listen: function() {
      var _this = this
      this.loadMore.addEventListener('click', function() {
        if (_this.loading) {
          return
        }
        _this.loadMore.innerHTML = '加载中'
        _this.requestContent.call(_this, _this.getDom)
      })
    },

    requestContent: function(callback) {
      var _this = this
      this.loading = true
      var dataLen = 8
      $.get(
        '/getCard', 
        {page: _this.pageIndex}
      ).done(function(ret) {
        if (ret && ret.status === 0) {
          // 生成请求数据的DOM结构
          _this.total = ret.data.length
          if (_this.total < dataLen) {
            _this.loadMore.style.display = 'none'
          }
          callback.call(_this, ret.data)
          _this.pageIndex++
          _this.loading = false
          _this.loadMore.innerHTML = '加载更多'
        } else {
          alert('Get data failed')
        }
      }).fail(function(ret) {
        alert('System error')
      })
    },

    getDom: function(data) {
      var _this = this     
      this.dataCount = 0

      data.forEach(function(item, index) {
        // get card element
        var card = this.getCardEle(item)
        // check img load
        var img = card.querySelector('img')
        img.onload = this.loadCallback.bind(this, card)
        img.src = item.img
      }, this)
    },

    getCardEle: function(item) {
      var card = document.createElement('div')
      card.className = 'card item'
      card.innerHTML = '<a href="#"><img></a><div><h4>'+item.title+'</h4><p>'+item.brif+'</p></div>'
      return card       
    },

    loadCallback: function(card) {
      // append html
      this.container.insertBefore(card, this.loadMore)
      // layout
      this.waterfall(card)
      this.dataCount++
      if (this.dataCount === this.total) {
        this.adjustWaterfall()
      }
    },

    waterfall: function(card) {
      /*
      check数组sortHeight=》N=》firstELe=>_arrangeEl(0,0),i=0
      ==>push到数组firstRow中,top push到sortHeight，
      check数组firstRow=》N=》check space=》Y=》_arrange(i-1,0),i++ => top push到sortHeight
                                        =>N=>排序sortHeight
      */
      var move = this.move,
          col = this.col
      if (!this.colsHeight) {
        if (!this.firstRow) {
          //排列第一个元素
          this.col = 1;
          this.setDefault(card)
        } else {
          if (move*col <= this.widthAll) {
            this.arrangeFirstRow(card)
          } else {
            this.sortHeight()
            this.arrangeSmallestCol(card)
          }
        }
      } else {
        this.arrangeSmallestCol(card)
      }

    },

    setDefault: function(card) {
      this.firstRow = []
      arrangeEl(card, 0,0)
      this.move = width(card)+margin(card, 'left')+margin(card, 'right')
      this.widthAll = width(this.container)
      this.firstRow.push(card)
      this.col++
      //this.colsHeight.push(height(card))
    },

    arrangeFirstRow: function(card) {
      arrangeEl(card, this.move*(this.col-1), 0)
      this.firstRow.push(card)
      this.col++
    },

    arrangeSmallestCol: function(card) {
      var colsHeight = this.colsHeight,
          colEle = colsHeight[0],
          minIndex = colEle.col,
          minHeight = colEle.height
      arrangeEl(card, this.move*(minIndex-1), minHeight)
      this.colsHeight[0].height += height(card)
      sort(this.colsHeight)
    },

    sortHeight: function() {
      this.colsHeight = []
      this.firstRow.forEach(function(item, index) {
        this.colsHeight.push({
          col: index+1,
          height: height(item)
        })
      }, this)
      sort(this.colsHeight)
    },

    adjustWaterfall: function() {
      var totalHeight = this.colsHeight[this.colsHeight.length-1].height
      this.container.style.height = px(totalHeight)
    }
  }
  /********************
  * private functions
  ********************/
  function arrangeEl(el, left, top) {
      el.style.position = 'absolute'
      el.style.left = px(left)
      el.style.top = px(top)
  }
  function sort(colsHeight) {
    colsHeight.sort(function(a, b) {
      return a.height - b.height
    })
  }
  /******************
  * helper functions
  ******************/
  function px(num) {
    return parseFloat(num) + 'px'
  }
  function style(el) {
    return window.getComputedStyle(el)
  }
  function margin(el, direction) {
    return parseFloat(style(el)['margin-'+direction]) || 0
  }
  function width(el) {
    return parseInt(style(el).width)
  }
  function height(el) {
    return parseInt(style(el).height)+margin(el, 'left')+margin(el, 'right')
  }

  return WaterFall
})