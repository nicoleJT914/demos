/****************
 * 常见Math操作
 * **************/

/* 返回从min到max之间的随机整数，包括min不包括max  */
function getRandom(min, max) {
	return Math.floor(Math.random() * (max-min)) + min;
}

/*返回从min都max之间的随机整数，包括min包括max  */
function getRandom(min, max) {
	return Math.floor(Math.random() * (max-min+1)) + min;
}

/*写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z*/
function getRandStr(len){
  var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  ALPHABET += 'abcdefghijklmnopqrstuvwxyz';
  ALPHABET += '0123456789';
  var str = '';
  for (var i = 0; i < len; i++) {
  	var rand = Math.floor(Math.random() * ALPHABET.length);
  	str += ALPHABET[rand];
  }
  return str;
}
var str = getRandStr(10); // 0a3iJiRZap

/*写一个函数，生成一个随机 IP 地址，一个合法的 IP 地址为 0.0.0.0~255.255.255.255 */
function getRandIP() {
  var arr = [];
  for (var i = 0; i < 4; i++) {
  	arr[i] = getRandom(0,255);
  }
  return arr.join('.');
}
var ip = getRandIP()
console.log(ip) // 10.234.121.45

/*写一个函数，生成一个随机颜色字符串，合法的颜色为#000000~ #ffffff */
function getRandColor(){
  var arr = [];
  for (var i = 0; i < 6; i++) {
  	arr[i] = (getRandom(0,15)).toString(16);
  }
  return '#' + arr.join('');
}
function getRandom(min, max) {
	return Math.floor(Math.random() * (max-min+1)) + min;
}
var color = getRandColor()
console.log(color)   // #3e2f1b

/*************
 * 常见数组操作
 *************/

/*用 splice函数分别实现push、pop、shift、unshift方法 */
arr.push(num) === arr.splice(arr.length, 0, num);
arr.pop() === arr.splice(arr.length-1, 1);
arr.shift() === arr.splice(0, 1);
arr.unshift(num) === arr.splice(0, 0, num);

/*写一个函数，操作数组，数组中的每一项变为原来的平方，在原数组上操作 */
function squareArr(arr){
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i]*arr[i];
	} 
}
var arr = [2, 4, 6]
squareArr(arr)
console.log(arr) // [4, 16, 36]

/*写一个函数，操作数组，返回一个新数组，新数组中只包含正数，原数组不变 */
function filterPositive(arr){
	return arr.filter(function(n) {
		return typeof n === 'number' && n > 0;
	})
}
var arr = [3, -1,  2, '饥人谷', true]
var newArr = filterPositive(arr)
console.log(arr) //[3, 2]
console.log(newArr)

/*************
 * 常见Date操作
 *************/

/*获取从当前时间到指定日期的间隔时间 */
function getChIntv(str) {
  var newStr = str.split('-').join('/')
  var curr  = new Date()
  var then = new Date(newStr)
  var differ = (curr - then)/1000;
  if (differ > 0) {
    var tense = '已经过去'
  }else {
    tense = '还有'
    differ = - differ
  }
  var days = parseInt(differ/(3600*24))
  var hours = parseInt(differ/3600%24)
  var mins = parseInt(differ/60%60)
  var second = parseInt(differ%60)
  return '距'+str+tense+days+'天'+hours+'小时'+mins+'分'+second+'秒'
}
var str = getChIntv("2017-03-13");
console.log(str);  // 距除夕还有 20 天 15 小时 20 分 10 秒 

/*把hh-mm-dd格式数字日期改成中文日期 */
function getChsDate(str) {
  var dict = ["零","一","二","三","四","五","六","七","八","九","十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三", "二十四", "二十五", "二十六",  "二十七", "二十八", "二十九", "三十", "三十一"];
  var arr = str.split('-')
  var yearNum = arr[0].split('');
  var yearStr = '';
  for (var i = 0; i < yearNum.length; i++) {
    yearStr += dict[yearNum[i]];
  }
  console.log(yearStr)
  var monthNum = arr[1].split('');
  var monthStr = '';
  for (var i = 0; i < monthNum.length; i++) {
    if (i == 0 && monthNum[0] == '0') { continue; }
    monthStr += dict[monthNum[i]];
  }
  console.log(monthStr)
  var dayNum = arr[2].split('');
  var dayStr = '';
  for (var i = 0; i < dayNum.length; i++) {
    if (i == 0 && dayNum[0] == '0') { continue; }
    dayStr += dict[dayNum[i]];
  }
  console.log(dayStr)
  return yearStr+'年'+monthStr+'月'+dayStr+'日';

}
var str = getChsDate('2015-01-08');
console.log(str);  // 二零一五年一月八日

/*假设参数为时间对象毫秒数t，根据t的时间分别返回字符串 */
function friendlyDate(time){
  var curr = Date.now()
  var differ = (curr - time)/1000
  var show = ''
  var days = differ/3600/24
  if (days >= 1) {
    if (days < 30) {
      show = '3天前'
    }else if (days>30 && days/30<12) {
      show = '2个月前'
    }else {
      show = '8年前'
    }
  }else {
    var mins = differ/60;
    if (mins >= 60) {
      show = '8小时前'
    }else if (mins >= 1) {
      show = '3分钟前'
    }else {
      show = '刚刚'
    }
  }
  return show
}
var str = friendlyDate( '1489393613872' ) //  刚刚
console.log(str)
