#!/usr/bin/env node
var dateOld = new Date(2012,7,25)
var dateNew = new Date()
var interval = parseInt((dateNew-dateOld)/1000/3600/24)
var str = '周昊同学：今天是'+dateNew.toLocaleDateString()+',我们已经在一起'+interval+'天啦啦啦'
console.log(str)