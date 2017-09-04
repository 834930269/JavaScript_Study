function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
/*
以上等价于
var abs = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};
由于JavaScript允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题，虽然函数内部并不需要这些参数：
*/
abs(10, 'blablabla'); // 返回10
abs(-9, 'haha', 'hehe', null); // 返回9
//传入的参数比定义的少也没有问题：
abs(); // 返回NaN

/*
此时abs(x)函数的参数x将收到undefined，计算结果为NaN。

要避免收到undefined，可以对参数进行检查：

function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

*/

//arguments =>args
function foo(x) {
    alert(x); // 10
    for (var i=0; i<arguments.length; i++) {
        alert(arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);
//利用arguments，你可以获得调用者传入的所有参数。也就是说，即使函数不定义任何参数，还是可以拿到参数的值：
function abs2(){
	if(arguments.length==0){
		return 0;
	}
	var x=arguments[0];
	return x>=0?x:-x;
}

abs2(); // 0
abs2(10); // 10
abs2(-9); // 9

// foo2(a[, b], c)
// 接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null：
function foo2(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是a和b，c为undefined
        c = b; // 把b赋给c
        b = null; // b变为默认值
    }
    // ...
}
//ES66引入了rest参数
function foo3(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo3(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo3(1);
// 结果:
// a = 1
// b = undefined
// Array []

//*-----*test1
function sum(...rest) {
var su=0;
rest.forEach(function (value, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    su+=value;
});
return su;
}// 测试:
var i, args = [];
for (i=1; i<=100; i++) {
    args.push(i);
}
if (sum() !== 0) {
    alert('测试失败: sum() = ' + sum());
} else if (sum(1) !== 1) {
    alert('测试失败: sum(1) = ' + sum(1));
} else if (sum(2, 3) !== 5) {
    alert('测试失败: sum(2, 3) = ' + sum(2, 3));
} else if (sum.apply(null, args) !== 5050) {
    alert('测试失败: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
} else {
    alert('测试通过!');
}

//*----*test2

function area_of_circle(r, pi) {
	if(arguments.length<=1) pi=3.14;    
		return r*r*pi;
}
// 测试:
if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
    alert('测试通过');
} else {
    alert('测试失败');
}


