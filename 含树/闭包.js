function lazy_sum(arr){
	var sum=function (){
		return arr.reduce(function(x,y){
			return x+y;
		});
	};
	return sum;
}
//闭包是返回一个函数,根据需要时才会计算
var f=lazy_sum([1,2,3,4]);
//function() sum
f();//10
//闭包不能用循环变量,因为js里的循环变量是全局存在的
function count(){
	var arr=[];
	for(var i=1;i<=3;++i){
		arr.push(function(){
			return i*i;
		});
	}
	return arr;
}
var r=count();
var f1=r[0];
var f2=r[1];
var f3=r[2];
//讲道理以下结果应该是1,4,9
f1();//16
f2();//16
f3();//16
//所以看出来都是4*4
//解决办法
function count2(){
	var arr=[];
	for(int i=1;i<=3;++i){
		arr.push((function(n){
			return function(){
				return n*n;
			}
		})(i));
		//创建函数并立即执行
		//(function (x) { return x * x }) (3);
	}
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

f1(); // 1
f2(); // 4
f3(); // 9

//闭包的作用
//在没有class机制，只有函数的语言里，借助闭包，同样可以封装一个私有变量。我们用JavaScript创建一个计数器：
'use strict';
function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}
//它用起来像这样：

var c1 = create_counter();
c1.inc(); // 1
c1.inc(); // 2
c1.inc(); // 3

var c2 = create_counter(10);
c2.inc(); // 11
c2.inc(); // 12
c2.inc(); // 13

//在返回的对象中，实现了一个闭包，该闭包携带了局部变量x，并且，从外部代码根本无法访问到变量x。换句话说，闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来。
//闭包还可以把多参数的函数变成单参数的函数。例如，要计算xy可以用Math.pow(x, y)函数，不过考虑到经常计算x2或x3，我们可以利用闭包创建新的函数pow2和pow3：
function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}

// 创建两个新函数:
var pow2 = make_pow(2);
var pow3 = make_pow(3);

pow2(5); // 25
pow3(7); // 343
