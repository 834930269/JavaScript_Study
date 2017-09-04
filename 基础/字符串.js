'use strict'
//ASCII码字符可以以\x##形式的十六进制表示
var a='\x41';//等同于'A'
//Unicode \u####
var b='\u4e2d\u6587';//等同于'中文'
//多行字符串,用反引号`表示
var c=`这是一个
	   多行
	   字符串`;
//连接字符串可以用+
alert(a+b+c);
//如果多个变量需要连接,用+号会很麻烦ES6新增模板字符串
//表示方法和上面一样,但是他会自动替换字符串中的变量
var name='小明';
var age=20;
var message=`你好,${name},你今年${age}岁了!`;
alert(message);

//常见字符串操作
var s='Hello,world!';
s.length;//13
s[0];//'H'
//需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果：
var q = 'Test';
q[0] = 'X';
alert(q); // s仍然为'Test'

var p='hello';
p.toUpperCase();//'HELLO'
var t='HELLO';
t.toLowerCase();//'hello'

//搜索指定字符串出现的位置
s.indexOf('world');//返回7

//substring()返回指定索引区间的子串：
s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
s.substring(7); // 从索引7开始到结束，返回'world'
