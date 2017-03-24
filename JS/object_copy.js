// 过滤如下数组，只保留正数，直接在原数组上操作
var arr = [3,1,0,-1,-3,2,-5]
function filter(arr){
	var len = 0;
	for (var i=0, n=arr.length; i<n; i++) {
		if (arr[i] > 0) {
			arr[len] = arr[i];
			len++;
		}
	}
	arr.length = len;
}
filter(arr)
console.log(arr) // [3,1,2]


// 过滤如下数组，只保留正数，原数组不变，生成新数组
var arr = [3,1,0,-1,-3,2,-5]
function filter(arr){
	var temp = [];
	var index = 0;
	for (var i=0;i<arr.length;++i) {
		if (arr[i] > 0) {
			temp[index] = arr[i]; 
			++index;
		}
	}
	return temp;
}
var arr2 = filter(arr)
console.log(arr2) // [3,1,2]
console.log(arr)  // [3,1,0,-1,-2,2,-5]


// 深拷贝函数，用两种方式实现
// JSON解析
var obj = {
	name: 'nicole',
	score: {
		math: 90,
		english: 85 
	}
}
var obj2 = JSON.parse(JSON.stringify(obj));
obj2.name = 'Jack';
obj2.score.math = 80;
console.log(obj);
console.log(obj2);
// 递归
var stu1 = {
	name: 'nicole',
	score: {
		math: 90,
		english: 85 
	}
}
function deepCopy(obj) {
	var newObj = {};
	for( var key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (typeof obj[key] === 'number' || typeof obj[key] === 'string' || typeof obj[key] === 'boolean'
				  || obj[key] === undefined || obj[key] === null) {
				newObj[key] = obj[key];
			}else {
				newObj[key] = deepCopy(obj[key]);
			}
		}
	}
	return newObj;
}
var stu2 = deepCopy(stu1);
stu2.name = 'Jack';
stu2.score.math = 80;
console.log(stu1);
console.log(stu2);