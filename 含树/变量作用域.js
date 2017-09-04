//由于JavaScript的函数可以嵌套，
//此时，内部函数可以访问外部函数
//定义的变量，反过来则不行：
'use strict';

function foo() {
    var x = 1;
    function bar() {
        var y = x + 1; // bar可以访问foo的变量x!
    }
    var z = y + 1; // ReferenceError! foo不可以访问bar的变量y!
}
//如果内外重名,先使用内部的
/*
变量提升

JavaScript的函数定义有个特点，
它会先扫描整个函数体的语句，把
所有申明的变量“提升”到函数顶部：
*/
'use strict';

function foo2() {
    var x = 'Hello, ' + y;
    alert(x);
    var y = 'Bob';
}

foo2();//Hello, Bob

/*
function foo() {
	//声明所有变量
    var
        x = 1, // x初始化为1
        y = x + 1, // y初始化为2
        z, i; // z和i为undefined
    // 其他语句:
    for (i=0; i<100; i++) {
        ...
    }
}

不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript默认有一个全局对象window，全局作用域的变量实际上被绑定到window的一个属性：

*/
var course = 'Learn JavaScript';
alert(course); // 'Learn JavaScript'
alert(window.course); // 'Learn JavaScript'

function foo() {
    alert('foo');
}

foo4(); // 直接调用foo4()
window.foo4(); // 通过window.foo4()调用

//减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。

// 唯一的全局变量MYAPP:
var MYAPP = {};

// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};

/*
不同于其他的是
function foo() {
    for (var i=0; i<100; i++) {
        //
    }
    i += 100; // 仍然可以引用变量i
}
所以我们需要使用let 关键词
function foo() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    i += 1; // SyntaxError
}

ES6引入了const
*/

'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // 25

//装饰器,就是函数依赖
var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};

// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
count; // 3
