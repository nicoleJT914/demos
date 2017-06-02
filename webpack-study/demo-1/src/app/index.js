var $ = require('jquery'),
    Carousel = require('./carousel.js'),
    goTop = require('./goTop.js'),
    WaterFall = require('./waterfall.js')

var imgSrcList = ['src/img/planet.png', 'src/img/planet.png', 'src/img/planet.png']
var carousel = new Carousel($('.carousel-container'), imgSrcList, false)

var goTop = new goTop($('body'))

var waterFall = new WaterFall('.waterfall')