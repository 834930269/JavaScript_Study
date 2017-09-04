'use strict'
//数组的map方法
//假设我们有一个函数f(x)=x^2,要把这个函数作用在一个数组[1,2...,9]上,就可以用map实现

function pow(x){
	return x*x;
}

var arr=[1,2,3,4,5,6,7,8,9];
arr.map(pow);

//reduce相当于递归?[x1,x2,x3,x4].reduce(f)=f(f(f(x1,x2),x3),x4);
//比如,对一个arr求和
arr.reduce(function(x,y){
	return x+y;
});//48

//practice
var t='12345678910';
function string2int(s){
	var p=[],len=s.length;
	for(let i=0;i<len;++i){
		p.push(s[i]-'0');
	}
	return p.reduce(function(x,y){
		return x*10+y;
	});
}
var ans=string2int(t);
ans;

//把名字规范
var q=['adam','LISA','barT'];
var s=q.map(function(xs){
	xs=xs.toLowerCase();
	var asc=xs[0].charCodeAt(),AA='A'.charCodeAt(),aa='a'.charCodeAt();
	var res=String.fromCharCode(AA+(asc-(asc>=aa?aa:AA)))[0]
	return res+xs.substring(1);
});
s;

// 下面的语句返回什么呢:
["1", "2", "3"].map(parseInt);
// 你可能觉的会是[1, 2, 3]
// 但实际的结果是 [1, NaN, NaN]

// 通常使用parseInt时,只需要传递一个参数.
// 但实际上,parseInt可以有两个参数.第二个参数是进制数.
// 可以通过语句"alert(parseInt.length)===2"来验证.
// map方法在调用callback函数时,会给它传递三个参数:当前正在遍历的元素, 
// 元素索引, 原数组本身.
// 第三个参数parseInt会忽视, 但第二个参数不会,也就是说,
// parseInt把传过来的索引值当成进制数来使用.从而返回了NaN.

//解决办法=>lambda表达式
["1",'2','3'].map((x)=>{
	return parseInt(x);
});